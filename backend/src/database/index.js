import mongoose from "mongoose";

import config from "../config/database";

class Database {
    constructor() {
        this.connection = mongoose.connect(
            config.url,
            {
                //useNetUrlParser: true, não usa mais
                useUnifiedTopology: true,
            }
        );
    }
}

export default new Database();