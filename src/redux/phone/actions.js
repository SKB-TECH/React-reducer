import { BAY_PHONE } from "./type";

export const bay_phone = (nbr) => {
    return {
        type: BAY_PHONE,
        payload: nbr
    }
}