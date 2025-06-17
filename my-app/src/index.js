import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// understading

// import img1 from './image.jpg'
// const Myelements = ()=>{
//   let name = "Riffti"
//   let todaydate = new Date().toLocaleDateString()
//   let nowtime = new Date().toLocaleTimeString()
//   let myimage = "https://lumi.34634094.56345632"
// // inner CSS
// const mystyle = {
//   color: "green",
//   textAlign: "center"
// }

//   return(
//     <>
// <fieldset>
//   <legend>Welcome!</legend>
//     <h1 style = {{color:"orange",textAlign:"center"}}>{name} on Top 👧🏻👀❗🐱‍💻</h1>
//     <p style={mystyle}>Date : {todaydate}</p>
//     <p className="paragraph">Time : {nowtime}</p>

// {/* display flex on images  */}
//     <div class="flex">
//     <img src={img1}></img>
//     <img src={myimage}></img>
//     <img src="/image.jpg"></img>
//     <img src="/image.jpg"></img>
//     <img src="/image.jpg"></img>
//     </div>
// </fieldset>
//     </>
//   )

// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      {/* <Myelements/> */}
      <App />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
