import React, { useState } from 'react';
import Signin from './Signin'; 
import Signup from './Signup'; 

export default function Landing() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#e5e7eb] flex items-center justify-center p-4">
      {isLogin ? (
        <Signin onSwitchToSignup={() => setIsLogin(false)} />
      ) : (
        <Signup onSwitchToSignin={() => setIsLogin(true)} />
      )}
    </div>
  );
}