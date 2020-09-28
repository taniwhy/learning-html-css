import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { stateContext, dispatchContext } from "./context";

export const Provider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        {props.children}
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
};
