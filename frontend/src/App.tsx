import ambulance from './assets/medhelp_icon_transparent.png'
import background from './assets/ambulance_background.jpg'
import health_icon from './assets/Viva_Drawing.png'
import { useNavigate } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)
  const nav = useNavigate();

  return (
    <div className='max-w-screen max-h-screen'>
      <div className="w-full border h-16 bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] fixed">
        <div className='flex items-center justify-start h-full pl-12'>
              <img className='w-20 h-12' src={ambulance}></img>
              <p className = 'font-bold text-2xl text-white'>
              MedHelp
              </p>
          </div>
        <div>
          <div className='bg-[url("assets/ambulance_background.jpg")] bg-cover bg-center bg-no-repeat w-full h-screen'>
            <div className="bg-[#06101E] bg-opacity-60 w-full h-screen flex">
              <div className='pl-20'>
                <div className = 'font-bold text-5xl mt-40 h-16 bg-clip-text text-transparent bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF]'>
                  Transforming healthcare
                </div>
                <div className = 'font-bold text-4xl pt-2' style={{ fontFamily: 'Kalam, sans-serif' }}>
                  <span className = 'bg-clip-text text-transparent bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF]'>
                    one patient at a time.
                  </span>
                </div>
                <div onClick={() => {nav('/login')}} className="my-10 w-36 h-14 rounded-md bg-[#00B1FF] flex items-center justify-center cursor-pointer hover:bg-blue-700">
                  <div className="text-black text-3xl font-bold text-center pb-1">Sign In</div>
                </div>
              </div>
              <img className='w-100% h-100% scale-90 rotate-1 mx-auto mb-24 ml-24' src={health_icon}></img>
            <div/>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default App
