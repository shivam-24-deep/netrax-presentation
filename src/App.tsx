import React from 'react';
import { DemoCaseProvider } from './context/DemoCaseContext';
import { PresentationDeck } from './components/presentation/PresentationDeck';

export const App: React.FC = () => {
  return (
    <DemoCaseProvider>
      <PresentationDeck />
    </DemoCaseProvider>
  );
};

export default App;
