---
title: "[BOJ 1197]"
excerpt: 최소 스패닝 트리(MST)
category: PS
date: 2020-07-17
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://www.acmicpc.net/problem/1197](https://www.acmicpc.net/problem/1197)<br>

**Solution**

<script src="https://gist.github.com/yooniversal/cdea28cbec8b1b1f702f25175ad5b610.js"></script>
<br>

### Kruskal algorithm
가장 적은 비용으로 모든 노드를 방문하고 싶을 때 사용될 수 있는 알고리즘으로, MST(Minimum spanning tree)에 해당한다. 모든 노드를 방문하는 것도 조건이지만, 가장 적은 비용으로 방문을 하는게 중요하다. 때문에 정보를 미리 저장한 뒤 정렬을 해 작은 것부터 선택해 나간다.
```cpp
vector<triple> mst;

  while(E--){
    ...
    mst.push_back({ dist, a, b }); //mst에 담아두기
  }

  sort(mst.begin(), mst.end()); //내림차순으로 정렬
```
서로 같은 집합에 속해있거나, 모든 노드를 방문한 상태라면 더 이상의 비용을 더할 필요가 없다.<br>

### review
조건에서 1~V번까지 번호가 매겨져 있고 모든 정점을 연결해야 하므로 최종적으로 부모는 1이 돼야한다고 생각했다. 따라서 make_union()을 해주기 전과 후 값을 비교할 때 값이 다르면서 부모값이 1일 때 방문됐다고 체크(pchk++)했다. 같은 집합에 속했을 때도 무시하도록 처리했다.
```cpp
for (int i = 0; i < mst.size(); i++) {
		if (pchk == V) continue;	//모든 노드를 거쳤다면 무시
		if (find_parent(mst[i].s) == find_parent(mst[i].e)) continue;	//같은 집합이면 무시
		int bs = mst[i].s, be = mst[i].e;
		make_union(mst[i].s, mst[i].e);
		if (bs != mst[i].s && mst[i].s == 1) pchk++;
		if (be != mst[i].e && mst[i].e == 1) pchk++;
		ans += mst[i].dist;
	}
```


<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
