import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { FAQS } from "@/components/cards/FAQS";
import type { Service } from "@/types/Service";
import ServicesCards from "@/components/cards/ServicesCards";

// Web Development Services List
const WebDevelopmentServicesList: Service[] = [
  {
    name: "Static Plan",
    price: "174,999",
    isRecommended: false,
    features: [
      "Single Landing Page",
      "with an option of 2 more separate pages",
      "Suitable for advertising",
      "Fast delivery of updates post deployment",
    ],
    featuresNotIncluded: ["No database", "No admin privileges", "No discounts"],
    type: "web",
    seeExampleLink: "https://nyalisclothing.netlify.app/"
  },
  {
    name: "Startup Plan",
    price: "379,999",
    isRecommended: true,
    features: [
      "Unlimited Pages",
      "Fast delivery of updates post deployment",
      "Simple database for content management is available",
      "Admin privileges",
      "Recommended for independent startups, writers, creatives, NGOs",
      "Discounts are considered",
    ],
    type: "web",
    seeExampleLink: "https://www.sababa-agri-foundation.com/"
  },
  // {
  //   name: "Media & eCommerce",
  //   price: "799,999",
  //   isRecommended: false,
  //   features: [
  //     "Unlimited pages",
  //     "Database",
  //     "Fast delivery of updates post deployment",
  //     "Admin privileges are available",
  //     "Discounts are considered",
  //   ],
  //   type: "web",
  // },
  // {
  //   name: "Corporate Plan",
  //   price: "1,499,999",
  //   isRecommended: false,
  //   features: [
  //     "System development and integration",
  //     "Fast delivery of updates post deployment",
  //     "Consultations post deployment",
  //     "Admin privileges are available",
  //   ],
  //   type: "web",
  // },
];

// Mobile Development Services List
const MobileDevelopmentServicesList: Service[] = [
  {
    name: "Simple Utility App",
    price: "499,999",
    isRecommended: false,
    features: [
      "Maximum of 15 Screens",
      "Database is available if needed",
      "Snappy and responsive",
    ],
    type: "mobile",
  },
  {
    name: "Brand App",
    price: "849,999",
    isRecommended: true,
    features: [
      "Unlimited Screens",
      "Database is available if needed",
      "Fast delivery of updates post deployment",
      "Recommended for independent startups, writers, creatives, NGOs",
      "Cross-platform app that runs on both Android and iOS",
    ],
    type: "mobile",
  },
];

export default function ServicesToggle() {
  const [toggle, setToggle] = useState(1);

  const activeTab = `
    rounded-full bg-primary px-3 py-1 text-sm cursor-pointer dark:text-white text-white transition-all duration-400 ease-in-out border-primary border-[1px]
`;

  const outlineTab = `
    rounded-full px-3 py-1 border-[1px] dark:border-white border-black text-sm cursor-pointer transition-all duration-400 ease-in-out
`;

  const toggleTab = (index: React.SetStateAction<number>) => setToggle(index);
  return (
    <>
      <ul className="z-10 flex flex-wrap items-center w-full gap-2 lg:gap-4 mb-10">
        <li
          className={toggle === 1 ? activeTab : outlineTab}
          onClick={() => toggleTab(1)}
        >
          Web Development
        </li>
        <li
          className={toggle === 2 ? activeTab : outlineTab}
          onClick={() => toggleTab(2)}
        >
          Mobile App Development
        </li>
        <li
          className={toggle === 3 ? activeTab : outlineTab}
          onClick={() => toggleTab(3)}
        >
          Frequently Asked Questions
        </li>
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
          {ServiceChoice(toggle)}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function ServiceChoice(toggle: number) {
  switch (toggle) {
    case 1:
      return (
        <div className="z-10">
          <h2 className="text-xl font-bold opacity-75">Web Development</h2>
          <ServicesCards type="web" services={WebDevelopmentServicesList} />
        </div>
      );
    case 2:
      return (
        <div>
          <h2 className="text-xl font-bold opacity-75">Mobile App Development</h2>
          <ServicesCards
            type="mobile"
            services={MobileDevelopmentServicesList}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <h2 className="text-xl font-bold opacity-75">Frequently Asked Questions</h2>
          <FAQS />
        </div>
      );
    default:
      return null;
  }
}
