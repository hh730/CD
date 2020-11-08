import './App.css';
import  Card from './Card';
import Colleges from './colleges.json';
import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

export default class App extends Component {
  state = {
    offset:10,
    items: Colleges['colleges'].slice(0,10),
  };

  fetchMoreData = () => {

    setTimeout(() => {
      this.setState((prevState, props) => ({
        offset: prevState.offset + 10,
        items: this.state.items.concat(Colleges['colleges'].slice(this.state.offset,this.state.offset+10))
    })); 
    }, 1500);
  };

  render() {
    return (
      <div className="App">
      <h1 class="heading">Colleges in North India</h1>
      <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.offset>=Colleges["colleges"].length?false:true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
              <Card college={i}></Card>

          ))}
        </InfiniteScroll>
    </div>
    )
  }
}