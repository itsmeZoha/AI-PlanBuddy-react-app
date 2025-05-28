import React, { useEffect, useState } from 'react';
import slider from './../../assets/slider.jpg'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {

     const [PhotoUrl,setPhotoUrl]=useState();
      useEffect(()=>{
        trip&&GetPlacePhoto();
      },[trip])
    
      const GetPlacePhoto=()=>{
        const data={
          textQuery:trip?.userSelection?.location?.label
        }
        const result= GetPlaceDetails(data).then(resp=>{
          // console.log(resp.data.places[0].photos[3].name);
    
          const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
          setPhotoUrl(PhotoUrl);
        })
      } 
  return (
    // <Link to={'/view-trip/'+trip?.TripData?.id}> 
    <Link to={`/view-trip/${trip?.id}`}>
    <div className='hover:scale-105 transition-all cursor-pointer'>
        <img src={PhotoUrl?PhotoUrl:slider} 
        className='object-cover rounded-xl w-full h-[220px] object-fit' />
        <div>
            <h2 className='font-bold text-lg text-black'>{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget}</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem