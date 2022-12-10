## 프로젝트 요약
```
localStorage를 이용해 간단한 일기장을 작성하는 홈페이지입니다. 날짜별/행복도순 분류 및 월별 이동이 가능하고,
ContextAPI + useReducer로 상태관리를 진행했고 UI상태 별 CRUD를 할 수 있게 적절하게 배치했습니다
```
### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
 <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/> 
</div>

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```
<br/>

### 배포 링크

[배포링크 바로가기](https://kiminpyo-project-diary.web.app/)
<br/>

## 프로젝트 설명

### 📂 디렉토리 구조
<details>
<summary> 구조</summary>
<div markdown="1">

```

🗂 src
 ┣ 📁 components
    ┣ 📁 DiaryEditor.js
    ┣ 📁 Diaryitem.js
    ┣ DiaryList.js
    ┣ EmotionItem.js
    ┣ MyButton.js
    ┗ MyHeader.js
 ┣ 📂 pages
   ┣ Diary.js
   ┣ Edit.js
   ┣ Home.js
   ┗ New.js
 ┣ 📂 reducer
   ┗ actions.js
 ┣ 📂 util
   ┣ date.js
   ┗ emotion.js
 ┣ App.js
 ┣ index.
 
```

</div>
</details>


### ⚙️ 구현기능

1.  다이어리 홈

```
- localStorage를 이용해 기존에 저장했던 정보 불러옴.
- 월별 생성순/기분에 따라 옵션을 줘 분류.
- 헤더쪽에 있는 화살표로 월별로 이동
- 새로운 일기 쓰기 및 일기 수정
```

2.  다이어리 상세

```
- localStorage를 통해 행복도와 일기 내용을 불러옴.
- 수정 및 뒤로가기
```

3. 다이어리 수정 및 생성
```
- 수정을 할 경우, 기존에 생성한 데이터를 가져감.
- 생성 시 행복도/내용/날짜 3가지를 작성.
```

4. 다이어리 삭제

5. 페이지 공유
```
- firebase를 이용해 페이지 배포
- openGraph를 이용해 페이지에 대한 설명 추가
```
---

### 사용한 라이브러리 및 API, CDN 등
- react-router
- firebase
- localStorage
- openGraph
---






