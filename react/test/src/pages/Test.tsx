import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TestContext } from "./../App";
import { useDispatch, useGlobalState } from "./../hooks";

type Props = {
  message: string;
};

const Test: React.FC<Props> = (props) => {
  const { test, setTest } = useContext(TestContext);
  const location = useLocation();
  const globalState = useGlobalState("user");
  const dispatch = useDispatch();

  const updateUser = () => {
    dispatch({
      type: "setUser",
      payload: {
        name: "taniwhy",
        age: 20,
      },
    });
  };

  setTest("aaa");
  return (
    <>
      <div>
        {globalState.name}
        {globalState.age}

        <button
          onClick={() => {
            updateUser();
          }}
        >
          更新
        </button>
      </div>
      <span>{props.message}</span>
      <span>{test}</span>
      <p>pathname: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
    </>
  );
};

export default Test;
