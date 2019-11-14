import * as R from 'ramda';

import phones from './mockPhones';
import categories from './mockCategories';



//Imitation server works delay 700 ms.
export const fetchPhones = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(phones)
        }, 700);
    })
};


//Imitation server works delay 700 ms.
export const loadMorePhones = async ({offset}) => {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(phones)
    }, 700);
    })
};

//Imitation server works delay 700 ms.
export const fetchPhoneById = async (id) => {
    return new Promise(resolve => {
        const phone = R.find(R.propEq('id', id), phones);
        setTimeout(() => {
        resolve(phone)
    }, 700);
    })
};


//Imitation server works delay 700 ms.
export const fetchCategories = async () => {
    return new Promise(resolve => {
      setTimeout(() =>{
        resolve(categories)
      }, 700);
    })
};