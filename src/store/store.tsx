import React from "react";
import reducer, { InitialStateType, initialState } from "./reducer";
import { allActions } from "./actions";

interface IAppContext {
  state: InitialStateType;
  actions: {
    [key: string]: (...args: any) => any;
  };
}

export const StoreProviderContext = React.createContext<IAppContext>(
  {} as IAppContext
);

interface IPropsStoreProvider {
  children: JSX.Element;
}

const StoreProvider = (props: IPropsStoreProvider) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = Object.values(allActions)
    .map(action => ({
      [action.name]: action(dispatch)
    }))
    .reduce((acc, action) => {
      acc = {
        ...acc,
        ...action
      };

      return acc;
    }, {});
  return (
    <StoreProviderContext.Provider value={{ state, actions }}>
      {props.children}
    </StoreProviderContext.Provider>
  );
};

export default StoreProvider;
