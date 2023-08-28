import React from 'react';

function ProfessionalsTab() {
  const professionals = [
    {
      id: 1,
      name: 'João Silva',
      occupation: 'Psicólogo',
      contact: 'joao.silva@example.com',
    },
    {
      id: 2,
      name: 'Maria Santos',
      occupation: 'Terapeuta',
      contact: 'maria.santos@example.com',
    },
    {
      id: 3,
      name: 'Pedro Oliveira',
      occupation: 'Médico',
      contact: 'pedro.oliveira@example.com',
    },
    {
      id: 4,
      name: 'Ana Rodrigues',
      occupation: 'Nutricionista',
      contact: 'ana.rodrigues@example.com',
    },
    {
      id: 5,
      name: 'Carlos Ferreira',
      occupation: 'Educador Físico',
      contact: 'carlos.ferreira@example.com',
    },
    {
      id: 6,
      name: 'Fernanda Almeida',
      occupation: 'Psicoterapeuta',
      contact: 'fernanda.almeida@example.com',
    },
    {
      id: 7,
      name: 'Rafael Lima',
      occupation: 'Coach de Bem-Estar',
      contact: 'rafael.lima@example.com',
    },
    {
      id: 8,
      name: 'Larissa Costa',
      occupation: 'Terapeuta Holística',
      contact: 'larissa.costa@example.com',
    },
    {
      id: 9,
      name: 'Gustavo Soares',
      occupation: 'Fisioterapeuta',
      contact: 'gustavo.soares@example.com',
    },
    {
      id: 10,
      name: 'Isabela Marques',
      occupation: 'Yoga e Meditação',
      contact: 'isabela.marques@example.com',
    },
    // ... Outros profissionais modelo
  ];

  return (
    <div className="tab-content">
      <h2>Profissionais</h2>
      <ul className="professional-list">
        {professionals.map((professional) => (
          <li key={professional.id}>
            <h3>{professional.name}</h3>
            <p>{professional.occupation}</p>
            <p>{professional.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfessionalsTab;
