import React, { Fragment, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtenerNewsBySearchAction, setPageNumAction} from '../actions/newsActions'

const SearchNews = () => {
    const dispatch =  useDispatch();

    const obtenerNewsBySearch = (word) => dispatch(obtenerNewsBySearchAction(word));


    const cargando = useSelector(state => state.news.loading)
    const error =  useSelector(state => state.news.error)

    const [searchModel, setSearchModel] = useState({
        searchText: ''
    })

    const onClickSearchHandler = () => {
        obtenerNewsBySearch(searchModel.searchText);
    }

    const onChangeHandler = (e) => {
        setSearchModel({
            ...searchModel,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <Fragment>
            <div className="field">
                <div className="control">
                    <input type="text" name="searchText" className="input" onChange={e=>onChangeHandler(e)} ></input>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className={!cargando ? "button is-danger is-active" : "button is-danger is-active is-loading"} onClick={e=>onClickSearchHandler()}>Buscar</button>
                </div>
            </div>
        </Fragment>
     );
}
 
export default SearchNews;