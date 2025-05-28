
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import slider from "./../../assets/slider.jpg"
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function PlaceCardItem({ activity }) {

  const [PhotoUrl,setPhotoUrl]=useState();
      useEffect(()=>{
        activity&&GetPlacePhoto();
      },[activity])
    
      const GetPlacePhoto=()=>{
        const data={
          textQuery:activity?.placeName
        }
        const result= GetPlaceDetails(data).then(resp=>{
          // console.log(resp.data.places[0].photos[3].name);
    
          const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
          setPhotoUrl(PhotoUrl);
        })
      }

// const [PhotoUrl, setPhotoUrl] = useState();

// useEffect(() => {
//   if (activity) {
//     GetPlacePhoto();
//   }
// }, [activity]);

// const GetPlacePhoto = async () => {
//   try {
//     const data = { textQuery: activity?.placeName };

//     const resp = await GetPlaceDetails(data);

//     const places = resp.data.places;

//     if (places && places.length > 0) {
//   const photos = places[0].photos;

//   if (photos && photos.length > 0) {
//     const photoName = photos[3]?.name || photos[0]?.name;

//     if (photoName) {
//       const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
//       setPhotoUrl(photoUrl);
//     } else {
//       console.warn('Photo name is missing');
//     }
//   } else {
//     console.warn('No photos returned for this place');
//   }
// } else {
//   console.warn('No places found in response');
// }

//   } catch (error) {
//     console.error('Failed to fetch place photo:', error);
//   }
// };

  //  const [PhotoUrl,setPhotoUrl]=useState();
  //     useEffect(()=>{
  //       activity&&GetPlacePhoto();
  //     },[activity])
    
  //     const GetPlacePhoto=()=>{
  //       const data={
  //         textQuery:activity?.placeName
  //       }
  //       const result= GetPlaceDetails(data).then(resp=>{
  //         // console.log(resp.data.places[0].photos[3].name);
    
  //         const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
  //         setPhotoUrl(PhotoUrl);
  //       })
  //     }

  if (!activity) return null;

  return (
    <div className="border p-4 rounded-md shadow-md bg-white  hover:scale-105 transition-all ">

       {/* <img
                src={PhotoUrl?PhotoUrl:slider}
                className="rounded-xl h-[180px] w-full object-cover"
                alt={activity.name || "Hotel"}
              /> */}
      {/* {(PhotoUrl || activity?.imageUrl || slider) && ( */}
  <img
    src={PhotoUrl ? PhotoUrl : slider}
     //  onError={(e) => {
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
    alt={activity.placeName}
    className="mt-2 w-full h-40 object-cover rounded"
  />
{/* )} */}
      <h3 className="font-semibold text-lg text-orange-700">{activity.placeName}</h3>
      <p className="text-sm text-gray-600">{activity.details}</p>
      <p className="text-xs text-gray-500">🕒 {activity.time}</p>
      <p className="text-xs text-gray-500">🎟️ {activity.ticketPrice}</p>
      <p className="text-xs text-gray-500">🚌 {activity.travelTime}</p>
      <Link to={"https://www.google.com/maps/search/?api=1&query="+activity?.placeName} target="_blank" >
            <Button size="sm" className="text-white mt-1 "
      style={{ backgroundColor: "#FF7415" }}><MdLocationPin /></Button>
             </Link>
    </div>
  );
}

export default PlaceCardItem;








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