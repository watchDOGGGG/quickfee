import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

export default function Login({ updateroute }) {
  const navigate = useNavigate()
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  })

  const handleChange = (e, name) => {
    setValues({
      ...values,
      [name]: e.target.value
    })
  }

  const submit = () => {
    const headers = {
      contentType: 'application/json',
    }
    axios.post(`http://localhost:1200/v1/api/school_login`, {
      email: values.email,
      password: values.password
    }, { headers: headers }).then((res) => {
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('user',JSON.stringify(res.data.message))
      toast.success("login successfull");
      navigate("/dashboard")
    }).catch((err) => {
      console.log(err)
      toast.error(err.response.data.message);
    })
  }

  return (
    <div className="w-full">
      <div className="flex flex-col h-screen justify-center">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-black font-bold text-center">Login</h2>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-3">
          <ToastContainer />
          <div className="flex flex-col w-[50%]">
            <div className="flex flex-col w-full p-2">
              <label className="db text-xs capitalize">email address</label>
              <input value={values.email} onChange={e => handleChange(e, 'email')} type="email" placeholder="school@exampel.com" className='border w-full p-1 text-xs' />
            </div>
            <div className="flex flex-col p-2">
              <label className="db text-xs capitalize">password</label>
              <input value={values.password} onChange={e => handleChange(e, 'password')} type="text" placeholder="password" className='border w-full p-1 text-xs' />
            </div>
            <div className="p-2">
              <button className="bg-blue-400 p-1 w-[200px] rounded text-white text-sm" onClick={submit}>Login</button>
            </div>
            <div className="p-2 cursor-pointer" onClick={e => updateroute(2)}>
              <a className="text-xs">Don't have an account click to login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
