import React from "react";
import Language from "./components/Language/language";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MemberCard from "./components/Cards/memberCard";
import PlayCard from "./components/Cards/playCard";
// import Carousel from './components/Carousel/carousel';
import IMG from "./components/PlayCard/NT4A8400.jpg";
import Home from './pages/Home/home';
import MemberPage from './pages/Member/member';

import Carousel from './components/Carousel/carousel';
const profile = {
  name: "新垣结衣",
  nickName: "Gakki",
  description: "住手,请不要为我而厮杀",
  title: "演员",
};
function App() {
  return (
    <MemberPage/>
    // <div className="App">
    //   <Language>
    //     <Header />
        
    //     <Carousel/>
    //     <div style={{ display: "flex", flexWrap: "wrap" }}>
    //       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
    //         <MemberCard
    //           name={profile.name}
    //           nickName={profile.nickName}
    //           description={profile.description}
    //           title={profile.title}
    //         />
    //       ))}
    //     </div>
    //     <br />
    //     <br />
    //     <div className="displaybox">
    //       <PlayCard
    //         name="红玫瑰与白玫瑰"
    //         description="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很"
    //         belonging="2020 秋季大戏"
    //       />
    //       <img src={IMG} alt="" style={{ width: "413px", height: "262px" }} />
    //     </div>
    //     <br />
    //     <br />
    //     <PlayCard name="「驴得水」" year="2019" type="img-text" imgUrl={IMG} />
    //     <br />
    //     <br />
    //   </Language>
    // </div>
  );
}

export default App;
