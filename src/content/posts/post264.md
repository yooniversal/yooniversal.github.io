---
title: "[Spring] IllegalStateException: Ambiguous handler methods"
excerpt: ""
category: Project
date: 2023-09-21
toc: true
author:
  name: Yooniversal
  role: 개발
---

### 문제 상황
> java.lang.IllegalStateException: Ambiguous handler methods mapped for '/api/v1/malls/7/0/A/0'

API를 호출하자마자 `500` 에러와 함께 위 로그가 남겨져 있었다. 호출한 API URI는 `/malls/{mallId}/{categoryId}/{gender}/{filterId}`고, 중괄호를 친 부분은 값이 들어간다. `/api/v1/malls/7/0/A/0`는 이 API를 호출하면서 사용했던 주소다.

### 해결
로그를 보면 Ambiguous handler methods라고 써져 있듯이, **어떤 API를 호출해야할지 모르겠다는 뜻이다.** 찾아보니 API URI 구조가 똑같은게 2개나 있었다😅 이래서 `malls/7/0/A/0`를 호출하면 에러가 발생한다.
- API 1번 : `/malls/{mallId}/{categoryId}/{gender}/{filterId}`
- API 2번 : `/malls/{mallId}/{subCategoryId}/{gender}/{filterId}`

때문에 다음처럼 API 2번의 URI를 `/malls/sub/...`로 수정했다.
```java
//@GetMapping("/malls/{mallId}/{subCategoryId}/{gender}/{filterId}")
@GetMapping("/malls/sub/{mallId}/{subCategoryId}/{gender}/{filterId}")
public ResponseEntity<?> productWithSubCategoryOfMall(@PathVariable("mallId") @NotEmpty Long mallId,
                                                      @PathVariable("subCategoryId") @NotEmpty Long subCategoryId,
                                                      @PathVariable("gender") @NotEmpty String gender,
                                                      @PathVariable("filterId") @NotEmpty Long filterId,
                                                      Pageable pageable) {
  …
}
```
