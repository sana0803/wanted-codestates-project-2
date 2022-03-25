# 넥슨코리아 기업과제

### 🚀 배포 링크

👉 [배포 사이트 바로가기](https://wanted-nexon-project.netlify.app/)

### 💻 실행 방법

```bash
$ git clone https://github.com/sana0803/wanted-codestates-project-2/

$ npm install

$ npm run start
```

```
* 개인 github public 프로젝트 링크 공유(프로젝트명 무관)
* 결과물에 대한 전반적인 설명과 그래프, 애니메이션 적용 지점을 README 파일에 기제
* 제출된 코드는 수정없이 빌드 및 로컬 실행이 가능해야 함
* 불필요한 코드가 포함되지 않도록 gitignore 파일 적용 필수
```

###  ✨기술 스택

**FrontEnd**

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**Etc**

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Discord](https://camo.githubusercontent.com/044d8c56b731ec0c452afd451441be9535a4abd78ab5f14e75d256747b19ec28/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f444953434f52442d2532333732383944412e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d646973636f7264266c6f676f436f6c6f723d7768697465)



### 👩‍💻구현

- [카트라이더 전적 검색 사이트](https://tmi.nexon.com/kart) 클론 코딩
- 닉네임을 검색하여 전적 조회가 가능한 검색 페이지 개발
- 랭킹 페이지 개발
- [카트라이더 OpenAPI](https://developers.nexon.com/kart)로 데이터 조회





### 🤔 회고

**추후 구현할 부분**

- 홈 메인 페이지
  - 시간 관계상 바로 전적 검색 조회 페이지가 보여지도록 했음
- 개인 전적 페이지 카트 전적 부분
  - 데이터 가공 😭
  - 닉네임이 없는 유저 검색시 예외 처리
  - 주행 시간 기록 데이터 가공
- 차트, 그래프
  - Chart.js를 이용하기
  - 도넛 그래프 애니메이션
- 우측하단의 매치 기록 데이터 (리타이어 노출/승리여부 스타일링)
  - 데이터 가공 😭
  - 데이터 200개를 받아오기 때문에 무한스크롤 적용하면 좋을 것
- 랭킹 페이지
  - 데이터 가공 😭 (이 부분은 데이터를 어떻게 받아와서 가공해야할지 감조차 잡지 못했습니다)
  - 카트나 트랙 페이지도 마찬가지... API 데이터 분석에 애를 먹었습니다

