import { useState } from 'react';
import './App.css'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

function App() {
  const [showPass , setshowPass] = useState(false)

  const handleShow = ()=>{
    setshowPass(!showPass)
  }

  return (
    <>
    <div className="w-[250px] md:w-[500px] p-3 md:p-5 rounded-xl relative border-2 border-solid border-black">
      {
        showPass ?
        <IoMdEyeOff onClick={handleShow} className='text-[#9B3922] absolute right-5 top-1/2 translate-y-[-50%] text-3xl'/>
        :
        <IoMdEye onClick={handleShow} className='text-[#E3651D] absolute right-5 top-1/2 translate-y-[-50%] text-3xl'/>
      }
      <input className='w-full text-xl font-thin bg-transparent' type={showPass ? 'text' : 'password'} placeholder='Enter your Password'/>
    </div>
    <footer className='flex items-center gap-1 absolute bottom-1 left-1/2 translate-x-[-50%] text-[10px] md:text-xl font-medium text-black'>Created with <FaHeart className='text-[#ff1e1e]'/> by <a className='font-black hover:underline' href="https://github.com/fuhad-shiblu" target='_blank'>Fuhad Hasan Shiblu</a></footer>
    </>
  )
}

export default App