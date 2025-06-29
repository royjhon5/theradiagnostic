import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, ChevronRight } from "lucide-react";
import React from "react";

const BookAppointmentSection: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-lg shadow-md">
        <div className="bg-gray-300 w-full md:w-1/2 h-64 md:h-auto"></div>

        <div className="bg-gray-50 w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Take The Next Step & Schedule A Visit Today
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="service"
                className="block text-xs font-medium text-gray-700"
              >
                SERVICE
              </label>
              <Select>
                <SelectTrigger id="service" className="w-full bg-white">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="checkup">Regular Checkup</SelectItem>
                  <SelectItem value="followup">Follow-up Visit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="doctor"
                className="block text-xs font-medium text-gray-700"
              >
                DOCTOR
              </label>
              <Select>
                <SelectTrigger id="doctor" className="w-full bg-white">
                  <SelectValue placeholder="Select Doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                  <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                  <SelectItem value="dr-williams">Dr. Williams</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-700"
              >
                YOUR NAME
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="w-full bg-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-gray-700"
              >
                YOUR PHONE
              </label>
              <Input
                id="phone"
                placeholder="Your phone"
                className="w-full bg-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="date"
                className="block text-xs font-medium text-gray-700"
              >
                DATE
              </label>
              <div className="relative">
                <Input
                  id="date"
                  type="text"
                  placeholder="Select Date"
                  className="w-full bg-white pl-9"
                />
                <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input id="datepicker" type="date" className="sr-only" />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="time"
                className="block text-xs font-medium text-gray-700"
              >
                TIME
              </label>
              <Select>
                <SelectTrigger id="time" className="w-full bg-white">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9am">9:00 AM</SelectItem>
                  <SelectItem value="10am">10:00 AM</SelectItem>
                  <SelectItem value="11am">11:00 AM</SelectItem>
                  <SelectItem value="1pm">1:00 PM</SelectItem>
                  <SelectItem value="2pm">2:00 PM</SelectItem>
                  <SelectItem value="3pm">3:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 py-2 flex items-center justify-center gap-2 w-auto">
              BOOK AN APPOINTMENT
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookAppointmentSection;
