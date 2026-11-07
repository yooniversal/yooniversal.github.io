---
title: "qlrm: native query 결과를 바로 DTO에 매핑하기"
excerpt: ""
category: Project
date: 2024-02-22
toc: true
author:
  name: Yooniversal
  role: 개발
---

## 문제 상황
네이티브 쿼리로 얻은 값들이 모두 같은 타입이라면 좋겠지만, 꼭 그런 상황만 있지는 않다. 나같은 경우 컬럼 개수가 20개 정도 넘어가는 쿼리를 짰어야 했는데 이때 타입 종류만 5개가 넘었어서 일일이 매핑해주기가 너무 귀찮았다. 각 컬럼 타입이 자바 기준으로 int, String, boolean, LocalDateTime 등 많아졌는데 물론 순서는 고정이라 매핑이 불가능한 건 아니지만 querydsl의 @QueryProjection처럼 바로 매핑해주는 방법이 있다면 수고로움을 덜 수 있으니까 찾아보기로 했다!

## 해결 방법
qlrm이라는 외부 라이브러리를 사용해서 해결할 수 있었다😄 사용법도 매우 간단하다! 결과로 DTO 1개든, 리스트든 쉽게 만들 수 있다.
```java
private EntityManager entityManager; // 빈으로 주입받아서 사용

// 1개
Query q = em.createNativeQuery("SELECT e.id, e.name FROM Employee e WHERE e.id = 1");
EmployeeTO to = jpaResultMapper.uniqueResult(q, EmployeeTO.class);

// list
Query q = em.createQuery("SELECT e.id, e.name FROM Employee e");
List<EmployeeTO> list = jpaResultMapper.list(q, EmployeeTO.class);
```
- [qlrm readme](https://github.com/72services/qlrm?tab=readme-ov-file#jpa-native-query)에서 더 자세히 확인할 수 있다.

## Reference
- [QLRM github](https://github.com/72services/qlrm)