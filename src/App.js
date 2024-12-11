import "./App.css";
import News from "./components/News";
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWZY_API
  state={
    progress:0,
  }
  setProgress= async (progres)=>{
    this.setState({progress:progres})

  }
  state={
    mode:"light",
  }
  changemode= async ()=>{
    if(this.state.mode=="light"){
      this.setState({mode:"dark"})
      document.body.style.backgroundColor="#1B3138"
    }
    else{
      this.setState({mode:"light"})
      document.body.style.backgroundColor="white"
    }

  }
  render() {

    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        height={4}
        color='#008E67'
        progress={this.state.progress}
      />
      
      <Navbar mode={this.state.mode} toggleMode={this.changemode}/>
       <Routes>
		    <Route exact path='/' element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="general"  pageSize={12} category={"general"}/>}/> 
		    <Route exact path='/sports'  element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={12} category={"sports"}/>}/> 
		    <Route exact path='/business'  element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="business"  pageSize={9} category={"business"}/>}/> 
		    <Route exact path='/health'  element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={9} category={"health"}/>}/> 
		    <Route exact path='/entertainment'  element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"  pageSize={9} category={"entertainment"}/>}/> 
		    <Route exact path='/science'  element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={9} category={"science"}/>}/> 
		    <Route exact path='/technology'  element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={9} category={"technology"}/>}/> 

	     </Routes>

      </BrowserRouter>
      </div>
    )
  }
}

