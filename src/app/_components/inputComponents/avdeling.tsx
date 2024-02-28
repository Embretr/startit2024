import React from "react";

interface AvdelingInputProps {
  onChange: (value: string) => void; // Definerer typen til onChange-funksjonen
}

const AvdelingInput: React.FC<AvdelingInputProps> = ({ onChange }) => {
  return (
    <div className="relative w-52 rounded-md px-3 pb-1.5 pt-2.5">
      <label
        htmlFor="avdeling"
        className="block text-xs font-medium text-gray-900"
      >
        Avdeling
      </label>
      <select
        id="avdeling"
        defaultValue="10 felles"
        className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
      >
        <option value="" disabled>
          Velg avdeling
        </option>
        <option value="it">IT</option>
        <option value="hr">HR</option>
        {/* Flere avdelinger kan legges til her */}
      </select>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
      <div className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-purple-500 transition-all duration-300 ease-out peer-focus:left-0 peer-focus:right-0"></div>
    </div>
  );
};

export default AvdelingInput;
