---
title: "[Kotlin] data class의 copy() with backing field"
excerpt: backing field는 copy()로 당연히! 복사되지 않는다!
category: Project
date: 2024-10-05
toc: true
author:
  name: Yooniversal
  role: 개발
---

## 문제 상황
data class의 `copy()`를 통해서 객체가 가진 값을 아주 편리하게 그대로 가져오고 원하는 값을 설정해줄 수 있다. 작업했던 로직에서는 일련의 단계를 거치면서 객체의 값을 업데이트 해주고 있었는데, 이 과정에서 `copy()`를 무진장 쓰고있었다. 클래스에서는 backing field를 갖고 있는 상황이었고, 객체를 생성자로 바로 생성하지 않고 `of()`로 생성해주었었다.
```kotlin
data class Member(
    val id: Long,
    val name: String,
) {
    var nickName: String = ""
        private set
    
    companion object {
        fun of(id: Long, name: String, nickName: String): Member {
            return Member(id, name).apply {
                this.nickName = nickName
            }
        }
    }
}
```

근데 최종 응답으로 나가는 객체에서 backing field 값이 누락됐다는 제보를 받고.. 열심히 원인을 추적해봤다😇 당시 로직은 대략 이런 상황이었다. 로직이 길어지다보니까 코드만으로 원인을 찾기 힘들었고 로그를 남겨보며 원인을 좁혀나가봤다.
```kotlin
val member = Member.of(1L, "AAA", "nickName")

// -- 복잡한 로직.. --

member.copy(name = "BBB").also {
    // -- 생략 --
}

// -- 복잡한 로직2.. --
// 근데 backing field(nickName) 값이 없음..🥲
```
<br>

눈치 빠른 분들은 이미 원인을 알아챘겠지만, copy()의 also 쪽을 보면 **backing field를 초기화해주는 내용이 없다!** 정말정말 바보같은 로직이었다🥲
```kotlin
val member = Member.of(1L, "AAA", "nickName")

// -- 복잡한 로직.. --

member.copy(name = "BBB").also {
    // 🚨 backing field 초기화 안해주고 있었음!! 🚨
}

// -- 복잡한 로직2.. --
// 근데 backing field(nickName) 값이 없음..🥲
```

## 해결방법 2가지
`copy().also { ... }`에서 also에 초기화해주는 내용을 모두 추가해주면 물론 해결되겠지만, 이건 추후 수정사항이 있게되면
반영된 부분을 다 찾아서 수정해줘야 한다. 실수하면 또 장애로 이어질 수 있기 때문에 상황에 맞춰 아래 2가지 방법 중에 선택하면 되겠다.

### backing field도 생성자에 넣어주기
가장 간단한 방법이다. 하지만 backing field로 빼둔 의도가 있을테니까 유용하진 않을 것 같다.
```kotlin
data class Member(
    val id: Long,
    val name: String,
    val nickName: String = "",
)
```
<br>

### copy() 역할 메소드 새로 만들기
backing field 까지 복사하는 **fullCopy()**를 정의해주자!
```kotlin
data class Member(
    val id: Long,
    val name: String,
) {
    var nickName: String = ""
        private set

    fun fullCopy(name: String): Member {
        return this.copy(name = name).also {
            it.nickName = this.nickName
        }
    }

    companion object {
        fun of(id: Long, name: String, nickName: String): Member {
            return Member(id, name).apply {
                this.nickName = nickName
            }
        }
    }
}
```
<br>

테스트도 문제없이 통과한다!
```kotlin
@Test
fun `fullCopy()는 backing field를 복사할 수 있다`() {
    val member = Member.of(1L, "AAA", "nickName")
    member.fullCopy("BBB").also {
        assertEquals("nickName", it.nickName) // success
    }
}
```