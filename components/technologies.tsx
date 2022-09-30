import React from 'react';
import Marquee from 'react-fast-marquee';

import {
  SiTypescript,
  SiCss3,
  SiReact,
  SiJavascript,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiJquery,
  SiSass,
  SiHtml5,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
  SiAdobeillustrator,
  SiAbletonlive,
} from 'react-icons/si';

function Technologies() {
  const [iconTooltip, setIconTooltip] = React.useState(false);
  const [hoveredIcon, setHoveredIcon] = React.useState('Technologies');

  // technologies type

  interface Technologies {
    id: number;
    name: string;
    icon: JSX.Element;
  }

  const technologies: Technologies[] = [
    { id: 0, icon: <SiTypescript fill="#007acc" />, name: 'Typescript' },
    { id: 1, icon: <SiCss3 fill="#264de4" />, name: 'CSS' },
    { id: 2, icon: <SiReact fill="#00D1F7" />, name: 'React' },
    { id: 3, icon: <SiJavascript fill="#EDD719" />, name: 'Javascript' },
    { id: 4, icon: <SiPostgresql fill="#32648C" />, name: 'PostgreSQL' },
    { id: 5, icon: <SiPrisma fill="#0C3147" />, name: 'Prisma' },
    { id: 6, icon: <SiTailwindcss fill="#38BDF8" />, name: 'Tailwind' },
    { id: 7, icon: <SiJquery fill="#1067A9" />, name: 'Jquery' },
    { id: 8, icon: <SiSass fill="#C66394" />, name: 'Sass' },
    { id: 9, icon: <SiHtml5 fill="#DD4A24" />, name: 'HTML' },
    { id: 10, icon: <SiAdobephotoshop fill="#309FF2" />, name: 'Photoshop' },
    { id: 11, icon: <SiAdobexd fill="#F75EEE" />, name: 'Adobe XD' },
    { id: 12, icon: <SiFigma fill="#06C57C" />, name: 'Figma' },
    {
      id: 13,
      icon: <SiAdobeillustrator fill="#F39304" />,
      name: 'Illustrator',
    },
    { id: 14, icon: <SiAbletonlive fill="#6D7172" />, name: 'Ableton' },
  ];

  return (
    <>
      <div className="h-12">
        <div className="flex justify-center  py-10 ">
        <h2 className="text-center bg-gray-900 text-3xl py-4 px-4 text-emerald-500 font-bold rounded-xl overflow-hidden  ">
          {hoveredIcon}
        </h2>

        </div>
        <Marquee
          className="bg-slate-900 overflow-hidden  absolute bottom-0"
          speed={150}
          gradientColor={[15, 23, 42]}
          gradient={true}
          pauseOnHover={true}
        >
          <div className="flex justify-center py-4 gap-8 ml-4">
            {technologies.map((tech) => (
              <div
                onMouseEnter={() => {
                  setHoveredIcon(tech.name);
                }}
                onMouseLeave={() => {
                  setHoveredIcon('Technologies');
                }}
                key={tech.id}
                className="text-4xl flex"
              >
                <div>{tech.icon}</div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Technologies;
