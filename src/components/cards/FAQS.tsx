import React, { useState } from "react";
import Heading from "../typography/Heading.astro";
// import { motion } from "framer-motion";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questionsAndAnswers: Question[] = [
  {
    id: 1,
    question:
      "What is the difference between the Static Plan and the Startup Plan?",
    answer:
      "The Static Plan is suitable for advertising and has a limited number of pages, while the Startup Plan has unlimited pages and is recommended for most people such as independent startups, writers, creatives, and NGOs.",
  },
  {
    id: 2,
    question: "Do any of the plans include database management?",
    answer:
      "Yes, the Startup Plan, Media & eCommerce Plan, and Corporate Plan all include database management.",
  },
  {
    id: 3,
    question: "What is the recommended plan for most people?",
    answer:
      "The Startup Plan is recommended for most people such as independent startups, writers, creatives, and NGOs.",
  },
  {
    id: 4,
    question: "Do any of the plans include admin privileges?",
    answer:
      "Yes, the Startup Plan, Media & eCommerce Plan, and Corporate Plan all include some level of admin privileges.",
  },
  {
    id: 5,
    question: "What is the fastest way to get updates post deployment?",
    answer: "All plans include fast delivery of updates post deployment.",
  },
  {
    id: 6,
    question: "Are discounts available for any of the plans?",
    answer:
      "Yes, discounts are considered for the Startup Plan, Media & eCommerce Plan, and Corporate Plan.",
  },
  {
    id: 7,
    question:
      "What is the difference between the Media & eCommerce Plan and the Corporate Plan?",
    answer:
      "The Media & eCommerce Plan is suitable for media and eCommerce websites, while the Corporate Plan is suitable for system development and integration, and includes consultations post deployment.",
  },
  {
    id: 8,
    question: "How many pages are included in the Static Plan?",
    answer:
      "The Static Plan includes a single landing page with an option of 2 more separate pages.",
  },
];

export const FAQS = () => {
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});

  return (
    <div
      // initial="hidden"
      // animate="visible"
      // variants={{
      //   hidden: {
      //     scale: 1,
      //     y: 50,
      //     opacity: 0,
      //   },
      //   visible: {
      //     scale: 1,
      //     y: 0,
      //     opacity: 1,
      //   },
      // }}
    >
      <div className="questions-container">
        {questionsAndAnswers.map((question: Question) => (
          <div className="question-card transition-all duration-300 cursor-pointer" key={question.id}>
            <h4
              className={
                isOpen[question.id] ? "question question-open" : "question"
              }
              onClick={() =>
                setIsOpen((prevOpen) => ({
                  ...prevOpen,
                  [question.id]: !prevOpen[question.id],
                }))
              }
            >
              {question.question}{" "}
              {isOpen[question.id] ? <span>-</span> : <span>+</span>}
            </h4>
            {isOpen[question.id] ? (
              <p className="answer transition-all duration-300">{question.answer}</p>
            ) : (
              <p className="answer hidden transition-all duration-300">{question.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
