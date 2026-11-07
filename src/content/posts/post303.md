---
title: "[Kotlin] companion object of enum class is uninitialized here"
excerpt: enum 클래스에서 companion object 사용에 주의하기
category: Study
date: 2024-11-25
toc: true
author:
  name: Yooniversal
  role: 개발
---

## 문제 상황
> companion object of enum class is uninitialized

kotlin 버전업을 하면서 기존에 잘 문제없이 동작했던 enum 클래스에서 컴파일 에러가 발생했다. 예를 들면, 아래처럼 작성하면 재현할 수 있다. (kotlin 버전은 현재 `1.9.25`이다)
```kotlin
enum class Color(val number: Int) {
    RED(RED_NUMBER), // Companion object of enum class 'Color' is uninitialized here
                     // Variable 'RED_NUMBER' must be initialized
    GREEN(GREEN_NUMBER),
    BLUE(BLUE_NUMBER),
    ;

    companion object {
        private const val RED_NUMBER = 1
        private const val GREEN_NUMBER = 2
        private const val BLUE_NUMBER = 3
    }
}
```
<br>

## 원인
찾아보니 kotlin의 `companion object`는 java의 static 처럼 애플리케이션 실행 시 초기화되지 않은게 원인이었다. (kotlin을 처음 접했을 때부터 줄곧 companion object는 static이랑 똑같은 거라고 생각했던게 발목을 잡았다🥲)

`companion object`는 **인스턴스 생성 시점에 초기화된다.**

## 해결 방법
상수로 사용하는 부분들은 `object`로 분리했다. 참고로 object는 사용되는 시점에 초기화된다.
```kotlin
enum class Color(val number: Int) {
    RED(RED_NUMBER),
    GREEN(GREEN_NUMBER),
    BLUE(BLUE_NUMBER),
    ;
}

object ColorNumber {
    const val RED_NUMBER = 1
    const val GREEN_NUMBER = 2
    const val BLUE_NUMBER = 3
}
```
<br>

아래처럼 상수 대신 값을 바로 적용해도 된다. 해결 방법은 여러가지가 있는 것 같다.
```kotlin
enum class Color2(val number: Int) {
    RED(1),
    GREEN(2),
    BLUE(3),
    ;
}
```
<br>

## References
- [beaniejoy: [Kotlin] "companion object of enum class is uninitialized" 이슈 해결](https://beaniejoy.tistory.com/83)