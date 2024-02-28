import React from "react";

interface AnsattInputProps {
  onChange: (value: string) => void; // Definerer typen til onChange-funksjonen
}

const AnsattInput: React.FC<AnsattInputProps> = ({ onChange }) => {
  return (
    <div className="relative w-52 rounded-md px-3 pb-1.5 pt-2.5">
      <label
        htmlFor="ansatt"
        className="block text-xs font-medium text-gray-900"
      >
        Ansatt
      </label>
      <select
        id="ansatt"
        defaultValue=""
        className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
      >
        <option value="" disabled>
          Vennligst velg en ansatt
        </option>
        <option value="1">Ola Nordmann</option>
        <option value="2">Kari Nordmann</option>
        {/* Flere ansatte kan legges til her */}
      </select>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
      <div className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-purple-500 transition-all duration-300 ease-out peer-focus:left-0 peer-focus:right-0"></div>
    </div>
  );
};

export default AnsattInput;
