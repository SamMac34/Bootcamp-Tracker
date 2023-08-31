// ComparisonPage reducer, will set the global state from 
// users selecting dropdown values
const adminReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ALL_JOBS':
            return action.payload;
        default:
            return state;
    }

};

export default adminReducer;