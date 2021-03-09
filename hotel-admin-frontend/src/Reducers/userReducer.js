export const initial_state = null;

export const reducer = (state, action) => {
  switch (action.type) {
    case "USER": {
      return action.payload;
    }
    case "UPDATE PROFILE PIC": {
      return action.payload;
    }
    default:
      return initial_state;
  }
};
