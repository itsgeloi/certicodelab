import React, { useState } from 'react'; 
import { Mail, Lock, Eye, Fingerprint, Code, User } from 'lucide-react';


const Login = () => {
 
  const [activeTab, setActiveTab] = useState('login');
  
  

  const theme = {
    bg: 'linear-gradient(135deg, #3d4653 0%, #2d343f 100%)',
    card: '#2d343f',
    input: '#373e4a',
    accent: 'linear-gradient(90deg, #2563eb, #9333ea)',
    blue: '#3b82f6',
    textGray: '#a0a8b4'
  };
     
  const tabStyle = (type) => ({
    flex: 1,
    padding: '10px',
    background: activeTab === type ? '#2169ff' : 'transparent',
    border: 'none',
    color: activeTab === type ? 'white' : theme.textGray,
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s'
  });

  return (
    <div style={{
      backgroundColor: '#3d4653',
      backgroundImage: theme.bg,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      color: 'white',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ background: '#2563eb', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', boxShadow: '0 10px 15px rgba(37, 99, 235, 0.4)' }}>
          <Code size={30} color="white" />
        </div>
        <h1 style={{ color: theme.blue, fontSize: '24px', margin: 0 }}>CERTICODE LABS</h1>
        <p style={{ color: theme.textGray, fontSize: '14px', marginTop: '8px' }}>
          {activeTab === 'login' ? 'Welcome back, developer' : 'Create your developer account'}
        </p>
      </div>

      {/* Main Card */}
      <div style={{ background: theme.card, padding: '40px', borderRadius: '24px', width: '100%', maxWidth: '380px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        
        {/* Tab Switcher */}
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', padding: '5px', borderRadius: '10px', marginBottom: '25px' }}>
          <button onClick={() => setActiveTab('login')} style={tabStyle('login')}>Login</button>
          <button onClick={() => setActiveTab('signup')} style={tabStyle('signup')}>Sign Up</button>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Show Name field ONLY on Sign Up */}
          {activeTab === 'signup' && (
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '12px', color: theme.textGray, marginBottom: '8px' }}>Full Name</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <User size={16} style={{ position: 'absolute', left: '12px', color: theme.textGray }} />
                <input type="text" placeholder="John Doe" style={{ width: '100%', background: theme.input, border: '1px solid #4a5568', padding: '12px 12px 12px 40px', borderRadius: '10px', color: 'white', outline: 'none' }} />
              </div>
            </div>
          )}

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: theme.textGray, marginBottom: '8px' }}>Email</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail size={16} style={{ position: 'absolute', left: '12px', color: theme.textGray }} />
              <input type="email" placeholder="your@email.com" style={{ width: '100%', background: theme.input, border: '1px solid #4a5568', padding: '12px 12px 12px 40px', borderRadius: '10px', color: 'white', outline: 'none' }} />
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: theme.textGray, marginBottom: '8px' }}>Password</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock size={16} style={{ position: 'absolute', left: '12px', color: theme.textGray }} />
              <input type="password" style={{ width: '100%', background: theme.input, border: '1px solid #4a5568', padding: '12px 12px 12px 40px', borderRadius: '10px', color: 'white', outline: 'none' }} />
              <Eye size={16} style={{ position: 'absolute', right: '12px', color: theme.textGray, cursor: 'pointer' }} />
            </div>
          </div>

          <button style={{
            width: '100%',
            padding: '14px',
            border: 'none',
            borderRadius: '10px',
            background: theme.accent,
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(147, 51, 234, 0.3)'
          }}>
            {activeTab === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        {/* Biometric is usually only for Login */}
        {activeTab === 'login' && (
          <>
            <div style={{ textAlign: 'center', margin: '20px 0', color: theme.textGray, fontSize: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ flex: 1, height: '1px', background: '#4a5568' }}></div> OR <div style={{ flex: 1, height: '1px', background: '#4a5568' }}></div>
            </div>

            <button style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid #4a5568', borderRadius: '10px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer' }}>
              <Fingerprint size={20} /> Login with Biometric
            </button>
          </>
        )}

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', fontSize: '11px', color: theme.textGray }}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree with Code DNA Fingerprint technology and intelligent proctoring system</label>
        </div>
      </div>
    </div>
  );
};

export default Login;