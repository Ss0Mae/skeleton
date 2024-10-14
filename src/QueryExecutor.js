import skeleton from "./skeleton.js";

class QueryExecutor {
    constructor(db) {
        this.db = db;
    }
    async query(sql) {
        const queryString = skeleton.literalize(sql);
        try {
            return await this.db.query(queryString);
        } catch (error) {
            throw new Error(error);
        }
    }
}
export default QueryExecutor;
