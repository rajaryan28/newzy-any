import React, { Component } from "react";
import Img from "./NEWS.png";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { heading, description, imageUrl, url, author, date ,source,mode} = this.props;
    return (
      <div className={`card mx-3 ${mode==="dark"?"card border-info shadow-info  bg-body rounded":""}`} data-aos="fade-right" data-aos-offset="250"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
        <img
          src={imageUrl ? imageUrl : Img}
          className="card-img-top"
          alt="..."
        />
        <div className={`card-body  bg-${mode}`} >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"85%", zIndex:1}}>
            {source}
            </span>
          <h5 className={`card-title text-${mode==="dark"?"light":"dark"} `}>{heading}</h5>
          <p className={`card-text text-${mode==="dark"?"light":"dark"}`}>{description}</p>
          <p className={`card-text `}><small className={`${mode==="light"?"text-body-secondary":""} text-${mode==="dark"?"light":"dark"}`}>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
          <Link
            to={url}
            rel="noreferrer"
            target="_blank"
            className={`btn btn-sm btn-primary ${mode==="light"?"btn-dark":"btn-info"}`}
          >
            Read More
          </Link>
        </div>
      </div>
    );
  }
}

export default NewsItem;
