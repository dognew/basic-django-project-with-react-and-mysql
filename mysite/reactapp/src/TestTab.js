import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const serviceId = 'service_p3zylr4';
const templateId = 'template_40an9xm';
const userId = 'DiMMYIIFfkgEAzdZ_';

const questions = [
  'Você se sente emocionalmente exausto(a) com frequência?',
  'Você sente que não está dando conta das suas atividades no trabalho ou em casa?',
  'Você se sente desvalorizado(a) ou sem reconhecimento?',
  'Você sente que está investindo muita energia emocional no trabalho?',
  'Você tem dificuldade de se desconectar do trabalho nos momentos de descanso?',
  'Você sente que está negligenciando suas necessidades pessoais por causa do trabalho?',
  'Você sente que sua eficácia no trabalho está diminuindo?',
  'Você se sente irritado(a) ou impaciente com colegas ou clientes?',
  'Você sente que sua vida social está sendo afetada pelo trabalho?',
  'Você tem problemas para dormir devido ao estresse relacionado ao trabalho?'
];

function TestTab() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [profession, setProfession] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [answers, setAnswers] = useState(Array(10).fill(0));
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const sum = answers.reduce((total, answer) => total + answer, 0);
    const average = sum / answers.length;

    if (average < 2) {
      setMessage('Continue cuidando de sua saúde.Ela é importante"');
    } else {
      setMessage('Considere buscar ajuda médica, Temos uma lista de profissionais em nosso site.');
    }

    setResult(average);
  };

  const handleSendResult = async () => {
    if (!email) {
      alert('Por favor, informe um endereço de e-mail válido.');
      return;
    }

    try {
      const templateParams = {
        from_name: name,
        to_email: email,
        subject: 'Resultado do Teste de Burnout',
        result: result.toFixed(2),
        message: message,
        age: age,
        gender: gender,
        profession: profession,
        city: city,
        state: state,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      console.log('E-mail enviado com sucesso:', response);
      alert('Resultado enviado por e-mail com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.');
    }
  };

  const handleRestartTest = () => {
    setAnswers(Array(10).fill(0));
    setResult(null);
    setMessage('');
  };

  return (
    <div className="tab-content">
      <h2>Teste de Burnout</h2>
      <div className="input-group">
        <div className="input-group-left">
          <input type="text" placeholder="Nome" value={name} onChange={handleNameChange} />
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="text" placeholder="Idade" value={age} onChange={(e) => setAge(e.target.value)} />
          <input type="text" placeholder="Sexo" value={gender} onChange={(e) => setGender(e.target.value)} />
          <input type="text" placeholder="Profissão" value={profession} onChange={(e) => setProfession(e.target.value)} />
          <input type="text" placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder="Estado" value={state} onChange={(e) => setState(e.target.value)} />
        </div>
      </div>
      <p>Responda às seguintes perguntas (de 1 a 5):</p>
      <ol className="questions-list">
        {questions.map((question, index) => (
          <li key={index}>
            <div className="question-container">
              <p className="question-text">{question}</p>
              <div className="options">
                <select value={answers[index]} onChange={(e) => handleAnswerChange(index, parseInt(e.target.value))}>
                  <option value={0}>Nenhum</option>
                  <option value={1}>Pouco</option>
                  <option value={2}>Moderado</option>
                  <option value={3}>Frequente</option>
                  <option value={4}>Muito Frequente</option>
                </select>
              </div>
            </div>
            <hr className="question-separator" />
          </li>
        ))}
      </ol>
      <button onClick={calculateResult}>Calcular Resultado</button>
      {result !== null && (
        <div className="result">
          <p>Resultado: {result.toFixed(2)}</p>
          <p>{message}</p>
          <button onClick={handleRestartTest}>Refazer Teste</button>
          <button onClick={handleSendResult} disabled={!email}>Enviar Resultado por Email</button>
        </div>
      )}
    </div>
  );
}

export default TestTab;
