import contactsTypes from './contacts-types';
import shortid from "shortid";

const add = (name, number) => ({
    type: contactsTypes.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
});

const remove = id => ({
    type: contactsTypes.REMOVE,
    payload: id,
});

const filter = value => ({
    type: contactsTypes.FILTER,
    payload: value,
});

export default {
    add,
    remove,
    filter
};
