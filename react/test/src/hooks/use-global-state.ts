import { useContext } from "react";
import { State } from "./../reducer";
import { stateContext } from "./../Provider";

const useGlobalState = <K extends keyof State>(property: K) => {
  const state = useContext(stateContext);
  return state[property];
};

export default useGlobalState;
