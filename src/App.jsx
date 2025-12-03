import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  let [formData,setFormData] = useState({
    username: "",
    password: ""
  })
  let navigate = useNavigate();
  
  console.log(formData);
  let handleChange = (UserInput)=>{
    
    setFormData({...formData,[UserInput.target.name]: UserInput.target.value});
  }  
  function forSubmit(e) {
    e.preventDefault();
    navigate('/dashboard', {state: formData.username})
  }
  return (
    <div className='w-full h-screen bg-gray-900 grid place-items-center'>
      <div className="w-[300px] h-[400px] shadow-2xl rounded-md shadow-white text-white bg-black">
        <h1 className='text-3xl font-bold uppercase text-center mt-1 h-1/10'>Login Page</h1>
        <form onSubmit={forSubmit} className='w-full h-9/10 flex flex-col gap-5 items-center justify-center'>
          <label className='flex flex-col'>
            USERNAME:
            <input className='border-2'onChange={handleChange} name='username' type="text" />
          </label>
          <label className='flex flex-col'>
            PASSWORD:
            <input className='border-2'onChange={handleChange} name='password' type="text" />
          </label>
          <button className='px-15 py-3 text-black font-bold uppercase rounded-md bg-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App