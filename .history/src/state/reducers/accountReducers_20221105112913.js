const reducer=(state=0,action)=>{
    switch (action.type) {
        case "deposit":
            return state+action.payload
            break;
        case "whi":
            return state-action.payload
            break;
        default:
            break;
    }
}