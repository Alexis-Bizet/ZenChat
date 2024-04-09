const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    server: { type: mongoose.Schema.Types.ObjectId, ref: "Server" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
    {  timestamps: true, toJSON: { virtuals: true } }
  );

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;