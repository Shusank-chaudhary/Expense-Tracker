import mongoose from "mongoose";
import { required } from "zod/v4/core/util.cjs";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 50,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
},{
    timestamps: true,
    autoIndex: true,
    autoCreate: true
})

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;