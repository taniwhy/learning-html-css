import { createContext } from "react";
import { initialState } from "./../reducer";

const stateContext = createContext(initialState);

export default stateContext;
