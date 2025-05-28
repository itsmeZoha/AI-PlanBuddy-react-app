import {doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '@/service/firebaseConfig'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Header from '@/components/custom/Header';
import FlightDetail from '../components/FlightDetail';
import EstimatedBudget from '../components/EstimatedBudget';

function Viewtrip() {

    const [trip,setTrip]=useState({});
    const {tripId}=useParams();

    useEffect(()=>{
        tripId&&GetTripData();
    },[tripId])

    // Used to get Trip Information from Fireeebase

    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId);
        const docSnap=await getDoc(docRef)   // Read Data->Get Data from firebase add document 
        
        if(docSnap.exists()){
            console.log('Document:',docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log('No Such Document found');
            toast('No trip Found!')
        }
    }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:56' >
        {/* information Section */}
        <InfoSection trip={trip} />
        {/* Recommended Hotels */}
        <Hotels trip={trip} />
        {/* Dail Plan */}
        <PlacesToVisit trip={trip} />
        {/* flight Details */}
        <FlightDetail trip={trip} />
        {/* Estimated Budget*/}
        <EstimatedBudget trip={trip} />
    </div>
  )
}

export default Viewtrip