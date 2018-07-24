import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "&apikey=668fcc4ba0224106aa8ccc507d6f5c54";

export default {
  search: function(query) {
    return axios.get(BASEURL + "q="+query + APIKEY);
  }
};

