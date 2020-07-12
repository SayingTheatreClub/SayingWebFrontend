import React from "react";
import Language from "./components/Language/language";
import Header from "./components/Header/header";
import MemberCard from "./components/MemberCard/memberCard";
function App() {
  return (
    <div className="App">
      <Language>
        <Header />
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {[1,2,3,4,5,6,7,8,9,10].map((item) => (
          <MemberCard
            name="新垣结衣"
            nickName="Gakki"
            description="一个一句话的简介或者表达的，从小册子里面找或者别的地方看看"
            title="演员"
          />
        ))}
        </div>
      </Language>
    </div>
  );
}

export default App;
