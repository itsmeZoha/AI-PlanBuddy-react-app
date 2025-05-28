import axios from "axios";

const BASE_URL='https://places.googleapis.com/v1/places:searchText';

const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask': 'places.photos,places.displayName,places.id'
        
    }
};
export const GetPlaceDetails=(data)=>axios.post(BASE_URL,data,config);
export const PHOTO_REF_URL="https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1200&key="+import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
// const url =             `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(hotel?.hotelName)}&key=YOUR_API_KEY`;
