import { AnimatedGroup } from "@/components/global/animated-group";
import Container from "@/components/global/container";
import { TextEffect } from "@/components/global/text-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  };
  return (
    // <div>
    // <div
    //   className="
    //   absolute inset-0
    //   bg-[url('/hero/heroimage.jpg')]
    //   bg-contain
    //   bg-no-repeat
    //   bg-[size:4rem_4rem]
    //   [mask-image:radial-gradient(ellipse_90%_60%_at_50%_0%,#000_70%,transparent_110%)]
    //   -z-10 h-[150vh]"
    // />

    //   <Container>
    //     <div className="flex flex-col items-center justify-center py-20 h-full md:mb-96 sm:mb-0">
    //       <div className="flex flex-col items-center md:mt-20 sm:mt-8 max-w-3xl w-11/12 md:w-full">
    //         <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-bold bg-clip-text bg-[#116BB4] from-gray-50 to-gray-50 text-transparent">
    //           TheraDiagnostics
    //         </h1>
    //         <p className="text-base md:text-lg text-foreground/80 mt-6"></p>
    //       </div>
    //       <Button
    //         size="lg"
    //         className="bg-[#16A7E2] rounded-full text-white mt-10 hover:bg-[#16A7E2]/90"
    //       >
    //         Discover Our Platform <ArrowRight className="ml-4" size={16} />
    //       </Button>
    //     </div>
    //     <div className="relative flex items-center py-10 md:py-20 w-full">
    //       <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
    //       <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl"></div>
    //     </div>
    //   </Container>
    // </div>
    <>
      <div
        className="
        absolute inset-0
        bg-[url('/hero/heroimage.jpg')]
        bg-contain
        bg-no-repeat
        bg-[size:4rem_4rem]
        [mask-image:radial-gradient(ellipse_90%_60%_at_50%_0%,#000_70%,transparent_110%)]
        -z-10 h-[150vh]"
      />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section className="mb-96">
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 max-w-2xl text-5xl font-medium md:text-6xl lg:mt-16 text-[#116BB4]"
                >
                  The best Diagnostic Center in Northern Mindanao
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-2 max-w-2xl text-pretty text-lg "
                >
                  Your Trusted Partner for Accurate Center in Northern Mindanao
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-2 flex items-center gap-2"
                >
                  <div
                    key={1}
                    className=" rounded-[calc(var(--radius-xl)+0.125rem)]  p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#16A7E2] rounded-xl text-white mt-10 hover:bg-[#16A7E2]/90"
                    >
                      <Link href="#link">
                        <span className="text-nowrap flex flex-row items-center gap-2">
                          Discover our platform <ArrowRight />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
            {/* <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="/mail2.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <Image
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="/mail2-light.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
