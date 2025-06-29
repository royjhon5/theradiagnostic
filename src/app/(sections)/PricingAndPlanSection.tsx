import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const PricingAndPlanningSection: React.FC = () => {
  return (
    <>
      <Container>
        <div className="mx-auto text-start md:text-center">
          <p className="text-muted-foreground mt-6">PRICING AND PLANNING</p>
          <h2 className="text-3xl lg:text-4xl text-[#116BB4] font-semibold ">
            Our Plans For Your Well Being
          </h2>
        </div>
      </Container>
      <Container className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-5">
          {pricingCards.map((card) => (
            <Card
              className="flex-1 shadow-sm hover:bg-[#F3F3F4] cursor-pointer border border-[#CCCCCC] hover:border-[#16A7E2]"
              key={card.title}
            >
              <CardHeader className="pb-0">
                <div
                  className={`w-fit font-medium text-sm px-3 py-1 rounded-full mb-4 
                                        ${
                                          card.indication === "Best Value"
                                            ? "bg-[#e4f5a9] text-black"
                                            : card.indication === "Most Popular"
                                            ? "bg-[#f5a9f2] text-black"
                                            : card.indication ===
                                              "Budget Friendly"
                                            ? "bg-[#f5c8a9] text-black"
                                            : "bg-[#d4d4d4] text-[#333]"
                                        }
                                    `}
                >
                  {card.indication}
                </div>
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{card.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#1a3b80]">₱</span>
                  <span className="text-5xl font-bold text-[#1a3b80]">
                    {card.price}
                  </span>
                  <span className="text-gray-600 ml-1">/ per month</span>
                </div>

                <div className="space-y-4">
                  <p className="font-medium">What&apos;s included</p>
                  <div className="space-y-3">
                    {card.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-[#1a3b80] shrink-0 mt-0.5" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#00a8e8] hover:bg-[#0096d1] text-white justify-between rounded-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PricingAndPlanningSection;
