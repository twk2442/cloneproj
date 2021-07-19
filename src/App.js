import "./App.css";

function main(props) {
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
