---
title: "[Spring] ClassNotFoundException: javax.xml.bind.DatatypeConverter"
excerpt: ""
category: Project
date: 2023-07-06
toc: true
author:
  name: Yooniversal
  role: 개발
---

### 문제 상황
스프링 프로젝트에 JWT를 적용하고 로그인 API를 테스트하면서 발생했다. `JwtTokenProvider.createToken()`에서 `compact()` 호출 시 다음 에러를 뱉어냈다.

> ClassNotFoundException: javax.xml.bind.DatatypeConverter

Java 11에서 JAXV API를 JDK에서 아예 제거했기 때문에 발생했던 문제였다. JAXV API에서 지원하는 함수를 내부에서 활용하기 때문에 필요하다.

### 해결 방법
`build.gradle`에 다음 내용을 추가해주자.
```text
implementation 'io.jsonwebtoken:jjwt:0.9.1'
implementation 'javax.xml.bind:jaxb-api:2.3.0' //추가
```

### Reference
- [연로그: [Java] java.lang.ClassNotFoundException: javax.xml.bind.JAXBException 에러](https://yeonyeon.tistory.com/240)