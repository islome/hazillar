import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function AddQuestion() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3500/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer }),
      });

      if (response.ok) {
        setMessage('Savol va javob muvaffaqiyatli qo\'shildi!');
        setQuestion('');
        setAnswer('');
        setTimeout(() => navigate('/'), 2000); // 2 soniyadan keyin bosh sahifaga qaytish
      } else {
        setMessage('Xatolik yuz berdi, qayta urinib ko\'ring.');
      }
    } catch (err) {
      setMessage('Server xatosi: ' + err.message);
    }
  };

  return (
    <div>
      <h1>Yangi Savol Qo'shish</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="question" className="form-label">
              Savol:
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="form-input"
              placeholder="Savolni kiriting"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer" className="form-label">
              Javob:
            </label>
            <textarea
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-input"
              placeholder="Javobni kiriting"
              required
            />
          </div>
          <button type="submit" className="button">
            Qo'shish
          </button>
        </form>
        {message && <p className="message-text">{message}</p>}
      </div>
      <button
        onClick={() => navigate('/')}
        className="button"
        style={{ marginTop: '1rem' }}
      >
        Bosh sahifaga qaytish
      </button>
    </div>
  );
}

export default AddQuestion;