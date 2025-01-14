import { AnimatePresence, motion } from 'framer-motion';

import React from 'react'
import { useState } from 'react';

export default function AboutSectionsToggler() {
  const [toggle, setToggle] = useState(1)

  const activeTab = `
    rounded-full bg-primary px-3 py-1 text-sm cursor-pointer dark:text-white text-white transition-all duration-300 ease-in-out border-primary border-[1px]
  `;

  const outlineTab = `
    rounded-full px-3 py-1 border-[1px] dark:border-white border-black text-sm cursor-pointer transition-all duration-300 ease-in-out
  `;

  const toggleTab = (index: React.SetStateAction<number>) => setToggle(index);
  
  return (
    <>
      <ul className="z-10 flex flex-wrap items-center justify-center lg:justify-normal w-full gap-2 lg:gap-4 my-4">
        <li
          className={toggle === 1 ? activeTab : outlineTab}
          onClick={() => toggleTab(1)}
        >
          Bio
        </li>
        {/* <li
          className={toggle === 2 ? activeTab : outlineTab}
          onClick={() => toggleTab(2)}
        >
          Work Experience
        </li>
        <li
          className={toggle === 3 ? activeTab : outlineTab}
          onClick={() => toggleTab(3)}
        >
          Education Background
        </li> */}
      </ul>
      <AnimatePresence mode="wait">
        <motion.div
          key={toggle}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              y: 50,
              opacity: 0,
            },
            visible: {
              scale: 1,
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
              }
            }
          }}
        >
          {AboutChoice(toggle)}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

function AboutChoice(toggle: number) {
  switch (toggle) {
    case 1:
      return (
        <div
          className="flex flex-col text-sm text-black dark:text-secondary-white-lighter"
        >
          <p>
            My name is Maxwell Kapezi Jr, a Software Developer with over 2
            years of professional experience, I specialize in mobile app
            development using{" "}
            <a
              href="https://www.swift.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined-link"
            >
              Swift
            </a>{", "}
            <a
              href="http://kotlinlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined-link"
            >
              Kotlin
            </a>{", "}
            and {" "}
            <a
              href="http://flutter.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined-link"
            >
              Flutter
            </a>{"."}
          </p>
          <p>
            My journey in software development began in 2017, driven by a
            passion for creating my own video games—though that dream died
            quickly lol. If you want to know the whole story, read this post:{
              " "
            }
            <a href="/blog/hello-world" className="underlined-link">Hello World</a
            >.
          </p>
          <p>
            Whether it’s developing robust mobile applications or creating
            dynamic web experiences, I am motivated by the impact that
            well-crafted technology can have. My approach is guided by three
            core principles:
          </p>
          <p>
            Building Things that Work, A Welcoming User Experience, and
            Appealing/Attractive Design.
          </p>
          {/* <p>
              <a href="/blog/software-that-works" className="underlined-link">
                Building Things that Work
              </a>,
              <a
                href="/blog/a-welcoming-user-experience"
                className="underlined-link"
              >
                A Welcoming User Experience
              </a>{", "}
              and
              <span className="underlined-link">
                Appealing/Attractive Design
              </span>{". "}
            </p> */}
          <p>
            Apart from coding I also enjoy writing fiction, short stories to
            be specific &amp; playing <em>&ldquo;difficult&rdquo;</em> video games.
            I mean why not?
          </p>
        </div>
    )
  }
}