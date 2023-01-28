import React from 'react'

export default function Sider() {
  return (
    <div>
      <div className="w-full h-[600px] flex flex-col justify-center text-white">
        <div className="w-full flex flex-row justify-center">
          <div className="flex flex-col">
            <div className="w-full text-left db leading-2xl cursor-pointer font-bold">
              <a className="link">Home</a>
            </div>
            <div className="w-full text-left db leading-2xl mt-4 cursor-pointer font-bold">
              <a className="link">Update school info</a>
            </div>
            <div className="w-full text-left db leading-2xl mt-4 cursor-pointer font-bold">
              <a className="link">Create admin</a>
            </div>
            <div className="w-full text-left db leading-2xl mt-4 cursor-pointer font-bold">
              <a className="link">Settings</a>
            </div>
            <div className="w-full text-left db leading-2xl mt-4 cursor-pointer font-bold">
              <a className="link">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
