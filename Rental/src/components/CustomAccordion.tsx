import React, { useState } from 'react'

interface AccordionProps{
    id: string;
    title: string;
    content: string;
}

const CustomAccordion = ({id, title, content} : AccordionProps) => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    
    const toggleAccordion = (id:string) : void => {
        setOpenAccordion(openAccordion === id? null : id);
    };

    return (
        <>
            {/* ---------- Accordion ---------- */}
            <div id='accordion-collapse' className='w-1/2'>
                <div className="mb-2">
                    <h2 className={`accordion-collapse-${id}`}>
                        <button type='button' className='flex items-center justify-between w-full p-5 font-medium 
                        rtl:text-right text-gray-500 border border-gray-200 rounded-t-xl focus:ring-2
                        focus:ring-gray-200 hover:bg-gray-100 gap-3'
                        onClick={() => toggleAccordion(`accordion-collapse-body-${id}`)}
                        aria-expanded={openAccordion === `accordion-collapse-body-${id}`}
                        aria-controls={`accordion-collapse-body-${id}`}
                        >
                            <span> {title} </span>
                            <svg
                            className={`w-3 h-3 shrink-0 transition-transform ${
                                openAccordion === `accordion-collapse-body-${id}` ? 'rotate-0' : 'rotate-180'
                            }`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                            >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                    </h2>

                    <div id={`accordion-collapse-body-${id}`}
                    className={`${openAccordion === `accordion-collapse-body-${id}` ? 'block' : 'hidden'}`}
                    aria-labelledby={`accordion-collapse-${id}`}
                    >
                        <div className="p-5 border border-b-0 border-gray-200">
                            <p className="md-2 text-gray-500">
                               {content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomAccordion
