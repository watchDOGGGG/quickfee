import React from 'react'
import Login from './login'
import Register from './register'

export default function Auth() {
  const [route, setRoute] = React.useState(1)

  const UpdateRoute = (route) =>{
    setRoute(route)
  }
  return (
    <div className="w-full">
      <div className="flex flex-row w-full">
        <div className="w-2/5 bg-blue-500 h-screen">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center h-screen">
              <h2 className="text-4xl text-white font-bold">QuickFee</h2>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          {
            route === 1 ?
              <Login updateroute={UpdateRoute}/>
              :
              <Register updateroute={UpdateRoute}/>
          }

        </div>
      </div>
    </div>
  )
}
