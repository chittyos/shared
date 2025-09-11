import { useContext } from 'react';
import { ChittyContext } from '../lib/provider';

export function useChittyApp() {
  const context = useContext(ChittyContext);
  
  if (!context) {
    throw new Error('useChittyApp must be used within a ChittyProvider');
  }
  
  return context;
}