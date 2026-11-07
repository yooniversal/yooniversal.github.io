---
title: '[Grafana] Post "http://localhost:9090/api/v1/query": dial tcp 127.0.0.1:9090: connect: connection refused'
excerpt: ""
category: Project
date: 2023-07-12
toc: true
author:
  name: Yooniversal
  role: 개발
---

다음은 Grafana에서 dashboard로 Prometheus를 등록할 때 발생한 에러다.
> Post "http://localhost:9090/api/v1/query": dial tcp 127.0.0.1:9090: connect: connection refused

원인은 찾지 못했으나 새 dashboard의 URL에 들어가는 호스트 주소를 `localhost`가 아닌 현재 IP 주소로 변경해주니 해결할 수 있었다.
```
//Before
http://localhost:9090

//After
http://{현재 IP 주소}:9090
```
<br>

## References
- [Alert Issue in Dashboard with Prometheus Dashboard: “request handler error...“](https://community.grafana.com/t/alert-issue-in-dashboard-with-prometheus-dashboard-request-handler-error-post-http-localhost-9090-api-v1-query-range-dial-tcp-1-connect-connection-refused/50756/1)
- [grafana/grafana issue #29296](https://github.com/grafana/grafana/issues/29296#issuecomment-732109448)