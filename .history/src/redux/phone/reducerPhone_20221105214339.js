const initialStatePhone = {
    phones: 5
}

const PhoneReducer = (state = initialStatePhone, action) => {
    switch (action.type) {
        case "BAY_PHONE":
            return {
                ...state,
                phones: state.phones - 1
            }
            break;

        default:
            return state;
    }
}