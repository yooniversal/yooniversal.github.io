---
title: "[Spring] actual and formal argument lists differ in length"
excerpt: ""
category: Project
date: 2023-08-04
toc: true
author:
  name: Yooniversal
  role: 개발
---

## 문제 상황
객체 생성할 때 `builder`로 수정하고나니 실행하니까 다음 에러가 발생했다.
> actual and formal argument lists differ in length

클래스 자체에 `@Builder`를 붙인 경우에 문제가 발생하는걸로 보였고, 생성자에 `@Builder`를 붙인 경우 발생하지 않았다.

## 해결
`@AllArgsConstructor`를 붙여주니 해결할 수 있었다!
```java
@Entity
@Getter
@Builder
@AllArgsConstructor //추가
public class Product {
  ...
```

## Reference
- [제뉴어리맨: actual and formal argument lists differ in length 에러](https://januaryman.tistory.com/470)