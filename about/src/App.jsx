import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { Navbar } from "./Navbar";
import { Feature } from "./Feature";
import { Howitworks } from "./Howitworks";
import { Courses } from "./Courses";
import { ServiceCategories } from "./ServiceCategories";
import { Blog } from "./Blog";
import { Footer } from "./Footer";

import { FeatureCities } from "./FeatureCities";
import { Terminals } from "./Terminals";
import { Course } from "./Course";
import { Login } from "./Login";
import { Register } from "./Register";
import { AddService } from "./AddService";
import { ServiceCard } from "./ServiceCard";
import { Service } from "./Service";
import { Messages } from "./Messages";
import { Msg } from "./Msg";
import { Orders } from "./Orders";
import Alert from "./Alert";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Alert />
         <Navbar />
         <Feature />
         <ServiceCategories />
         <Courses />
         <FeatureCities />
         <Terminals />
         <Howitworks />
         <Blog />
         <Footer />
         <Course />
         <Login />
         <Register />
         {/* <AddService /> */}
         <ServiceCard />
         {/* <Service /> */}
         <Messages />
         <Msg/>
         <Orders />
         {/* <BrowserRouter>
            <Routes>
               <Route path="/" element={<Navbar />} />
            </Routes>
         </BrowserRouter> */}
      </>
   );
}

export default App;
