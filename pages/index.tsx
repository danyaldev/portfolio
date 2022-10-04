import type { NextPage } from 'next';
import Aboutme from '../components/aboutme';

import { useRef } from 'react';

import Projects from '../components/projects';
import Technologies from '../components/technologies';

const Home: NextPage = () => {
  const aboutMeRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);

  const scrollToAboutMe = () => aboutMeRef.current!.scrollIntoView();
  const scrollToProjects = () => projectsRef.current!.scrollIntoView();

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center h-[90vh] md:h-screen  text-center ">
          <h2 className="text-6xl md:text-8xl mb-10">Danyal Ali</h2>
          <h3 className="text-4xl">Front-End Web Developer</h3>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-16 px-4 my-8">
            <button
              onClick={scrollToAboutMe}
              className="px-4 py-1  rounded-sm border-solid border-2 hover:bg-slate-800 hover:text-slate-300 hover:scale-110 md:hover:-translate-y-1 transition-all duration-200 "
            >
              About Me
            </button>
            <button
              onClick={scrollToProjects}
              className="px-4 py-1  rounded-sm border-solid border-2 hover:bg-slate-800 hover:text-slate-300 hover:scale-110 md:hover:-translate-y-1  transition-all duration-200  hover:animate-none"
            >
              Projects
            </button>
            <a href=" mailto: danyalali0682@gmail.com">
              <button className="px-6 md:px-4 py-1  rounded-sm border-solid border-2 hover:bg-slate-800 hover:text-slate-300 hover:scale-110 md:hover:-translate-y-1  transition-all duration-200 ">
                Contact
              </button>
            </a>
          </div>
        </div>

        <div ref={aboutMeRef} className="h-[600px] mb-96 md:mb-48">
          <Aboutme scroll={scrollToProjects} />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>

      <Technologies />
    </>
  );
};

export default Home;
