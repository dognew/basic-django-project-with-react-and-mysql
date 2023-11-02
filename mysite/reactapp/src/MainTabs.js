import React, { useState } from 'react';
import PreventionTab from './PreventionTab';
import TestTab from './TestTab';
import ProfessionalsTab from './ProfessionalsTab';
import TestimonialsTab from './TestimonialsTab';


function MainTabs() {
  const [activeTab, setActiveTab] = useState('test');

  const renderTab = () => {
    switch (activeTab) {
      case 'prevention':
        return <PreventionTab />;
      case 'test':
        return <TestTab />;
      case 'professionals':
        return <ProfessionalsTab />;
      case 'testimonials':
        return <TestimonialsTab />;
      
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('prevention')}>Dicas de Prevenção</button>
        <button onClick={() => setActiveTab('test')}>Teste de Burnout</button>
        <button onClick={() => setActiveTab('professionals')}>Buscar Profissionais</button>
        <button onClick={() => setActiveTab('testimonials')}>Depoimentos</button>
        
      </nav>
      {renderTab()}
    </div>
  );
}

export default MainTabs;
