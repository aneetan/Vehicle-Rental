import React, { useState } from 'react'
import CustomAccordion from './CustomAccordion';

const FAQs = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id:string) : void => {
        setOpenAccordion(openAccordion === id? null : id);
    };
  return (
    <section className="bg-gray-100 px-12">
        <div className="container px-6 pt-20 pb-24 lg:pb-24 lg:py-18 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center mb-12 mx-12">
                <h2 className=" relative text-3xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions
                    <hr className="w-[30%] bg-[var(--primary-color)] absolute left-1/2 py-0.5 border-none -translate-x-1/2 bottom-[-8px] mx-auto" />
                </h2>
            </div>

            {/* ---------- Accordion ---------- */}
            <CustomAccordion
                id="1"
                title="What are the requirements to rent a vehicle?"
                content="To rent a vehicle, you must be at least 21 years old (25 for premium vehicles), possess a valid driver's license, and have a major credit card in your name. International renters will need a passport and may require an International Driving Permit."
            />
            
            <CustomAccordion
                id="2"
                title="What is included in the rental price?"
                content="Our rental price includes unlimited mileage, basic insurance coverage, and 24/7 roadside assistance. Additional options like GPS navigation, child seats, or additional insurance coverage can be added for an extra fee."
            />
            
            <CustomAccordion
                id="3"
                title="Can I extend my rental period?"
                content="Yes, you can extend your rental period by contacting our customer service at least 24 hours before your scheduled return time. Extensions are subject to vehicle availability and may affect your rental rate."
            />
            
            <CustomAccordion
                id="4"
                title="What happens if I return the vehicle late?"
                content="Late returns may incur additional charges. We allow a 29-minute grace period, after which you'll be charged for an extra hour. Returns more than 2 hours late will be charged for an additional full day."
            />
            
            <CustomAccordion
                id="5"
                title="What is your fuel policy?"
                content="Our standard policy is 'full-to-full' - you receive the vehicle with a full tank and should return it full. If you return it with less fuel, we'll charge for the missing fuel plus a refueling service fee. Some locations may offer prepaid fuel options."
            /> 
        </div>
    </section>
  )
}

export default FAQs
