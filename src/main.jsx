import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip/index.jsx';
import Header from './components/custom/Header';
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './view-trip/[tripId]';
import MyTrips from './my-trips';
import Footer from './components/custom/Footer';
import { UserContext } from './contexts/UserContext';

function AppWrapper() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/create-trip', element: <CreateTrip /> },
    { path: '/view-trip/:tripId', element: <Viewtrip /> },
    { path: '/my-trips', element: <MyTrips /> }
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
      <Footer />
    </UserContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <AppWrapper />
    </GoogleOAuthProvider>
  </StrictMode>,
);
