import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questionsAndAnswers: Question[] = [
  {
    "id": 11,
    "question": "Do your development plans include UI/UX design?",
    "answer": "Yes, all our development plans include UI/UX design services. Our team ensures that the app is visually appealing, user-friendly, and optimized for different screen sizes and devices."
  },
  {
    "id": 21,
    "question": "Do you provide web hosting services?",
    "answer": "Yes, we offer web hosting services as part of our plans or as an add-on. Add-on payments are handled by the client."
  },
  {
    "id": 22,
    "question": "Can you help me purchase a domain name?",
    "answer": "Yes, we can assist you with domain name registration by recommending reputable providers and ensuring the domain aligns with your branding. The domain purchase cost is handled directly by the client."
  },
  {
    "id": 23,
    "question": "Are app store submission fees included in your plans?",
    "answer": "No, app store submission fees are not included in our plans. Clients are responsible for paying any required fees, such as the Apple Developer Program fee ($99/year) or the Google Play Developer fee ($25 one-time)."
  },
  {
    "id": 24,
    "question": "Who is responsible for additional costs like hosting or third-party services?",
    "answer": "Clients are responsible for all additional costs, including web hosting, domain registration, app store fees, and any third-party services integrated into the project. We ensure transparency and provide guidance on these expenses."
  },
  {
    "id": 25,
    "question": "Can I use my own hosting provider and domain name?",
    "answer": "Yes, you can use your own hosting provider and domain name. We will work with your chosen provider to deploy your website or app seamlessly."
  },
  {
    "id": 26,
    "question": "Do you manage web hosting for clients after launch?",
    "answer": "Yes, we offer managed hosting services as an optional add-on. This includes server monitoring, backups, and security updates to keep your website running smoothly."
  },
  {
    "id": 27,
    "question": "Are there any ongoing costs after the project is delivered?",
    "answer": "Yes, ongoing costs may include hosting fees, domain renewals, app store subscriptions, or maintenance services. These are separate from the development cost and are handled directly by the client."
  },
  {
    "id": 28,
    "question": "What happens if my hosting provider has an issue post-launch?",
    "answer": "If you face issues with your hosting provider, we can assist with troubleshooting and provide support. However, resolving provider-specific issues or migrating to a new host may incur additional charges."
  },
  {
    "id": 29,
    "question": "Are SSL certificates included in the hosting plans?",
    "answer": "We recommend SSL certificates for all websites, and they are included with some hosting providers. If not included, the client will need to purchase the certificate separately. We can assist with installation and configuration."
  },
  {
    "id": 30,
    "question": "Can you help me estimate app store costs and subscription fees?",
    "answer": "Yes, we can provide an estimate of app store costs, including submission fees, subscription fees, and potential in-app purchase commission percentages. This ensures you can budget effectively for your app’s lifecycle."
  },
  {
    "id": 31,
    "question": "How do you handle third-party service costs during development?",
    "answer": "If your project requires third-party services, such as API subscriptions or payment gateway fees, we will notify you in advance. These costs are billed directly to the client and are not included in our development fees."
  },
  {
    "id": 1,
    "question": "What is the difference between the Static Plan and the Startup Plan?",
    "answer": "The Static Plan is designed for individuals or small businesses primarily focused on advertising and online presence. It includes a limited number of pages, making it ideal for showcasing essential information or services without additional complexity. In contrast, the Startup Plan caters to independent startups, writers, creatives, and NGOs, offering unlimited pages to accommodate more comprehensive content and features. The Startup Plan is suitable for those needing greater flexibility, scalability, and functionality."
  },
  {
    "id": 2,
    "question": "Do any of the plans include database management?",
    "answer": "Yes, the Startup Plan, Media & eCommerce Plan, and Corporate Plan all include database management, enabling users to store, organize, and retrieve data effectively. This feature is essential for applications requiring dynamic content, user interaction, or complex data handling, such as eCommerce platforms, user account systems, or analytics dashboards."
  },
  {
    "id": 3,
    "question": "What is the recommended plan for most people?",
    "answer": "The Startup Plan is recommended for most individuals and organizations, such as independent startups, writers, creatives, and NGOs. It strikes a balance between affordability and functionality, providing unlimited pages and features that cater to diverse needs. Its versatility makes it a popular choice for users seeking a robust yet accessible solution."
  },
  {
    "id": 4,
    "question": "Do any of the plans include admin privileges?",
    "answer": "Yes, the Startup Plan, Media & eCommerce Plan, and Corporate Plan all include some level of admin privileges. These privileges allow users to manage their website or application, control access, and make updates. The level of control varies by plan, with higher-tier plans offering more advanced administrative tools for managing complex systems."
  },
  {
    "id": 5,
    "question": "What is the fastest way to get updates post deployment?",
    "answer": "All plans include fast delivery of updates post deployment to ensure that users can quickly implement changes or resolve issues. This feature minimizes downtime and maintains the performance and security of the website or application, allowing businesses to stay responsive to evolving needs."
  },
  {
    "id": 6,
    "question": "Are discounts available for any of the plans?",
    "answer": "Yes, discounts are available for the Startup Plan, Media & eCommerce Plan, and Corporate Plan. These discounts may vary based on promotional offers, long-term subscriptions, or specific user eligibility, such as startups or non-profit organizations, making the plans more accessible for a wider audience."
  },
  {
    "id": 7,
    "question": "What is the difference between the Media & eCommerce Plan and the Corporate Plan?",
    "answer": "The Media & eCommerce Plan is tailored for websites that focus on media content or online selling, offering tools and integrations specific to those needs, such as content management systems and payment gateways. On the other hand, the Corporate Plan is designed for larger organizations or businesses requiring system development and integration. It includes post-deployment consultations, ensuring seamless implementation of complex solutions and ongoing support for scaling operations."
  },
  {
    "id": 8,
    "question": "How many pages are included in the Static Plan?",
    "answer": "The Static Plan includes a single landing page, ideal for presenting essential information in a clean and concise manner. Additionally, users have the option to include up to two more separate pages, which can be used for detailed descriptions, contact information, or other focused content, providing a simple yet effective web presence."
  },
  {
    "id": 9,
    "question": "Do you offer cross-platform mobile development?",
    "answer": "Yes, we offer cross-platform mobile development using frameworks like Flutter and React Native. This approach allows for a single codebase that works seamlessly on both iOS and Android, reducing development time and costs while maintaining performance and user experience."
  },
  // {
  //   "id": 10,
  //   "question": "Can I integrate my app with third-party APIs?",
  //   "answer": "Absolutely. We support integration with third-party APIs for features such as payment gateways, social media sharing, geolocation, and more. These integrations enhance the app's functionality and user engagement."
  // },
  {
    "id": 12,
    "question": "What is the average development time for a mobile app?",
    "answer": "The development time for a mobile app depends on its complexity and feature set. Basic apps can take 4-6 weeks, while more complex apps with advanced features may take 3-6 months. We provide detailed timelines during the planning phase."
  },
  {
    "id": 13,
    "question": "Do you offer app maintenance and updates post-launch?",
    "answer": "Yes, we offer app maintenance and update services post-launch to ensure your app remains functional, secure, and compatible with the latest operating system updates and devices."
  },
  {
    "id": 14,
    "question": "What kind of testing do you perform on mobile apps?",
    "answer": "We conduct rigorous testing, including functionality, performance, usability, and security testing, to ensure your app delivers a seamless experience to users. Our QA team tests the app on various devices and operating systems."
  },
  {
    "id": 15,
    "question": "Can you help with app store submissions?",
    "answer": "Yes, we assist with app store submissions, including preparing necessary assets, ensuring compliance with guidelines, and addressing any review feedback to get your app published on the App Store and Google Play Store."
  },
  {
    "id": 19,
    "question": "Do you support offline functionality in mobile apps?",
    "answer": "Yes, we can implement offline functionality in your app by leveraging local databases or caching techniques. This ensures a seamless user experience even when the user has limited or no internet connectivity."
  },
  {
    "id": 20,
    "question": "Can you integrate analytics tools into my mobile app?",
    "answer": "Yes, we can integrate analytics tools like Google Analytics, Firebase, or custom solutions to help you track user behavior, app performance, and other key metrics."
  }
];

export const FAQS = () => {
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});

  return (
    <div>
      <div className="questions-container">
        {questionsAndAnswers.map((question: Question) => (
          <div className="transition-all duration-400 cursor-pointer question-card" key={question.id}>
            <h5
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
              <ChevronDown className={`transition-all duration-400 ease-in-out ${isOpen[question.id] ? `rotate-180` : `rotate-0`}`} />
            </h5>
            <p className={isOpen[question.id] ? "answer-shown" : "answer-hidden"}>
              {question.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
