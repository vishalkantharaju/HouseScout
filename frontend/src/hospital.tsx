import ambulance from './assets/medhelp_icon_transparent.png'

export default function Hospital() {
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
            <div className='h-16'></div>
            <div className='flex w-full h-full'>
                <div className='border-2'>
                    hi
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}