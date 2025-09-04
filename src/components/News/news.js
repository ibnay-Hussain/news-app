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
        this.pageSize = props.pageSize;
    }

    fetchArticles = async (page) => {
        // const Url = `https://newsapi.org/v2/everything?q=tesla&from=2025-08-02&sortBy=publishedAt&page=${page}&this.pageSize=${this.pageSize}&apiKey=70d0b7f4bc7c49d6927b3b7595385f6b`;
        this.setState({ loading: true });
        // const data = await fetch(Url);
        // const parseData = await data.json();
        const start = (page - 1) * this.pageSize;
        const end = page * this.pageSize;
    
        setTimeout(() => {
            this.setState({
                articles: articlesData.slice(start, end),
                page: page,
                loading: false
            });   
        },500);
    
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
        const maxPages = Math.ceil(16 / this.pageSize);
        if (this.state.page < maxPages) {
          await this.fetchArticles(this.state.page + 1);      
        }
    }

    render() {
        return (
            <>
                <h2 className='container text-center'>Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="container">
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                           return <div key={element.url} className="col-12 col-md-6 col-lg-4 p-0 m-0">
                                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between p-0 m-0 mt-4 mb-4">
                        <button disabled={this.state.page<=1} className="btn btn-md btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <span className="text-center mt-3">Page {this.state.page}</span>
                        <button disabled={this.state.page >= Math.ceil(16 / this.pageSize) || this.state.articles.length < this.pageSize} className="btn btn-md btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}
