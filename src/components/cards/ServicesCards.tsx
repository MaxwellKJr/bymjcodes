import { Heading, Pill } from 'lucide-react';

import React from 'react'
import type { Service } from '../../types/Service';

interface Props {
  type: "web" | "mobile";
  services: Service[];
}

export default function ServicesCards({ type, services }: Props) {
  return (
    <div className={`${type} w-full mx-auto my-4 z-10`}>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {
      services.map((service) => (
        <div className="p-4 rounded-lg shadow-lg bg-secondary-lighter dark:bg-secondary-dark dark:shadow-primary/30 dark:shadow-md">
          <div className="flex items-center justify-between">
            {/* <Heading text={service.name} size="sm" /> */}
            <h2 className="text-primary">{service.name}</h2>
            {service.isRecommended && (
              <small className={`bg-primary text-white px-4 py-[1px] rounded-full mx-1 font-regular text-center`}>Recommended</small>
            )}
          </div>
          <div className="flex items-end">
            <span className="mb-2 opacity-70">MWK</span>{" "}
            <h3 className='py-1 text-3xl font-bold'>{service.price}</h3>
          </div>
          <p className='text-sm'>{service.description}</p>
          <ul>
            {service.features.map((feature) => (
              <li className="flex items-center">
                <span className="mr-2">→</span>
                <p className='text-sm'>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))
    }
  </div>
</div>
  )
}
