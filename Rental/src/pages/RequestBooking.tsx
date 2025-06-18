import React, { useState } from 'react'
import { useNavigate } from 'react-router';

interface BookingProps{
    pickupDateTime: string,
    dropoffDateTime: string,
    purposeOfTravel: string
}

interface ErrorProps{
    pickupError: string;
    dropOffError: string;
    purposeError: string;
}

const RequestBooking = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<BookingProps>({
        pickupDateTime: "",
        dropoffDateTime: "",
        purposeOfTravel: ""
    })

    const [errors, setErrors] = useState<ErrorProps> ({
        pickupError : '',
        dropOffError: '',
        purposeError: ''
    })

    const formValidate = () => {
        let isValid: boolean = true;
        const errors: ErrorProps = {
            pickupError: '',
            dropOffError: '',
            purposeError: ''
        };
        const currentDateTime = new Date().toISOString().slice(0, 16);

         if(!formData.pickupDateTime){
            errors.pickupError = "Pick up date required"
            isValid= false
        } else if (formData.pickupDateTime < currentDateTime) {
            errors.pickupError = "Pickup cannot be in the past";
            isValid = false;
        }

        if(!formData.dropoffDateTime){
            errors.dropOffError = "Drop off date required"
            isValid= false
        } else if (formData.dropoffDateTime < currentDateTime) {
            errors.dropOffError = "Dropoff cannot be in the past";
            isValid = false;
        } else if (formData.pickupDateTime && new Date(formData.dropoffDateTime) <= new Date(formData.pickupDateTime)) {
            errors.dropOffError = "Dropoff must be after pickup time";
            isValid = false;
        }

         if(!formData.purposeOfTravel.trim()){
            errors.purposeError = "Please explain purpose of your travel"
            isValid= false
        }

        setErrors(errors);

        return isValid;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //destructuring value
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if(formValidate()){
            console.log("Booking Requested");
            console.log(formData)
            navigate("/viewBookings")
        }
        
    }
  return (
    <>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Vehicle Rental Booking</h2>
                <p className="mt-2 text-gray-600">Select your rental period and purpose</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Pickup Date & Time */}
                <div>
                <label htmlFor="pickupDateTime" className="block text-sm font-medium text-gray-700">
                    Pickup Date & Time
                </label>
                <input
                    type="datetime-local"
                    id="pickupDateTime"
                    name="pickupDateTime"
                    value={formData.pickupDateTime}
                    onChange={handleChange}
                    min={new Date().toISOString().slice(0, 16)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none
                     focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm"
                />
                {errors.pickupError && (<span className='text-red-500 text-sm'> {errors.pickupError} </span>)}
                </div>

                {/* Dropoff Date & Time */}
                <div>
                <label htmlFor="dropoffDateTime" className="block text-sm font-medium text-gray-700">
                    Dropoff Date & Time
                </label>
                <input
                    type="datetime-local"
                    id="dropoffDateTime"
                    name="dropoffDateTime"
                    value={formData.dropoffDateTime}
                    onChange={handleChange}
                    min={formData.pickupDateTime || new Date().toISOString().slice(0, 16)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none
                     focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm"
                />
                {errors.dropOffError && (<span className='text-red-500 text-sm'> {errors.dropOffError} </span>)}
                </div>

                {/* Purpose of Travel */}
                <div>
                <label htmlFor="purposeOfTravel" className="block text-sm font-medium text-gray-700">
                    Purpose of Travel
                </label>
                <textarea
                    id="purposeOfTravel"
                    name="purposeOfTravel"
                    value={formData.purposeOfTravel}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 resize-none
                    focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm"
                    placeholder="Please describe the purpose of your trip..."
                />
                {errors.purposeError && (<span className='text-red-500 text-sm'> {errors.purposeError} </span>)}
                </div>

                {/* Submit Button */}
                <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm
                    text-sm font-medium text-white bg-[var(--primary-color)] hover:bg-[var(--primary-color)]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
                >
                    Request Booking
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
      
    </>
  )
}

export default RequestBooking
