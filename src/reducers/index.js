const initialState = {
    visibilityFilter: '',
    todos: []
};

export default function todoApp (state = initialState , action){
    if (typeof state === 'undefined') {
        return initialState
    }
    return state
}