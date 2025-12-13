import { CircleCheck, SquareArrowOutUpRight, X } from "lucide-react";

import type { Service } from "@/types/Service";

interface Props {
  type: "web" | "mobile";
  services: Service[];
}

export default function ServicesCards({ type, services }: Props) {
  const activeTab = `
   inline-flex rounded-full bg-primary text-white px-3 py-2 text-sm cursor-pointer transition-all duration-400 ease-in-out border-primary border mt-6 inline-block flex items-center justify-center gap-2 w-full hover:text-primary hover:bg-secondary-lighter dark:hover:bg-secondary-dark
`;

  return (
    <div className={`${type} mx-auto my-4 w-full`}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service: Service) => (
          <div
            key={service.name}
            className="bg-secondary-lighter dark:bg-secondary-dark dark:shadow-primary/30 rounded-xl p-4 shadow-lg dark:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-secondary-white text-2xl font-semibold">
                {service.name}
              </h2>

              {service.isRecommended && (
                <small className="bg-secondary font-regular mx-1 rounded-full px-4 py-px text-center text-black dark:text-white">
                  Popular
                </small>
              )}
            </div>

            <div className="border-secondary-white flex w-full items-end border-b-[0.5px] pt-4 pb-4">
              <span className="text-primary m-0 inline-block p-0 opacity-70">
                MWK
              </span>
              <h1 className="inline-block text-3xl font-bold">
                {service.price}
              </h1>
            </div>

            <p className="text-sm">{service.description}</p>
            {/* Features Included */}
            <ul>
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <span>
                    <CircleCheck
                      className="text-primary"
                      size={20}
                      strokeWidth={2}
                    />
                  </span>
                  <p className="text-sm">{feature}</p>
                </li>
              ))}
            </ul>

            {/* Features Not Included */}
            <ul>
              {service.featuresNotIncluded?.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <span>
                    <X className="text-[#ff0000]" size={20} strokeWidth={2} />
                  </span>
                  <p className="text-secondary-white text-sm opacity-100 dark:opacity-50">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            {service.seeExampleLink && (
              <a
                href={service.seeExampleLink}
                target="_blank"
                rel="noreferrer"
                className={activeTab}
              >
                <span>See Example</span>
                <SquareArrowOutUpRight size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
