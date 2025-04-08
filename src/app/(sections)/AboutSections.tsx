import Container from '@/components/global/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { perks } from '@/constants';
import { Check } from 'lucide-react';
import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <Container>
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-600">ABOUT US</h2>
            <h1 className="text-4xl font-bold text-[#0070c9] mt-2">The Heart Of Our Clinic</h1>
          </div>
          <p className="text-gray-700">
            At our clinic, we offer personalized healthcare packages designed to meet your unique needs. Our expert team
            ensures that you receive the best care at an affordable price, with a focus on your long-term health.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Tailored treatment plans to suit your health goals</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Affordable pricing with no hidden costs</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Expert medical team dedicated to your well-being</span>
            </li>
          </ul>
          <div>
            <Button
              variant="outline"
              className="rounded-full border-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors px-6"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] w-full">
          <div className="absolute right-0 top-0 w-4/5 h-4/5 bg-gray-300 rounded-lg"></div>
          <div className="absolute left-0 bottom-0 w-4/5 h-4/5 bg-gray-300 rounded-lg border-4 border-white"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border rounded-md md:divide-x">
              {perks.map((perk) => (
                  <div key={perk.title} className="flex flex-col items-start p-2">
                      <div className="flex flex-row items-start justify-center items-center gap-8">
                      <h3 className={`text-6xl font-medium mt-2 ${
                                              perk.title === "130+" 
                                            ? "text-[#A9B963]" 
                                            : perk.title === "500+" 
                                            ? "text-[#F159FF]" 
                                            : perk.title === '95%'
                                            ? "text-[#F87C47]"
                                            : perk.title === '800+'
                                            ? "text-[#52C8DC]" 
                                            : "text-[#333]"
                                        }`}>
                          {perk.title}
                      </h3>
                      <p className="text-muted-foreground text-start lg:text-start">
                          {perk.titlecon}
                      </p>
                      </div>
                      <p className="text-muted-foreground mt-12 text-start lg:text-start">
                          {perk.info}
                      </p>
                  </div>
              ))}
          </div>
      </div>
    </section>
    </Container>
  );
};

export default AboutUsSection;