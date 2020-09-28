export interface State {
  user: {
    name: string;
    age: number;
  };
}

export const initialState: State = {
  user: {
    name: "",
    age: 0,
  },
};

export type Action = {
  type: "setUser";
  payload: {
    name: string;
    age: number;
  };
};

export const reducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
