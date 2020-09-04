import {useState} from 'react';

export const useLocalStorage = (key, initialValue='') => {
    const [customer, setCustomer] = useState(() => {

    const item = window.localStorage.getItem(key);
    return item? JSON.parse(item): initialValue;
});

const setIndex= index => {
    setCustomer(index);
    window.localStorage.setItem(key, JSON.stringify(index));
};

return[customer, setIndex]
}