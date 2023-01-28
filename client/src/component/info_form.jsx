import React from 'react'

export default function Infoform() {
  return (
    <div className="flex flex-row justify-center mt-3">
    <div className="flex flex-col w-[50%]">
        <div className="flex flex-col w-full p-2">
            <label className="db text-sm">Present section</label>
            <select placeholder="Select your school present section" className="text-black p-1">
                <option>first term</option>
                <option>second term</option>
                <option>third term</option>
            </select>
        </div>
        <div className="flex flex-col p-2">
            <label className="db text-sm">School email</label>
            <input type="text" placeholder="email" className='border w-full p-1' />
        </div>
        <div className="flex flex-col p-2">
            <label className="db text-sm">Account Number</label>
            <input type="text" placeholder="Account number" className='border w-full p-1' />
        </div>
        <div className="flex flex-col p-2">
            <label className="db text-sm">Bank name</label>
            <input type="text" placeholder="Bank name" className='border w-full p-1' />
        </div>
        <div className="flex flex-col p-2">
            <label className="db text-sm">Account Name</label>
            <input type="text" placeholder="Account name" className='border w-full p-1' />
        </div>
        <div className="flex flex-col p-2">
            <label className="db text-sm">School Location</label>
            <input type="text" placeholder="School location" className='border w-full p-1' />
        </div>
        <div className="flex flex-col p-2">
            <label className="db text-sm">Latest info</label>
            <textarea placeholder="Any information for your students?" className='border w-full p-1' />
        </div>
    </div>
</div>
  )
}
