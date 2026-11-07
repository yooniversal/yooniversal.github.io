---
title: "[Programmers] 소수 찾기"
excerpt: 완전탐색
category: PS
date: 2020-07-28
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://programmers.co.kr/learn/courses/30/lessons/42839](https://programmers.co.kr/learn/courses/30/lessons/42839)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

**Solution**

<script src="https://gist.github.com/yooniversal/a940fb7fc60f042ec5cd3d742bca2da9.js"></script>
<br>

### review
흔한 유형이지만 이상하게 순열만 나오면 되게 버벅이게 된다. 풀면서도 약간 어거지로 푼 느낌이 있어서 찝찝하다. main에서 `i`가 1부터 `numbers.size()`까지 들어가는데 이 `i`는 `size`로 작용한다. 순열 만들기는 dfs 안에서 진행된다. key에 값이 들어가면 dfs 탐색 후 빼줘야 다음 연산에 영향을 주지 않는다. 마지막 값을 어떻게 뺄까 생각하다가.. 어떻게 써야 좋을지 모르겠어서 떠오르는대로 썼다! 지저분해 보인다😥
```cpp
void dfs(string numbers, string key, int size){
  ...

  for(int i=0; i<numbers.size(); i++){
          if(chk[i]) continue;
          chk[i] = true;
          key += numbers[i];
          dfs(numbers, key, size-1);
          chk[i] = false;
          key.erase(--key.end());
  }
}
```

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
