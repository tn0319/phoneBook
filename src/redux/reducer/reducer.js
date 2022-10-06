let initialState = {
    phoneList : [],
    searchWord : ''
}
function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case 'ADD_LIST':
            return {
                ...state,
                phoneList:[...state.phoneList,{name:payload.name,number:payload.phoneNum}]
            }
        case 'SEARCHING':
            return {
                ...state,
                searchWord: payload.word
            }
        default :
            return {...state}
    }
}

export default reducer;
