const Message = require("../models/Message");

// Create a new message
const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = await Message.create({
      name,
      email,
      message
    });

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: newMessage
    });

  } catch (error) {
    console.error("Create message error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};


// Get all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: messages
    });

  } catch (error) {
    console.error("Get messages error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};


// Get one message by ID
const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        error: "Message not found"
      });
    }

    res.json(message);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


// Delete a message
const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Message deleted"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


module.exports = {
  createMessage,
  getMessages,
  getMessageById,
  deleteMessage
};