const initialState = {
    globalTheme: true
};

const globalThemeReducer = ( state=initialState, action ) => {
    switch(action.type) {
        case "SET_GLOBAL_THEME": return {
            ...state,
            globalTheme: action.payload
        }
        default: return state
    }
};

export default globalThemeReducer;
