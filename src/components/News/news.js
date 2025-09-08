import React, { useEffect, useState } from 'react';
import NewsItems from '../NewsItems/newsItems';
import articlesData from '../../data/articles';
import Spinner from '../Spinner/spinner';

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const pageSize = props.pageSize;

    const fetchArticles = async (page) => {
        // const Url = `https://newsapi.org/v2/everything?q=tesla&from=2025-08-02&sortBy=publishedAt&page=${page}&this.pageSize=${this.pageSize}&apiKey=70d0b7f4bc7c49d6927b3b7595385f6b`;
        // const data = await fetch(Url);
        // const parseData = await data.json();
        props.setProgress(20);
        setLoading(true);
        const { category } = props;
        const start = (page - 1) * pageSize;
        const end = page * pageSize;

        let filteredArticles = articlesData;

        if(category)
        {
        filteredArticles = articlesData.filter(
            (article) => article.category === category
          ); 
        }       
    
        setTimeout(() => {
            setArticles(filteredArticles.slice(start, end));
            setPage(page);
            setLoading(false);  
            props.setProgress(100);
        },2000);
    
    }; 

    useEffect(() => {
        fetchArticles(page);
    }, []);

    useEffect(() => {
        setPage(1);
        fetchArticles(1);
        document.title = `${props.title} - NewsApp`;
      }, [props.category]);

    const handlePreviousClick = async () => {
        if (page > 1) {
          await fetchArticles(page - 1);
        }
    }
      
    const handleNextClick = async () => {
        const maxPages = Math.ceil(16 / pageSize);
        if (page < maxPages) {
          await fetchArticles(page + 1);      
        }
    }

    return (
        <>
            <h2 className='container text-center'>{props.title}</h2>
            {loading && <Spinner />}
            <div className="container">
                {/* if no category data found */}
                {!loading && articles.length === 0 && (
                <p className="text-center mt-4">No articles found for category {props.category}.</p>
                )}
                <div className="row">
                    {!loading && articles.map((element) => {
                        return <div key={element.url} className="col-12 col-md-6 col-lg-4 p-0 m-0">
                            <NewsItems data={element} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between p-0 m-0 mt-4 mb-4">
                    <button disabled={page<=1} className="btn btn-md btn-primary" onClick={handlePreviousClick}>&larr; Previous</button>
                    <span className="text-center">Page {page}</span>
                    <button disabled={page >= Math.ceil(16 / pageSize) || articles.length < pageSize} className="btn btn-md btn-primary" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}
