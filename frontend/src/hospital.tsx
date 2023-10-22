import ambulance from './assets/medhelp_icon_transparent.png'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function Hospital() {
    const mapRef = useRef<google.maps.Map | null>(null);;

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
              .then(response => response.json() as Promise<GetAmbulanceResponse>)
              .then(data => {
                // if (data.success) {
                //     nav(`/hospital?id=${data.id}`)
                // } else {
                //     toast({
                //         title: "Wrong credentials entered!",
                //         description: "Please try again.",
                //     })
                // }
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
    return (
        <div className='max-w-screen max-h-screen'>
            {/* Navbar */}
            <div className="w-full border h-16 bg-gradient-to-r from-[#DF059C] via-[#7749C1] to-[#00B1FF] fixed">
                <div className='flex items-center justify-between h-full pl-12 pr-4'>
                    <div className='flex items-center'>
                    <img className='w-20 h-12' src={ambulance} alt="Ambulance" />
                    <p className='font-bold text-2xl text-white'>MedHelp</p>
                    </div>
                    <div className='font-bold text-2xl text-white pr-12'>Hospital</div>
                </div>
            </div>
            
            {/* <div className='h-16'></div> */}
            <div className='flex w-full h-full'>
                <div className='border-2 w-1/3'>
                    <div>
                        hihi
                    </div>
                    <div>
                        j
                    </div>
                </div>
                <div className='h-screen pt-16 w-2/3'> 
                    {/* <LoadScript googleMapsApiKey={mapsKey}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={{ lat: startingLat, lng: startingLong }}
                            zoom={13}
                            options={mapOptions}
                        > */}
                            {/* Your map content, markers, etc. go here */}
                        {/* </GoogleMap> */}
                        {/* <button className='absolute' onClick={resetToStartingLocation}>Return to Starting Location</button> */}
                    {/* </LoadScript> */}
                </div>
            </div>
        </div>
    )
}