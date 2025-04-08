import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectItem } from '@radix-ui/react-select'
import { Calendar } from 'lucide-react'
import Image from 'next/image'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ActionDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[900px] [&>button]:hidden">
        <DialogHeader className='flex flex-row items-center gap-5 font-bold text-[#116BB4]'>
            <Image alt="theradiagnostic logo" src="/logo/logo.png" width={30} height={30} />
            TheraDiagnostic
        </DialogHeader>
        <div className="flex flex-col items-center md:mt-8 sm:mt-8 max-w-3xl w-11/12 md:w-full">
          <h1 className="text-4xl md:text-4xl lg:textxl font-bold text-center text-[#116BB4]">
          Client Registration
          </h1>
        </div>
        <label htmlFor="service" className="block text-md font-bold text-[#116BB4]">
            Personal Information
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="service" className="block text-xs font-medium text-gray-700">
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
            <label htmlFor="doctor" className="block text-xs font-medium text-gray-700">
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
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              YOUR NAME
            </label>
            <Input id="name" placeholder="Your name" className="w-full bg-white" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
              YOUR PHONE
            </label>
            <Input id="phone" placeholder="Your phone" className="w-full bg-white" />
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="block text-xs font-medium text-gray-700">
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
            <label htmlFor="time" className="block text-xs font-medium text-gray-700">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="service" className="block text-xs font-medium text-gray-700">
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
            <label htmlFor="doctor" className="block text-xs font-medium text-gray-700">
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
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              YOUR NAME
            </label>
            <Input id="name" placeholder="Your name" className="w-full bg-white" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
              YOUR PHONE
            </label>
            <Input id="phone" placeholder="Your phone" className="w-full bg-white" />
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="block text-xs font-medium text-gray-700">
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
            <label htmlFor="time" className="block text-xs font-medium text-gray-700">
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
        <DialogFooter>
          {/* Your footer content here */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
