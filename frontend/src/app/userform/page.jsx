"use client";
import React, { useState } from "react";

export default function SensorConfigPage() {
  const [firmwareFile, setFirmwareFile] = useState(null);

  const handleUpload = () => {
    if (!firmwareFile) {
      alert("Please select a firmware file first!");
      return;
    }
    alert(`Firmware file "${firmwareFile.name}" uploaded successfully!`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-[#77bdf0] w-full px-20 py-7  flex items-center from-[#77BEF0] to-[#459cda] box-shadow-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3)">
        <img src="\router_1.png" alt="Logo" className="h-10 mr-2" />
        <h1 className="text-3xl font-bold text-[#ececec]">NT-832</h1>
      </header>

      {/* Main Form Container */}
      <div className="max-w-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5 mt-[100px]">
        {/* Tilt Sensor Config */}
        <div className="bg-[#ececec] @apply shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-5 rounded-xl">
          <h2 className="text-xl font-bold text-[#77BEF0] mb-4">
            Tilt Sensor Configuration
          </h2>

          <label className="text-[#5d666b] block mb-2 font-medium">Serial Port:</label>
          <input
            type="text"
            defaultValue="COM3"
            className="w-full p-2 mb-4 border border-gray-300 rounded text-[#acafb1]"
          />

          <label className="text-[#5d666b] block mb-2 font-medium">Baudrate:</label>
          <input
            type="text"
            defaultValue="9600"
            className="w-full p-2 mb-4 border border-gray-300 rounded text-[#acafb1]"
          />

          <label className="text-[#5d666b] block mb-2 font-medium">Parity:</label>
          <input
            type="text"
            defaultValue="None"
            className="w-full p-2 mb-4 border border-gray-300 rounded text-[#acafb1]"
          />

          <label className="text-[#5d666b] block mb-2 font-medium">Stop Bit:</label>
          <input
            type="text"
            defaultValue="1"
            className="w-full p-2 mb-4 border border-gray-300 rounded text-[#acafb1]"
          />

          <label className="text-[#5d666b] block mb-2 font-medium">Data Bit:</label>
          <input
            type="text"
            defaultValue="8"
            className="w-full p-2 mb-4 border border-gray-300 rounded text-[#acafb1]"
          />
        </div>

        {/* Modbus Config */}
        <div className="bg-[#ececec] p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-[#77BEF0] mb-4">
            Modbus Slave Configuration
          </h2>

          <label className="text-[#5d666b] block mb-2 font-medium">TCP Port:</label>
          <input
            type="text"
            defaultValue="502"
            className="w-full p-2 mb-4 border border-gray-300 rounded text-[#acafb1]"
          />

          <label className="text-[#5d666b] block mb-2 font-medium">Slave ID:</label>
          <input
            type="text"
            defaultValue="1"
            className="w-full p-2 mb-4 border border-gray-300 rounded text-[#acafb1]"
          />

          <button
            onClick={handleUpload}
            className="bg-[#77bdf0] text-white px-4 py-2 rounded hover:bg-[#37a1ec] transition duration-300 cursor-pointer"
          >
            Save
          </button>
        </div>

        {/* Firmware Update */}
        <div className="bg-[#ececec] p-6 rounded-lg w-full shadow">
          <h2 className="text-xl font-bold text-[#77BEF0] mb-4">
            Firmware Update
          </h2>

          {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label> */}

          <input
            type="file"
            id="firmwareFile"
            className="w-full p-2 mb-2 border border-gray-300 rounded text-[#acafb1]"
            onChange={(e) => setFirmwareFile(e.target.files[0])}
          />
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-600" id="file_input_help"></p>
          
          <button
            onClick={handleUpload}
            className="bg-[#77bdf0] text-white px-4 py-2 rounded hover:bg-[#37a1ec] transition duration-300 cursor-pointer"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

