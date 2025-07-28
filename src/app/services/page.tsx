import { Wrapper } from "@/components";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clipboard,
  Shield,
  Stethoscope,
  TestTube,
  UserCheck,
} from "lucide-react";

export default function Services() {
  return (
    <Layout>
      <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        <Wrapper>
          <div className="min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  Our Services
                </h1>
                <p className="text-lg text-blue-600 font-medium mb-6">
                  Clinical Accuracy: Our Mission
                </p>
                <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  At TheraDiagnostics, we are committed to providing
                  high-quality, accessible, and affordable diagnostic services
                  to support your health and well-being. Located in the heart of
                  Cagayan de Oro, our facility is equipped with modern
                  technology and a dedicated team of healthcare professionals.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Basic Laboratory Test */}
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clipboard className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-600">
                      Basic Laboratory Tests:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Stay on top of your health with our essential laboratory
                      services designed for early detection and monitoring of
                      various health conditions.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">
                        Test Included:
                      </p>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Complete Blood Count (CBC)</li>
                        <li>• Urinalysis</li>
                        <li>• Erythrocyte Sedimentation Rate (ESR)</li>
                        <li>• Stool Examination</li>
                        <li>• Clotting Time & Bleeding Time (CTBT)</li>
                        <li>• Blood Typing</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Chemistry Test */}
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TestTube className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-600">
                      Chemistry Tests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Get detailed insights into your body&apos;s chemical
                      balance with our comprehensive chemistry test package,
                      essential for diagnosing, monitoring, and managing various
                      health conditions.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">
                        Test Included:
                      </p>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Blood Uric Acid (BUA)</li>
                        <li>• Fasting Blood Sugar (FBS)</li>
                        <li>• Random Blood Sugar (RBS)</li>
                        <li>• Total Cholesterol (Chol)</li>
                        <li>• Ionized Calcium (Ical)</li>
                        <li>• SGPT</li>
                        <li>• SGOT</li>
                        <li>• Sodium (Na)</li>
                        <li>• Potassium (K)</li>
                        <li>• Chloride (Cl)</li>
                        <li>• HBA1C</li>
                        <li>• 2 Hour Post Prandial</li>
                        <li>• Oral Glucose Tolerance Test (OGTT)</li>
                        <li>• Oral Glucose Challenge Test (OGCT)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Infectious Disease Screening */}
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-600">
                      Infectious Disease Screening
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Protect yourself and your loved ones with our screening
                      tests are designed to identify infections that may not
                      show immediate symptoms but can have serious long-term
                      effects if left untreated.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">
                        Test Included:
                      </p>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• HIV</li>
                        <li>• Syphilis</li>
                        <li>• Hepatitis B Surface Antigen (HBsAg)</li>
                        <li>• Hepatitis C Virus (HCV)</li>
                        <li>• Hepatitis A Virus (HAV)</li>
                        <li>• Dengue Duo</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                {/* Special Test */}
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-600">
                      Other Laboratory Test
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Our special test package offers quick and accurate results
                      for specific health concerns, providing essential
                      information for diagnosis and treatment.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">
                        Test Included:
                      </p>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Micral Test</li>
                        <li>• Pregnancy Test (Urine/Blood)</li>
                        <li>• Occult Blood</li>
                        <li>• Semen Analysis</li>
                        <li>• Reticulocyte Count</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Doctor's Consultation */}
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-600">
                      Doctor&apos;s Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Get expert medical advice and personalized care from our
                      licensed healthcare professionals. Whether for routine
                      diagnosis, or general check-up — were here to keep you
                      help.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">
                        Consultation Hours:
                      </p>
                      <p className="text-sm text-blue-600">
                        Monday to Saturday | 9:00 AM – 2:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Section */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">
                  Your Health, Our Priority
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  At TheraDiagnostics, we combine accurate results,
                  compassionate care, and professional service all under one
                  roof. Visit us today and take control of your health with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </Layout>
  );
}
