import "./App.css";

function main(props) {
  // prototype 일단 css 없이 기본 코드 다 짜서 만든후 마지막에 css 코드작성
  return (
    <div className="container">
      <h1>Instagram</h1>
      <input
        type="text"
        value="전화번호,사용자 이름 또는 이메일"
        name="id"
      ></input>
      <input type="text" value="비밀번호" name="pw"></input>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <main></main>
    </div>
  );
}

export default App;
