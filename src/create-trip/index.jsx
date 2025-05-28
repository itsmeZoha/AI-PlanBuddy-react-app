import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelersList } from '@/constants/options';
import { chatSession } from '@/service/AIModel';
import React, {useEffect, useState} from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { toast } from "sonner"
import images2 from './../assets/images2.png';
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';



function CreateTrip() {
  const [place,setPlace]=useState();
  const [formData,setFormData]=useState({});
  const [openDailog,setOpenDailog]=useState(false);
  const navigate = useNavigate();

  const [loading,setLoading]=useState(false);

  const handleInputChange=(name,value)=>{

    setFormData({
      ...formData,
      [name]:value
    })

  }
  useEffect(()=>{
    console.log(formData)
  },[formData])

 

  const OnGenerateTrip=async()=>{

    const user=localStorage.getItem('user');
    if(!user){
      setOpenDailog(true)
      return;
    }

    if (
      formData?.noOfDays > 5 &&
      (!formData?.location || !formData?.budget || !formData?.traveler)
    ) {
      toast("Please fill all details");
      return;
    }

    setLoading(true);

    const FINAL_PROMPT=AI_PROMPT
      .replace('{location}',formData?.location?.label)
      .replace('{totalDays}',formData?.noOfDays)
      .replace('{traveler}',formData?.traveler)
      .replace('{budget}',formData?.budget)
      .replace('{totalDays}',formData?.noOfDays)
      .replace('{totalNight}',formData?.noOfDays-1);

      const result = await chatSession.sendMessage(FINAL_PROMPT) 
      console.log('--',result?.response?.text());
      setLoading(false);
      SaveAiTrip(result?.response?.text())
  }
  
//   const SaveAiTrip=async(TripData)=>{

//     setLoading(true);
  
//     const user=JSON.parse(localStorage.getItem('user'));
//     const docId=Date.now().toString()
//   await setDoc(doc(db, "AITrips", docId), {
//   userSelection:formData,
//   id:docId,
//   TripData:JSON.parse (TripData),
//   userEmail:user?.email,
// });
// setLoading(false);
// navigate('/view-trip/'+docId)
//   }

// const SaveAiTrip = async (TripDataRaw) => {
//   setLoading(true);
//   const user = JSON.parse(localStorage.getItem('user'));
//   const docId = Date.now().toString();
//   let parsedData = null;

//   try {
//     // Try to extract JSON from the string
//     const match = TripDataRaw.match(/{[\s\S]*}/);
//     if (match) {
//       parsedData = JSON.parse(match[0]);
//     } else {
//       toast("Failed to extract trip JSON from AI response.");
//       setLoading(false);
//       return;
//     }
//   } catch (error) {
//     console.error("Error parsing trip data:", error);
//     toast("Invalid trip data format.");
//     setLoading(false);
//     return;
//   }

//   await setDoc(doc(db, "AITrips", docId), {
//     userSelection: formData,
//     id: docId,
//     TripData: parsedData,
//     userEmail: user?.email,
//   });

//   setLoading(false);
//   navigate('/view-trip/' + docId);
// };

const SaveAiTrip = async (TripDataRaw) => {
  setLoading(true);
  const user = JSON.parse(localStorage.getItem('user')); // FIXED
  const docId = Date.now().toString();
  let parsedData = null;

  try {
    const match = TripDataRaw.match(/{[\s\S]*}/);
    if (match) {
      parsedData = JSON.parse(match[0]); // May still fail if JSON is malformed
    } else {
      toast("Failed to extract trip JSON from AI response.");
      setLoading(false);
      return;
    }
  } catch (error) {
    console.error("Error parsing trip data:", error);
    toast("Invalid trip data format.");
    setLoading(false);
    return;
  }

  await setDoc(doc(db, "AITrips", docId), {
    userSelection: formData,
    id: docId,
    TripData: parsedData,
    userEmail: user?.email, // FIXED
  });

  setLoading(false);
  navigate('/view-trip/' + docId);

};


const GetUserProfile = async (tokenInfo) => {

    await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo', // ✅ this is the correct URL
      {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'application/json',
        },
      }
    ).then((resp)=>{
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data));
      setOpenDailog(false);
      OnGenerateTrip();
    })
    
};


  
  const login = useGoogleLogin({
  scope: 'openid email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  onSuccess: (tokenResponse) => {
    console.log("Token Info:", tokenResponse);
    GetUserProfile(tokenResponse);
  },
  onError: (error) => console.log("Login Failed:", error),
});

  
  
  
  
   
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'> 
      <h2 className='font-bold text-3xl'>Tell us your travel preferences🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a customized itinerrary based on your preferences.</p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
        <h2 className='text-xl my-3 font-medium'>What is the destination of your choice?</h2>
          <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
            place,
            onChange:(v)=>{setPlace(v); handleInputChange('location',v)}
          }} />
        </div>
        <div>
        <h2 className='text-xl my-3 font-medium'>How many day are you planning your trips?</h2>
        <Input placeholder={'Ex.3'} type='number' min="0" 
        onChange={(e)=>handleInputChange('noOfDays',e.target.value)} />

        </div>
        <div>
        <h2 className='text-xl my-3 font-medium'>What is Your Budgets?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'> 
          {SelectBudgetOptions.map((item,index)=>(
          <div key={index} 
          onClick={()=>handleInputChange('budget',item.title)}
           className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
           ${formData?.budget==item.title&&'shadow-lg border-gray-400 border-2'}
            `}>
          <h2 className='text-4xl'>{item.icon}</h2>  
          <h2 className='font-bold text-lg'>{item.title}</h2>  
          <h2 className='text-sm text-gray-500'>{item.desc}</h2>  
          </div>

        ))} </div>
        </div>


        <div>
        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'> 
          {SelectTravelersList.map((item,index)=>(
          <div key={index} 
          onClick={()=>handleInputChange('traveler',item.people)}
          className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
            ${formData?.traveler==item.people&&'shadow-lg border-gray-400 border-2'}
             `}>
          <h2 className='text-4xl'>{item.icon}</h2>  
          <h2 className='font-bold text-lg'>{item.title}</h2>  
          <h2 className='text-sm text-gray-500'>{item.desc}</h2>  
          </div>

        ))} </div>
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button disabled={loading} className="text-white"
      style={{ backgroundColor: "#095771" }}
      onClick={OnGenerateTrip}
      
      >  {loading?
      <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' />:"Generate Trip"
      }
      </Button>
      </div>
      <Dialog open={openDailog}>
         <DialogContent>
         <DialogHeader>
          <DialogDescription>
            <div>
            <img src={images2} className="h-16 w-auto object-contain rounded-full"
            style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }} />
            <h2 className='font-bold text-lg mt-7'>
            Sign In With Google
            </h2>
            <p>Sign In to the App with Google authentication securely</p>
            <Button 
            onClick={login}
            className=" text-white w-full mt-5 flex gap-4 items-center" 
            style={{ backgroundColor: '#095771' }} >
            <FcGoogle className='h-7 w-7' />Sign In
            </Button>
            </div>
         </DialogDescription>
         </DialogHeader>
         </DialogContent>
      </Dialog>

    </div>
    
  );
}

export default CreateTrip