import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoIosSend } from "react-icons/io";
import slider from './../../assets/slider.jpg';
import { GetPlaceDetails } from '@/service/GlobalApi';

const PHOTO_REF_URL="https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key="+import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

function InfoSection({ trip }) {
  const location = trip?.userSelection?.location?.label || 'Unknown Location';
  const noOfDays = parseInt(trip?.userSelection?.noOfDays || '0');
  const budget = trip?.userSelection?.budget || 'N/A';
  const traveler = trip?.userSelection?.traveler || 'N/A';
  
  const [PhotoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label
    }
    const result = GetPlaceDetails(data).then(resp => {
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }

  // // ✅ Add message state (optional, if you have an input, connect it here)
  // const [message, setMessage] = useState("Hello from InfoSection!");

  // // ✅ WhatsApp-style send function
  // const handleSendMessage = () => {
  //   if (message.trim() !== '') {
  //     console.log("Sending message:", message.trim());
  //     // You can integrate your actual send logic here
  //     alert("Message sent: " + message.trim());
  //     setMessage(''); // Clear if needed
  //   }
  // };

  return (
    <div>
      <img src={PhotoUrl ? PhotoUrl : slider}
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
        className="w-full max-w-[1600px] h-[450px] object-center rounded-xl mx-auto" alt="Trip Banner" />
      
      <div className="flex justify-between items-center mt-4">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-black text-3xl">{location}</h2>
          <div className="flex gap-5">
            <h2 className="text-gray-500 rounded-full p-1 px-3 bg-gray-100 text-xs md:text-md">🗓️ {noOfDays} Days</h2>
            <h2 className="text-gray-500 rounded-full p-1 px-3 bg-gray-100 text-xs md:text-md">💰 {budget} Budget</h2>
            <h2 className="text-gray-500 rounded-full p-1 px-3 bg-gray-100 text-xs md:text-md">🍷 Traveler: {traveler}</h2>
          </div>
        </div>

        {/* ✅ Same button, just added onClick */}
        <Button 
          className="text-white"
          style={{ backgroundColor: "#095771" }}
          // onClick={handleSendMessage}
        >
          <IoIosSend/>
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;




// import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { IoIosSend } from "react-icons/io";
// import slider from './../../assets/slider.jpg';
// import { GetPlaceDetails } from '@/service/GlobalApi';

// const PHOTO_REF_URL="https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key="+import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

// function InfoSection({ trip }) {
  

//   const location = trip?.userSelection?.location?.label || 'Unknown Location';
//   const noOfDays = parseInt(trip?.userSelection?.noOfDays || '0');
//   const budget = trip?.userSelection?.budget || 'N/A';
//   const traveler = trip?.userSelection?.traveler || 'N/A';
  
//   // If data is invalid, show a fallback
//   // if (noOfDays <= 0) {
//   //   return <p className="text-center text-red-500 font-semibold my-5">Invalid or incomplete trip data.</p>;
//   // }
  
//   const [PhotoUrl,setPhotoUrl]=useState();
//   useEffect(()=>{
//     trip&&GetPlacePhoto();
//   },[trip])

//   const GetPlacePhoto=()=>{
//     const data={
//       textQuery:trip?.userSelection?.location?.label
//     }
//     const result= GetPlaceDetails(data).then(resp=>{
//       // console.log(resp.data.places[0].photos[3].name);

//       const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
//       setPhotoUrl(PhotoUrl);
//     })
//   }
//   return (
//     <div>
//       <img src={PhotoUrl?PhotoUrl:slider} 
//       onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = slider;
//             }}
//             //         onError={(e) => {
//         //   if (e.target.src !== slider) {
//         //     // If PhotoUrl fails, try slider
//         //     e.target.onerror = null;
//         //     e.target.src = slider;
//         //   } else {
//         //     // If slider also fails, fallback to Google placeholder
//         //     e.target.onerror = null;
//         //     e.target.src = 'https://via.placeholder.com/400x180?text=Image+Not+Available';
//         //   }
//         // }}
//       className="h-[400px] w-full object-center rounded-xl" alt="Trip Banner" />
      
//       <div className="flex justify-between items-center mt-4">
//         <div className="my-5 flex flex-col gap-2">
//           <h2 className="font-black text-2xl">{location}</h2>
//           <div className="flex gap-5">
//             <h2 className="text-gray-500 rounded-full p-1 px-3 bg-gray-100 text-xs md:text-md">🗓️ {noOfDays} Day(s)</h2>
//             <h2 className="text-gray-500 rounded-full p-1 px-3 bg-gray-100 text-xs md:text-md">💰 {budget} Budget</h2>
//             <h2 className="text-gray-500 rounded-full p-1 px-3 bg-gray-100 text-xs md:text-md">🍷 Traveler: {traveler}</h2>
//           </div>
//         </div>

//         <Button className="text-white"
//       style={{ backgroundColor: "#095771" }}>
//           <IoIosSend/>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;
