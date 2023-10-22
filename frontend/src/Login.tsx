import ambulance from './assets/medhelp_icon_transparent.png'
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"

interface HospitalLoginResponse {
    id: string
}


export default function Login() {
    const [user, setUser] = useState('');
    const [usery, setUsername] = useState<string>('');
    const [passy, setPassword] = useState<string>('');
    const { toast } = useToast();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    function login() {
        if (user === '') {
            toast({
                title: "Uh-oh! Looks like you forgot to fill out a field!",
                description: "Please make sure to select whether you are a hospital or EMS!",
            })
            return;
        } else if (user == 'Hospital') {
            fetch(
                'http://127.0.0.1:5000' + `/api/v1/hospital/login?fakeusery=${usery}&fakepassy=${passy}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
              .then(response => response.json() as Promise<HospitalLoginResponse>)
              .then(data => {
                console.log(data)
                // setOrganizationData(data.clubs)
                // setFilteredData(data.clubs)
                // if (data.clubs.length == 0) {
                //     setNoResults(true)
                // }
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
        }

    }
    
    return (
        <div className='max-w-screen max-h-screen'>
            <div className="w-full h-16 bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] fixed z-10">
                <div className='flex items-center justify-start h-full pl-12'>
                    <img className='w-20 h-12' src={ambulance}></img>
                    <p className = 'font-bold text-2xl text-white'>
                    MedHelp
                    </p>
                </div>
            </div>
            <div className='border-black border-2 h-full bg-[url("assets/layered-waves-haikei-5.svg")] min-h-screen h-fit bg-no-repeat bg-cover bg-bottom flex items-center justify-center'>
                <div className='bg-white h-fit pb-8 w-96 rounded-xl shadow-lg slide-in-up my-36 z-0'>
                    <div className='flex w-full border-b-2 h-16'>
                        <div style={{backgroundColor: `${user == 'Hospital' ? '#e63eb2' : ''}`}} className='w-1/2 items-center justify-center flex cursor-pointer hover:bg-[#f28fd4] transition-bg rounded-tl-xl hover:rounded-tl-xl'>
                            <p onClick={() => {setUser('Hospital')}} className='w-full h-full items-center flex justify-center font-bold text-xl active:scale-90'>
                                Hospital
                            </p>
                        </div>
                        <div className='border-[1px]'></div>
                        <div style={{backgroundColor: `${user == 'EMS' ? '#33c1ff' : ''}`}} className='w-1/2 items-center justify-center flex cursor-pointer hover:bg-[#87daff] hover:rounded-tr-xl transition-bg rounded-tr-xl'>
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
                            <Input placeholder='Type your username' className='mt-2' value={usery} onChange={handleUsernameChange}/>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div className='w-3/4'>
                            <div className='w-fit'>
                                Password
                                <div className='bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] h-[2px]'></div>
                            </div>
                            <Input placeholder='Type your password' className='mt-2' value={passy} onChange={handlePasswordChange}/>
                        </div>
                    </div>
                    <div className='w-full flex justify-center align-center mt-8'>
                        <div onClick={login} className='border-2 border-black px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all active:scale-95 hover:bg-[#bfa4eb] active:bg-[#946ad9]'>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}