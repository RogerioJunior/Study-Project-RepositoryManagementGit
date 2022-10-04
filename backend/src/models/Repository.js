import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            require: true,
            unique: true
        },
        userId: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Repository', repositorySchema);