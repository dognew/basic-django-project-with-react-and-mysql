import React, { useState } from 'react';

function TestimonialsTab() {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState('');

  const addTestimonial = () => {
    if (newTestimonial.trim() !== '') {
      setTestimonials([...testimonials, newTestimonial]);
      setNewTestimonial('');
    }
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  return (
    <div className="tab-content">
      <h2>Depoimentos</h2>
      <div className="testimonial-form">
        <textarea
          rows="5" // Aumenta o número de linhas visíveis na caixa de texto
          placeholder="Digite seu depoimento"
          value={newTestimonial}
          onChange={(e) => setNewTestimonial(e.target.value)}
        />
        <button onClick={addTestimonial}>Adicionar Depoimento</button>
      </div>
      <div className="testimonial-list">
        <h3>Depoimentos cadastrados:</h3>
        <ul>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              {testimonial}
              <button onClick={() => deleteTestimonial(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TestimonialsTab;
