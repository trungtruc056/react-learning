import React from 'react'
import thumb from './img-thumb.jpg';

const ArticleItem = (props) => (
    <div className="col-md-6 item-block">
        <div className="card mb-50">
            <img className="card-img-top" src={thumb} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">
                    {props.item.name}
                </h5>
                <p className="card-text">
                    {props.item.desc}
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
)

export default ArticleItem