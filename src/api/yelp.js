import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer M6ft7nr20kVX1r54HFVXnGhn1oUKdlhXy7SF8Qo-NnW-np4XfCCmZh0rdKCEaGswzDDXgabM52Nephi6V-5cFQFcD24Ldf91s4W0jYjDWOd9ywlcyJFNDwE8oE7BXnYx",
  },
});
