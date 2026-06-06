import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType,
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      if (action.payload === "up") {
        const sortedUpState = [...state].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        return sortedUpState;
      } else if (action.payload === "down") {
        const sortedDownState = [...state].sort((a, b) =>
          b.name.localeCompare(a.name),
        );
        return sortedDownState;
      }
      return state;
    }
    case "check": {
      return [...state].filter((el) => el.age >= action.payload);
      //return state // need to fix
    }
    default:
      return state;
  }
};
