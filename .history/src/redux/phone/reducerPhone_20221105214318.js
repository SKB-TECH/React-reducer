const initialStatePhone = {
    phones: 5
}

const PhoneReducer = (state=initialStatePhone, action) => {
    switch (action.type) {
        case "BAY_PHONE":
            return{
                ...state,
                phones
            }
            break;
    
        default:
            break;
    }
}