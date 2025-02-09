import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import type { SchoolBackground } from '@/types/SchoolBackground';
import type { WorkExperience } from '@/types/WorkExperince';

const workExperiences: WorkExperience[] = [
  {
    title: "Junior Applications Developer",
    company: "Global Health Informatics Institute",
    location: "Lilongwe, Malawi",
    startDate: "Feb 2024",
    endDate: "Present",
    responsibilities: [
      "Developing and testing hybrid mobile applications for Android and iOS devices with the Flutter Framework",
      "Developing and testing native Android apps with Kotlin, and iOS/iPad apps with Swift",
      "Developing and testing web apps with Next.js",
      "Writing clean, efficient, and well-documented code in Dart, Kotlin, Swift, and TypeScript",
      "Refactoring existing codebases to improve specific components or overall app performance",
      "Testing, troubleshooting and debugging issues that may arise (Who am I kidding, that always arise)",
      "Participating in code reviews and contributing to the improvement of the codebase"
    ]
  },
  {
    title: "Junior Software Developer (Intern)",
    company: "Inscriptions MW",
    location: "Zomba, Malawi | Remote",
    startDate: "Apr 2022",
    endDate: "Feb 2024",
  },
  {
    title: "Mathematics and Computer Studies Teacher",
    company: "Mkwichi Secondary School",
    location: "Lilongwe, Malawi",
    startDate: "Sept 2023",
    endDate: "Dec 2023",
  }
];

const schoolBackgrounds: SchoolBackground[] = [
  {
    degree: "Bachelor of Education (Computer Science)",
    schoolName: "University of Malawi",
    location: "Zomba, Malawi",
    startDate: "Aug 2018",
    endDate: "Dec 2024",
  }
];

const activeTab = `rounded-full bg-primary px-3 py-1 text-sm cursor-pointer dark:text-white text-white transition-all duration-300 ease-in-out border-primary border-[1px]`;

const outlineTab = `rounded-full px-3 py-1 border-[1px] dark:border-white border-black text-sm cursor-pointer transition-all duration-300 ease-in-out`;

export default function AboutSectionsToggler() {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: React.SetStateAction<number>) => setToggle(index);
  
  return (
    <>
      <ul className="z-10 flex flex-wrap items-center justify-center lg:justify-normal w-full gap-2 lg:gap-4 my-4">
        <li className={toggle === 1 ? activeTab : outlineTab} onClick={() => toggleTab(1)}>Bio</li>
        <li className={toggle === 2 ? activeTab : outlineTab} onClick={() => toggleTab(2)}>Work Experience</li>
        <li className={toggle === 3 ? activeTab : outlineTab} onClick={() => toggleTab(3)}>Education Background</li>
      </ul>
      <AnimatePresence mode="wait">
        <motion.div
          key={toggle}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 1, y: 50, opacity: 0 },
            visible: {
              scale: 1,
              y: 0,
              opacity: 1,
              transition: { duration: 0.3 }
            }
          }}
          className="py-2"
        >
          {AboutChoice(toggle)}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

// Helper Components
const BioSection = () => (
  <div className="flex flex-col text-sm text-black dark:text-secondary-white-lighter text-center lg:text-left">
    <p>
      My name is Maxwell Kapezi Jr, a Software Developer with over 2 years of professional experience, 
      I specialize in mobile app development using{" "}
      <a href="https://www.swift.org/" target="_blank" rel="noopener noreferrer" className="underlined-link">Swift</a>{", "}
      <a href="http://kotlinlang.org" target="_blank" rel="noopener noreferrer" className="underlined-link">Kotlin</a>{", "}
      and {" "}
      <a href="http://flutter.dev" target="_blank" rel="noopener noreferrer" className="underlined-link">Flutter</a>.
    </p>

    <p>
      My journey in software development began in 2017, driven by a passion for creating my own video games—though that dream died quickly lol. If you want to know the whole story, read my post, "<a href="/blog/hello-world" className="underlined-link">Hello, World</a>".
    </p>

    <p>
      Whether it’s developing robust mobile applications or creating dynamic web experiences, I am motivated by the impact that well-crafted technology can have. My approach is guided by three core principles:
    </p>

    <p>
      Building Things that Work, A Welcoming User Experience, and Appealing/Attractive Design.
    </p>

    <p>
      Apart from coding I also enjoy writing fiction, short stories to be specific & playing “difficult” video games. I mean why not?
    </p>
  </div>
);

const WorkExperienceCard = ({ title, company, location, startDate, endDate, description }: WorkExperience) => (
  <div className="text-left bg-card-light dark:bg-card-dark mb-6 pb-4 shadow-lg rounded-lg">
    <h2 className="border-l-4 p-4 border-primary text-lg font-medium">{title}</h2>
    <div className="px-4 opacity-50">
      <h2 className="text-md">@ {company}</h2>
      <small>{startDate} - {endDate}</small> · <small>{location}</small>
      {description && <p>{description}</p>}
    </div>
  </div>
);

const SchoolBackgroundCard = ({ degree, schoolName, location, startDate, endDate }: SchoolBackground) => (
  <div className="text-left bg-card-light dark:bg-card-dark mb-6 pb-4 shadow-lg rounded-lg">
    <h2 className="border-l-4 p-4 border-primary text-lg font-medium">{degree}</h2>
    <div className="px-4 opacity-50">
      <h2 className="text-md">@ {schoolName}</h2>
      <small>{startDate} - {endDate}</small> · <small>{location}</small>
    </div>
  </div>
);

function AboutChoice(toggle: number) {
  switch (toggle) {
    case 1:
      return <BioSection />;
    case 2:
      return workExperiences.map((exp) => <WorkExperienceCard key={exp.title} {...exp} />);
    case 3:
      return schoolBackgrounds.map((bg) => <SchoolBackgroundCard key={bg.degree} {...bg} />);
    default:
      return null;
  }
}
