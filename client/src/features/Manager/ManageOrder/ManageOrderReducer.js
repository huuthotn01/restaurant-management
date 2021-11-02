const ManageOrderReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case actionTypes.CHANGE_SEARCH:
            return {
                ...state,
                search: payload
            };
        default:
            return state;
    }
};