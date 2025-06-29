import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { perks } from "@/constants";
import { Check, Eye, Target } from "lucide-react";
import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <Container>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Purpose
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what drives us forward and the future we envision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  To be the leading provider of innovative and comprehensive
                  diagnostic services, setting the standard for excellence in
                  patient care and clinical accuracy. To pursue solutions that
                  empower healthcare providers, enhance patient outcomes, and
                  increase health awareness. To build relationships and engage
                  in strategic collaboration with stakeholders
                </CardDescription>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  To be the leader in medical diagnostic innovation in Northern
                  Mindanao, transforming healthcare through the use of
                  groundbreaking technologies that enable early, accurate, and
                  accessible diagnoses for all in order to redefine the future
                  of medical diagnostics.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutUsSection;
