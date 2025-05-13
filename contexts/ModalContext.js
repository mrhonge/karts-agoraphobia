import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const openModal = (sectionId) => {
    setCurrentSection(sectionId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ 
      modalOpen, 
      currentSection, 
      openModal, 
      closeModal 
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
} 