import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3500/api/questions')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error('Savollar yuklanmadi:', err));
  }, []);

  const handleShowAnswer = async () => {
    if (!showAnswer) {
      setShowAnswer(true);
      const response = await fetch(`http://localhost:3500/api/questions/${currentQuestionIndex + 1}`);
      const data = await response.json();
      setAnswers([...answers, { question: questions[currentQuestionIndex].question, answer: data.answer }]);
    } else {
      setShowAnswer(false);
      setCurrentQuestionIndex((prev) => prev + 1);
      if (currentQuestionIndex === questions.length - 1) {
        setResults(answers);
      }
    }
  };

    const handleBack = () => {
    navigate('/');
    }
  return (
    <div>
        <button style={{position: 'fixed', padding: '10px 20px', left: '20px', top: '20px', border: '0', background: 'blue', borderRadius: '5px', color: 'white'}} onClick={handleBack}>Ortga</button>
      <h1>Hazillar Sayti</h1>
      {currentQuestionIndex < questions.length ? (
        <div className="card">
          <h2 className="question-text">
            {questions[currentQuestionIndex]?.question}
          </h2>
          {showAnswer && (
            <p className="answer-text">
              {answers[answers.length - 1]?.answer}
            </p>
          )}
          <button
            onClick={handleShowAnswer}
            className="button"
          >
            {showAnswer ? 'Keyingi savol' : 'Javobni ko\'rsat'}
          </button>
        </div>
      ) : (
        <div className="card">
          <h2 className="question-text">Natijalar</h2>
          <table className="result-table">
            <thead>
              <tr>
                <th>Savol</th>
                <th>Javob</th>
              </tr>
            </thead>
            <tbody>
              {answers.map((item, index) => (
                <tr key={index}>
                  <td>{item.question}</td>
                  <td>{item.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Questions;