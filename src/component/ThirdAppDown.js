import React from "react";

function ThirdAppdDown(props) {
  function handleClick(e) {
    //pros 이용해서 주소 props로 주는 함수 만들고 싶음
    window.location.href =
      "https://apps.apple.com/app/instagram/id389801252?vt=lo";
  }
  return (
    <div>
      <button onClick={handleClick}>App Store에서 다운로드하기</button>
      <button
        onClick={() => {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=06C0BE75-0842-4B50-B6B1-19328334F433&utm_content=lo&utm_medium=badge";
        }}
      >
        다운로드하기 google play
      </button>
    </div>
  );
}

export default ThirdAppdDown;
