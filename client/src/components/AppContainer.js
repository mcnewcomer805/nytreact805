import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import "./AppContainer.css";

class AppContainer extends Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    this.searchTopics("Sports");
  }

  save = id=>{}
  searchTopics = query => {
    console.log(this.state.search)
    API.search(this.state.search)
      .then(res => this.setState({ results: res.data.response.docs })
    )
      .catch(err => console.log(err));
      
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchTopics(this.state.search);
  };

  render() {
    return (
      <div>
              <div className="App">
        <div className="App-header">
        <div>
          <h1 className="span">New York Times Article Scrubber</h1><br />
        </div><br></br><br></br>
        <div>
          <h3>Search for and annotate articles of interest!</h3>
          </div>
        </div></div>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              {this.state.results.map((item) => {
                  
                // create a route-able link for each product
                return (
                  <li className="list-group-item" key={item.i}>
                    {item.headline.main}
                    {" ... "}<br></br>
                    <a href ="{item.web_url}">{item.web_url}</a>
                    <button onclick ={()=>this.save(item.i)} className="btn btn-outline-primary mt-2">Save</button>
                  </li>
                );
              })}
              
            </div>);

  }
}

export default AppContainer;
