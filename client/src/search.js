// import React, { Component } from "react";
// import COntainer from "../components/Container";

class Search extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        API.getArticle()
        .then(res => this.setStage({ articles: res.data.message }))
        .catch(err => console.log(err));
    }

    handleInpuChange = event => {
        this.setStage({ search: event.target.value });
        console.log(this.state.search);
    };

    render() {
        return (
            <Container style={{ minHeight: "80%"}}>
                <h1 className="text-center">Search By Topic!</h1>
                <SearchForm />
                <SearchResults />
            </Container>    
        );
    }
}

// export default Search;