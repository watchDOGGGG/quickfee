import React from 'react'
import Sider from '../component/sider'
import Table from '../component/table'
import { Route, Routes } from "react-router-dom";
import Schoolinfo from './schoolinfo';
import { greeting } from '../function';

export default function Dashboard() {

  const logedIn = JSON.parse(localStorage.getItem('user'))
  const loogedInToken = localStorage.getItem('toekn')

  console.log(logedIn)

  return (
    <div className="flex flex-row w-full h-screen bg-gray-500">
    <div className="w-[20%] bg-black"><Sider/></div>
    <div className="w-[80%]">
      <div className="w-full">
        <div className="p-2 mt-5">
          <h1 className="text-white text-3xl font-bold text-center">{greeting} {logedIn.schoolname}</h1>
          <h4 className="text-white text-xl font-semibold text-center leading-4xl">welcome to your quickfee school dashboard!</h4>
        </div>
        <div className="border-t">
          <Routes>
            <Route path="" element={<Table/>}/>
            <Route path="school_info" element={<Schoolinfo/>}/>
          </Routes>
          
        </div>
      </div>
    </div>
  </div>
  )
}
