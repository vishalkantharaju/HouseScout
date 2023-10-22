import ambulance from './assets/medhelp_icon_transparent.png'
import { Input } from "@/components/ui/input"
import { useState } from 'react'


export default function Login() {
    const [user, setUser] = useState('');
    
    return (
        <div className='max-w-screen max-h-screen'>
            <div className="w-full h-16 bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] fixed">
                <div className='flex items-center justify-start h-full pl-12'>
                    <img className='w-20 h-12' src={ambulance}></img>
                    <p className = 'font-bold text-2xl text-white'>
                    MedHelp
                    </p>
                </div>
            </div>
            <div className='border-black border-2 h-full bg-[url("assets/layered-waves-haikei-5.svg")] h-screen bg-no-repeat bg-cover bg-bottom flex items-center justify-center'>
                <div className='bg-white h-fit pb-8 w-96 rounded-xl shadow-lg slide-in-up'>
                    <div className='flex w-full border-b-2 h-16'>
                        <div style={{backgroundColor: `${user == 'Hospital' ? '#e63eb2' : ''}`}} className='w-1/2 items-center justify-center flex cursor-pointer hover:bg-[#f28fd4] transition-bg rounded-tl-xl hover:rounded-tl-xl'>
                            <p onClick={() => {setUser('Hospital')}} className='w-full h-full items-center flex justify-center font-bold text-xl active:scale-90'>
                                Hospital
                            </p>
                        </div>
                        <div className='border-[1px]'></div>
                        <div style={{backgroundColor: `${user == 'EMS' ? '#4ac8ff' : ''}`}} className='w-1/2 items-center justify-center flex cursor-pointer hover:bg-[#87daff] hover:rounded-tr-xl transition-bg rounded-tr-xl'>
                            <p onClick={() => {setUser('EMS')}} className='w-full h-full items-center flex justify-center font-bold text-xl active:scale-90'>
                                EMS
                            </p>
                        </div>
                    </div>
                    <div className='text-center align-center pt-8 text-4xl font-bold w-full'>
                        Sign In
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div className='w-3/4'>
                            <div className='w-fit'>
                                Username
                                <div className='bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] h-[2px]'></div>
                            </div>
                            <Input placeholder='Type your username' className='mt-2'/>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div className='w-3/4'>
                            <div className='w-fit'>
                                Password
                                <div className='bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] h-[2px]'></div>
                            </div>
                            <Input placeholder='Type your password' className='mt-2'/>
                        </div>
                    </div>
                    <div className='w-full flex justify-center align-center mt-8'>
                        <div className='border-2 border-black px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all active:scale-95 hover:bg-[#bfa4eb]'>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}