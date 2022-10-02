import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center ">
        <Project
          imgSrc={'/projectThumbnails/josmith.webp'}
          imgAlt={'link to josmith'}
          description={'Website was created for a college project'}
          githubLink={'https://github.com/danyaldev/JSPhotography'}
          websiteLink={'https://candid-pothos-2bc2d1.netlify.app/'}
          accentColor={'bg-cyan-600'}
        />
        <Project
          imgSrc={'/projectThumbnails/mysterymelody.webp'}
          imgAlt={'link to MysteryMelody'}
          description={
            'A platform for producers to share their melodies (BETA)'
          }
          githubLink={'https://github.com/danyaldev/MysteryMelody'}
          websiteLink={'https://mysterymelody.com'}
          accentColor={'bg-orange-400'}
        />

        <Project
          imgSrc={'/projectThumbnails/357.webp'}
          imgAlt={'link to 357'}
          description={
            'website was created in college for the teamworking module'
          }
          githubLink={'https://github.com/danyaldev/357ltd'}
          websiteLink={'https://creative-marzipan-3c6a67.netlify.app/'}
          accentColor={'bg-red-800'}
        />

        <Project
          imgSrc={'/projectThumbnails/danyalali.webp'}
          imgAlt={'link to danyalali.dev'}
          description={'website to show case my skills'}
          githubLink={'https://github.com/danyaldev/danyalali.dev'}
          websiteLink={'https://danyalali.dev'}
          accentColor={'bg-indigo-500'}
        />
      </div>
    </>
  );
}

// type for Project

interface ProjectProps {
  imgSrc: string;
  imgAlt: string;
  description: string;
  githubLink: string;
  websiteLink: string;
  accentColor: string;
}

export function Project({
  imgSrc,
  imgAlt,
  description,
  githubLink,
  websiteLink,
  accentColor,
}: ProjectProps) {
  return (
    <div className="project-card bg-slate-300 h-[400px] w-96 flex flex-col shadow-xl m-2 rounded-lg overflow-hidden  ">
      <div className=" w-96">
        <Image
          draggable={false}
          src={imgSrc}
          alt={imgAlt}
          width={500}
          height={290}
          layout={'responsive'}
        />
      </div>
      <div
        className={`${accentColor} h-[50%] bottom-0 w-96  flex flex-col justify-center items-center p-10 gap-5`}
      >
        <div className="text-center">
          <p>{description}</p>
        </div>
        <div className="flex gap-4">
          <a href={githubLink}>
            <FaGithub className="cursor-pointer" size={32} />
          </a>
          <a href={websiteLink}>
            <button className=" p-1 rounded-sm px-4 bg-emerald-500">
              Visit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
