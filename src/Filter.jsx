import React, { useState } from 'react';

const Filter = () => {
  const [isCheckedAge, setIsCheckedAge] = useState(false);
  const [isCheckedDisease, setIsCheckedDisease] = useState(false);
  const [isCheckedDistrict, setIsCheckedDistrict] = useState(false);
  const [isCheckedProvince, setIsCheckedProvince] = useState(false);
  const [isCheckedMedicine, setIsCheckedMedicine] = useState(false);
  const [isCheckedGender, setIsCheckedGender] = useState(false);
  const handleToggleAge = () => {
    setIsCheckedAge(!isCheckedAge);
  };

  const handleToggleDisease = () => {
    setIsCheckedDisease(!isCheckedDisease);
  };

  const handleToggleDistrict = () => {
    setIsCheckedDistrict(!isCheckedDistrict);
  };

  const handleToggleProvince = () => {
    setIsCheckedProvince(!isCheckedProvince);
  };

  const handleToggleMedicine = () => {
    setIsCheckedMedicine(!isCheckedMedicine);
  };

  const handleToggleGender = () => {
    setIsCheckedGender(!isCheckedGender);
  };

  return (
    <div >
      <div className="text-gray-500 text-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        Filters
      </div>
      {/* ------------------------------------     Age Block              ---------------------------------------------------------------------- */}
      <div  className='flex pt-5'    style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="font-bold text-sm">Age</div>
      
         {/* Toggle Button */}
         <label className="flex items-center cursor-pointer pl-48">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isCheckedAge}
              onChange={handleToggleAge}
            />
            {/* Line */}
            <div className={`block ${isCheckedAge ? 'bg-black' : 'bg-white'} w-14 h-6 rounded-full border-2 border-black `}></div>
            {/* Dot */}
            <div className={`dot absolute left-1 top-1 ${isCheckedAge ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedAge ? 'translate-x-6' : 'translate-x-0 '}`}></div>
          </div>
          {/* Optional Label */}
          <div className="ml-3 text-gray-700 font-medium">
            {isCheckedAge ? 'On' : 'Off'}
          </div>
        </label>       
      </div>
      {/* --------------------------------------------------------Age Block  End  ---------------------------------------------------------------------- */}

      {/* --------------------------------------------------------  Disease Block  ---------------------------------------------------------------------- */}
      <div  className='flex pt-3'    style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="font-bold text-sm">Disease</div>
      
         {/* Toggle Button */}
         <label className="flex items-center cursor-pointer " style={{paddingLeft:'165px'}}>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isCheckedDisease}
              onChange={handleToggleDisease}
            />
            {/* Line */}
            <div className={`block ${isCheckedDisease ? 'bg-black' : 'bg-white'} w-14 h-6 rounded-full border-2 border-black `}></div>
            {/* Dot */}
            <div className={`dot absolute left-1 top-1 ${isCheckedDisease ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedDisease ? 'translate-x-6' : 'translate-x-0 '}`}></div>
          </div>
          {/* Optional Label */}
          <div className="ml-3 text-gray-700 font-medium">
            {isCheckedDisease ? 'On' : 'Off'}
          </div>
        </label>       
      </div>
      {/* -------------------------------------------------------- Disease Block  End  ---------------------------------------------------------------------- */}

      {/* --------------------------------------------------------   District Block  ---------------------------------------------------------------------- */}
      <div  className='flex pt-3'    style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="font-bold text-sm">District</div>
      
         {/* Toggle Button */}
         <label className="flex items-center cursor-pointer " style={{paddingLeft:'165px'}}>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isCheckedDistrict}
              onChange={handleToggleDistrict}
            />
            {/* Line */}
            <div className={`block ${isCheckedDistrict ? 'bg-black' : 'bg-white'} w-14 h-6 rounded-full border-2 border-black `}></div>
            {/* Dot */}
            <div className={`dot absolute left-1 top-1 ${isCheckedDistrict ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedDistrict ? 'translate-x-6' : 'translate-x-0 '}`}></div>
          </div>
          {/* Optional Label */}
          <div className="ml-3 text-gray-700 font-medium">
            {isCheckedDistrict ? 'On' : 'Off'}
          </div>
        </label>       
      </div>
      {/* --------------------------------------------------------  District Block  End  ---------------------------------------------------------------------- */}

      {/* --------------------------------------------------------Province Block   ---------------------------------------------------------------------- */}
      <div  className='flex pt-3'    style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="font-bold text-sm">Province</div>
      
         {/* Toggle Button */}
         <label className="flex items-center cursor-pointer "style={{paddingLeft:'155px'}}>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isCheckedProvince}
              onChange={handleToggleProvince}
            />
            {/* Line */}
            <div className={`block ${isCheckedProvince ? 'bg-black' : 'bg-white'} w-14 h-6 rounded-full border-2 border-black `}></div>
            {/* Dot */}
            <div className={`dot absolute left-1 top-1 ${isCheckedProvince ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedProvince ? 'translate-x-6' : 'translate-x-0 '}`}></div>
          </div>
          {/* Optional Label */}
          <div className="ml-3 text-gray-700 font-medium">
            {isCheckedProvince ? 'On' : 'Off'}
          </div>
        </label>       
      </div>
      {/* --------------------------------------------------------Province  Block  End  ---------------------------------------------------------------------- */}

      {/* --------------------------------------------------------Medicine Block  ---------------------------------------------------------------------- */}
      <div  className='flex pt-3'    style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="font-bold text-sm">Medicine</div>
      
         {/* Toggle Button */}
         <label className="flex items-center cursor-pointer "style={{paddingLeft:'153px'}}>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isCheckedMedicine}
              onChange={handleToggleMedicine}
            />
            {/* Line */}
            <div className={`block ${isCheckedMedicine ? 'bg-black' : 'bg-white'} w-14 h-6 rounded-full border-2 border-black `}></div>
            {/* Dot */}
            <div className={`dot absolute left-1 top-1 ${isCheckedMedicine ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedMedicine ? 'translate-x-6' : 'translate-x-0 '}`}></div>
          </div>
          {/* Optional Label */}
          <div className="ml-3 text-gray-700 font-medium">
            {isCheckedMedicine ? 'On' : 'Off'}
          </div>
        </label>       
      </div>


      {/* --------------------------------------------------------Medicine  Block  End  ---------------------------------------------------------------------- */}

      {/* --------------------------------------------------------Gender Block---------------------------------------------------------------------- */}
      <div  className='flex pt-3'    style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="font-bold text-sm">Gender</div>
      
         {/* Toggle Button */}
         <label className="flex items-center cursor-pointer "style={{paddingLeft:'165px'}}>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isCheckedGender}
              onChange={handleToggleGender}
            />
            {/* Line */}
            <div className={`block ${isCheckedGender ? 'bg-black' : 'bg-white'} w-14 h-6 rounded-full border-2 border-black `}></div>
            {/* Dot */}
            <div className={`dot absolute left-1 top-1 ${isCheckedGender ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedGender ? 'translate-x-6' : 'translate-x-0 '}`}></div>
          </div>
          {/* Optional Label */}
          <div className="ml-3 text-gray-700 font-medium">
            {isCheckedGender ? 'On' : 'Off'}
          </div>
        </label>       
      </div>

      {/* --------------------------------------------------------Gender Block  End  ---------------------------------------------------------------------- */}
    </div>
  );
};

export default Filter;
