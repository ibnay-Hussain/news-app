import React, { Component } from 'react'
import NewsItems from '../NewsItems/newsItems';
import articlesData from '../../data/articles';
import Spinner from '../Spinner/spinner';

export default class news extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    fetchArticles = async (page) => {
        // const Url = `https://newsapi.org/v2/everything?q=tesla&from=2025-08-02&sortBy=publishedAt&page=${page}&pageSize=${pageSize}&apiKey=70d0b7f4bc7c49d6927b3b7595385f6b`;
        // const data = await fetch(Url);
        // const parseData = await data.json();
        const pageSize = 4;
        const start = (page - 1) * pageSize;
        const end = page * pageSize;
    
        this.setState({
            articles: this.articles.slice(start, end),
            page: page,
        });
    
    }; 

    async componentDidMount() {
        this.fetchArticles(this.state.page);
    }

    handlePreviousClick = async () => {
        if (this.state.page > 1) {
          await this.fetchArticles(this.state.page - 1);
        }
    };
      
    handleNextClick = async () => {
        const maxPages = Math.ceil(16 / 4);
        if (this.state.page < maxPages) {
          await this.fetchArticles(this.state.page + 1);      
        }
    }

    render() {
        return (
            <>
                <h2 className='container'>Top Headlines</h2>
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                           return <div key={element.url} className="col-12 col-md-6 col-lg-4 p-0 m-0">
                                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between p-0 m-0 mt-4 mb-4">
                        <button disabled={this.state.page<=1} className="btn btn-md btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <span className="text-center mt-3">Page {this.state.page}</span>
                        <button disabled={this.state.page >= Math.ceil(16 / 4) || this.state.articles.length < 4} className="btn btn-md btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}
