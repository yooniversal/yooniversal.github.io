---
title: "[BOJ 11962]"
excerpt: Counting Haybales
category: PS
date: 2020-09-11
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://www.acmicpc.net/problem/11962](https://www.acmicpc.net/problem/11962)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

### solution
<script src="https://gist.github.com/yooniversal/83dc6c116d55850d3de08f3e47f1f8c5.js"></script>
<br>

### review
**lazy propagation** 응용 문제다. P, S 쿼리는 사실 일반적인 lazy propagation과 같다. 여기서 말하는 '일반적인 lazy propagation'은 구간에 값을 더하거나 sum을 구하는 연산을 말한다. 이에 해당하는 문제는 [BOJ 15967: 에바쿰](https://www.acmicpc.net/problem/15967) 등이 있다.

이 문제는 M 쿼리에서 **구간에서의 최솟값**을 묻는다. 일반적인 lazy propagation에서는 `lazy[]`에 값을 저장하면서 현재 노드(`tree[node]`)에는 값 `x` **구간 길이**를 더해주게 되는데 최솟값/최댓값은 어차피 구간[l, r]에 같은 값을 반영하기 때문에 값만 더해주면 된다. 반영한 내용은 다음과 같다.
```cpp
void lazy_uplast_modified_at(int node, int ns, int ne) {
  if (lazy[node]) {
    tree[node] += lazy[node] * (ne - ns + 1);
    mintree[node] += lazy[node]; //추가!
    if (ns != ne) {
      lazy[node * 2] += lazy[node];
      lazy[node * 2 + 1] += lazy[node];
    }
    lazy[node] = 0;
  }
}

void uplast_modified_at_range(int node, int ns, int ne, int l, int r, ll val) {
  lazy_uplast_modified_at(node, ns, ne);
  if (r < ns || ne < l) return;
  if (l <= ns && ne <= r) {
    if (ns != ne) {
      lazy[node * 2] += val;
      lazy[node * 2 + 1] += val;
    }
    mintree[node] += val; //추가!
    tree[node] += val * (ne - ns + 1);
    return;
  }
  int m = (ns + ne) / 2;
  uplast_modified_at_range(node * 2, ns, m, l, r, val);
  uplast_modified_at_range(node * 2 + 1, m + 1, ne, l, r, val);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
  mintree[node] = min(mintree[node * 2], mintree[node * 2 + 1]); //추가!
}
```

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
