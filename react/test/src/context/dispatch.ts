import { createContext } from "react";
import { Action } from "./../reducer";

const dispatchContext = createContext((() => true) as React.Dispatch<Action>);

export default dispatchContext;
