---
title: "[Codeforces] Round #677"
excerpt: (Div.3) A~F
category: PS
date: 2020-10-22
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://codeforces.com/contest/1433](https://codeforces.com/contest/1433)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

<details>
<summary>A. Boring Apartments</summary>
<div>

### solution
<script src="https://gist.github.com/yooniversal/aa90368fcb10626d54945de7c09641de.js"></script>

같은 숫자가 연속되는 케이스에 한해서 설명하고 있다. 숫자는 1~9까지 이므로 다행히도 길이가 최대 4여서 케이스가 많지 않다. input이 222로 들어왔다면, 일단 1로 시작하는 숫자는 [1, 11, 111, 1111]이 있어 1+2+3+4=10이 된다. 또한 [2, 22, 222]가 있으므로 10+(1+2+3)=16이 된다. 일반화해서 input으로 들어오는 값의 숫자가 a라면 $$(a-1)/times 10$$이 먼저 더해져야 한다.

</div>
</details>

<details>
<summary>B. Yet Another Bookshelf</summary>
<div>

### solution
<script src="https://gist.github.com/yooniversal/c2d631bf6561fa4ed947ad0d5c0725a5.js"></script>

설명을 읽어보면 1이 연속된 경우 덩어리로 쳐서 한꺼번에 움직일 수 있는 특징이 있다. (0은 해당되지 않는다)

처음에 시작되는 1을 기준잡아서 오른쪽으로 탐색할 때 1이 발견될 때마다 (인덱스차-1)만큼 답에 갱신해준 후 기준을 다시 방금 탐색한 인덱스로 설정해주고 반복하면 된다.

</div>
</details>

<details>
<summary>C. Dominant Piranha</summary>
<div>

### solution
<script src="https://gist.github.com/yooniversal/ebe73a06f66ecf182a576adb3ee18533.js"></script>

가장 큰 수가 a라고 가정하면, 주어진 값 중에 a인 원소가 여러개 있을 수 있다. 하지만 a 주변에 a-1이 단 1개라도 존재할 경우 a는 a+1이 될 수 있으며 최종적으로 모든 값보다 커지게 된다. 따라서 이에 해당되는 값이 존재하는지 탐색한 후 출력하면 된다. 당연하게도 모두 값이 같다면 -1이 되겠다.

</div>
</details>

<details>
<summary>D. Districts Connection</summary>
<div>

### solution
<script src="https://gist.github.com/yooniversal/ac01b8549ded3129ab8f6987158b1e9d.js"></script>

처음에 DFS로 슥슥 짜서 제출했다가 시원하게 TLE를 받았다. ㅠㅠ 문제는 단순하다. 같은 값을 갖지않는 원소들 끼리 연결할 수 있으며 n-1개의 엣지로 모두 연결할 수 있는지 묻는 문제다. 서로 값이 상이한 정도를 종류라고 치면 [3, 3, 3, 3]처럼 종류가 1개뿐일 땐 서로 어떤 것도 연결할 수 없다. 다만 종류가 2개라면 [1, 2, 2, 2]라고 해도 1이 모든 2에 연결할 수 있으므로 해결할 수 있다. n의 범위가 그리 크지않아 $$O(n^2)$$에 통과할 수 있다.

</div>
</details>

<details>
<summary>E. Two Round Dances</summary>
<div>

### solution
<script src="https://gist.github.com/yooniversal/e9a9f4da74b016ff36a818cc2d322508.js"></script>

표현을 어떻게 해야할지 모르겠는데.. [1, 2, 3, 4]가 있고 이 배열이 순환한다고 하자. 그럼 [4, 1, 2, 3], [3, 4, 1, 2], [2, 3, 4, 1]가 나오는데 이렇게 순환하는 경우를 모두 같다고 쳐야 한다. 어떤 수의 순열을 구했을 때 그 수의 길이가 k고 등장하는 수가 1~k라면, 경우의 수는 k!이 된다. 하지만 위의 예처럼 반드시 순환하는 케이스가 존재한다. 잘 생각해보면, k개에서 1개를 뺀 나머지 k-1개만 순열을 돌리면 (k-1)!개의 케이스들가 나오는데 k개의 순열(k!)입장에서 봤을 땐 이 (k-1)!이 서로 순환하지 않는 케이스들이 된다.

n개중에 절반을 고르고, 이 고른 경우에서 양쪽을 뒤집으면 같은 경우가 정확히 1번 존재하므로 2를 나눠준 후 각 배열에 존재하는 케이스들을 서로 곱해주면 식은 다음과 같아진다.

$$
C(n, \frac{n}{2})\times ((\frac{n}{2}-1)!)^2\times \frac{1}{2}
$$


</div>
</details>

<details>
<summary>F. Zero Remainder Sum</summary>
<div>

### solution
<script src="https://gist.github.com/yooniversal/0193684998a2d486363596cdf2d712bd.js"></script>

각 행에서 m/2개가 넘지 않도록 원소를 구한 합이 k로 나누어 떨어질 때 합의 최댓값을 구하는 문제다. 전형적인 DP 유형이 되겠다.

m/2개를 택하지 않았을 때 현재 원소를 선택할지, 선택하지 않을지를 나누고 m/2개를 택했거나 마지막 원소를 처리한 상태라면 다음 행으로 넘어가도록 처리해주면 된다. 이 때 나누어 떨어지는지 체크하기 위해서 합을 온전히 계속 갖고 다닐 수 없다. 메모리에 한계가 있다. 어차피 중간값에 모듈러를 걸어도, 총합에 모듈러를 걸어도 결과는 같으므로 k 미만의 값을 취할 수 있게 된다. 따라서 인자 sum에 그 값을 가지고 다니면서 최종적으로 `sum % k == 0` 인지 확인하면 된다.

</div>
</details>



<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
