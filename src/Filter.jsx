import React, { useState } from 'react';
import { AddIcon } from './Icons/icon';

const Filter = () => {
  const [isCheckedAge, setIsCheckedAge] = useState(false);
  const [isCheckedDisease, setIsCheckedDisease] = useState(false);
  const [isCheckedDistrict, setIsCheckedDistrict] = useState(false);
  const [isCheckedProvince, setIsCheckedProvince] = useState(false);
  const [isCheckedMedicine, setIsCheckedMedicine] = useState(false);
  const [isCheckedGender, setIsCheckedGender] = useState(false);
  const[StatrAge,setStartAge] =useState();
  const[EndAge,setEndAge]=useState();
  const[StepSize,setStepSize]=useState();

  const [diseases, setDiseases] = useState([{ id: 1, value: '' }]);
  const [District,setDistrict]=useState([{id : 1, value : ''}]);
  const [Province,setProvince]=useState([{id : 1, value : ''}]);
  const [Medicine,setMedicine]=useState([{id : 1, value : ''}]);
  const [Gender,setGender]=useState([{id : 1, value : ''}]);

  {/* Toggle Button  */}
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
  {/* Toggele Button End */}

  {/* handle Input */}

  const handleStartAge=(event)=>{
    setStartAge(event.target.value);
  }

  const handleEndAge=(event)=>{
    setEndAge(event.target.value);
  }

  const handleStep=(event)=>{
    setStepSize(event.target.value);
  }

  // Handle adding a new disease input box
  const handleAddDisease = () => {
    setDiseases([...diseases, { id: diseases.length + 1, value: '' }]);
  };

  // Handle changes in disease input values
  const handleDiseaseChange = (id, event) => {
    const newDiseases = diseases.map(d => d.id === id ? { ...d, value: event.target.value } : d);
    setDiseases(newDiseases);
  };

  // Handle adding a new disease input box
  const handleAddDistrict = () => {
    setDistrict([...District, { id: District.length + 1, value: '' }]);
  };

  // Handle changes in disease input values
  const handleDistrictChange = (id, event) => {
    const newDistrict = District.map(d => d.id === id ? { ...d, value: event.target.value } : d);
    setDistrict(newDistrict);
  };

  const handleAddProvince = () => {
    setProvince([...Province, { id: Province.length + 1, value: '' }]);
  };

  // Handle changes in disease input values
  const handleProvinceChange = (id, event) => {
    const newProvince = Province.map(d => d.id === id ? { ...d, value: event.target.value } : d);
    setProvince(newProvince);
  };

  const handleAddMedicine = () => {
    setMedicine([...Medicine, { id: Medicine.length + 1, value: '' }]);
  };

  // Handle changes in disease input values
  const handleMedicineChange = (id, event) => {
    const newMedicine = Medicine.map(d => d.id === id ? { ...d, value: event.target.value } : d);
    setMedicine(newMedicine);
  };

  const handleAddGender = () => {
    setGender([...Gender, { id: Gender.length + 1, value: '' }]);
  };

  // Handle changes in disease input values
  const handleGenderChange = (id, event) => {
    const newGender = Gender.map(d => d.id === id ? { ...d, value: event.target.value } : d);
    setGender(newGender);
  };



  {/* End Handle Input */}
  

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
            <div className={`dot absolute left-1 top-1 ${isCheckedAge ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedAge ? 'translate-x-8' : 'translate-x-0 '}`}></div>
          </div>
        </label> 
        <div className='pl-12'>
        <input type="number"  min="1" max="100" className=' border border-black bg-blue-300 text-black placeholder-black w-32  text-center' value={StatrAge} onChange={handleStartAge} disabled={!isCheckedAge} placeholder='From' required/>      
        </div>
        <div className='pl-6'>
        <input type="number"  min="1" max="100" className=' border border-black bg-blue-300 text-black placeholder-black w-32  text-center' value={EndAge} onChange={handleEndAge} disabled={!isCheckedAge} placeholder='To' required/>      
        </div>
        <div className='pl-6'>
        <input type="number"  min="1" max="100" className=' border border-black bg-blue-300 text-black placeholder-black w-32  text-center' value={StepSize} onChange={handleStep} disabled={!isCheckedAge} placeholder='Step' required/>      
        </div>
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
            <div className={`dot absolute left-1 top-1 ${isCheckedDisease ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedDisease ? 'translate-x-8' : 'translate-x-0 '}`}></div>
          </div>
        </label>

        <div className="flex flex-wrap " style={{paddingLeft:'46px'}}>
          {diseases.map((disease) => (
            
            <div className='pr-6'>
                 <input
              key={disease.id}
              type="text"
              className='border border-black  text-black  w-32 h-7 text-center  '
              value={disease.value}
              onChange={(e) => handleDiseaseChange(disease.id, e)}
              disabled={!isCheckedDisease}
              placeholder={`Disease ${disease.id}`}
            />


            </div>
           
          ))}
        </div>
        <button onClick={handleAddDisease} disabled={!isCheckedDisease}>
          <AddIcon />
        </button>
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
            <div className={`dot absolute left-1 top-1 ${isCheckedDistrict ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedDistrict ? 'translate-x-8' : 'translate-x-0 '}`}></div>
          </div>
        </label>
        <div className="flex flex-wrap " style={{paddingLeft:'48px'}}>
          {District.map((District) => (
            
            <div className='pr-6'>
                 <input
              key={District.id}
              type="text"
              className='border border-black bg-blue-300 text-black  w-32 h-7 text-center placeholder-black  '
              value={District.value}
              onChange={(e) => handleDistrictChange(District.id, e)}
              disabled={!isCheckedDistrict}
              placeholder={`District ${District.id}`}
            />


            </div>
           
          ))}
        </div>
        <button onClick={handleAddDistrict} disabled={!isCheckedDistrict}>
          <AddIcon />
        </button>


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
            <div className={`dot absolute left-1 top-1 ${isCheckedProvince ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedProvince ? 'translate-x-8' : 'translate-x-0 '}`}></div>
          </div>
        </label>
        <div className="flex flex-wrap " style={{paddingLeft:'48px'}}>
          {Province.map((Province) => (
            
            <div className='pr-6'>
                 <input
              key={Province.id}
              type="text"
              className='border border-black  text-black  w-32 h-7 text-center   '
              value={Province.value}
              onChange={(e) => handleProvinceChange(Province.id, e)}
              disabled={!isCheckedProvince}
              placeholder={`Province ${Province.id}`}
            />


            </div>
           
          ))}
        </div>
        <button onClick={handleAddProvince} disabled={!isCheckedProvince}>
          <AddIcon />
        </button>



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
            <div className={`dot absolute left-1 top-1 ${isCheckedMedicine ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedMedicine ? 'translate-x-8' : 'translate-x-0 '}`}></div>
          </div>   
        </label>

        <div className="flex flex-wrap " style={{paddingLeft:'48px'}}>
          {Medicine.map((Medicine) => (
            
            <div className='pr-6'>
                 <input
              key={Medicine.id}
              type="text"
              className='border border-black  text-black  w-32 h-7 text-center   '
              value={Medicine.value}
              onChange={(e) => handleMedicineChange(Medicine.id, e)}
              disabled={!isCheckedMedicine}
              placeholder={`Medicine ${Medicine.id}`}
            />


            </div>
           
          ))}
        </div>
        <button onClick={handleAddMedicine} disabled={!isCheckedMedicine}>
          <AddIcon />
        </button>
        


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
            <div className={`dot absolute left-1 top-1 ${isCheckedGender ? 'bg-white':'bg-black'} w-4 h-4 rounded-xl transition transform ${isCheckedGender ? 'translate-x-8' : 'translate-x-0 '}`}></div>
          </div>
        </label>  

        <div className="flex flex-wrap " style={{paddingLeft:'48px'}}>
          {Gender.map((Gender) => (
            
            <div className='pr-6'>
                 <input
              key={Gender.id}
              type="text"
              className='border border-black  text-black  w-32 h-7 text-center   '
              value={Gender.value}
              onChange={(e) => handleGenderChange(Gender.id, e)}
              disabled={!isCheckedGender}
              placeholder={`Gender ${Gender.id}`}
            />


            </div>
           
          ))}
        </div>
        <button onClick={handleAddGender} disabled={!isCheckedGender}>
          <AddIcon />
        </button>
        


      </div>

      {/* --------------------------------------------------------Gender Block  End  ---------------------------------------------------------------------- */}
    </div>
  );
};

export default Filter;
