import { CircleCheck, SquareArrowOutUpRight, X } from 'lucide-react';

import type { Service } from '@/types/Service';

interface Props {
  type: "web" | "mobile";
  services: Service[];
}

export default function ServicesCards({ type, services }: Props) {
  const activeTab = `
   inline-flex rounded-full bg-primary text-white px-3 py-2 text-sm cursor-pointer transition-all duration-400 ease-in-out border-primary border-[1px] mt-6 inline-block flex items-center justify-center gap-2 w-full hover:text-primary hover:bg-secondary-lighter dark:hover:bg-secondary-dark
`;

  return (
    <div className={`${type} w-full mx-auto my-4`}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {
          services.map((service) => (
            <div key={service.name} className="p-4 rounded-xl shadow-lg bg-secondary-lighter dark:bg-secondary-dark dark:shadow-primary/30 dark:shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="text-secondary-white text-2xl font-semibold">
                  {service.name}
                </h2>

                {service.isRecommended && (
                  <small className={`bg-secondary text-black dark:text-white px-4 py-[1px] rounded-full mx-1 font-regular text-center`}>Popular</small>
                )}
              </div>

              <div className="flex w-full items-end pt-4  border-b-[0.5px] border-secondary-white pb-4">
                <span className="text-primary p-0 m-0 opacity-70 inline-block">MWK</span>
                <h1 className='text-3xl font-bold inline-block'>{service.price}</h1>
              </div>

              <p className='text-sm'>{service.description}</p>
              {/* Features Included */}
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span>
                      <CircleCheck className='text-primary' size={20} strokeWidth={2} />
                    </span>
                    <p className='text-sm'>{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Features Not Included */}
              <ul>
                {service.featuresNotIncluded && service.featuresNotIncluded.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span>
                      <X className='text-[#ff0000]' size={20} strokeWidth={2} />
                    </span>
                    <p className='text-sm text-secondary-white opacity-100 dark:opacity-50'>{feature}</p>
                  </li>
                ))}
              </ul>

              {service.seeExampleLink && (
                <a href={service.seeExampleLink} target='_blank' className={activeTab}><span>See Example</span><SquareArrowOutUpRight size={16} /></a>
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}
