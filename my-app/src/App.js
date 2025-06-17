import logo from "./logo.svg";
import "./App.css";
import Car from "./Car";
import { Usecase } from "./Usecase";
import { Mytime } from "./Mytime";
import { MyProducts } from "./MyProducts";
import custom from "./custom.module.css";
import { MyProductCards } from "./MyproductCards";
import { UseEffect } from "./UseEffect";
import { Fetch } from "./Fetch";
import { FetchUsers } from "./FetchUsers";
import { FormHandle } from "./FormHandle";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Home";
import { SingleFetch } from "./SingleFetch";
import { Card } from "./Card";
function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/about" element={<h1>About!</h1>}></Route>
               <Route path="/blog" element={<h1>Blog!!</h1>}></Route>
               <Route path="/products" element={<Fetch />}></Route>
               <Route path="/product/:id" element={<SingleFetch />}></Route>
               <Route path="/users" element={<FetchUsers />}></Route>
            </Routes>
         </BrowserRouter>

         {/* <h1 className={custom.heading}> Welcome !!</h1>
         <Car />
         <Card/>
         <FormHandle />
         <Usecase />
         <Mytime />

         <MyProducts />

         <MyProductCards />

         <h3>UseEffect !</h3>
         <UseEffect />

         <h1 className={custom.heading}> Fetching APIs!!</h1>
         <Fetch />
         <h1 className={custom.heading}> Fetching Users APIs!!</h1>
         <FetchUsers /> */}
      </>
   );
}

export default App;
