const reducer=(state=0,action)=>{
    switch (action.type) {
        case "deposit":
            return state+action.pay
            break;
    
        default:
            break;
    }
}