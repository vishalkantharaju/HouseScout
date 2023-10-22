import ambulance from './assets/medhelp_icon_transparent.png'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useRef } from 'react';

export default function Hospital() {
    const mapRef = useRef<google.maps.Map | null>(null);;

    const startingLat = 30.302822;
    const startingLong = -97.706475;

    const resetToStartingLocation = () => {
        if (mapRef.current) {
          const map = mapRef.current;
          const startingLocation = new window.google.maps.LatLng(startingLat, startingLong);
          map.panTo(startingLocation);
        }
    };

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