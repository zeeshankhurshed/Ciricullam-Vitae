import React from 'react'
import About from '../About/About'
import WhatIDo from '../WhatIDo/WhatIDo'
import { detail } from '../../db/db'
import {projects} from '../../db/db'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio'
import Faq from '../FAQ/FAQ'
import Client from '../Client/Client'


const Home = () => {
  return (
    <>
     <About/> 
     <WhatIDo detail={detail}/>
     <Resume/>
     <Portfolio projects={projects}/>
    <Faq/>
    <Client/>
    </>
  )
}

export default Home
