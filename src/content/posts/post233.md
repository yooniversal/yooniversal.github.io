---
title: "[Spring] SerializationException: Could not write JSON: could not initialize proxy - no Session"
excerpt: ""
category: Project
date: 2023-07-21
toc: true
author:
  name: Yooniversal
  role: 개발
---

### 문제 상황
테스트 코드를 돌려보다가 다음 에러가 발생했다. `Product`와 `Category`가 연결된 상태고 `Product`에서 `Category`로 접근해 `Category.name` 정보를 얻으려 하다가 발생한걸로 보인다.
> org.springframework.data.redis.serializer.SerializationException: Could not write JSON: could not initialize proxy [...domain.entity.Category#1] - no Session (through reference chain: ...domain.entity.Product["category"]->...domain.entity.Category$HibernateProxy$AQqBFJ0J["name"])

### 해결 방법
테스트 클래스에 `@Transactional`를 붙여서 해결했다. `Product`와 연결된 `Category` 정보를 가져올 때 세션이 연결돼 있지 않아서 발생한 문제였다.
```java
@Transactional
@SpringBootTest
class ProductServiceTest {
   ...
}
```
