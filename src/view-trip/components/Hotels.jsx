import React from 'react';
import { Link } from 'react-router-dom';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  const hotels = trip?.TripData?.hotels || [];

  return (
    <div>
      <h2 className="font-black text-3xl mt-5">Hotel Recommendations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
        {hotels.map((hotel, index) => (
          <HotelCardItem hotel={hotel} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import HotelCardItem from './HotelCardItem';

// function Hotels({ trip }) {
//   const hotel = trip?.TripData?.hotels || [];

//   // if (!Array.isArray(hotels) || hotels.length === 0) {
//   //   return <p className="text-center text-gray-500 mt-4">No hotel recommendations available.</p>;
//   // }


//   return (
//     <div>
//       <h2 className="font-black text-xl mt-5">Hotel Recommendations</h2>

//       <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
//         {hotel.map((hotel, index) => (
          
//           <HotelCardItem hotel={hotel} index={index} key={index}  />

//           // <Link to={"https://www.google.com/maps/search/?api=1&query="+hotel?.hotelName+","+hotel?.hotelAddress} target="_blank" >


//           // <div key={index} className="hover:scale-105 transition-all cursor-pointer">
//           //   <img
//           //     src={PhotoUrl}
//           //     className="rounded-xl"
//           //     alt={trip?.tripData?.travelPlan?.hotelOptions?.hotelName || "Hotel"}
//           //     />
//           //   <div className="my-2 flex flex-col gap-2">
//           //     <h2 className="font-medium">{hotel?.hotelName}</h2>
//           //     <h2 className="text-xs text-gray-500">{hotel?.placeDetails}</h2>
//           //     <h2 className="text-xs text-gray-500">💴 {hotel?.priceInfo}</h2>
//           //     <h2 className="text-xs text-gray-500">📍 {hotel?.travelTimeFromAirport}</h2>
//           //     <h2 className="text-xs text-gray-500">🏨 {hotel?.hotelAddress}</h2>
//           //     <h2 className="text-xs text-gray-500">⭐ {hotel?.hotelRating}</h2>
//           //   </div>
//           // </div>
//           //     </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;
