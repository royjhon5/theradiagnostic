import { AnimatedGroup } from '@/components/global/animated-group';
import Container from '@/components/global/container';
import { TextEffect } from '@/components/global/text-effect';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {

  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  }
  return (
      <div>
       <div className="
        absolute inset-0 
        bg-[url('/hero/heroimage.jpg')] 
        bg-contain 
        bg-no-repeat 
        bg-[size:4rem_4rem] 
        [mask-image:radial-gradient(ellipse_90%_60%_at_50%_0%,#000_70%,transparent_110%)] 
        -z-10 h-[150vh]" 
      />


        <Container>
        <div className="flex flex-col items-center justify-center py-20 h-full md:mb-96 sm:mb-0">
              <div className="flex flex-col items-center md:mt-20 sm:mt-8 max-w-3xl w-11/12 md:w-full">
                    <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-bold text-center bg-clip-text bg-[#116BB4] from-gray-50 to-gray-50 text-transparent">
                    TheraDiagnostics
                    </h1>
                    <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                    
                    </p>
                </div>
                <Button size="lg" className='bg-[#16A7E2] rounded-full text-white mt-10 hover:bg-[#16A7E2]/90'>
                   Discover Our Platform <ArrowRight className="ml-4" size={16} />
                </Button>                   
            </div>
                <div className="relative flex items-center py-10 md:py-20 w-full">
                    <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                    <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl"></div>
                    
            </div>
    </Container>
  </div>
  );
};

export default HeroSection;