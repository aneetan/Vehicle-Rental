import React, { useEffect, useState, type ReactNode } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

interface CarouselProps{
    children: ReactNode[],
    autoSlide: boolean,
    autoSlideInterval: number
}

const Carousel: React.FC<CarouselProps> = ({children: images, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [current, setCurrent] = useState<number>(0);

    const prev = (): void => {
        setCurrent((current) => (current === 0? images.length -1: current-1))
    }

    const next = (): void => {
        setCurrent((current) => (current === images.length -1 ? 0: current+1))
    }

    useEffect(() => {
        if(!autoSlide) return;

        const slideInterval = setInterval(next, autoSlideInterval)
        return() => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval]);

  return (
    <>
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500'
                style={{transform: `translateX(-${current * 100}%)`}}  //translate 100% to next image
            >
                 {images.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full">
                        {slide}
                    </div>
                ))}
            </div>
            <div className='absolute inset-0 flex w-[full] items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'>
                    <FaArrowCircleLeft/>
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'>
                    <FaArrowCircleRight/>
                </button>
            </div>
        </div>
      
    </>
  )
}

export default Carousel