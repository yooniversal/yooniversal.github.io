---
title: "Error: Permission denied - bind(2) (Errno::EACCES)"
excerpt: ""
category: Study
date: 2023-05-31
toc: true
author:
  name: Yooniversal
  role: 개발
---

### 문제 상황
`bundle exec jekyll serve`로 localhost에서 블로그를 확인하려고 할 때 다음 에러 때문에 막혔었다. cmd가 관리자 권한이 아니어서 그런가 싶어 설정해봐도 같은 에러가 반복돼서 해결하느라 조금 헤맸다😥
```
Permission denied - bind(2) for 127.0.0.1:4000 (Errno::EACCES)
```
<br>

### 해결 방법
Windows에서는 재부팅할 때마다 프로세스가 이용하는 포트가 달라질 수 있다고 한다. cmd에서 `netsh interface ipv4 show excludedportrange protocol=tcp`를 입력해 사용 가능한 포트를 확인하고 다음 방법을 통해 사용하려는 포트를 설정해주면 된다. (택1) 예를 들어 사용하려는 포트를 `4001`이라 하면,
- *_config.yml* 파일에서 다음 내용 추가하기

```python
port: 4001
```

- cmd에서 다음 명령어 입력하기

```text
> bundle exec jekyll serve --port 4001
```

<br>

### 참고 자료
- [jekyll serve 기본 포트 설정을 바꾸는 법](https://honggaruy.github.io/blog/2020/10/26/week-44th/)
- [How to fix `listen EACCES: permission denied` on any port](https://superuser.com/questions/1437780/how-to-fix-listen-eacces-permission-denied-on-any-port)