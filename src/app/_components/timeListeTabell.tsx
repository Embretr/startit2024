// TimeListeTabell.tsx
// use client
import React from "react";

// Statisk eksempeldata
const eksempelData = [
  {
    dato: "2024-02-28",
    aktivitet: "Utviklingsmøte",
    avdeling: "IT",
    ansatt: "Ola Nordmann",
    timer: "2",
  },
  {
    dato: "2024-02-28",
    aktivitet: "Kodegjennomgang",
    avdeling: "IT",
    ansatt: "Kari Nordmann",
    timer: "3",
  },
  // Legg til flere eksempler etter behov
];

const TimeListeTabell: React.FC = () => {
  return (
    <div className="ml-8 w-3/4">
      <table className="mx-auto min-w-full border-2 leading-normal">
        <thead className="border-2">
          <tr>
            <td className="flex w-full items-center justify-between p-3">
              <span className="font-medium text-gray-700">
                Marius Fredriksen (Uke 9, 2024-02-26 - 2024-03-03)
              </span>
              <div className="flex">
                <button className="mr-2 rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700">
                  Ny rad
                </button>
                <button className="rounded bg-green-500 px-2 py-1 font-bold text-white hover:bg-green-700">
                  Lagret
                </button>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold">
              Prosjekt
            </th>
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold">
              Aktivitet
            </th>
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold">
              26 man
            </th>
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold">
              27 tir
            </th>
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold">
              28 ons
            </th>
            <th className="border-b-2 border-gray-200 bg-blue-600 px-5 py-3 text-left text-xs font-semibold">
              29 tor
            </th>
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold">
              1 fre
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-200 px-5 py-3 text-left text-xs font-semibold">
              2 lør
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-200 px-5 py-3 text-left text-xs font-semibold">
              3 søn
            </th>
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold">
              Sum
            </th>
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold">
              Gjenst.
            </th>
            <th className="border-b-2 border-gray-200 px-5 py-3 text-left text-xs font-semibold"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">
              <button className="bg-color-grey-900 ">Ny rad</button>
            </td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">Sum</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">0,0</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">0,0</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">0,0</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">0,0</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">0,0</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">0,0</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">0,0</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900">0,0</td>
            <td className="bg-white px-5 py-2 text-sm text-gray-900"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeListeTabell;
