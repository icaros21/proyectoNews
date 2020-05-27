import clienteAxios from '../config/axios';
import moment from 'moment';
import { trackPromise } from 'react-promise-tracker';
import {
    OBTENER_NEWS_TRENDING,
    OBTENER_NEWS_TRENDING_EXITO,
    OBTENER_NEWS_TRENDING_ERROR,

    OBTENER_NEWS_BY_CATEGORY,
    OBTENER_NEWS_BY_CATEGORY_EXITO,
    OBTENER_NEWS_BY_CATEGORY_ERROR,

    OBTENER_NEWS_BY_SEARCH,
    OBTENER_NEWS_BY_SEARCH_ERROR,
    OBTENER_NEWS_BY_SEARCH_EXITO,

    SET_PAGE_NUM,
    SET_PAGE_NUM_EXITO,
    SET_PAGE_NUM_ERROR
} from '../types/index';

export function obtenerNewsBySearchAction(word){
    return async(dispatch) => {
        dispatch(obtenerNewsBySearch());

        try {
            trackPromise(
                clienteAxios.get(`/search/${word}`).then((result) => {
                    dispatch(obtenerNewsBySearchExito(result.data))
                })
            )
        } catch (error) {
            dispatch(obtenerNewsBySearchError(true))
        }
    }
}

export function obtenerNewsTrendingAction(){
    return async(dispatch) => {
        dispatch(obtenerNewsTrending());

        try {
            trackPromise(clienteAxios.get(`latest/${moment().format('yyyy-MM-DD')}`).then((result) =>{
                dispatch(obtenerNewsTrendingExito(result.data))
            }))
        } catch (error) {
            dispatch(obtenerNewsTrendingError(true))
        }
    }
}

export function obtenerNewsByCategoryAction(category){
    return async(dispatch) => {
        dispatch(obtenerNewsByCategory());

        try {
            trackPromise(clienteAxios.get(`news/category/${category}`).then((result)=>{
                dispatch(obtenerNewsByCategoryExito(result.data))
            }))
        } catch (error) {
            dispatch(obtenerNewsByCategoryError(true))
        }
    }
}

export function setPageNumAction(activePage){
    return async(dispatch) => {
        dispatch(setPageNum());

        try {
            dispatch(setPageNumExito(activePage))
        } catch (error) {
            dispatch(setPageNumError(true))
        }
    }
}

const obtenerNewsTrending = () => ({
    type: OBTENER_NEWS_TRENDING,
    payload: true
})

const obtenerNewsTrendingExito = (news) => ({
    type: OBTENER_NEWS_TRENDING_EXITO,
    payload: news
})

const obtenerNewsTrendingError = () => ({
    type:OBTENER_NEWS_TRENDING_ERROR,
    payload: true
})

const obtenerNewsByCategory = () => ({
    type: OBTENER_NEWS_BY_CATEGORY,
    payload: true
})

const obtenerNewsByCategoryExito = (news) => ({
    type: OBTENER_NEWS_BY_CATEGORY_EXITO,
    payload: news
})

const obtenerNewsByCategoryError = () => ({
    type:OBTENER_NEWS_BY_CATEGORY_ERROR,
    payload: true
})

const obtenerNewsBySearch = () => ({
    type: OBTENER_NEWS_BY_SEARCH,
    payload: true
})

const obtenerNewsBySearchExito = (news) => ({
    type: OBTENER_NEWS_BY_SEARCH_EXITO,
    payload: news
})

const obtenerNewsBySearchError = () => ({
    type:OBTENER_NEWS_BY_SEARCH_ERROR,
    payload: true
})

const setPageNum = () => ({
    type: SET_PAGE_NUM,
})

const setPageNumExito = (activePage) => ({
    type: SET_PAGE_NUM_EXITO,
    payload: activePage
})

const setPageNumError = () => ({
    type:SET_PAGE_NUM_ERROR,
    payload: true
})