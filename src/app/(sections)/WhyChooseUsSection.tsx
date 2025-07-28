import { Container } from "@/components";
import Image from "next/image";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "State of the art facilities",
      image: "/logo/logo.png",
    },
    {
      title: "Experienced management team",
      image: "/logo/logo.png",
    },
    {
      title: "Digitalised systems for efficiency and comfort",
      image: "/logo/logo.png",
    },
    {
      title:
        "Committed to be the leader in medical innovation in Northern Mindanao",
      image: "/logo/logo.png",
    },
  ];

  return (
    <Container>
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="w-full h-48 rounded-lg shadow-md"
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
