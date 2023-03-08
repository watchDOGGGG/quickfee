import React from 'react'
import axios from 'axios'

export default function Register({ updateroute }) {
    const [values, setvalues] = React.useState({
        school: "",
        email: "",
        phone: "",
        admin: "",
        password: ""
    })

    const handleChange = (e, name) => {
        setvalues({
            ...values,
            [name]: e.target.value
        })
    }

    const submit = () => {
        const headers = {
            contentType: 'application/json',
          }
        axios.post(`http://localhost:1200/v1/api/create/school`, {
            schoolname: values.school,
            email: values.email,
            phone: values.phone,
            admin: values.admin,
            password: values.password
        }, { headers: headers}).then((res) => {
            console.log(res)
        }).catch((err) => {
            return console.error(err)
        })
    }
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
                            <label className="db text-xs">Enter school name</label>
                            <input value={values.school} onChange={e => handleChange(e, 'school')} type="text" placeholder="school name" className='border w-full p-1 text-xs' />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="db text-xs">Enter email</label>
                            <input value={values.email} onChange={e => handleChange(e, 'email')} type="text" placeholder="email" className='border w-full p-1 text-xs' />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="db text-xs">Enter phone number</label>
                            <input value={values.phone} onChange={e => handleChange(e, 'phone')} type="text" placeholder="phone number" className='border w-full p-1 text-xs' />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="db text-xs">Enter admin name</label>
                            <input value={values.admin} onChange={e => handleChange(e, 'admin')} type="text" placeholder="admin name" className='border w-full p-1 text-xs' />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="db text-xs">Choose password</label>
                            <input value={values.password} onChange={e => handleChange(e, 'password')} type="password" placeholder="password" className='border w-full p-1 text-xs' />
                        </div>
                        <div className="p-2">
                            <button className="bg-blue-400 p-1 w-[200px] text-sm rounded text-white" onClick={submit}>Register</button>
                        </div>
                        <div className="p-2 cursor-pointer" onClick={e => updateroute(1)}>
                            <a className="text-xs">Already have an account click to login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
