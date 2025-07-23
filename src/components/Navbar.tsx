"use client";
import { useState } from "react";
import { LogOut, Settings, User, Camera, LayoutDashboard, Users, Activity } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 bg-[#1f2937] text-white shadow-lg">
      {/* Left: Logo */}
      <div className="text-xl font-bold">SecureSight</div>

      {/* Center: Navigation */}
      <div className="flex gap-10 text-sm">
        <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <LayoutDashboard size={18} />
          Dashboard
        </div>
        <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <Camera size={18} />
          Camera
        </div>
        <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <Activity size={18} />
          Sensors
        </div>
        <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <Users size={18} />
          Users
        </div>
      </div>

      {/* Right: Profile + Dropdown */}
      <div className="relative">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Image
            src="/Profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border"
          />
          <div className="text-sm">
            <p className="font-semibold">Vaibhav Sharma</p>
            <p className="text-gray-300 text-xs">vaibhav@example.com</p>
          </div>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden animate-slide-down z-50">
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2">
              <User size={16} /> Profile
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2">
              <Settings size={16} /> Settings
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2">
              <LogOut size={16} /> Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
