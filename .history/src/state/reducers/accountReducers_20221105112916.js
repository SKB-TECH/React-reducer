const reducer=(state=0,action)=>{
    switch (action.type) {
        case "deposit":
            return state+action.payload
            break;
        case "whit":
            return state-action.payload
            break;
        default:
            break;
    }
}