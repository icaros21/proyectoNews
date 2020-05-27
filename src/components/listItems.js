import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pagination} from 'semantic-ui-react';
import "semantic-ui-css/semantic.css";
import {obtenerNewsTrendingAction, setPageNumAction} from '../actions/newsActions'
import NewsItem from './item';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


const ListItems = () => {
    const dispatch = useDispatch();

    const obtenerNewsTrending = () => dispatch(obtenerNewsTrendingAction());
    const setPageNum = (activePage) => dispatch(setPageNumAction(activePage));
    const news = useSelector(state => state.news.items);

    const cargando = useSelector(state => state.news.loading)
    const error =  useSelector(state => state.news.error)
    const page = useSelector(state => state.news.page)
    const totalPages =  useSelector(state => state.news.totalPages)

    useEffect(() => {
        obtenerNewsTrending();
    }, [])

    const setPageConfigHandler = (event, {activePage}) =>{
        setPageNum(activePage);
    }

    const LoadingIndicator = props => {
        const { promiseInProgress } = usePromiseTracker();
        return (
          promiseInProgress && 
          <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
          <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
          </div>
        );  
      }

    return ( 
        
        <Fragment>
            <h1 className="title">Noticias</h1>
            <LoadingIndicator />
            {!cargando ? news.map((noticia) => (
                <NewsItem newsItem = {noticia} key={noticia.news_id} />
            )): null}
            <Pagination
                activePage={page}
                totalPages={totalPages}
                siblingRange={1}
                onPageChange={setPageConfigHandler}
            />
        </Fragment>
        
     );
}
 
export default ListItems;