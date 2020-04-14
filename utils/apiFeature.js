class APIfeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  find() {
    const queryObj = { ...this.queryString };
    const exclude = ["sort", "limit", "page", "field"];
    exclude.forEach(el => delete queryObj[el]);

    this.query = this.query.find(queryObj);
    return this;
  }
}

module.exports = APIfeature;
