export const SelectTravelersList = [
    {
      id: 1,
      title: 'Just Me',
      desc: 'Solo explorer on adventure',
      icon: '👦',
      people: '1 people',
    },
    {
      id: 2,
      title: 'A Couple',
      desc: 'Perfect duo exploring together',
      icon: '👫',
      people: '2 people',
    },
    {
      id: 3,
      title: 'Family',
      desc: 'Joyful family trip ahead',
      icon: '👨‍👩‍👦',
      people: '3 to 5',
    },
    {
      id: 4,
      title: 'Friends',
      desc: 'Fun with your besties',
      icon: '🏖️',
      people: '5 to 10 people',
    }
  ];

  export const SelectBudgetOptions=[{
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '💴'
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average',
    icon: '💰'
  },
  {
    id: 3,
    title: 'Luxury',
    desc: "Don't worry about money",
    icon: '💷'
  }]

  // export const AI_PROMPT='Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} with a {budget} budget with a Flight details , Flight Price with Booking url, Hotels options list with HotelName,HotelAddress,HotelRating Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location and activities in array of daily activities (structured by day) for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.'
//  export const AI_PROMPT = `You are a travel planner AI. Create a personalized trip itinerary as a **pure JSON object only** with no extra text, explanation, or formatting.

// The JSON should include:
// - "location": the travel destination
// - "days": number of travel days
// - "nights": number of nights
// - "hotels": array of 3-4 hotel recommendations (with name, price, rating, description, and travelTimeToAirport)
// - "activities": daily activities structured by day and time with details
// - "estimatedBudget": total estimated cost in USD

// Example:
// {
//   "location": "Paris",
//   "days": 3,
//   "nights": 2,
//   "hotels": [
//     {
//       "name": "Hotel Le Meurice",
//       "hotelAddress": "Location",
//       "price": 250 in doller,
//       "rating": 4.7,
//       "desc": "Elegant rooms with a view of the Tuileries Garden.",
//       "travelTimeToAirport": "10 km"
//     }
//   ],
//   "activities": [
//     "Day 1": [
//       {
//         "time": "Morning",
//         "placeName": "Eiffel Tower",
//         "details": "Take an elevator ride to the top for panoramic views.",
//         "ticketPrice": "$30",
//         "travelTime": "15 mins",
//         "imageUrl": "https://example.com/eiffel.jpg"
//       }
//     ]
// ],
//   "flightDetails": [
//   "flightOptions" : [ 
//   { 
//     "airline": "Delta, American Airlines, United, Allegiant (Common carriers to AVL)",
//     "bookingUrl": "https://www.google.com/flights or https://www.skyscanner.com (Search for flights to AVL)",
//     "disclaimer": "Flight prices and availability are highly volatile. Please check booking sites for real-time information. Prices shown are rough estimates for round-trip from a major US hub (e.g., NYC, ATL, ORD) and can vary significantly.",
//     "estimatedPricePerPerson": "USD 300 - 800+ (Economy/Comfort+ depending on origin, booking time, and class. First class considerably more.)",
//     "from": "Major US Hub Airport (e.g., JFK, LGA, ATL, ORD, CLT)",
//     "to": "Asheville Regional Airport (AVL)",
//     "suggestion": "Consider First Class or a premium cabin for a more luxurious travel experience."
// }
// ]
// ],
// "estimatedBudget":[
//   "estimate": [
//   {
//     "accommodationUSD": "6000 - 20000 (4 nights, luxury hotel/suite)",
//     "activitiesAndToursUSD": "1500 - 4000 (VIP experiences, private tours, yacht)",
//     "flightsUSD": "2000 - 10000 (Round trip, Business/First Class)",
//     "foodAndDrinksUSD": "1250 - 5000 (Fine dining, premium beverages for 5 days)",
//     "localTransportUSD": "750 - 1500 (Private car with driver for 5 days)",
//     "miscellaneousUSD": "2000 - 10000+ (Luxury shopping, tips, unforeseen expenses)",
//     "totalEstimatedUSD": "13500 - 50500+"
// }
// ]
// ],
// }


