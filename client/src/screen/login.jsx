import React from 'react'

export default function Login({ updateroute }) {
  return (
    <div classNam="w-full">
      <div className="flex flex-col h-screen justify-center">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-black font-bold text-center">Login</h2>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-3">
          <div className="flex flex-col w-[50%]">
            <div className="flex flex-col w-full p-2">
              <label className="db">school ID</label>
              <input type="text" placeholder="school ID" className='border w-full p-1' />
            </div>
            <div className="flex flex-col p-2">
              <label className="db">password</label>
              <input type="text" placeholder="password" className='border w-full p-1' />
            </div>
            <div className="p-2">
              <button className="bg-blue-400 p-1 w-50 text-white">Login</button>
            </div>
            <div className="p-2 cursor-pointer" onClick={e => updateroute(2)}>
              <a className="text-sm">Don't have an account click to login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
