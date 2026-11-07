---
title: "[Spring] multipart.MultipartException: Current request is not a multipart request"
excerpt: ""
category: Project
date: 2023-09-19
toc: true
author:
  name: Yooniversal
  role: 개발
---

### 문제 상황
> org.springframework.web.multipart.MultipartException: Current request is not a multipart request

파일 업로드 기능이 포함된 API를 구현 후 테스트하는 과정에서 `MultipartException`이 발생했다. API 파라미터에 파일 업로드를 위해 `MultipartFile`를 타입으로 설정해줬다.
```java
@PostMapping("/users/mysize/silhouette")
public ResponseEntity<?> silhouetteFromBody(@RequestParam("bodyFile") MultipartFile bodyFile,
                                            @RequestParam("type") String type) {
    ...
}
```

### 해결
파일 업로드 기능을 사용하려면 다음처럼 `MultipartResolver`를 bean으로 등록해줘야 한다. 다음처럼 `MultipartConfig`를 정의해주니 postman에서 정상적으로 동작하는걸 확인할 수 있었다!
```java
@Configuration
public class MultipartConfig {

    private final static long MAX_UPLOAD_SIZE = 10485760;

    @Bean
    public MultipartResolver multipartResolver() {
        StandardServletMultipartResolver multipartResolver = new StandardServletMultipartResolver();
        return multipartResolver;
    }

    @Bean
    public MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxRequestSize(DataSize.ofBytes(MAX_UPLOAD_SIZE));
        factory.setMaxFileSize(DataSize.ofBytes(MAX_UPLOAD_SIZE));
        return factory.createMultipartConfig();
    }
}
```
- 업로드 최대 사이즈 : `MAX_UPLOAD_SIZE` : 10MB (=10 * 1024 * 1024)

## References
- [kindlove: [Spring boot] MultipartFile 파일 업로드 구현](https://kindloveit.tistory.com/112)