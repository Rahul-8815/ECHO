import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import {
  Search,
  MessageSquare,
  Info,
  Send,
  Smile,
  Mic,
  ArrowLeft,
} from "lucide-react";
import "./ChatPage.css";

const volunteersSeed = [
  {
    id: 1,
    name: "Aarav Sharma",
    status: "Available",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    role: "Emotional Support Volunteer",
    experience: "3 years volunteering experience",
    contact: "aarav@example.com",
    bio:
      "Empathetic listener who helps others express emotions and find clarity through conversation.",
  },
  {
    id: 2,
    name: "Ishita Patel",
    status: "Busy",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "Mindfulness Coach",
    experience: "2 years volunteering experience",
    contact: "ishita@example.com",
    bio:
      "Calm and friendly conversationalist who believes everyone deserves to be heard.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    status: "Unavailable",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    role: "Counseling Volunteer",
    experience: "5 years experience",
    contact: "rohan@example.com",
    bio:
      "Loves helping people manage stress through mindful conversations and empathy.",
  },
];

export default function ChatPage() {
  const [volunteers] = useState(volunteersSeed);
  const [selected, setSelected] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false); // true when chat is fullscreen on mobile
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [recording, setRecording] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const messagesRef = useRef(null);

  // Quick suggestion chips shown at top of chat (no greeting)
  const suggestions = [
    "I need help with stress",
    "I want to relax",
    "I need study motivation",
    "I want to talk about relationships",
  ];

  useEffect(() => {
    // scroll to bottom on new message
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, mobileOpen]);

  // When user selects volunteer
  const openChatWith = (v) => {
    setSelected(v);
    // On mobile open full screen
    if (window.innerWidth <= 900) setMobileOpen(true);
    setShowAbout(false);
    // set initial message(s) dependent on status per earlier rules, but user requested no greeting — instead show suggestion chips only
    setMessages([
      {
        id: Date.now(),
        sender: "volunteer",
        text:
          v.status === "Available"
            ? `I am available — press Request to Chat or type a message.`
            : v.status === "Busy"
            ? `Volunteer is currently busy. You can wait or contact another volunteer.`
            : `Volunteer is currently unavailable — you can contact another volunteer or wait.`,
        time: formatTime(),
      },
    ]);
  };

  const formatTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), sender: "user", text: input, time: formatTime() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setEmojiOpen(false);

    // simple simulated volunteer reply only if volunteer available
    if (selected?.status === "Available") {
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { id: Date.now() + 1, sender: "volunteer", text: "Thanks — I’m listening.", time: formatTime() },
        ]);
      }, 900);
    } else if (selected?.status === "Busy") {
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { id: Date.now() + 1, sender: "volunteer", text: "I’m busy at the moment — consider contacting another volunteer.", time: formatTime() },
        ]);
      }, 900);
    } else {
      // unavailable -> queued message
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { id: Date.now() + 1, sender: "volunteer", text: "Volunteer is unavailable currently.", time: formatTime() },
        ]);
      }, 900);
    }
  };

  // clicking a suggestion
  const handleSuggestion = (text) => {
    setInput(text);
    // optionally send automatically:
    // handleSend();
  };

  // small mock mic: toggles recording state, then "sends" a mock voice note
  const handleMic = () => {
    if (!selected) return;
    if (!recording) {
      setRecording(true);
      // start mock recording
      setTimeout(() => {
        // do nothing — user must press again to stop
      }, 100);
    } else {
      // stop
      setRecording(false);
      const voiceMsg = { id: Date.now(), sender: "user", text: "[Voice message sent — mock]", time: formatTime() };
      setMessages((m) => [...m, voiceMsg]);
      // volunteer auto-reply (mock)
      if (selected?.status === "Available") {
        setTimeout(() => {
          setMessages((m) => [
            ...m,
            { id: Date.now() + 1, sender: "volunteer", text: "Got your voice note — thanks for sharing.", time: formatTime() },
          ]);
        }, 900);
      }
    }
  };

  // Request to chat from sidebar (works on both mobile and desktop)
  const requestChat = (user) => {
    openChatWith(user);
    // push request result per status
    setTimeout(() => {
      const reply =
        user.status === "Available"
          ? `Hi 👋 I'm ${user.name}. I received your request! I’ll contact you within 2 minutes.`
          : user.status === "Busy"
          ? `Hi 👋 I'm currently busy with another user. Please wait or contact another volunteer.`
          : `Hi 👋 I'm currently unavailable. I’ll reach out once available.`;
      setMessages([{ id: Date.now(), sender: "volunteer", text: reply, time: formatTime() }]);
    }, 700);
  };

  // Mobile back
  const handleBack = () => {
    setMobileOpen(false);
    setSelected(null);
    setMessages([]);
    setShowAbout(false);
  };

  // Emoji list (small, usable)
  const emojiList = ["😊", "😔", "😅", "❤️", "👍", "🙏", "🎧", "🌿", "🔥", "😴"];

  // detect small screen to conditionally show mobile behaviour
  const isMobile = () => window.innerWidth <= 900;

  // handle click info on top-right (mobile: overlay)
  const openAbout = () => {
    setShowAbout(true);
  };

  return (
    <>
      <Navbar />
      <div className="chatpage-container">
        <div className="shape shape1" />
        <div className="shape shape2" />

        <div className="chat-glassbox">
          <div className="chat-layout">
            {/* SIDEBAR: hide on mobile when chat opened */}
            <div className={`sidebar ${isMobile() && mobileOpen ? "hidden-mobile" : ""}`}>
              <div className="sidebar-title">
                <MessageSquare size={18} /> Volunteers
              </div>

              <div className="search-box">
                <Search size={16} />
                <input placeholder="Search volunteer..." />
              </div>

              <div className="volunteer-list">
                {volunteers.map((v) => (
                  <div className={`volunteer-item ${selected?.id === v.id ? "active" : ""}`} key={v.id}>
                    <div className="volunteer-info" onClick={() => openChatWith(v)}>
                      <img src={v.img} alt={v.name} />
                      <div>
                        <h3>{v.name}</h3>
                        <p className={v.status === "Available" ? "status-available" : v.status === "Busy" ? "status-busy" : "status-unavailable"}>
                          {v.status}
                        </p>
                      </div>
                    </div>

                    <button
                      className={`request-small-btn ${v.status !== "Available" ? "disabled" : "glow"}`}
                      onClick={() => requestChat(v)}
                    >
                      Request Chat
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CHAT AREA */}
            {/* On mobile: this area becomes full screen when mobileOpen === true */}
            <div className={`chat-area ${isMobile() && !mobileOpen && !selected ? "" : ""} ${isMobile() && mobileOpen ? "mobile-full" : ""}`}>
              {/* If no selection and on desktop, show welcome; on mobile, sidebar covers list */}
              {!selected && !isMobile() && (
                <div className="chat-welcome">
                  <img src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" alt="echo" />
                  <h2>Welcome to Echo Chat</h2>
                  <p>Select a volunteer to begin chatting.</p>
                </div>
              )}

              {/* If selected (chat open) */}
              {selected && (
                <>
                  {/* Top header */}
                  <div className="chat-header">
                    <div className="chat-header-left">
                      {isMobile() && (
                        <button className="back-btn mobile-only" onClick={handleBack}>
                          <ArrowLeft size={20} />
                        </button>
                      )}
                      <img src={selected.img} alt={selected.name} />
                      <div>
                        <h3>{selected.name}</h3>
                        <p className={selected.status === "Available" ? "status-available" : selected.status === "Busy" ? "status-busy" : "status-unavailable"}>
                          {selected.status}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <button className="info-btn" onClick={openAbout} title="About">
                        <Info />
                      </button>
                    </div>
                  </div>

                  {/* suggestion chips (always visible at top of chat) */}
                  <div className="suggestion-row">
                    {suggestions.map((s) => (
                      <button className="suggestion-chip" key={s} onClick={() => handleSuggestion(s)}>
                        {s}
                      </button>
                    ))}
                  </div>

                  {/* messages */}
                  <div className="chat-messages" ref={messagesRef}>
                    {messages.map((m) => (
                      <div key={m.id} className={`message ${m.sender === "user" ? "user" : "volunteer"}`}>
                        <div className="msg-text">{m.text}</div>
                        <div className="timestamp">{m.time}</div>
                      </div>
                    ))}
                  </div>

                  {/* input bar */}
                  <div className="chat-input">
                    <button className="emoji-btn" onClick={() => setEmojiOpen((p) => !p)}>
                      <Smile />
                    </button>

                    <input
                      type="text"
                      placeholder="Type a message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />

                    <button className={`mic-btn ${recording ? "recording" : ""}`} onClick={handleMic} title="Record (mock)">
                      <Mic />
                    </button>

                    <button className="send-btn" onClick={handleSend} title="Send">
                      <Send />
                    </button>
                  </div>

                  {/* emoji picker popup */}
                  {emojiOpen && (
                    <div className="emoji-popup">
                      {emojiList.map((em) => (
                        <button
                          key={em}
                          className="emoji-item"
                          onClick={() => {
                            setInput((v) => v + em);
                            setEmojiOpen(false);
                          }}
                        >
                          {em}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* If not selected and mobile: show helper text (user chooses volunteer) */}
              {!selected && isMobile() && (
                <div className="chat-welcome">
                  <img src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" alt="echo" />
                  <h2>Tap a volunteer to open chat</h2>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR / ABOUT (desktop) or overlay (mobile) */}
            <div className={`right-sidebar ${isMobile() ? (showAbout ? "show-mobile" : "hidden-mobile") : ""}`}>
              {selected ? (
                <>
                
                  {isMobile() && (
                    <button className="back-btn" onClick={() => setShowAbout(false)}>
                      ← Back
                    </button>
                  )}
                  <img src={selected.img} alt={selected.name} />
                  <h3>{selected.name}</h3>
                  <p className={selected.status === "Available" ? "status-available" : selected.status === "Busy" ? "status-busy" : "status-unavailable"}>
                    {selected.status}
                  </p>
                  <div className="info">
                    <p><strong>Role:</strong> {selected.role || "Volunteer"}</p>
                    <p><strong>Experience:</strong> {selected.experience || selected.role}</p>
                    <p><strong>Contact:</strong> {selected.contact}</p>
                    <p style={{ marginTop: 8 }}>{selected.bio}</p>
                  </div>
                </>
              ) : (
                <div style={{ padding: 12, color: "#cfe3ff" }}>Select a volunteer to view details</div>
              )}
            </div>
          </div>
        </div>

        {/* floating about button for mobile when chat open */}
        {selected && !showAbout && isMobile() && (
          <button className="floating-about-btn" onClick={() => setShowAbout(true)}>
            <Info />
          </button>
        )}
      </div>
    </>
  );
}
