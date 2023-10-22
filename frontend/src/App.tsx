import ambulance from './assets/medhelp_icon_transparent.png'
import background from './assets/ambulance_background.jpg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='max-w-screen max-h-screen'>
      <div className="w-full border h-16 bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] ">
        <div className='flex items-center justify-start h-full'>
            <img className='w-22 h-14' src={ambulance}></img>
            <p className = 'font-bold text-2xl text-white'>
              MedHelp
            </p>
        </div>
        <div>
          Login
        </div>

      </div>
    </div>
  )
}

export default App
