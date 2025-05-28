import React from 'react';

function FlightDetail({ trip }) {
  const advisories = trip?.TripData?.flightDetails?.flightOptions ?? [];

  return (
    <div>
      <h2 className="font-black text-3xl mt-5">Flight Details</h2>

      {advisories.length === 0 ? (
        <p className="text-gray-600 mt-3">No flight information available at the moment.</p>
      ) : (
        advisories.map((advice, index) => (
          <div key={index} className="my-5 border p-4 rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-orange-700">
              From: {advice.from} ➜ To: {advice.to}
            </h3>

            <p className="text-sm text-gray-800 mt-2">
              <strong>Airline:</strong> {advice.airline}
            </p>

            <p className="text-sm text-gray-800 mt-1">
              <strong>Estimated Price:</strong> {advice.estimatedPricePerPerson}
            </p>

            <p className="text-sm text-gray-800 mt-1">
              <strong>Suggestion:</strong> {advice.suggestion}
            </p>

            {/* <p className="text-sm text-gray-800 mt-1">
              <strong>Note:</strong> {advice.note}
            </p> */}

            <p className="text-xs text-gray-500 mt-2 italic"><strong>Disclaimer:</strong> {advice.disclaimer}</p>

            <p className="text-sm text-blue-600 mt-2">
              <a href="https://www.google.com/flights" target="_blank" rel="noopener noreferrer">
                Google Flights
              </a>{' '}
              |{' '}
              <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer">
                Skyscanner
              </a>{' '}
              |{' '}
              <a href="https://www.wanderu.com" target="_blank" rel="noopener noreferrer">
                Wanderu  
              </a>{' '}
               |{' '}
              <a href="https://www.piac.com.pk/" target="_blank" rel="noopener noreferrer">
                   PIA
              </a>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default FlightDetail;





// import React from 'react';

// function PlacesToVisit({ trip }) {
//   return (
//     <div>
//       <h2 className="font-black text-xl mt-5">Places to Visit</h2>
//       <div>
//         {trip?.TripData?.travelPlan?.dailyItinerary.map((item, index) => (
//           <div key={index}>
//             <h2 className="font-medium text-lg">{item.day}</h2>
//             {item.plan?.map((place, i) => (
//               <div key={i}>
//                 <h2 className="font-medium text-sm text-orange-300">{place.time}</h2>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;


// import React, { useEffect, useState } from 'react';
// import { MdLocationPin } from "react-icons/md";
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { db } from '@/firebase'; // adjust path to your firebase config
// import { doc, getDoc } from 'firebase/firestore';
// import flightImage from "./../../assets/slider.jpg";

// function FlightDetail({ trip }) {
  
//  const flight=trip?.TripData

//   // if (loading) {
//   //   return <p className="text-center text-gray-500 mt-4">Loading flight details...</p>;
//   // }

//   if (!flight) {
//     return <p className="text-center text-gray-500 mt-4">No flight details available.</p>;
//   }

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto mt-6 border border-gray-200">
//       <h2 className="text-2xl font-bold text-orange-700 mb-4">Flight Details</h2>

//       <div className="border p-4 rounded-md shadow-md bg-white hover:scale-105 transition-all">
//         <img
//           src={flightImage}
//           alt="Flight"
//           className="mt-2 w-full h-40 object-cover rounded"
//         />

//         <h3 className="font-semibold text-lg text-orange-700 mt-3">
//           ✈️ {flight?.from || "Origin Unknown"} → {flight?.to || "Destination Unknown"}
//         </h3>

//         <p className="text-sm text-gray-600 mt-1">🛩️ <strong>Airline:</strong> {flight?.airline || "N/A"}</p>
//         <p className="text-sm text-gray-600">💰 <strong>Price/Person:</strong> {flight?.estimatedPricePerPerson || "N/A"}</p>
//         {flight?.suggestion && (
//           <p className="text-sm text-gray-600 italic mt-1">{flight?.suggestion}</p>
//         )}

//         {flight.bookingUrl && (
//           <Link to={flight?.bookingUrl.split(' ')[0]} target="_blank" rel="noopener noreferrer">
//             <Button
//               size="sm"
//               className="text-white mt-3"
//               style={{ backgroundColor: "#FF7415" }}
//             >
//               Book Now <MdLocationPin className="ml-1" />
//             </Button>
//           </Link>
//         )}

//         {flight?.disclaimer && (
//           <p className="text-xs text-gray-500 mt-3">{flight?.disclaimer}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FlightDetail;




// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react';
// import slider from "./../../assets/slider.jpg"
// import { MdLocationPin } from "react-icons/md";
// import { Link } from 'react-router-dom/';
// import { Button } from '@/components/ui/button';

// function FlightDetail({ trip }) {
// const flight = trip?.flightDetails;

//   if (!flight || typeof flight !== 'object') {
//     return <p className="text-center text-gray-500 mt-4">No activities available.</p>;
//   }

//   return (
//     <div>
//       <h2 className="font-black text-3xl mt-5">Flight Details</h2>
      
//       {Object.entries(activities)
//   .sort(([aKey], [bKey]) => {
//     const aDay = parseInt(aKey.replace('Day ', ''));
//     const bDay = parseInt(bKey.replace('Day ', ''));
//     return aDay - bDay;
//   })
//   .map(([dayKey, activityList], index) => (
//     <div key={index} className="mt-5">
//       <h3 className="font-medium text-lg text-orange-600">Day {parseInt(dayKey.replace('Day ', ''))}</h3>
//       <h3 className=''>{flight.time}</h3>
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2 ">
//         {activityList.map((flight, i) => (
//           <FlightDetail key={i} flight={flight} />
//         ))}
//       </div>
//     </div>
// ))}
//     </div>
//   );
// }

// export default FlightDetail;








// import React, { useEffect, useState } from 'react'
// import slider from './../../assets/slider.jpg';
// import { Button } from '@/components/ui/button';
// import { MdLocationPin } from "react-icons/md";
// import { Link } from 'react-router-dom';
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

// function PlaceCardItem({activity,trip}) {

//    const [PhotoUrl,setPhotoUrl]=useState();
//     useEffect(()=>{
//       trip&&GetPlacePhoto();
//     },[trip])
  
//     const GetPlacePhoto = async () => {
//   const query = activity?.placeName?.trim();

//   if (!query) {
//     console.warn("Invalid or missing placeName:", activity);
//     return;
//   }

//   const data = { textQuery: query };

//   try {
//     const resp = await GetPlaceDetails(data);
//     const photos = resp?.data?.places?.[0]?.photos;

//     if (photos && photos.length > 0) {
//       const photoIndex = Math.min(3, photos.length - 1);
//       const photoUrl = PHOTO_REF_URL.replace('{NAME}', photos[photoIndex].name);
//       setPhotoUrl(photoUrl);
//     }
//   } catch (error) {
//     console.error("Failed to fetch place photo:", error?.response?.data || error.message);
//   }
// };

//     // const GetPlacePhoto=()=>{
//     //   const data={
//     //     textQuery:trip?.userSelection?.location?.label
//     //   }
//     //   const result= GetPlaceDetails(data).then(resp=>{
//     //     // console.log(resp.data.places[0].photos[3].name);
  
//     //     const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
//     //     setPhotoUrl(PhotoUrl);
//     //   })
//     // }

//   return (
//     <div className='border rounded-xl p-3 mt-2 flex gap-5 
//      hover:shadow-md cursor-pointer hover:scale-105 transition-all'>
//         <img src={PhotoUrl?PhotoUrl:slider} className="rounded-xl w-[130px] h-[130px] object-cover" />
//         <div>
//             <p className="font-bold text-lg">{activity.placeName}</p>
//             <p className="text-xs text-gray-400">{activity.details}</p>
//             <p className="text-xs text-gray-400">🕙 Travel Time: {activity.travelTime}</p>
//             {/* <p className="text-sm text-orange-400">{activity.time}</p>  */}
//             <Link to={"https://www.google.com/maps/search/?api=1&query="+activity?.placeName} target="_blank" >
//             <Button size="sm" className="text-white mt-1"
//       style={{ backgroundColor: "#FF7415" }}><MdLocationPin /></Button>
//       </Link>
//         </div>
//     </div>
//   )
// }

// export default PlaceCardItem