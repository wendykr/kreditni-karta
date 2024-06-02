import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SettingsContextData {
  first: string;
  second: string;
  third: string;
  fourth: string;
  username: string;
  handleChangeFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSecond: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeThird: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeFourth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickClear: () => void;
}

export const SettingsContext = createContext<SettingsContextData>({
  first: '',
  second: '',
  third: '',
  fourth: '',
  username: '',
  handleChangeFirst: () => {},
  handleChangeSecond: () => {},
  handleChangeThird: () => {},
  handleChangeFourth: () => {},
  handleChangeUsername: () => {},
  handleClickClear: () => {},
});

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [first, setFirst] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [third, setThird] = useState<string>('');
  const [fourth, setFourth] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    (/^\d*$/.test(event.target.value.trim())) && setFirst(event.target.value);
  }

  const handleChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    (/^\d*$/.test(event.target.value.trim())) && setSecond(event.target.value);
  }

  const handleChangeThird = (event: React.ChangeEvent<HTMLInputElement>) => {
    (/^\d*$/.test(event.target.value.trim())) && setThird(event.target.value);
  }

  const handleChangeFourth = (event: React.ChangeEvent<HTMLInputElement>) => {
    (/^\d*$/.test(event.target.value.trim())) && setFourth(event.target.value);
  }

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const handleClickClear = () => {
    setFirst('');
    setSecond('');
    setThird('');
    setFourth('');
    setUsername('');
  }
  return (
    <SettingsContext.Provider value={{
      first, handleChangeFirst,
      second, handleChangeSecond,
      third, handleChangeThird,
      fourth, handleChangeFourth,
      username, handleChangeUsername,
      handleClickClear
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
