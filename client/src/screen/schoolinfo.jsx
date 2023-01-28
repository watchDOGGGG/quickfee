import React from 'react'
import Infoform from '../component/info_form'

export default function Schoolinfo() {
    return (
        <div className="text-white w-full">
            <div className="flex flex-row w-full justify-between">
                <div className="w-[50%]"><Infoform /></div>
                <div className="w-[50%]">
                    <div className="flex flex-col justify-center mt-3">
                        <div className="p-2">
                            <h1>Present section: first term</h1>
                        </div>
                        <div className="p-2 border-t"> 
                            <h1>School email: test@schoolemail.com</h1>
                        </div>
                        <div className="p-2 border-t">
                            <h1>Account number: 3016095572</h1>
                        </div>
                        <div className="p-2 border-t">
                            <h1>Bank name: First bank</h1>
                        </div>
                        <div className="p-2 border-t">
                            <h1>Account name: watchdog</h1>
                        </div>
                        <div className="p-2 border-t">
                            <h1>School location: mount zion</h1>
                        </div>
                        <div className="p-2 border-t">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quibusdam repellendus numquam qui officiis ad, optio ex possimus aliquam natus laborum. Cum necessitatibus maiores iure dolorem quas tempora ad assumenda.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
