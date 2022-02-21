import React, {
  useState,
  createContext,
  SetStateAction,
  useContext
} from 'react';

export type Objective = {
  name: string;
  category: string;
  fixedValue: boolean;
  remainingBalencePercentage?: number;
  inicialAport?: string;
  frequency: string;
  productName: string;
  bankName: string;
};

type ObjetiveContextProps = {
  objective: Objective;
  setObjective: React.Dispatch<SetStateAction<Objective>>;
};

type WithChildren = {
  children: React.ReactNode;
};

const ObjectiveContext = createContext({} as ObjetiveContextProps);

function ObjectiveProvider({ children }: WithChildren) {
  const [objective, setObjective] = useState({} as Objective);

  return (
    <ObjectiveContext.Provider value={{ objective, setObjective }}>
      {children}
    </ObjectiveContext.Provider>
  );
}

export const useObjective = (): ObjetiveContextProps =>
  useContext(ObjectiveContext);

export default ObjectiveProvider;
