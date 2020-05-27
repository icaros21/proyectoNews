import {
    OBTENER_NEWS_TRENDING,
    OBTENER_NEWS_TRENDING_EXITO,
    OBTENER_NEWS_TRENDING_ERROR,
    OBTENER_NEWS_BY_CATEGORY,
    OBTENER_NEWS_BY_CATEGORY_EXITO,
    OBTENER_NEWS_BY_CATEGORY_ERROR,
    SET_PAGE_NUM,
    SET_PAGE_NUM_ERROR,
    SET_PAGE_NUM_EXITO,
    OBTENER_NEWS_BY_SEARCH,
    OBTENER_NEWS_BY_SEARCH_ERROR,
    OBTENER_NEWS_BY_SEARCH_EXITO
} from '../types/index';

const initialState = {
    news: [],
    error: false,
    loading: false,
    page : 1,
    totalPages : 1,
    items : []
}

export default function(state = initialState, action) {
    switch (action.type){
        case OBTENER_NEWS_TRENDING:
            return {
                ...state,
                loading: true,
            }
        case OBTENER_NEWS_TRENDING_EXITO:
            return {
                ...state,
                loading: false,
                news: action.payload,
                page: 1,
                totalPages: Math.round(action.payload.length / 10),
                items : action.payload.slice(
                    (1 - 1) * 10,
                    (1 - 1) * 10 + 10
                )
            }
        case OBTENER_NEWS_TRENDING_ERROR:
            return {
                ...state,
                error: true
            }
        case OBTENER_NEWS_BY_CATEGORY:
            return {
                ...state,
                loading: true,
            }
        case OBTENER_NEWS_BY_CATEGORY_EXITO:
            return {
                ...state,
                loading: false,
                news: action.payload,
                page: 1,
                totalPages: Math.round(action.payload.length / 10),
                items : action.payload.slice(
                    (1 - 1) * 10,
                    (1 - 1) * 10 + 10
                )
            }
        case OBTENER_NEWS_BY_CATEGORY_ERROR:
            return {
                ...state,
                error: true
            }
        case OBTENER_NEWS_BY_SEARCH:
            return {
                ...state,
                loading: true,
            }
        case OBTENER_NEWS_BY_SEARCH_EXITO:
            return {
                ...state,
                loading: false,
                news: action.payload,
                page: 1,
                totalPages: Math.round(action.payload.length / 10),
                items : action.payload.slice(
                    (1 - 1) * 10,
                    (1 - 1) * 10 + 10
                )
            }
        case OBTENER_NEWS_BY_SEARCH_ERROR:
            return {
                ...state,
                error: true
            }
        case SET_PAGE_NUM:
            return {
                ...state,
                loading:true
            }
        case SET_PAGE_NUM_EXITO:
            return {
                ...state,
                loading: false,
                page: action.payload,
                totalPages: Math.round(state.news.length / 10),
                items : state.news.slice(
                    (action.payload - 1) * 10,
                    (action.payload - 1) * 10 + 10
                )
            }
        case SET_PAGE_NUM_ERROR:
            return {
                ...state,
                error: true
            }
    }
    return state;
}
