import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { OurServices } from "@/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <>
      <div>
        <Container>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-sm font-medium text-gray-600 uppercase">
                OUR SERVICES
              </h2>
              <h1 className="text-3xl font-bold text-blue-600">
                Your Well-Being Is Our Mission
              </h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border border-[#16A7E2] text-xs text-[#16A7E2]"
            >
              View all <ArrowRight size={12} className="ml-2" />
            </Button>
          </div>
        </Container>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OurServices.map((card) => (
              <div
                key={card.title}
                className="rounded-lg overflow-hidden shadow-sm border border-[#CCCCCC] hover:border-[#16A7E2] cursor-pointer"
              >
                <div className="bg-[#F3F3F3] p-8 flex justify-center">
                  <div className="w-16 h-16">
                    <Image
                      src={card.icon}
                      alt="Image 1"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {card.description}
                  </p>
                  <Link
                    href="#"
                    className="flex items-center text-blue-600 text-sm font-medium"
                  >
                    Know More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServicesSection;
