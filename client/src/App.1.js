import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
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
        </div>
        <form>
  <div className="form-group">
    <label for="InputTopic">Topic</label>
    <input type="text" className="form-control" id="InputTopic" aria-describedby="emailHelp" placeholder="Enter Topic" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Start Year</label>
    <input type="date" className="form-control" id="startYear" placeholder="YYYY" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">End Year</label>
    <input type="date" className="form-control" id="endYear" placeholder="YYYY" />
  </div>
  <form method="post">
      <div className="form-group">
        <label className="control-label" for="date">Date</label>
        <input className="form-control" id="date" name="date" placeholder="YYYY" type="text" />
      </div>
      {/* <div className="form-group">
        <button className="btn btn-primary " name="submit" type="submit">Submit</button>
      </div> */}
     </form>

  <button type="submit" className="btn btn-primary">Search</button>
</form>
    </div>
    </div>
    );
  }
}

export default App;
