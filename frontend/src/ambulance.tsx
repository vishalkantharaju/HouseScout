import ambulance from './assets/medhelp_icon_transparent.png'
import { Input } from "@/components/ui/input"

export default function Ambulance() {
    const hospital = "Dell Children's Hospital";
    const ETA = 14;
    return (
        <div className='max-w-screen max-h-screen'>

        {/* Navbar */}
        <div className="w-full border h-16 bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] fixed">
          <div className='flex items-center justify-between h-full pl-12 pr-4'>
            <div className='flex items-center'>
              <img className='w-20 h-12' src={ambulance} alt="Ambulance" />
              <p className='font-bold text-2xl text-white'>MedHelp</p>
            </div>
            <div className='font-bold text-2xl text-white pr-12'>EMS</div>
          </div>
        </div>

        {/* Right Side */}
        <div className = "flex"> 
        <div className="flex h-screen pt-16 w-7/12 bg-[#CCD6E1]">
            <div className="flex flex-col ml-10 w-full h-full">

                {/* Arriving & ETA */}
                <div className = "bg-[#FFFF] mt-3 w-11/12 h-36 rounded-lg">
                    <div className="mt-5 ml-5 font-bold text-xl bg-clip-text text-transparent bg-[#0F284C]">
                        <p>Arriving at: {hospital}</p>
                    </div>
                    <div className="mt-1 ml-5 font-bold text-xl bg-clip-text text-transparent bg-[#0F284C]">
                        <p>ETA: {ETA} mins</p>
                    </div>
                </div>

                {/* Vitals Box */}
                <div className="w-full h-full bg-[#FFFF] mt-5 mb-5 w-11/12 h-full rounded-lg flex flex-col">
                    <div className="font-bold text-2xl text-[#0F284C] text-center mt-6">
                        <p>Send Vitals</p>
                    </div>
                    <div className = "flex mt-7 ml-3">
                        {/* Right Inputs */}
                        <div className="flex flex-col h-full ml-16 mt-2 ">
                            {/* Gender */}
                            <div className="font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>Gender</p>
                            </div>
                            <Input placeholder='Gender' className='mt-2 w-36 h-7'></Input>

                            {/* Heart Rate */}
                            <div className="mt-3 font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>Heart Rate</p>
                            </div>
                            <Input placeholder='HR' className='mt-2 w-36 h-7'></Input>

                            {/* Blood Pressure */}
                            <div className="mt-3 font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>Blood Pressure</p>
                            </div>
                            <Input placeholder='BP' className='mt-2 w-36 h-7'></Input>
                        </div>

                        {/* Middle Inputs */}
                        <div className="flex flex-col h-full ml-12 mt-2 ">
                            {/* Age */}
                            <div className="font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>Age</p>
                            </div>
                            <Input placeholder='Age' className='mt-2 w-36 h-7'></Input>

                            {/* Respiratory Rate */}
                            <div className="mt-3 font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>Resp Rate</p>
                            </div>
                            <Input placeholder='BR' className='mt-2 w-36 h-7'></Input>

                            {/* Blood Glucose */}
                            <div className="mt-3 font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>Blood Glucose</p>
                            </div>
                            <Input placeholder='BG' className='mt-2 w-36 h-7'></Input>
                        </div>

                        {/* Right Inputs */}
                        <div className="flex flex-col h-full ml-12 mt-2 ">
                            {/* SPO2 */}
                            <div className="font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>SPO2</p>
                            </div>
                            <Input placeholder='SPO2' className='mt-2 w-36 h-7'></Input>

                            {/* Symp, Allergies, Meds*/}
                            <div className="mt-3 font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>Symp, Allergies, Meds</p>
                            </div>
                            <Input placeholder='SAM' className='mt-2 w-36 h-7'></Input>

                            {/* History, Intake, Events */}
                            <div className="mt-3 font-bold text-m bg-clip-text text-transparent bg-[#0F284C]">
                                <p>History, Intake, Events</p>
                            </div>
                            <Input placeholder='PLE' className='mt-2 w-36 h-7'></Input>
                        </div>
                        </div>
                    {/* Send button */}
                    <div className = 'flex justify-center'>
                        <div className="w-36 h-12 mt-8 rounded-lg bg-[#0F284C] flex items-center justify-center cursor-pointer hover:bg-blue-700">
                            <div className="text-white text-2xl font-bold text-center pb-1">Send</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex pt-16 w-5/12 flex-col">
            <div className = "ml-40 mt-28 w-56">
                <div className="cursor-pointer hover:bg-[#00B1FF] flex h-28 border-4 border-[#00B1FF] bg-[#CCD6E1] rounded-lg items-center justify-center">
                    <div className="font-bold text-2xl text-[#0F284C] text-center">
                        <p>Receive Records</p>
                    </div>
                </div>
                <div className="mt-7 cursor-pointer hover:bg-[#7749C1] flex h-28 border-4 border-[#7749C1] bg-[#CCD6E1] rounded-lg items-center justify-center">
                    <div className="font-bold text-[#0F284C] text-2xl text-center">
                        <p>Chat</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
      
    );  
  
  
}