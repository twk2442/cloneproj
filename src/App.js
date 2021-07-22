import "./App.css";

function Db(props) {
  //컴포넌트 이름 첫 글자는 대문자로 해야함 (소문자로하면 js태그로 인식함)
  // prototype 일단 css 없이 기본 코드 다 짜서 만든후 마지막에 css 코드작성
  return (
    <div className="container">
      <form>
        <input
          type="text"
          value="전화번호,사용자 이름 또는 이메일"
          name="id"
        ></input>
      </form>
      <form>
        <input type="text" value="비밀번호" name="pw"></input>
      </form>
    </div>
  );
}

function Sub(props) {
  return (
    <div>
      <h1>Instagram</h1>
    </div>
  );
}

function LogButton(props) {
  // 위 텍스트 입력시 버튼 누를수있게 색도바꿀 수있도록 액션 설정
  return (
    <div>
      <input type="button" value="로그인" name="logbutton"></input>
    </div>
  );
}

function Or() {
  // css로 깔끔하게
  return (
    <div>
      <p>-------- 또는 ---------</p>
    </div>
  );
}

function LogFace(props) {
  return (
    <div>
      <p>
        <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%252229ozt7qw8ex01a47y57ydif6djma6dk1r8ri0u13mel7lerb4u1%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D00c9ffdf-822d-4d47-a813-27a4ede516ed%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%252229ozt7qw8ex01a47y57ydif6djma6dk1r8ri0u13mel7lerb4u1%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0">
          Facebook으로 로그인
        </a>
      </p>
      <p>
        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </p>
    </div>
  );
}

function FirstBox(props) {
  return (
    <div className="container">
      <Sub></Sub>
      <Db></Db>
      <LogButton></LogButton>
      <Or></Or>
      <LogFace></LogFace>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FirstBox></FirstBox>
    </div>
  );
}

export default App;
