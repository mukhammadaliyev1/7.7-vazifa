import { TOGGLE_DARK_LIGHT } from './/action'

const initialState = {
    darkMode: false, 
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK_LIGHT:
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state; 
    }
};

export default themeReducer;
