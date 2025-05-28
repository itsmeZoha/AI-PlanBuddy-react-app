import React, { useEffect, useState } from 'react'
import images2 from './../../assets/images2.png';
import { Button } from "./../ui/button";
import { useUser } from './../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FcGoogle } from "react-icons/fc";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/components/ui/dialog";
import axios from 'axios';

function Header() {
  const { user, setUser } = useUser();
  const [openDailog, setOpenDailog] = useState(false);

  const GetUserProfile = async (tokenInfo) => {
    try {
      const resp = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'application/json',
        },
      });

      localStorage.setItem('user', JSON.stringify(resp.data));
      setUser(resp.data); 
       window.location.reload();
      setOpenDailog(false);
    } catch (error) {
      console.error("Failed to get user profile:", error);
    }
  };

  const login = useGoogleLogin({
    scope: 'openid email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    onSuccess: (tokenResponse) => {
      console.log("Token Info:", tokenResponse);
      GetUserProfile(tokenResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null);  
    navigate('/');
     window.location.reload(); 
  };

  return (
    <div className='p-4 shadow-sm flex justify-between items-center px-10'>
      <a href='/'> 
      <img src={images2} className="h-16 w-auto object-contain rounded-full"
        style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }} />
      </a>
      <div>
        {user ? (
          <div className='flex items-center gap-3'>
            <a href='/create-trip'>
              <Button variant='outline'
                style={{ backgroundColor: "#fff", boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)", borderRadius: "8px" }}
                className='rounded-lg text-[#095771] hover:text-[#427181]'>+ Create Trip</Button>
            </a>
            <a href='/my-trips'>
              <Button variant='outline'
                style={{ backgroundColor: "#fff", boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)", borderRadius: "8px" }}
                className='rounded-lg text-[#095771] hover:text-[#427181]'>My Trips</Button>
            </a>
            <Popover>
              <PopoverTrigger className="rounded-full" style={{ padding: 0 }}>
                <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' />
              </PopoverTrigger>
              <PopoverContent>
            <a href='/'>
                <h2 className='cursor-pointer text-[#095771] hover:text-[#095771]' onClick={handleLogout}>Logout</h2>
            </a>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button className="text-[#095771] px-4 py-2 rounded"
            style={{ backgroundColor: '#6acaea' }}
            onClick={() => setOpenDailog(true)}>
            Sign In
          </Button>
        )}
      </div>
      <Dialog open={openDailog} onOpenChange={setOpenDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div>
                <img src={images2} className="h-16 w-auto object-contain rounded-full"
                  style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }} />
                <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
                <p>Sign In to the App with Google authentication securely</p>
                <Button
                  onClick={login}
                  className="text-white w-full mt-5 flex gap-4 items-center"
                  style={{ backgroundColor: '#095771' }}>
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

export default Header;
