import React, { useState } from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  // Not really used in current logic, you can even remove it
  // const [activityListState, setActivityListState] = useState([]);

  const activities = trip?.TripData?.activities || [];

  if (!activities || typeof activities !== 'object') {
    return <p className="text-center text-gray-500 mt-4">No activities available.</p>;
  }

  return (
    <div>
      <h2 className="font-black text-3xl mt-5">Places to Visit</h2>
      
      {Object.entries(activities)
        .sort(([aKey], [bKey]) => {
          const aDay = parseInt(aKey.replace('Day ', ''));
          const bDay = parseInt(bKey.replace('Day ', ''));
          return aDay - bDay;
        })
        .map(([dayKey, dayActivities], index) => (
          <div key={index} className="mt-5">
            <h3 className="font-medium text-lg text-orange-600">{dayKey}</h3>
            {/* Remove this because activities.time is not valid, activities is object of days */}
            {/* <h3 className='text-orange-600'>{activities.time}</h3> */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-2">
              {Array.isArray(dayActivities) ? (
                dayActivities.map((activity, i) => (
                  <PlaceCardItem key={i} activity={activity} />
                  // <PlaceCardItem key={i} activity={activity} />
                ))
              ) : (
                <p className="text-gray-400 col-span-full">No activities found for this day.</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default PlacesToVisit;


// // import React from 'react';
// // import PlaceCardItem from './PlaceCardItem';

// // function PlacesToVisit({ trip }) {
// //   const [activityList, setActivityList] = useState([]);

// //   const activities = trip?.TripData?.activities;
// //   // const activityList = activities[day];

// //   if (!activities || typeof activities !== 'object') {
// //     return <p className="text-center text-gray-500 mt-4">No activities available.</p>;
    
// //   }
// //   // const activityList = activities[day];

// //   return (
// //     <div>
// //       <h2 className="font-black text-3xl mt-5">Places to Visit</h2>
      
// //       {Object.entries(activities)
      
// //   .sort(([aKey], [bKey]) => {
    
// //     const aDay = parseInt(aKey.replace('Day ', ''));
// //     const bDay = parseInt(bKey.replace('Day ', ''));
// //     return aDay - bDay;
// //   })
// //   .map(([dayKey, activityList], index) => (
    
// //     <div key={index} className="mt-5">
// //       <h3 className="font-medium text-lg text-orange-600">Day {parseInt(dayKey.replace('Day ', ''))}</h3>
// //       <h3 className='text-orange-600'>{activities.time}</h3>
// //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2 ">
// //         {/* {Array.isArray(activityList) &&
// //   activityList.map((activity, i) => (
// //     <PlaceCardItem key={i} activity={activity} />
// // ))} */}
// //         {activityList.map((activity, i) => (
// //           <PlaceCardItem key={i} activity={activity} />
// //         ))}
// //       </div>
// //     </div>
// // ))}
// //     </div>
// //   );
// // }

// // export default PlacesToVisit;




// import React from 'react';
// import PlaceCardItem from './PlaceCardItem';

// function PlacesToVisit({ trip }) {
//   return (
//     <div>
//       <h2 className="font-black text-3xl mt-5">Places to Visit</h2>
//       <div>
//         {trip?.TripData?.travelPlan?.dailyItinerary.map((item, index) => (
//           <div key={index} className='mt-5'>
//             <h3 className="font-medium text-lg mt-1">Day {item.day} </h3>
            
//             <h3 className="font-medium text-lg mt-2 text-orange-700">{item.theme}</h3>
//             <div className="grid  md:grid-cols-2 gap-5">
//             {item.schedule?.map((activity, i) => (
//               <div key={i} className="my-3">

//                 <h2 className="font-medium text-sm text-orange-500">{activity.time}</h2>
//                 <PlaceCardItem activity={activity} />
//                 {/* <p className="text-sm text-gray-600">{activity.placeName}</p> */}
//                 {/* <p className="text-sm text-orange-300">{activity.time}</p> */}
//                 {/* <p className="text-xs text-gray-500">{activity.details}</p> */}
//                 {/* <p className="text-xs text-gray-500">Ticket Price: {activity.ticketPrice}</p> */}
//                 {/* <p className="text-xs text-gray-500">Travel Time: {activity.travelTime}</p> */}
//                 {/* {activity.imageUrl && (
//                   <img src={activity.imageUrl} alt={activity.activity} className="mt-2 w-full max-h-56 object-cover" />
//                 )} */}
//               </div>
//             ))}
//             </div>
//           </div>

//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;



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
