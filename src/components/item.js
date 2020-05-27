import React from 'react';

const NewsItem = ({newsItem}) => {
    const {img_url, title, source_name, date, url} = newsItem;

    const onNewsClickHandler = (e, url) =>{
        e.preventDefault();

        window.open(url, "_blank")
    }

    return (  
        <div className="box has-background-warning">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-128x128">
                        <img src={img_url} alt="Image" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{title}</strong> - <small>{source_name}</small>
                            <br/>
                            {new Date(date * 1000).toDateString()}
                        </p>
                        <nav className="levels">
                            <div className="level-right">
                                <div className="level-item">
                                    <a onClick={e=>onNewsClickHandler(e,url)}>Saber más en {source_name}</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </article>
        </div>
    );
}
 
export default NewsItem;