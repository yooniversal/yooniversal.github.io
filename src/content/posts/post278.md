---
title: Encountered a duplicated sql alias
excerpt: sql에 alias가 중복인 경우
category: Project
date: 2024-02-22
toc: true
author:
  name: Yooniversal
  role: 개발
---

## 문제 상황
> Encountered a duplicated sql alias

엔티티 A를 from절에, B를 join절에 넣는 네이티브 쿼리를 작성하고 돌렸는데 다음 에러가 발생했다. A가 B와 연관관계를 2개 필드에 각각 맺고 있어서 join을 2번해줘야 하는 상황이었다. 예를들면 아래 쿼리와 같다.
```sql
select *
from A
join B b on b.id = A.b.id
join B b2 on b2.id = A.b.id 
...
```

이때 select절에 `b.id, b2.id` 이렇게 id라는 필드를 같은 엔티티에서 참조해서 그런지 예외가 발생했었다.

## 해결 방법
select절에 적은 각 컬럼의 alias를 다르게 해주면 해결된다! `select b.id, b2.id`였다면 `select b.id as bId, b2.id as b2Id`로 해주면 된다.

JPA를 사용할 때 날아가는 쿼리는 select절에 들어가는 컬럼이 모두 다른 alias를 갖고 있었는데, 이런 이유도 있다 싶었다.

## Reference
- [walbe0528: Error : Encountered a duplicated sql alias [id] during auto-](https://chae528.tistory.com/99)