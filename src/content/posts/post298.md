---
title: "[Spring Webflux] router에서 API path에 정규표현식을 적용할 때 주의하자"
excerpt: ""
category: Project
date: 2024-10-16
toc: true
author:
  name: Yooniversal
  role: 개발
---

webflux에서 router를 작성하는 경우 아래처럼 작성해줄 수 있다. `/tutorial`, `/tutorial/stage1`라는 path의 API 2개를 지원하고 있는 모습이다.
```kotlin
@Configuration
class TestRouter {

    @Bean
    fun testRouterBean(testHandler: TestHandler) = 
    coRouter {
        GET("/tutorial", testHandler::startTutorial)
        GET("/tutorial/stage1", testHandler::startTutorialStage)
    }
}
```
<br>

API path에는 **정규표현식**을 지정할 수 있다. 아래처럼 `[a-z]+`를 추가하면 /tutorial/ 뒤에 최소 1자 이상의 소문자 알파벳으로 
들어오는 요청을 모두 해당 API로 받을 수 있게된다. (Webflux 뿐만 아니라 MVC 에서도 지원한다)
```kotlin
GET("/tutorial/[a-z]+", testHandler::startTutorial)
```
<br>

## 문제 상황
router를 아래처럼 작성하고 `/tutorial/stage1`를 호출하면 어떻게 될까?
```kotlin
@Configuration
class TestRouter {

    @Bean
    fun testRouterBean(testHandler: TestHandler) = 
    coRouter {
        GET("/tutorial/[a-z]+", testHandler::startTutorial)
        GET("/tutorial/stage1", testHandler::startTutorialStage)
    }
}
```
<br>

<div style="text-align: center;">
    <img src="https://lh3.googleusercontent.com/d/1eIzEGPT6f2zZroyUim8tHPUAkD87s8_S" style="width: 70%; height: auto;" title="$20241016_test_router.png" alt="?"/>
</div>

그러면 **/tutorial/[a-z]+**에서 요청을 읽어버리게 된다😅 `stage1`을 `[a-z]+`에서 읽어버린 상황이다..! router는 위에서 아래로 매칭되는지 확인한다.

## 해결 방법
`stage1`이 정규표현식 `[a-z]+`에 읽히지 않도록 핸들러 순서를 바꿔주면 해결된다.
```kotlin
@Configuration
class TestRouter {

    @Bean
    fun testRouterBean(testHandler: TestHandler) = 
    coRouter {
        GET("/tutorial/stage1", testHandler::startTutorialStage)
        GET("/tutorial/[a-z]+", testHandler::startTutorial)
    }
}
```

## References
- [Baeldung : Exploring the Spring WebFlux URL Matching](https://www.baeldung.com/spring-5-mvc-url-matching#4-baeldunga-z-regex-in-path-variable)