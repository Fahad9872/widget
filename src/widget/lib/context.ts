import { createContext } from 'react';

interface WidgetContextType {
  isOpen: boolean;
  clientKey: string;
  setIsOpen: (isOpen: boolean) => void;
}

export const WidgetContext = createContext<WidgetContextType>({
  isOpen: false,
  clientKey: '',
  setIsOpen: () => undefined,
});
