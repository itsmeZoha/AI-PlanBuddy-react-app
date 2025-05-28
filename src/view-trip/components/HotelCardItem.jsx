import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import slider from './../../assets/slider.jpg';


function HotelCardItem({ hotel }) {
  const [PhotoUrl,setPhotoUrl]=useState();
    useEffect(()=>{
      hotel&&GetPlacePhoto();
    },[hotel])
  
    const GetPlacePhoto=()=>{
      const data={
        textQuery:hotel?.name
      }
      const result= GetPlaceDetails(data).then(resp=>{
        // console.log(resp.data.places[0].photos[3].name);
  
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
        setPhotoUrl(PhotoUrl);
      })
    }
//     const GetPlacePhoto = async () => {
//   try {
//     const data = {
//       textQuery: trip?.userSelection?.location?.label
//     };

//     const resp = await GetPlaceDetails(data);

//     if (resp.data?.places?.[0]?.photos?.length > 0) {
//       const photoName = resp.data.places[0].photos[0].name; // pick first photo safely
//       const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
//       setPhotoUrl(photoUrl);
//     } else {
//       console.warn('No photos found for this place.');
//       setPhotoUrl(null);
//     }

//   } catch (error) {
//     console.error('Error fetching place photo:', error);
//     setPhotoUrl(null);
//   }
// };


  // const getPlacePhoto = async () => {
  //   try {
  //     const data = {
  //       textQuery: hotel.name
  //     };
  //     const resp = await GetPlaceDetails(data);
  //     const photos = resp?.data?.places?.[0]?.photos || [];
  //     const photoRef = photos?.[0]?.photo_reference;  // Handle multiple photos

  //     if (photoRef) {
  //       const url = PHOTO_REF_URL.replace('{PHOTO_REFERENCE}', photoRef);
  //       setPhotoUrl(url);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching place photo:', error);
  //   }
  // };

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={PhotoUrl?PhotoUrl:slider}
  //         onError={(e) => {
  //   if (e.target.src !== slider) {
  //     // If PhotoUrl fails, try slider
  //     e.target.onerror = null;
  //     e.target.src = slider;
  //   } else {
  //     // If slider also fails, fallback to Google placeholder
  //     e.target.onerror = null;
  //     e.target.src = 'https://via.placeholder.com/400x180?text=Image+Not+Available';
  //   }
  // }}
          onError={(e) => {
    e.target.onerror = null;
    e.target.src = slider;
  }}
          className="rounded-xl h-[180px] w-full object-cover"
          alt={hotel.name || "Hotel"}
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel.name}</h2>
          <h2 className="text-xs text-gray-500">🏕️ {hotel.description}</h2>
          <h2 className="text-xs text-gray-500">🏨 {hotel.hotelAddress}</h2>
          <h2 className="text-xs text-gray-500">🚕 {hotel.travelTimeToAirport}</h2>
          <h2 className="text-xs text-gray-500">💰 {hotel.price}</h2>
          <h2 className="text-xs text-gray-500">⭐ {hotel.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;


// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import slider from './../../assets/slider.jpg';

// function HotelCardItem({ index, hotel }) {
//   const [photoUrl, setPhotoUrl] = useState(null);

//   useEffect(() => {
//     if (hotel?.name) {
//       getPlacePhoto();
//     }
//   }, [hotel]);

//   const getPlacePhoto = async () => {
//     try {
//       const data = {
//         textQuery: hotel.name
//       };
//       const resp = await GetPlaceDetails(data);
//       const photoRef = resp?.data?.places?.[0]?.photos?.[0]?.name;
//       if (photoRef) {
//         setPhotoUrl(PHOTO_REF_URL.replace('{NAME}', photoRef));
//       }
//     } catch (error) {
//       console.error('Error fetching place photo:', error);
//     }
//   };

//   return (
//     <Link
//       to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <div className="hover:scale-105 transition-all cursor-pointer">
//         <img
//           src={photoUrl || slider}
//           className="rounded-xl h-[180px] w-full object-cover"
//           alt={hotel.name || "Hotel"}
//         />
//         <div className="my-2 flex flex-col gap-2">
//           <h2 className="font-medium">{hotel.name}</h2>
//           <h2 className="text-xs text-gray-500">💴 {hotel.price}</h2>
//           <h2 className="text-xs text-gray-500">⭐ {hotel.rating}</h2>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default HotelCardItem;




// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import slider from './../../assets/slider.jpg';

// function HotelCardItem({index,hotel,trip}) {

//     const [PhotoUrl,setPhotoUrl]=useState();
//       useEffect(()=>{
//         hotel&&GetPlacePhoto();
//       },[hotel])
    
//       const GetPlacePhoto=()=>{
//         const data={
//           textQuery:hotel?.hotelName
//         }
//         const result= GetPlaceDetails(data).then(resp=>{
//           console.log(resp.data.places[0].photos[3].name);
    
//           const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
//           setPhotoUrl(PhotoUrl);
//         })
//       }
//   return (
//     <div>
//         <Link to={"https://www.google.com/maps/search/?api=1&query="+hotel?.hotelName+","+hotel?.hotelAddress} target="_blank" >
        
        
//                   <div key={index} className="hover:scale-105 transition-all cursor-pointer">
//                     <img
//                       src={PhotoUrl?PhotoUrl:slider}
//                       className="rounded-xl h-[180px] w-full object-cover"
//                       alt={trip?.tripData?.travelPlan?.hotelOptions?.hotelName || "Hotel"}
//                       />
//                     <div className="my-2 flex flex-col gap-2">
//                       <h2 className="font-medium">{hotel?.hotelName}</h2>
//                       <h2 className="text-xs text-gray-500">{hotel?.placeDetails}</h2>
//                       <h2 className="text-xs text-gray-500">💴 {hotel?.priceInfo}</h2>
//                       <h2 className="text-xs text-gray-500">📍 {hotel?.travelTimeFromAirport}</h2>
//                       <h2 className="text-xs text-gray-500">🏨 {hotel?.hotelAddress}</h2>
//                       <h2 className="text-xs text-gray-500">⭐ {hotel?.hotelRating}</h2>
//                     </div>
//                   </div>
//                       </Link>
//     </div>
//   )
// }

// export default HotelCardItem