import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { SelectItem } from '@radix-ui/react-select'
import { ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ActionDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader className='flex flex-row items-center gap-5 font-bold text-[#116BB4]'>
            <Image alt="theradiagnostic logo" src="/logo/logo.png" width={30} height={30} />
            TheraDiagnostic
        </DialogHeader>
        <div className="flex flex-col items-center md:mt-3 sm:mt-3 max-w-3xl w-11/12 md:w-full">
          <h1 className="text-4xl md:text-4xl lg:textxl font-bold text-center text-[#116BB4]">
          Client Registration
          </h1>
        </div>
        <label htmlFor="service" className="block text-md font-bold text-[#116BB4]">
            Personal Information
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="space-y-0">
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
             FIRST NAME
            </label>
            <Input id="name" placeholder="(e.g DEBIDENDO)" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              MIDDLE NAME
            </label>
            <Input id="name" placeholder="(e.g ANTONIO)" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              LAST NAME
            </label>
            <Input id="name" placeholder="(e.g DEL PILAR)" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
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

          <div className="space-y-0">
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
              AGE
            </label>
            <Input id="phone" placeholder="Enter Age" className="w-full bg-white" />
          </div>
    
          <div className="space-y-0">
            <label htmlFor="time" className="block text-xs font-medium text-gray-700">
              GENDER
            </label>
            <Select>
              <SelectTrigger id="time" className="w-full bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9am">Male</SelectItem>
                <SelectItem value="10am">Female</SelectItem>
                <SelectItem value="11am">Prefer Not to Say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-0">
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
              Current Address
            </label>
            <Input id="phone" placeholder="Enter Address" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Province
              </label>
              <Input id="phone" placeholder="Enter Province" className="w-full bg-white" />
          </div>

          <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Barangay
              </label>
              <Input id="phone" placeholder="Enter Barangay" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
            <label htmlFor="time" className="block text-xs font-medium text-gray-700">
              Senior Citizen
            </label>
            <Select>
              <SelectTrigger id="time" className="w-full bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9am">Male</SelectItem>
                <SelectItem value="10am">Female</SelectItem>
                <SelectItem value="11am">Prefer Not to Say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-0">
            <label htmlFor="time" className="block text-xs font-medium text-gray-700">
              Valid ID
            </label>
            <Select>
              <SelectTrigger id="time" className="w-full bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9am">Male</SelectItem>
                <SelectItem value="10am">Female</SelectItem>
                <SelectItem value="11am">Prefer Not to Say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-0">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Valid ID No.
              </label>
              <Input id="phone" placeholder="66666666" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Active Contact Number
              </label>
              <Input id="phone" placeholder="+63900000000" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Active Email Address
              </label>
              <Input id="phone" placeholder="email@gmail.com" className="w-full bg-white" />
          </div>
        </div>

        <label htmlFor="service" className="block text-md font-bold text-[#116BB4]">
            Medical Information 
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="space-y-0">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Medical History
              </label>
              <Input id="phone" placeholder="Input N/A if none" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Current Medication
              </label>
              <Input id="phone" placeholder="Input N/A if none" className="w-full bg-white" />
          </div>

          <div className="space-y-0">
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              Known Allergies
            </label>
            <Input id="name" placeholder="Input N/A if none" className="w-full bg-white" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-0">
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              Insurance Info
            </label>
            <Textarea id="name" placeholder="Input N/A if none" className="w-full bg-white" />
          </div>
        </div>
        <DialogFooter>
            <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
          <Button size="lg" className='rounded-full w-full bg-[#16A7E2]'>
            Register <ArrowRight />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
