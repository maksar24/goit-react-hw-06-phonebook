import { combineReducers } from "redux";
import contactsTypes from './contacts-types';

const items = (state = [], { type, payload }) => {
    switch (type) {
        case contactsTypes.ADD:
            const similarName = state.map((el) => el.name);

            if (similarName.includes(payload.name)) {
                alert(`${payload.name} is already in contacts`);
                return state;
            }
            return [payload, ...state];
        
        case contactsTypes.REMOVE:
            return state.filter(({ id }) => id !== payload);
        
        default:
            return state;
    };
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case contactsTypes.FILTER:
            return payload;
        
        default:
            return state;
    }
};

export default combineReducers({
    items,
    filter,
});