import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#0b0c10',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      color: '#ffffff',
    }}>
      <div style={{
        background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.15), transparent 70%)',
        borderRadius: '50%',
        padding: '40px',
        marginBottom: '20px',
        animation: 'pulseGlow 3s infinite ease-in-out'
      }}>
        <img 
          src={logo} 
          alt="Ajabeng Holdings Logo" 
          style={{
            width: '220px',
            borderRadius: '50%'
          }} 
        />
      </div>

      <h1 style={{
        fontSize: '3rem',
        color: '#ffd700',
        letterSpacing: '1px',
        marginBottom: '10px'
      }}>
        Ajabeng Holdings LLC
      </h1>

      <p style={{
        fontSize: '1.2rem',
        color: '#d1d1d1',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        Empowering Technology, Infrastructure, and Innovation.
      </p>

      <a 
        href="mailto:info@ajabengholdings.com"
        style={{
          marginTop: '40px',
          padding: '14px 40px',
          backgroundColor: '#0056b3',
          color: '#fff',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => e.target.style.backgroundColor = '#003d82'}
        onMouseLeave={e => e.target.style.backgroundColor = '#0056b3'}
      >
        Contact Us
      </a>
    </div>
  )
}

export default App
