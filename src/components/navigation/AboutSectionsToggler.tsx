import { AnimatePresence, motion } from "framer-motion";

import type { SchoolBackground } from "@/types/SchoolBackground";
import type { WorkExperience } from "@/types/WorkExperince";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const workExperiences: WorkExperience[] = [
  {
    title: "Applications Developer",
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
    endDate: "Feb 2024"
  },
  {
    title: "Mathematics and Computer Studies Teacher",
    company: "Mkwichi Secondary School",
    location: "Lilongwe, Malawi",
    startDate: "Sept 2023",
    endDate: "Dec 2023"
  }
];

const schoolBackgrounds: SchoolBackground[] = [
  {
    degree: "Bachelor of Education (Computer Science)",
    schoolName: "University of Malawi",
    location: "Zomba, Malawi",
    startDate: "Aug 2018",
    endDate: "Dec 2024"
  }
];

const activeTab =
  "rounded-full bg-primary px-3 py-1 text-sm cursor-pointer dark:text-white text-white transition-all duration-400 ease-in-out border-primary border";

const outlineTab =
  "rounded-full px-3 py-1 border dark:border-white border-black text-sm cursor-pointer transition-all duration-400 ease-in-out hover:scale-90";

const outlineTabForMySkills =
  "rounded-full px-3 py-1 border dark:border-white border-black text-sm cursor-pointer transition-all duration-400 ease-in-out hover:scale-90 hover:text-primary hover:border-primary";

export default function AboutSectionsToggler() {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: React.SetStateAction<number>) => setToggle(index);

  return (
    <>
      <ul className="z-10 my-4 flex w-full flex-wrap items-center justify-center gap-2 xl:justify-normal xl:gap-4">
        <li
          className={toggle === 1 ? activeTab : outlineTab}
          onClick={() => toggleTab(1)}
          onKeyDown={() => toggleTab(1)}
        >
          General
        </li>
        <li
          className={toggle === 2 ? activeTab : outlineTab}
          onClick={() => toggleTab(2)}
          onKeyDown={() => toggleTab(2)}
        >
          Work Experience
        </li>
        <li
          className={toggle === 3 ? activeTab : outlineTab}
          onClick={() => toggleTab(3)}
          onKeyDown={() => toggleTab(3)}
        >
          Education
        </li>
        <li className={outlineTabForMySkills}>
          <a href="/about/my-skills">My Skills</a>
        </li>
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
  <div className="dark:text-secondary-white-lighter flex flex-col text-center text-sm text-black xl:text-left 2xl:text-lg">
    <p>
      My name is Maxwell Kapezi Jr, a Software Developer from the Warm Heart of Africa, Malawi 🇲🇼.
    </p>

    <p>
      With over 2 years of professional experience, I'm currently focused on iOS development, specializing in building robust native apps using {" "}
      <a
        href="https://www.swift.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="underlined-link"
      >
        Swift <ExternalLink className="inline-block w-4 h-4 mb-1" />
      </a>, along with cross-platform mobile experiences using {" "}
      <a
        href="http://flutter.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="underlined-link"
      >
        Flutter <ExternalLink className="inline-block w-4 h-4 mb-1" />
      </a> when needed.
    </p>

    <p>
      My journey in software development began in 2017, driven by a passion for
      creating my own video games—though that dream died quickly lol. If you
      want to know the whole story, read my post, "
      <a href="/blog/hello-world" className="underlined-link">
        Hello, World
      </a>
      ".
    </p>

    <p>
      Whether it’s crafting high-quality iOS applications or dynamic cross-platform solutions, {" "}
      I am motivated by the impact that well-crafted technology can have. My approach is guided by three core principles: <strong>Building Things that Work</strong>, <strong>A Welcoming User Experience</strong>, and <strong>Appealing/Attractive Design</strong>.
    </p>

    <p>
      Apart from coding I also enjoy writing fiction, short stories to be
      specific & playing “difficult” video games. I mean why not?
    </p>
  </div>
);

const WorkExperienceCard: React.FC<WorkExperience> = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description
}: WorkExperience) => (
  <div className="bg-card-light dark:bg-card-dark mb-6 rounded-lg pb-4 text-left shadow-sm">
    <h2 className="border-primary border-l-4 px-4 py-2 text-lg font-medium">
      {title}
    </h2>
    <div className="px-4 opacity-50">
      <div className="border-secondary-white border-t-[0.5px] pt-2">
        <h2 className="text-md">@ {company}</h2>
        <small>
          {startDate} - {endDate}
        </small>{" "}
        · <small>{location}</small>
        {description && <p>{description}</p>}
      </div>
    </div>
  </div>
);

const SchoolBackgroundCard: React.FC<SchoolBackground> = ({
  degree,
  schoolName,
  location,
  startDate,
  endDate
}: SchoolBackground) => (
  <div className="bg-card-light dark:bg-card-dark mb-6 rounded-lg pb-4 text-left shadow-sm">
    <h2 className="border-primary border-l-4 px-4 py-2 text-lg font-medium">
      {degree}
    </h2>
    <div className="px-4 opacity-50">
      <div className="border-secondary-white border-t-[0.5px] pt-2">
        <h2 className="text-md">@ {schoolName}</h2>
        <small>
          {startDate} - {endDate}
        </small>{" "}
        · <small>{location}</small>
      </div>
    </div>
  </div>
);

function AboutChoice(toggle: number) {
  switch (toggle) {
    case 1:
      return <BioSection />;
    case 2:
      return workExperiences.map((exp) => (
        <WorkExperienceCard key={exp.title} {...exp} />
      ));
    case 3:
      return schoolBackgrounds.map((bg) => (
        <SchoolBackgroundCard key={bg.degree} {...bg} />
      ));
    default:
      return null;
  }
}
