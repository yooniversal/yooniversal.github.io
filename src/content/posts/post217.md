---
title: "[Spring Security] 현재 로그인 유저 정보 얻기"
excerpt: ""
category: Project
date: 2023-07-05
toc: true
author:
  name: Yooniversal
  role: 개발
---

`UserDetails`를 구현한 `PrincipalDetails`를 정의해주자.
```java
@Data
public class PrincipalDetails implements UserDetails {

    private User user;

    public PrincipalDetails(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
```
- 생성자로 `User`를 받아 필드로써 활용
- 로그인 ID를 `username`이 아닌 `email`로 할 것이기 때문에 `user.getEmail()` 적용
- 다른 함수 설명은 [여기](https://to-dy.tistory.com/86)를 참고
<br>

그렇게 선언한 `PrincipalDetails`는 `@AuthenticationPrincipal`와 함께 다음처럼 활용할 수 있고, 이렇게 얻은 사용자는 **현재 사용자**를 의미한다.
```java
@GetMapping("/test")
public ResponseEntity<?> test(@AuthenticationPrincipal PrincipalDetails principalDetails) {
    return new ResponseEntity<>(principalDetails.getUser().getId(), HttpStatus.OK);
}
```