// Now, respond with only a valid JSON object for:
// Location: {location},  
// Days: {totalDays},  
// Traveler type: {traveler},  
// Budget: {budget},  
// Total nights: {totalNight}.
// `.trim();

export const AI_PROMPT = `You are a travel planner AI. Create a personalized trip itinerary as a **pure JSON object only** with no extra text, explanation, or formatting.

The JSON should include:
- "location": the travel destination
- "days": number of travel days
- "nights": number of nights
- "hotels": array of 3-4 hotel recommendations (with name, price, rating, description, and travelTimeToAirport)
- "activities": daily activities structured by day and time with details
- "nearbyAttractions": top nearby tourist places fetched from the user's coordinates (name, rating, imageUrl, distance)
- "estimatedBudget": total estimated cost breakdown in USD

Example:
{
  "location": "Paris",
  "days": 3,
  "nights": 2,
  "hotels": [
    {
      "name": "Hotel Le Meurice",
      "hotelAddress": "Location",
      "price": $250,
      "rating": 4.7,
      "description": "Elegant rooms with a view of the Tuileries Garden.",
      "travelTimeToAirport": "10 km"
    }
  ],
  "activities": {
    "Day 1": [
      {
        "time": "Morning",
        "placeName": "Eiffel Tower",
        "details": "Take an elevator ride to the top for panoramic views.",
        "ticketPrice": "$30",
        "travelTime": "15 mins",
        "imageUrl": "https://example.com/eiffel.jpg"
      }
    ]
  },
  "nearbyAttractions": [
    {
      "name": "Notre Dame Cathedral",
      "description": "Romantic cruise on the Seine with city views with in 5 to 6 words",
      "Address": "Location",
      "type": "Cruise",
      "distanceFromUser": "1.5 km",
      "rating": 4.7,
      "googleMapLink": "https://www.google.com/maps/search/Seine+River+Cruise",
      "imageUrl": "https://www.google.com/maps/search/Seine+River+Cruise",
       "ticketPrice": "$30"
    }
  ],
  "flightDetails": {
    "flightOptions": [ 
      { 
        "airline": "Delta, American Airlines, United, Allegiant (Common carriers to AVL)",
        "bookingUrl": "https://www.google.com/flights or https://www.skyscanner.com (Search for flights to AVL)",
        "disclaimer": "Flight prices and availability are highly volatile. Please check booking sites for real-time information. Prices shown are rough estimates for round-trip from a major US hub (e.g., NYC, ATL, ORD) and can vary significantly.",
        "estimatedPricePerPerson": "USD 300 - 800+ (Economy/Comfort+ depending on origin, booking time, and class. First class considerably more.)",
        "from": "Major US Hub Airport (e.g., JFK, LGA, ATL, ORD, CLT)",
        "to": "Asheville Regional Airport (AVL)",
        "suggestion": "Consider First Class or a premium cabin for a more luxurious travel experience."
      }
    ]
  },
  "estimatedBudget": {
    "accommodationUSD": "6000 - 20000 (4 nights, luxury hotel/suite)",
    "activitiesAndToursUSD": "1500 - 4000 (VIP experiences, private tours, yacht)",
    "flightsUSD": "2000 - 10000 (Round trip, Business/First Class)",
    "foodAndDrinksUSD": "1250 - 5000 (Fine dining, premium beverages for 5 days)",
    "localTransportUSD": "750 - 1500 (Private car with driver for 5 days)",
    "miscellaneousUSD": "2000 - 10000+ (Luxury shopping, tips, unforeseen expenses)",
    "totalEstimatedUSD": "13500 - 50500+"
  }
}

Now, respond with only a valid JSON object for:
Location: {location},  
Days: {totalDays},  
Traveler type: {traveler},  
Budget: {budget},  
Total nights: {totalNight}.
`.trim();
