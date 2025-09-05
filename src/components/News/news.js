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
        // const data = await fetch(Url);
        // const parseData = await data.json();
        this.setState({ loading: true });
        const { category } = this.props;
        const start = (page - 1) * this.pageSize;
        const end = page * this.pageSize;

        let filteredArticles = articlesData;

        if(category)
        {
        filteredArticles = articlesData.filter(
            (article) => article.category === category
          ); 
        }       
    
        setTimeout(() => {
            this.setState({
                articles: filteredArticles.slice(start, end),
                page: page,
                loading: false
            });   
        },500);
    
    }; 

    async componentDidMount() {
        this.fetchArticles(this.state.page);
    }

    async componentDidUpdate(prevProps) {
        if(this.props.category !== prevProps.category) {
            this.setState({ page: 1 }, () => {
                this.fetchArticles(1);
            });            
        }
    }

    handlePreviousClick = async () => {
        if (this.state.page > 1) {
          await this.fetchArticles(this.state.page - 1);
        }
    }
      
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
                    {/* if no category data found */}
                    {!this.state.loading && this.state.articles.length === 0 && (
                    <p className="text-center mt-4">No articles found for category {this.props.category}.</p>
                    )}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                           return <div key={element.url} className="col-12 col-md-6 col-lg-4 p-0 m-0">
                                <NewsItems data={element} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between p-0 m-0 mt-4 mb-4">
                        <button disabled={this.state.page<=1} className="btn btn-md btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <span className="text-center">Page {this.state.page}</span>
                        <button disabled={this.state.page >= Math.ceil(16 / this.pageSize) || this.state.articles.length < this.pageSize} className="btn btn-md btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}
