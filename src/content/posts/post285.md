---
title: "[Python] Google Drive 파일 업로드부터 이미지 링크 생성까지 해보기"
excerpt: ""
category: Study
date: 2024-03-30
toc: true
author:
  name: Yooniversal
  role: 개발
---

[Git repo 링크](https://github.com/yooniversal/google-drive-img-src-generator)에 있는 내용과 같으니 바로 확인하셔도 좋습니다.

## 동기
Github 블로그를 운영하면서 이미지 업로드 하는 과정이 상당히 귀찮을 때가 많았다😤 굳이 Google Drive까지 들어가서 `파일 업로드 -> 공유 설정 -> 링크 복사 -> img src로 쓰도록 적절히 수정`하는 과정을 거치지 말고, **실행 -> img src로 쓸 수 있는 링크 얻기**를 바로 해주는 로직을 만들어보고 싶었다!

나같은 경우 img src에 넣는 이미지 링크 형태는 아래와 같은데,
```
https://lh3.google.com/u/0/d/{file-id}
```

최종적으로 이렇게 적용할 수 있다..!
```html
<img src="https://lh3.google.com/u/0/d/{file-id}" title="test-img.png" alt="test-img.png"/>
```

## Prerequisites
- Python
  + google-api-python-client 패키지 (googleapiclient.discovery)
  + oauth2client 패키지
- Google Cloud Platform
  + 프로젝트 생성
  + 사용자 인증 정보 생성
  + 테스트 사용자 등록
  + OAuth 클라이언트 ID 만들기
  + `folder_id` 복사

<br>

### 0. Python

Python 설치 및 코드 편집 가능한 환경(Visual Studio Code, PyCharm 등) 세팅은 생략한다. Python 설치같은 경우 [wikidocs](https://wikidocs.net/8)에도 잘 나와있으니 참고하면 좋을 것 같다.

Google Drive에 파일 업로드를 하려면 제공하는 API를 사용해야 하기 때문에, 아래 2가지를 import할 수 있어야 한다.
- googleapiclient.discovery
- oauth2client

만약 실행했는데 **ModuleNotFoundError**가 발생한다면 terminal에서 아래 명령어를 입력해줘야 한다.
```text
# googleapiclient.discovery
pip3 install google-api-python-client

# oauth2client
pip3 install --upgrade oauth2client
```
<br>

### 1. Google Cloud Platform 프로젝트 생성을 하지 않았다면 [여기](https://console.cloud.google.com/)를 클릭해주세요.

Google Drive API를 활용하려면 `프로젝트 등록`부터 `OAuth 클라이언트 ID 만들기`까지 반드시 해줘야하는 작업이 있다! 천천히 따라가보자.

<img width="1066" alt="make-project-google-cloud-platform" src="https://github.com/yooniversal/google-drive-img-src-generator/assets/61930524/51e71a0b-ca7d-472b-ba5e-745c627f99cd"><br>

### 2. 사용자 인증 정보 생성
   
<br>
<img width="1449" alt="make-user-information-for-auth" src="https://github.com/yooniversal/google-drive-img-src-generator/assets/61930524/38da813b-7c36-431e-bf0e-f0d1741fe616"><br>

UserType `외부(external)` 설정 → 만들기 클릭 후, `테스트 사용자` 단계가 나올 때까지 **저장 후 계속** 버튼 클릭

<img width="450" alt="select-UserType" src="https://github.com/yooniversal/google-drive-img-src-generator/assets/61930524/69c6a6ac-2224-4824-bce1-0fd7875ba43c"><br>

### 3. 테스트 사용자 등록

Google Drive API를 사용해 업로드하기 때문에, 사용할 테스트 계정이 필요하다. 원하는 계정을 등록해주자.

<img width="1051" alt="create-test-user" src="https://github.com/yooniversal/google-drive-img-src-generator/assets/61930524/10ea1165-084e-4cd2-af3d-8f664036fdaa"><br>

### 4. OAuth 클라이언트 ID 만들기
- 애플리케이션 유형 : **데스크톱 앱**
- 이름 입력 후 `만들기` 버튼 클릭

<img width="1113" alt="create-oauth-client-id" src="https://github.com/yooniversal/google-drive-img-src-generator/assets/61930524/57740578-10b1-4939-8e36-364afc9d751c"><br>

생성한 **클라이언트 ID/PW json 파일**은 로직에서 사용하기 때문에 반드시 필요하다! 다운로드 해주자. API 호출에 필요한 OAuth2 토큰 생성 시 필요한 파일이다.

<img width="510" alt="download-oauth-client-information-json" src="https://github.com/yooniversal/google-drive-img-src-generator/assets/61930524/aeceb951-0666-4e66-ba9a-b670b4a1b242">

### 5. `folder_id` 복사

Google Drive에서 파일을 업로드할 최종 경로 folder의 id가 필요하다. 복사 후 하단의 `코드 수정` 참조해 `google-drive-img-src-generator.py` 안에 `folder_id`에 붙여넣기 해주자.

<img width="800" alt="image" src="https://github.com/yooniversal/google-drive-img-src-generator/assets/61930524/026e4366-514a-430d-8297-13b59a4ec9a4"><br>

<br>

## 코드 수정
git clone 후 `google-drive-img-src-generator.py`를 실행해주자.
```
git clone https://github.com/yooniversal/google-drive-img-src-generator.git
```
<br>

주석 표시한 부분을 확인해 다음 내용을 채운 뒤 run하면 결과를 얻을 수 있다. (참조할 파일들은 `google-drive-img-src-generator.py`와 **반드시 같은 경로에 있어야 한다.**)
- OAuth 클라이언트 json 파일명
- 업로드 할 파일명 (여러개 가능)
- 업로드할 Google Drive 최종 경로 `folder-id`

```python
def main():
    # 생략

    if not creds or creds.invalid:
        oauth_client_json_file = '{json-file-name}' # OAuth 클라이언트 json 파일명 입력
        flow = client.flow_from_clientsecrets(oauth_client_json_file, SCOPES)
        creds = tools.run_flow(flow, store, flags) if flags else tools.run(flow, store)

    DRIVE = build('drive', 'v3', http=creds.authorize(Http()))

    FILES = (
        # 업로드 할 파일명 입력
        ('upload-file-1.png'),
        ('upload-file-2.png'),
    )

    folder_id = '{folder-id}' # 업로드할 Google Drive 최종 경로 folder-id 입력

    for file_title in FILES:
        request_body = {'name': file_title, 'parents' : [folder_id], 'uploadType': 'multipart'}
        media = MediaFileUpload(file_title, mimetype=get_image_mimetype(file_title))

        res = DRIVE.files().create(body=request_body, media_body=media, fields='id,webViewLink').execute()
        if res:
            key = extract_key_from_uri(res.get('webViewLink'))
            print(f"[{file_title}] >> {get_upload_uri(key)}") # 최종 URI 출력
```
<br>

## 결과
```
[upload-file-1.png] >> https://lh3.google.com/u/0/d/{file-id}
[upload-file-2.png] >> https://lh3.google.com/u/0/d/{file-id2}
```
<br>

## 수정(확장) 가능 부분
이미지 파일을 업로드하는데 초점을 맞췄다보니 확장자 명을 뽑을 때 4가지로 제한했다. (기본값 `png`) 다른 타입의 파일을 처리하는거라면 필요에 따라 확장할 수 있다.
```python
def get_image_mimetype(file_title):
    if file_title.endswith('.jpeg') or file_title.endswith('.jpg'):
        return 'image/jpeg'
    if file_title.endswith('.png'):
        return 'image/png'
    if file_title.endswith('.gif'):
        return 'image/gif'
    return 'image/png'
```
<br>

`extract_key_from_uri()`는 Google Drive API로 가져온 업로드한 파일의 공유 링크에서 **file-id**만 빼내는 함수다. 기존 공유 링크가 `https://drive.google.com/file/d/{fild-id}/view\?usp=drivesdk` 형태여서 정규 표현식을 활용했다. 여기서는 이 `file-id`를 간단히 부르기 위해 **key**라고 명명했다.

`get_upload_uri()`는 내가 활용하는 img src 형태가 `https://lh3.google.com/u/0/d/{file-id}`기 때문에 `extract_key_from_uri()`로 얻은 key를 postfix로 활용해 적절한 형태의 링크로 반환하는 함수다. 원하는 형태에 맞게 수정해줘도 된다.
```python
def extract_key_from_uri(uri):
    pattern = r"https://drive.google.com/file/d/([^/]+)/view\?usp=drivesdk"
    match = re.match(pattern, uri)
    if match:
        return match.group(1)
    return None
    
def get_upload_uri(key):
    return 'https://lh3.google.com/u/0/d/' + key
```

## References
- [YSY: [Python] 파이썬과 구글 드라이브 연동하고 파일 업로드/다운로드 하기 (Google Drive)](https://ysyblog.tistory.com/296)
- [pbj0812: [PYTHON] python을 사용한 Google Drive 에 파일 업로드](https://pbj0812.tistory.com/193)
- [JeeU147 : 구글 인증(Google Auth) 승인 오류 403 오류: access_denied](https://jeeu147.tistory.com/91)