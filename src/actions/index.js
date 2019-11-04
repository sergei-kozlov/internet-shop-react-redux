import {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE,
    LOAD_MORE_PHONES_FAILURE,
    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_SUCCESS,
    FETCH_PHONES_BY_ID_FAILURE,
    FETCH_PHONES_BY_ID_START,
    FETCH_PHONES_BY_ID_SUCCESS,
    ADD_PHONE_TO_BASKET,
    SEARCH_PHONE,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    REMOVE_PHONE_FROM_BASKET,
    CLEAN_BASKET
} from '../actionTypes';
import {
    fetchPhones as fetchPhonesApi,
    loadMorePhones as loadMorePhonesApi,
    fetchPhoneById as fetchPhoneByIdApi,
    fetchCategories as fetchCategoriesApi
} from '../api';
import {getRenderedPhonesLength} from '../selectors/selectors';

export const fetchPhones = () => async dispatch => {
    dispatch({type: FETCH_PHONES_START});

    try {
        const phones = await fetchPhonesApi();
        dispatch({
            type: FETCH_PHONES_SUCCESS,
            payload: phones
        })
    } catch (err) {
        dispatch({
            type: FETCH_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const loadMorePhones = () => async (dispatch, getState) => {
    const offset = getRenderedPhonesLength(getState());
    dispatch({type: LOAD_MORE_PHONES_START});

    try {
        const phones = await loadMorePhonesApi({offset});
        dispatch({
            type: LOAD_MORE_PHONES_SUCCESS,
            payload: phones
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const fetchPhoneById = (id) => async dispatch => {
    dispatch({type: FETCH_PHONES_BY_ID_START});

    try {
        const phone = await fetchPhoneByIdApi(id);
        dispatch({
            type: FETCH_PHONES_BY_ID_SUCCESS,
            payload: phone
        })
    } catch (err) {
        dispatch({
            type: FETCH_PHONES_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const addPhoneToBasket = id => dispatch => {
    dispatch({
        type: ADD_PHONE_TO_BASKET,
        payload: id
    })
};

export const searchPhone = text => dispatch => {
    dispatch({
        type: SEARCH_PHONE,
        payload: text
    })
};

export const fetchCategories = () => async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START});

    try {
        const categories = await fetchCategoriesApi();
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const removePhoneFromBasket = id => async dispatch => {
    dispatch({
        type: REMOVE_PHONE_FROM_BASKET,
        payload: id
    })
};

export const cleanBasket = () => async dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
};

export const basketCheckout = phones => () => {
    alert(JSON.stringify(phones))
};