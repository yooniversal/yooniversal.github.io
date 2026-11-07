---
title: "[Spring] InterpretationException: Error interpreting query"
excerpt: ""
category: Project
date: 2023-07-21
toc: true
author:
  name: Yooniversal
  role: 개발
---

### 문제 상황
Repository에 등록된 함수 즉, DB에서 데이터를 가져오기 위해 쿼리를 사용하는 과정에서 오류가 발생했다.
```
org.springframework.dao.InvalidDataAccessApiUsageException: org.hibernate.query.sqm.InterpretationException: Error interpreting query [select count(product)
from Category category
  left join product.user as user
  left join product.mall as mall
where user.id = ?1]; this may indicate a semantic (user query) problem or a bug in the parser [select count(product)
from Category category
  left join product.user as user
  left join product.mall as mall
where user.id = ?1]
```
<br>

### 해결 방법
쿼리에서 from절에 잘못된 엔티티를 적어서 발생한 문제로, 수정해주니 정상적으로 처리되는걸 확인할 수 있었다. `product`에 대해 정보를 얻고 있었는데 뜬금없이 `category`를 적어뒀었다.
```java
queryFactory
      .select(product.count())
      .from(product) //category -> product
      .leftJoin(product.user, user)
      .leftJoin(product.mall, mall)
      .where(
              userIdEq(userId)
      )
      .offset(pageable.getOffset())
      .limit(pageable.getPageSize())
      .fetchOne();
```
