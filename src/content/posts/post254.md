---
title: "[Spring] RestTemplate 통해서 application/x-www-form-urlencoded로 요청 보내기"
excerpt: ""
category: Project
date: 2023-08-13
toc: true
author:
  name: Yooniversal
  role: 개발
---

자바 코드에서 다른 서버로 API 요청을 보내서 응답을 받아야할 때 `RestTemplate`을 사용할 수 있다. 정의하는 방식은 굉장히 간단하다!

### RestTemplate 정의
```java
RestTemplate restTemplate = return new RestTemplate();
```

아래처럼 빈으로 등록해서 다른 곳에서 주입받아 사용할 수도 있다.
```java
@Configuration
public class RestTemplateConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

### application/x-www-form-urlencoded
요청 보내는 방식은 여러가지가 있지만, `application/x-www-form-urlencoded`로 데이터를 보내야 하는 경우 다음처럼 `LinkedMultiValueMap`을 사용해야 따라야 한다.
```java
URI uri = UriComponentsBuilder.fromUriString(KAKAO_TOKEN_URL)
                .build()
                .toUri();

//LinkedMultiValueMap 사용
MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
params.add("parameter", "123");
ServiceResponse response = restTemplate.postForObject(uri, params, ServiceResponse.class);
```


### References
- [yeon: RestTemplate 으로 application/x-www-form-urlencoded 타입 요청 전송하기 (ITDA 프로젝트)](https://velog.io/@yeon/RestTemplate-으로-applicationx-www-form-urlencoded-타입-요청-전송하기-ITDA-프로젝트)