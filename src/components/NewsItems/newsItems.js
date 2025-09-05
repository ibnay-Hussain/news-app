import React, { Component } from 'react'
import './newsItems.css';

export default class NewsItems extends Component {

  render() {
    let { data } = this.props;
    return (
      <div className='container my-1'>
        <div className="card" >
          <img src={data.urlToImage} className="card-img-top" alt="news" style={{ height: '150px', objectFit: 'cover' }}/>
          <div className="card-body">
            <h5 className="card-title heading-limit">{data.title}</h5>
            <p className="card-text text-truncate-multiline">{data.description}</p>
            <p className="car"><small className='text-muted'>Last updated: {data.publishedAt}</small></p>
            <a href={data.url} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
