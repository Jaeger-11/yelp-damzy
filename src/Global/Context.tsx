import React, { useContext, useReducer, useState, useEffect } from 'react';
import { InitialStateType, AppProviderType } from './interface';
import reducer from './Reducer';
import { auth } from "../Database/config";
import { onAuthStateChanged } from 'firebase/auth';

const defaultState = {
  user: "",
  setUser: (user: string) => {},
  uid: "",
  campgroundData: {
    name: '',
    price: '',
    imageUrl: '',
    description: ''
  }
}

const AppContext = React.createContext<
  {
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
  }
>({
  state: defaultState,
  dispatch: () => null
});

const AppProvider = ({children} : AppProviderType) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  onAuthStateChanged(auth, (user) => {
    if(user){
        state.user = user.email || ''
        state.uid = user.uid
      } else {
        state.user = ''
        state.uid = ''
      }
  })

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { useGlobalContext, AppProvider }