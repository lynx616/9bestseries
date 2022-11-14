import React from "react";
import Card from "./Card";
import CardData from "./Data";

function KardShonkha(shonkha){
    return(
    <Card
    imgsrc={shonkha.imgsrc}
    title={shonkha.title}
    sname={shonkha.sname}
    link={shonkha.link}
   />
   );
}

function App(){
return(<>
    <h1 className="heading">Top Netflix Series</h1>
    
    {CardData.map(KardShonkha)}
    <p className="ending">Made With ❤️ By Rudra!</p>

 </>);
}
export default App;