import { Container } from "@/components";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogAndTipsSection: React.FC = () => {
  return (
    <Container>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase text-gray-500">
            BLOG AND TIPS
          </p>
          <h2 className="text-2xl font-bold text-blue-600">
            News From Our Center
          </h2>
        </div>
        <Link
          href="#"
          className="flex items-center text-sm font-medium text-blue-600 rounded-full border border-blue-600 px-3 py-1"
        >
          View All <ChevronRight className="ml-1 h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                <Calendar className="mr-1 h-3 w-3" /> 2024.12.19
              </span>
              <span className="text-xs font-medium text-blue-600">
                #Preventive Health
              </span>
            </div>
            <h3 className="mb-2 text-sm font-bold">
              The Annual Routine Physical Health Check-ups to Maintain a Healthy
              Body
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Regular health check-ups play a vital role in maintaining
              long-term well-being...
            </p>
            <Link href="#" className="text-xs font-medium text-blue-600">
              Learn More
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                <Calendar className="mr-1 h-3 w-3" /> 2024.12.19
              </span>
              <span className="text-xs font-medium text-blue-600">
                #Mental Health
              </span>
            </div>
            <h3 className="mb-2 text-sm font-bold">
              How to Reduce Stress and Anxiety in Daily Life
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Diabetes is a growing concern, and early detection is crucial for
              effective treatment...
            </p>
            <Link href="#" className="text-xs font-medium text-blue-600">
              Learn More
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                <Calendar className="mr-1 h-3 w-3" /> 2024.12.19
              </span>
              <span className="text-xs font-medium text-blue-600">
                #Expert Insights
              </span>
            </div>
            <h3 className="mb-2 text-sm font-bold">
              Important Medical Information You Need to Know For Emergency
              Medical Care
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              As the weather gets colder, it&apos;s important to take extra care
              of your health...
            </p>
            <Link href="#" className="text-xs font-medium text-blue-600">
              Learn More
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                <Calendar className="mr-1 h-3 w-3" /> 2024.12.19
              </span>
              <span className="text-xs font-medium text-blue-600">
                #Managing Care
              </span>
            </div>
            <h3 className="mb-2 text-sm font-bold">
              Effective Methods to Reduce Stress and Anxiety in Your Daily Life
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Stress and anxiety are common in daily life, but there are many
              ways to manage...
            </p>
            <Link href="#" className="text-xs font-medium text-blue-600">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <button className="h-8 w-8 rounded-full border border-blue-600 bg-blue-600 text-white flex items-center justify-center">
          1
        </button>
        <button className="h-8 w-8 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center">
          2
        </button>
        <button className="h-8 w-8 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center">
          3
        </button>
      </div>
    </Container>
  );
};

export default BlogAndTipsSection;
