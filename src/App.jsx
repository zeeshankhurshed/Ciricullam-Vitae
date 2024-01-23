import {  createBrowserRouter,  createRoutesFromElements,  RouterProvider,Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import WhatIDo from './pages/WhatIDo/WhatIDo'
import Resume from './pages/Resume/Resume'
import Portfolio from './pages/Portfolio/Portfolio'
import FAQ from './pages/FAQ/FAQ'
import Client from './pages/Client/Client'
import Contact from './pages/Contact/Contact'
import ProCar from "./components/ProjectCarosuel/ProCar";
import { projects } from "./db/db";
import Detail from "./components/Detail/Detail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what" element={<WhatIDo />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/procar" element={<ProCar projects={projects} />} />
        <Route path="/detail/:id" element={<Detail projects={projects} />} />
        
      </Route>
    )
  );

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
