const rootReducer = (state={mood: ""}, action) => {
    switch (action.type) {
        case 'CHANGE_MOOD':
            return {...state, mood: action.payload};
        default:
            return state;
    }
}
const store = Redux.createStore(rootReducer);