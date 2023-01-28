import React from 'react'

export default function Register({updateroute}) {
    return (
        <div classNam="w-full">
            <div className="flex flex-col h-screen justify-center">
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl text-black font-bold text-center">Register</h2>
                    </div>
                </div>

                <div className="flex flex-row justify-center mt-3">
                    <div className="flex flex-col w-[50%]">
                        <div className="flex flex-col w-full p-2">
                            <label className="db text-sm">Enter school name</label>
                            <input type="text" placeholder="school name" className='border w-full p-1' />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="db text-sm">Enter email</label>
                            <input type="text" placeholder="email" className='border w-full p-1' />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="db text-sm">Enter phone number</label>
                            <input type="text" placeholder="phone number" className='border w-full p-1' />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="db text-sm">Enter admin name</label>
                            <input type="text" placeholder="admin name" className='border w-full p-1' />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="db text-sm">Choose password</label>
                            <input type="password" placeholder="password" className='border w-full p-1' />
                        </div>
                        <div className="p-2">
                            <button className="bg-blue-400 p-1 w-50 text-white">Register</button>
                        </div>
                        <div className="p-2 cursor-pointer" onClick={e=>updateroute(1)}>
                            <a className="text-sm">Already have an account click to login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
