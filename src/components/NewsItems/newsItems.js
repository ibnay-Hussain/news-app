import React, { Component } from 'react'
import './newsItems.css';

export default class NewsItems extends Component {

  render() {
    let { title, description, imageUrl, key, newsUrl} = this.props;
    return (
      <div className='container my-1'>
        <div className="card" style={{ width: '19rem'}}>
          <img src={imageUrl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title heading-limit">{title}</h5>
            <p className="card-text text-truncate-multiline">{description}</p>
            <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
