/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Experience from './Experience';
import Projects from './Projects';

const sections = ['Start', 'Experience', 'Projects'];

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <motion.div className='home'>
      <h1>Christopher Guillermo</h1>
      <h3>I'm a full stack developer</h3>
      <p>I have 3+ years experience building websites with React</p>
    </motion.div>
    <Experience />
    <Projects />
    </>
  )
}

export default Home;
