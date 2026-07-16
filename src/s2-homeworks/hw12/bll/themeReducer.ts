const initState = {
  themeId: 1,
};

export type ThemeState = {
  themeId: number;
};

type ActionThemeType = {
  type: "SET_THEME_ID";
  id: number;
};

export const themeReducer = (
  state = initState,
  action: ActionThemeType,
): ThemeState => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID": {
      return { ...state, themeId: action.id };
    }

    default:
      return state;
  }
};

export const changeThemeId = (id: number): ActionThemeType => ({
  type: "SET_THEME_ID",
  id,
}); // fix any
