const { Schema, model, Types } = require("../connection");

const mySchema = new Schema({
    courseId: { type: Types.ObjectId, ref: "courses" },
    userId: { type: Types.ObjectId, ref: "users" },     // Fixed ObjectId
    createdAt: { type: Date, default: Date.now },
});

module.exports = model("enrolls", mySchema);
