import { Container } from "@/components";
import { Check } from "lucide-react";

export default function OurGoalSection() {
  return (
    <Container>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 leading-tight">
                Our Goals
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                At TheraDiagnostics, we aim to:
              </h3>

              <div className="space-y-6">
                {/* Goal 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Become the number one diagnostic center in Cagayan de Oro —
                    Delivering hassle-free healthcare and flexible check-up
                    options for every client.
                  </p>
                </div>

                {/* Goal 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To pursue solutions that empower healthcare providers,
                    enhance patient outcomes, and increase health awareness.
                  </p>
                </div>

                {/* Goal 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To build relationships and engage in strategic collaboration
                    with stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
