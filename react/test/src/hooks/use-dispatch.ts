import { useContext } from "react";
import { dispatchContext } from "./../Provider";

const useDispatch = () => {
  return useContext(dispatchContext);
};

export default useDispatch;
