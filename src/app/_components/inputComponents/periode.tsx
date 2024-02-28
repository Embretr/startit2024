import React from "react";
import { getWeek, getYear } from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PeriodeInputProps {
  onChange: (value: string) => void; // Definerer typen til onChange-funksjonen
}

const PeriodeInput: React.FC<PeriodeInputProps> = ({ onChange }) => {
  const currentWeek = getWeek(new Date());
  const currentYear = getYear(new Date());

  return (
    <>
      <div className="relative w-52 rounded-md  px-3 pb-1.5 pt-2.5">
        <div className="flex items-center justify-between">
          <label htmlFor="name" className="text-xs font-medium text-gray-900">
            Periode
          </label>
          <div className="flex">
            <FaChevronLeft className="mr-4 cursor-pointer text-gray-500" />
            <FaChevronRight className="cursor-pointer text-gray-500" />
          </div>
        </div>
        <div className="relative ">
          <input
            type="text"
            name="name"
            id="name"
            className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
            defaultValue={`Uke ${currentWeek} ${currentYear}`}
            readOnly
          />
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
          <div className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-purple-500 transition-all duration-300 ease-out peer-focus:left-0 peer-focus:right-0"></div>
        </div>
      </div>
    </>
  );
};

export default PeriodeInput;
