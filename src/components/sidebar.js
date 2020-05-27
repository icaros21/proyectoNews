import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtenerNewsByCategoryAction} from '../actions/newsActions';
import SearchNews from './searchNews';

const Sidebar = () => {
    const dispatch = useDispatch();

    const obtenerNewsByCategory = (category) => dispatch(obtenerNewsByCategoryAction(category));
    const news = useSelector(state => state.news.news);

    const cargando = useSelector(state => state.news.loading)
    const error =  useSelector(state => state.news.error)

    const onCategoryClickHandler = (e,category)=>{
        
        obtenerNewsByCategory(category);

        return false;
    }

    return (
        <div className="card">
            <div className="card-content">             
                <aside className="menu">
                    <p className="menu-label">
                        Búsqueda
                    </p>
                    <ul className="menu-list">
                        <SearchNews />
                    </ul>
                    <p className="menu-label">
                    Categorías
                    </p>
                    <ul className="menu-list">
                        <li><a onClick={e=>onCategoryClickHandler(e,1)}>Política</a></li>
                        <li><a onClick={e=>onCategoryClickHandler(e,2)}>Internacionales</a></li>
                        <li><a onClick={e=>onCategoryClickHandler(e,3)}>Tecnología</a></li>
                        <li><a onClick={e=>onCategoryClickHandler(e,4)}>Espectáculos</a></li>
                        <li><a onClick={e=>onCategoryClickHandler(e,5)}>Deportes</a></li>
                        <li><a onClick={e=>onCategoryClickHandler(e,6)}>Diseño</a></li>
                    </ul>
                </aside>
            </div>
        </div>  
     );
}
 
export default Sidebar;