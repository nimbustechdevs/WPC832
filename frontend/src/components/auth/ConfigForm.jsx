"use client";
import React, { useState } from 'react';

export default function ConfigForm() {
  const [tiltConfig, setTiltConfig] = useState({
    serialPort: '',
    baudrate: '',
    parity: '',
    stopBit: '',
    dataBit: '',
  });

  const [modbusConfig, setModbusConfig] = useState({
    tcpPort: '502',
    slaveId: '1',
  });

  const [firmwareFile, setFirmwareFile] = useState(null);

  const handleTiltChange = (e) => {
    setTiltConfig({ ...tiltConfig, [e.target.name]: e.target.value });
  };

  const handleModbusChange = (e) => {
    setModbusConfig({ ...modbusConfig, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFirmwareFile(e.target.files[0]);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    // TODO: Replace with backend API endpoint
    await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tiltConfig, modbusConfig }),
    });
    alert('Configuration saved!');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!firmwareFile) return;
    const formData = new FormData();
    formData.append('firmware', firmwareFile);
    // TODO: Replace with backend API endpoint
    await fetch('/api/firmware', {
      method: 'POST',
      body: formData,
    });
    alert('Firmware uploaded!');
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="bg-gray-100 rounded-t-lg p-6 shadow">
        <h2 className="text-2xl font-bold  text-[#77BEF0] mb-4">Tilt Sensor Configuration</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Serial Port:</label>
            <input
              type="text"
              name="serialPort"
              placeholder="COM3"
              value={tiltConfig.serialPort}
              onChange={handleTiltChange}
              className="w-full border text-gray-400 border-gray-400 rounded px-3 py-2 focus:ring-2 hover:border-gray-600 transition-colors focus:ring-[#a6cde9] focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Baudrate:</label>
            <input
              type="text"
              name="baudrate"
              placeholder='9600'
              value={tiltConfig.baudrate}
              onChange={handleTiltChange}
              className="w-full border text-gray-400 border-gray-400 rounded px-3 py-2 focus:ring-2 hover:border-gray-600 transition-colors focus:ring-[#a6cde9] focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Parity:</label>
            <input
              type="text"
              name="parity"
              placeholder='None'
              value={tiltConfig.parity}
              onChange={handleTiltChange}
              className="w-full border text-gray-400 border-gray-400 rounded px-3 py-2 focus:ring-2 hover:border-gray-600 transition-colors focus:ring-[#a6cde9] focus:outline-none"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-1">Stop Bit:</label>
              <input
                type="text"
                name="stopBit"
                placeholder="1"
                value={tiltConfig.stopBit}
                onChange={handleTiltChange}
                className="w-full border text-gray-400 border-gray-400 rounded px-3 py-2 focus:ring-2 hover:border-gray-600 transition-colors focus:ring-[#a6cde9] focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-1">Data Bit:</label>
              <input
                type="text"
                name="dataBit"
                placeholder="8"
                value={tiltConfig.dataBit}
                onChange={handleTiltChange}
                className="w-full border text-gray-400 border-gray-400 rounded px-3 py-2 focus:ring-2 hover:border-gray-600 transition-colors focus:ring-[#a6cde9] focus:outline-none"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold  text-[#77BEF0] mt-8 mb-4">Modbus Slave Configuration</h2>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">TCP Port:</label>
            <input
              type="text"
              name="tcpPort"
              placeholder="502"
              value={modbusConfig.tcpPort}
              onChange={handleModbusChange}
              className="w-full border text-gray-400 border-gray-400 rounded px-3 py-2 focus:ring-2 hover:border-gray-600 transition-colors focus:ring-[#a6cde9] focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Slave ID:</label>
            <input
              type="text"
              name="slaveId"
              placeholder="1"
              value={modbusConfig.slaveId}
              onChange={handleModbusChange}
              className="w-full border text-gray-400  border-gray-400 rounded px-3 py-2 focus:ring-2 hover:border-gray-600 transition-colors focus:ring-[#a6cde9] focus:outline-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#77BEF0] hover:bg-[#459cda] text-white font-semibold px-8 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col bg-gray-100 rounded-b-lg p-6 mt-6 shadow">
        <h2 className="text-2xl font-bold  text-[#77BEF0] mb-4">Firmware Update</h2>
        <form
            onSubmit={handleUpload}
            className="flex flex-col text-gray-600 items-center hover:cursor-pointer gap-4"
>
         <input
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-400 rounded px-6 py-2 focus:ring-2 hover:border-gray-600 transition-colors focus:ring-[#a6cde9] focus:outline-none"
          />
          <button
         type="submit"
          className="bg-[#77BEF0] hover:bg-[#459cda] text-white font-semibold px-8 py-2 rounded"
          >
          Upload
         </button>
      </form>
      </div>
    </div>
  );
}
