import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Heart, Clock, Mic } from "lucide-react";
import Navbar from "../../Navbar/Navbar";
import "./AIPage.css";

const quotes = [
  "You are enough, just as you are 💙",
  "Every storm brings a new sunrise 🌤️",
  "Your feelings are valid and beautiful 💫",
  "Keep going — you're doing better than you think ",
  "Kindness begins with yourself 💖",
];

const AIPage = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there 💬 How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);
  const [chatHistory, setChatHistory] = useState([]);

  // Load chat history
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(savedHistory);
  }, []);

  // Rotate motivational quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const saveChatToHistory = (chatMessages) => {
    const newChat = {
      id: Date.now(),
      title: chatMessages[1]?.text?.slice(0, 30) || "New Chat",
      messages: chatMessages,
      date: new Date().toLocaleString(),
    };
    const updated = [newChat, ...chatHistory];
    setChatHistory(updated);
    localStorage.setItem("chatHistory", JSON.stringify(updated));
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: "That's beautiful — thank you for sharing 💖",
      };
      const newMessages = [...messages, userMessage, botReply];
      setMessages(newMessages);
      saveChatToHistory(newMessages);
      setLoading(false);
    }, 1000);
  };

  const loadChat = (chat) => setMessages(chat.messages);

  const clearHistory = () => {
    localStorage.removeItem("chatHistory");
    setChatHistory([]);
    window.location.reload(); // 🔄 refresh page after clearing
  };

  return (
    <>
      <Navbar />
      <div className="aipage-container">
        {/* Background shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        <div className="aibox">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <div className="flex justify-center items-center gap-2 mb-2">
              <Heart className="text-pink-400 animate-pulse w-6 h-6" />
              <h1 className="text-3xl font-semibold text-white">Echo AI</h1>
              <Heart className="text-pink-400 animate-pulse w-6 h-6" />
            </div>
            <p className="text-blue-100 italic text-sm sm:text-base">{quote}</p>
          </motion.div>

          {/* Chat box */}
          <div className="chat-box-glass">
            <div className="chat-messages">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`message ${msg.sender}`}
                  >
                    {msg.text}
                  </motion.div>
                ))}

                {loading && (
                  <motion.div
                    className="message bot typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.span
                      className="dot"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                    />
                    <motion.span
                      className="dot"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        delay: 0.2,
                        repeat: Infinity,
                        duration: 0.6,
                      }}
                    />
                    <motion.span
                      className="dot"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        delay: 0.4,
                        repeat: Infinity,
                        duration: 0.6,
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="chat-input"
            >
              <button type="button" className="mic-btn">
                <Mic size={18} />
              </button>
              <input
                type="text"
                placeholder="Share your thoughts..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">
                <Send size={18} />
              </button>
            </motion.form>
          </div>

          {/* Chat history */}
          <div className="history-section">
            <div className="history-title flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Clock size={16} /> <span>Previous Conversations</span>
              </div>
              <button
                onClick={clearHistory}
                className="text-xs bg-red-500/30 text-white px-2 py-1 rounded hover:bg-red-500/50 transition"
              >
                Clear History
              </button>
            </div>

            <div className="history-list">
              {chatHistory.length === 0 ? (
                <p className="empty-history">No past chats yet 🕊️</p>
              ) : (
                chatHistory.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => loadChat(chat)}
                    className="history-item"
                  >
                    <p className="title">{chat.title}</p>
                    <p className="date">{chat.date}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPage;
