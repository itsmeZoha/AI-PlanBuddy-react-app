import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/custom/Hero';
import Header from './components/custom/Header'; // ✅ import your Header

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      {/* <Header user={user} setUser={setUser} />  */}
      <Hero />
    </>
  );
}

export default App;

