import Container from '@/components/global/container';
import { Button } from '@/components/ui/button';
import Marquee from '@/components/ui/marquee';
import { reviews } from '@/constants';

import { cn } from '@/lib/utils';
import { ArrowRight, UserIcon } from 'lucide-react';
import React from 'react';

const Testimonials: React.FC = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    
      <>
        <Container>
            <div className="flex justify-between items-center">
            <div>
            <h1 className="text-3xl font-bold text-blue-600">WHAT PEOPLE ARE SAYING</h1>
            <p className="text-muted-foreground">
                See how ThereDiagnostics helps clients. Here&apos;s what real people are saying
            </p>
            </div>
            <Button variant="outline" size="sm" className='rounded-full border border-[#16A7E2] text-xs text-[#16A7E2]'>
                View all <ArrowRight size={12} className='ml-2' />
            </Button>
        </div>
        </Container>
        <Container>
            <div className="py-10 md:py-20 w-full">
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                    <Marquee pauseOnHover className="[--duration:20s] select-none">
                        {firstRow.map((review) => (
                            <figure
                                key={review.name}
                                className={cn(
                                    "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
                                    "border-[#999999]/[.5] bg-background over:bg-zinc-50/[.15]",
                                )}
                            >
                                <blockquote className="mb-6 text-sm text-justify">{review.body}</blockquote>
                                <div className="flex flex-row items-center gap-2">
                                    <UserIcon className="w-6 h-6" />
                                    <div className="flex flex-col">
                                        <figcaption className="text-sm font-medium text-[#116BB4]">
                                            {review.name}
                                        </figcaption>
                                        <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                    </div>
                                </div>
                                
                            </figure>
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                        {secondRow.map((review) => (
                            <figure
                                key={review.name}
                                className={cn(
                                    "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
                                    "border-[#999999]/[.5] bg-background over:bg-zinc-50/[.15]",
                                )}
                            >
                                <blockquote className="mb-6 text-sm text-justify">{review.body}</blockquote>
                                <div className="flex flex-row items-center gap-2">
                                    <UserIcon className="w-6 h-6" />
                                    <div className="flex flex-col">
                                        <figcaption className="text-sm font-medium text-[#116BB4]">
                                            {review.name}
                                        </figcaption>
                                        <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                    </div>
                                </div>                  
                            </figure>
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </Container>
      </>
  );
};

export default Testimonials;