import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(10);
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let pasedData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: pasedData.articles,
      totalResults: pasedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  // handlePrevClick = async () => {
 
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=920d412ab6bc4069a7ec2e14b07a5dd7&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let pasedData = await data.json();
  //   this.setState({
  //     articles: pasedData.articles,
  //     page: this.state.page - 1,
  //     loading: false,
  //   });
  // };
  // handleNextClick = async () => {
 
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=920d412ab6bc4069a7ec2e14b07a5dd7&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let pasedData = await data.json();
  //   this.setState({
  //     articles: pasedData.articles,
  //     page: this.state.page + 1,
  //     loading: false,
  //   });
  
  // };
  fetchMoreData = async() => {
    this.setState({page:this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pasedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(pasedData.articles),
      totalResults: pasedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-4">

          {<h3 className={`text-center text-${this.props.mode=="dark"?"light":"dark"}`} style={{marginTop:"90px"}}>Newzy- Top {this.props.category} headlines :</h3>}
          <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length !== this.state.totalResults}
                  // hasMore={true}
                  loader={<Spinner/>}
                  >
                    
          <div className="row container">
            {
              this.state.articles.map((element) => {
                return (
                  
        
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      heading={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      mode={this.props.mode}
                    />
                  </div>
                );
              })}
          </div>
          </InfiniteScroll>

          {/* <div className="container my-2 d-flex justify-content-between ">
            <button
              type="button"
              disabled={this.state.page <= 1 || this.state.loading}
              className="btn btn-info "
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize) ||
                this.state.loading
              }
            >
              Next &rarr;
            </button>
          </div> */}
        </div>
      </>
    );
  }
}

export default News;
