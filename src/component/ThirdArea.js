import React from "react";

function ThirdArea(props) {
  return (
    <div>
      <p>앱을 다운로드하세요.</p>
      <ThirdAppdDown></ThirdAppdDown>
    </div>
  );
}

function ThirdAppdDown(props) {
  function click() {
    Location.href = "https://apps.apple.com/app/instagram/id389801252?vt=lo";
  }
  return (
    <div>
      <button
        onClick={function (e) {
          e.preventDefault();
        }.bind(this)}
      >
        App Store에서 다운로드하기
      </button>
    </div>
  );
}

export default ThirdArea;
