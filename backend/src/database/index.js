import mongoose from "mongoose";

import config from "../config/database";

class Database {

    constructor() {

        try {
            // Connect to the MongoDB cluster
            this.connection = mongoose.connect(
                config.url,
              { useNewUrlParser: true, useUnifiedTopology: true },
              () => console.log(" Mongoose is connected")
            );
        
          } catch (e) {
            console.log("could not connect");
          }
    }
}

export default new Database();