---
title: "[Spring] TransientPropertyValueException: object references an unsaved transient instance"
excerpt: ""
category: Project
date: 2023-07-21
toc: true
author:
  name: Yooniversal
  role: 개발
---

### 문제 상황
`User`, `Measurement` 엔티티가 서로 관계를 맺고 있는 상태에서 `User` 객체를 생성자를 통해 만들어주는 경우 `User`의 `Measurement`를 `new Measurement()`로 객체를 생성해 등록해줬었고, 테스트해보는 과정 중에 문제가 발생했다.
> org.springframework.dao.InvalidDataAccessApiUsageException: org.hibernate.TransientPropertyValueException: object references an unsaved transient instance - save the transient instance before flushing

### 해결 방법
새로 생성한 `Measurement` 객체가 영속성 컨텍스트 내에서 관리되고 있는 상황이 아니고 애초에 **관리됐던 시점이 없으므로 PK가** 존재하지 않는다. 그런 객체를 새 `User` 객체에 연결해주려 하니 FK가 없어 문제가 생긴 것이다. 그래서 새 `Measurement` 객체를 DB에 저장한 뒤에(=PK 값이 설정된 뒤에) 활용하기로 했다.
```java
@Transactional
public User save(SignUpDto signUpDto) {
    Measurement measurement = measurementRepository.save(new Measurement()); //Measurement 저장
    User user = new User(signUpDto, passwordEncoder.encode(signUpDto.getPassword()), measurement);
    measurement.setUser(user);
    return userRepository.save(user);
}
```