import ambulance from './assets/medhelp_icon_transparent.png'
import amb_icon from './assets/amb_icon.png'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { Download } from 'lucide-react';
import { Upload } from 'lucide-react';

interface GetAmbulanceResponse {
    id: string,
    date_created: Date,
    date_modified: Date,
    unit: number,
    loc: Array<number>,
    status: string,
    hospital_id: string,
    historical_data: number,
    reported: boolean
}
interface AmbHolder {
    ambulances: Array<GetAmbulanceResponse>
}

export default function Hospital() {
    const mapRef = useRef<google.maps.Map | null>(null);
    const [data, setData] = useState<null | Array<GetAmbulanceResponse>>(null);

    const startingLat = 30.302822;
    const startingLong = -97.706475;

    const nav = useNavigate();

    const resetToStartingLocation = () => {
        if (mapRef.current) {
          const map = mapRef.current;
          const startingLocation = new window.google.maps.LatLng(startingLat, startingLong);
          map.panTo(startingLocation);
        }
    };
    useEffect(() => {
        myAsyncFunction();
    })
    function sleep(ms: number): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }
      const [now, setNow] = useState(false);
      // Usage
      async function myAsyncFunction() {
        console.log("Start");
        await sleep(2000); // Wait for 2 seconds (2000 milliseconds)
        console.log("End");
        setNow(true);

      }
    // State to store car positions
    const [carPosition1, setCarPosition1] = useState([
        { lat: startingLat, lng: startingLong }, // Example car position
    ]);

    // Function to update car positions randomly
    const updateCarPositions = () => {
        // Update car positions randomly, e.g., within a specified range
        const newCarPositions = carPosition1.map((position) => ({
            lat: position.lat + (Math.random() - 0.5) * 0.01, // Adjust the range for latitude
            lng: position.lng + (Math.random() - 0.5) * 0.01, // Adjust the range for longitude
        }));
        setCarPosition1(newCarPositions);
    };
    // Use useEffect to start the interval when the component mounts
    useEffect(() => {
        const intervalId = setInterval(updateCarPositions, 2000); // Update every 2 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);


    // State to store car positions
    const [carPosition2, setCarPosition2] = useState([
        { lat: startingLat + 0.02, lng: startingLong + 0.02}, // Example car position
    ]);

    // Function to update car positions randomly
    const updateCarPositions2 = () => {
        // Update car positions randomly, e.g., within a specified range
        const newCarPositions = carPosition2.map((position) => ({
            lat: position.lat + (Math.random() - 0.5) * 0.01, // Adjust the range for latitude
            lng: position.lng + (Math.random() - 0.5) * 0.01, // Adjust the range for longitude
        }));
        setCarPosition2(newCarPositions);
    };
    // Use useEffect to start the interval when the component mounts
    useEffect(() => {
        const intervalId = setInterval(updateCarPositions2, 2000); // Update every 2 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);


    
    // State to store car positions
    const [carPosition4, setCarPosition4] = useState([
        { lat: startingLat - 0.002, lng: startingLong - 0.002}, // Example car position
    ]);

    // Function to update car positions randomly
    const updateCarPosition4 = () => {
        // Update car positions randomly, e.g., within a specified range
        const newCarPositions = carPosition4.map((position) => ({
            lat: position.lat + (Math.random() - 0.5) * 0.01, // Adjust the range for latitude
            lng: position.lng + (Math.random() - 0.5) * 0.01, // Adjust the range for longitude
        }));
        setCarPosition4(newCarPositions);
    };
    // Use useEffect to start the interval when the component mounts
    useEffect(() => {
        const intervalId = setInterval(updateCarPosition4, 2000); // Update every 2 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        const searchValue = urlParams.get('id')
        if (!searchValue) {
            nav('/login')
        } else {
            fetch(
                'http://localhost:5000' + `/api/v1/ambulance/list?id=${searchValue}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
              .then(response => response.json() as Promise<AmbHolder>)
              .then(data => {
                // if (data.success) {
                //     nav(`/hospital?id=${data.id}`)
                // } else {
                //     toast({
                //         title: "Wrong credentials entered!",
                //         description: "Please try again.",
                //     })
                // }
                // console.log(data.ambulances)
                setData(data.ambulances);
                // console.log('done')
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
        }
    }, [])

    const mapsKey = 'AIzaSyDaqXZbNjupisUXM6JumLd-ekhXgIf5P5w';

    const containerStyle = {
        width: '100%',
        height: '100%',
    };
    const mapOptions = {
        // zoomControl: false, // Enable zoom control
        // scrollwheel: false,
        streetViewControl: false,
    };
    function color(status: string) {
        if (status === 'En Route') {
            return '#FFD700';
        } else if (status === 'Stopped') {
            return 'red';
        } else if (status === 'Arrived') {
            return 'green';
        } else if (status === 'Loading') {
            return 'orange';
        }
    }

    return (
        <div className='max-w-screen max-h-screen'>
            {/* Navbar */}
            <div className="w-full border h-16 bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] z-10 fixed">
                <div className='flex items-center justify-between h-full pl-12 pr-4'>
                    <div className='flex items-center hover:cursor-pointer' onClick={() => {nav('/')}}>
                        <img className='w-20 h-12' src={ambulance} alt="Ambulance" />
                        <p className='font-bold text-2xl text-white'>MedHelp</p>
                    </div>
                    <div className='font-bold text-2xl text-white pr-12'>Hospital</div>
                </div>
            </div>
            
            {/* <div className='h-16'></div> */}
            <div className='flex w-full h-full z-0'>
                <div className='border-2 w-1/3 '>
                    <div className='h-16'/>
                    <div className='px-6 overflow-hidden bg-[#080E4B] '>
                        {data && Array.isArray(data) &&
                        data.map((item, index) => (
                            <div className='rounded-xl my-3 w-full bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] p-[4px]  '  key={index}>
                                <div className='flex h-fit bg-black rounded-lg px-0 py-0'>
                                    <div className='flex w-full drop-shadow-lg  rounded-lg p-4 bg-white'>
                                        <div className='w-20 justify-center p-2 items-center flex'>
                                            <div>
                                                <p className='w-full text-center text-3xl'>14</p>
                                                <p>minutes</p>
                                            </div>
                                        </div>
                                        <div className='ml-5'>
                                            <div className='text-lg '>
                                                Unit {item.unit}
                                            </div>
                                            <div className='flex'>
                                                <div className='text-sm'>
                                                    Status: <span style={{color: `${color(item.status)}`}}>{item.status}</span>
                                                </div>
                                            </div>
                                            <div className='flex text-sm mt-2'>
                                                {item.reported && (
                                                    <div className='rounded-xl p-1 px-2 border-[1px] cursor-pointer hover:scale-105 active:scale-95 flex'>
                                                        <Download size={18}/>
                                                        <p className='ml-1'>Condition</p>
                                                    </div>
                                                )}
                                                {!item.reported && (
                                                    <div className='rounded-xl p-1 px-2 border-[1px] cursor-default border-[#c4ccd4] flex'>
                                                        <Download size={18} color={'#c4ccd4'}/>
                                                        <p className='ml-1 text-[#c4ccd4]'>Condition</p>
                                                    </div>
                                                )}    
                                                <div className='rounded-xl p-1 px-2 border-[1px] flex ml-4'>
                                                    <MessageSquare size={18}/>
                                                    <p className='ml-1'>Chat</p>
                                                </div>
                                                <div className='rounded-xl p-1 px-2 border-[1px] flex ml-4'>
                                                    <Upload size={18}/>
                                                    <p className='ml-1'>History</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='h-screen flex-1 pt-16 w-2/3 fixed right-0'> 
                    <LoadScript googleMapsApiKey={mapsKey}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={{ lat: startingLat, lng: startingLong }}
                            zoom={13}
                            options={mapOptions}
                        >
                        {now && carPosition1.map((position, index) => (
                                <Marker
                                    key={index}
                                    position={position}
                                    icon={{
                                        url: amb_icon,
                                        scaledSize: new google.maps.Size(60, 40),
                                    }}
                                />
                            ))}
                        {now && carPosition2.map((position, index) => (
                                <Marker
                                    key={index}
                                    position={position}
                                    icon={{
                                        url: amb_icon,
                                        scaledSize: new google.maps.Size(60, 40),
                                    }}
                                />
                            ))}
                        {now && carPosition4.map((position, index) => (
                                <Marker
                                    key={index}
                                    position={position}
                                    icon={{
                                        url: amb_icon,
                                        scaledSize: new google.maps.Size(60, 40),
                                    }}
                                />
                            ))}
                            {/* Your map content, markers, etc. go here */}
                        </GoogleMap>
                        {/* <button className='absolute' onClick={resetToStartingLocation}>Return to Starting Location</button> */}
                    </LoadScript>
                </div>
            </div>
        </div>
    )
}