import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

    const handleAddQuestion = () => {
        navigate('/add')
    }
    const handleQuestions = () => {
        navigate('/questions')
    }
  return (
     <div style={{ minHeight: '100vh', width: '100%', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', fontFamily: 'Segoe UI, sans-serif', padding: '0 20px' }}>
      <header style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        padding: '24px 0',
        borderBottom: '2px solid #6366f1',
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(2px)'
      }}>
        <h2 style={{ color: '#4f46e5', fontWeight: 700, letterSpacing: '1px', fontSize: '2rem', margin: 0 }}>Questions</h2>
        <button
          style={{
            padding: '10px 24px',
            fontSize: '1rem',
            background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(99,102,241,0.15)',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'background 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)'}
          onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)'}
          onClick={() => handleAddQuestion()}
        >
          + Add Question
        </button>
        <button
          style={{
            padding: '10px 24px',
            fontSize: '1rem',
            background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(99,102,241,0.15)',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'background 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)'}
          onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)'}
          onClick={() => handleQuestions()}
        >
          See Questions
        </button>
      </header>
      <main style={{
        maxWidth: '600px',
        margin: '40px auto',
        background: 'rgba(255,255,255,0.9)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(99,102,241,0.08)',
        padding: '40px 32px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#3730a3', fontSize: '2.5rem', marginBottom: '16px', fontWeight: 800, letterSpacing: '1px' }}>Hazillar Sayti</h1>
        <p style={{ color: '#6366f1', fontSize: '1.2rem', marginBottom: '12px' }}>Bu yerda savollar va javoblar bo'ladi.</p>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>Ilova hali to'liq ishlamaydi, lekin tez orada tayyor bo'ladi!</p>
      </main>
    </div>
  )
}
