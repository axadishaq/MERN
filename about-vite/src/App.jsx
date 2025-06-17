import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Home";
import { MainHome } from "./MainHome";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { SuccessStories } from "./SuccessStories";
import { Pricing } from "./Pricing";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<MainHome />}>
                  <Route index element={<Home />}></Route>
                  <Route path="/features" element={<Features />}></Route>
                  <Route path="/howitworks" element={<HowItWorks />}></Route>
                  <Route
                     path="/successstories"
                     element={<SuccessStories />}></Route>
                  <Route path="/pricing" element={<Pricing />}></Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
