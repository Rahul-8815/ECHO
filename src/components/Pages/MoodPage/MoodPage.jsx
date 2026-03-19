import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoodPage.css";
import Navbar from "../../Navbar/Navbar";

const questions = [
  {
    text: "How are you feeling physically right now?",
    options: [
      { label: "Full of energy ⚡", value: "happy" },
      { label: "A little tired 😴", value: "tired" },
      { label: "Completely drained 😩", value: "depressed" },
      { label: "Just fine 👍", value: "grateful" },
      { label: "Not sure 🤔", value: "neutral" },
    ],
  },
  {
    text: "How has your day been so far?",
    options: [
      { label: "Really good 😊", value: "happy" },
      { label: "Okay, not bad 😐", value: "grateful" },
      { label: "Stressful 😖", value: "tired" },
      { label: "Lonely 💔", value: "heartbroken" },
      { label: "Nothing special 🤷‍♂️", value: "neutral" },
    ],
  },
  {
    text: "Have you been thinking a lot about someone recently?",
    options: [
      { label: "Yes, I miss them 💔", value: "heartbroken" },
      { label: "A bit, but I’m okay 🙂", value: "grateful" },
      { label: "Not really 🤷‍♂️", value: "happy" },
      { label: "It still hurts 😞", value: "sad" },
      { label: "I’m trying to move on 🌱", value: "healing" },
    ],
  },
  {
    text: "How are your interactions with others today?",
    options: [
      { label: "Positive and warm 💬", value: "happy" },
      { label: "Irritating 😠", value: "angry" },
      { label: "Avoiding people 💔", value: "heartbroken" },
      { label: "Peaceful and calm 🌸", value: "grateful" },
      { label: "Didn’t talk to anyone 🤫", value: "neutral" },
    ],
  },
  {
    text: "What’s been on your mind lately?",
    options: [
      { label: "Exciting plans 🎉", value: "happy" },
      { label: "Something worrying 😟", value: "sad" },
      { label: "Memories of someone 💭", value: "heartbroken" },
      { label: "Feeling grateful 🙏", value: "grateful" },
      { label: "Trying to stay positive 🌞", value: "healing" },
    ],
  },
  {
    text: "What’s your motivation level today?",
    options: [
      { label: "Super motivated 💪", value: "happy" },
      { label: "Trying my best 💫", value: "grateful" },
      { label: "Hard to focus 😕", value: "tired" },
      { label: "Don’t feel like doing anything 😞", value: "depressed" },
      { label: "Just going with the flow 🌊", value: "neutral" },
    ],
  },
  {
    text: "How’s your sleep been recently?",
    options: [
      { label: "Peaceful and refreshing 😴", value: "grateful" },
      { label: "Not enough hours 😪", value: "tired" },
      { label: "Restless or full of dreams 😟", value: "sad" },
      { label: "Can’t sleep easily 😔", value: "depressed" },
      { label: "Just okay 😐", value: "neutral" },
    ],
  },
  {
    text: "What describes your emotional state right now?",
    options: [
      { label: "Calm and centered 🌸", value: "grateful" },
      { label: "Anxious or uneasy 😰", value: "tired" },
      { label: "Sad or heavy 💧", value: "sad" },
      { label: "Excited and joyful 🌈", value: "happy" },
      { label: "Simply neutral 😌", value: "neutral" },
    ],
  },
  {
    text: "Do you feel supported by people around you?",
    options: [
      { label: "Yes, deeply 💖", value: "happy" },
      { label: "Somewhat 🤝", value: "grateful" },
      { label: "Not really 💭", value: "heartbroken" },
      { label: "I prefer being alone 🌙", value: "neutral" },
      { label: "I’m not sure 🤷‍♀️", value: "sad" },
    ],
  },
  {
    text: "What do you need most right now?",
    options: [
      { label: "Love 💖", value: "heartbroken" },
      { label: "Rest 💤", value: "tired" },
      { label: "Motivation 🔥", value: "happy" },
      { label: "Calmness 🌸", value: "grateful" },
      { label: "Understanding 🤍", value: "healing" },
    ],
  },
  {
    text: "How are you coping with your current responsibilities?",
    options: [
      { label: "Managing well 👍", value: "happy" },
      { label: "A bit overwhelmed 😰", value: "tired" },
      { label: "Very stressed 😓", value: "depressed" },
      { label: "Taking things slowly 🌿", value: "neutral" },
      { label: "Feeling grateful for support 🙏", value: "grateful" },
    ],
  },
  {
    text: "How connected do you feel with the world around you today?",
    options: [
      { label: "Very connected 🌍", value: "happy" },
      { label: "Somewhat connected 🤝", value: "grateful" },
      { label: "Detached 😶", value: "neutral" },
      { label: "Lonely 💔", value: "heartbroken" },
      { label: "Lost in thoughts 🌫️", value: "sad" },
    ],
  },
  {
    text: "Have you taken any time for yourself today?",
    options: [
      { label: "Yes, I did something relaxing 🌸", value: "grateful" },
      { label: "A little bit, not enough 😕", value: "tired" },
      { label: "Not at all 😞", value: "depressed" },
      { label: "I forgot to 😐", value: "neutral" },
      { label: "Yes, something fun 😄", value: "happy" },
    ],
  },
  {
    text: "What best describes your focus level right now?",
    options: [
      { label: "Very sharp 🎯", value: "happy" },
      { label: "Okay but distracted 🤔", value: "neutral" },
      { label: "Struggling to focus 😵", value: "tired" },
      { label: "Not focused at all 😞", value: "depressed" },
      { label: "Trying to stay mindful 🌿", value: "healing" },
    ],
  },
  {
    text: "What does your heart feel today?",
    options: [
      { label: "Full of joy 💛", value: "happy" },
      { label: "Carrying sadness 💙", value: "sad" },
      { label: "Healing slowly 💚", value: "healing" },
      { label: "Missing someone 💔", value: "heartbroken" },
      { label: "Calm & peaceful 🤍", value: "grateful" },
    ],
  },
];

const moodResponses = {
  happy: {
    mood: "Happy 😊",
    message: "You’re shining bright today 🌞 Keep that positive energy flowing!",
    quotes: [
      "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
      "Keep smiling, because life is a beautiful thing and there’s so much to smile about. – Marilyn Monroe",
    ],
    volunteer:
      "Share your joy! Our volunteers love hearing happy stories 💬 — positivity spreads like sunlight 🌞",
  },
  sad: {
    mood: "Sad 😢",
    message: "It’s okay to not be okay 💧 Be gentle with yourself.",
    quotes: [
      "Even the darkest night will end and the sun will rise. – Victor Hugo",
      "Tears are words the heart can’t express, but healing always follows. 💧",
    ],
    volunteer:
      "You’re not alone 💙 Sometimes talking helps lighten the heart — reach out to a caring volunteer 🌸",
  },
  tired: {
    mood: "Tired 😴",
    message: "Take a deep breath and rest a bit 😴 You’ve earned it.",
    quotes: [
      "Rest when you’re weary. Refresh and renew yourself. – Lailah Gifty Akita",
      "Sometimes doing nothing makes way for everything. 🌙",
    ],
    volunteer:
      "Even heroes need rest 💫 Let our volunteers lend a kind ear while you recharge your soul 🌿",
  },
  heartbroken: {
    mood: "Heartbroken 💔",
    message:
      "Your heart is healing ❤️‍🩹 Remember, pain is temporary and love will return.",
    quotes: [
      "Sometimes good things fall apart so better things can fall together. – Marilyn Monroe",
      "Healing takes time, but every sunrise brings hope. 🌅",
    ],
    volunteer:
      "Love still surrounds you 💖 Our volunteers are here to listen with warmth and care — you deserve that connection 💌",
  },
  depressed: {
    mood: "Depressed 😔",
    message:
      "You’ve been carrying too much for too long 💙 Be kind to yourself — you’re not alone.",
    quotes: [
      "Out of suffering have emerged the strongest souls. – Kahlil Gibran",
      "Even the darkest clouds can’t block the sun forever 🌤️",
    ],
    volunteer:
      "You matter deeply 💫 Please reach out to one of our volunteers — they’ll listen, no judgment, just heart 💖",
  },
  grateful: {
    mood: "Grateful 🙏",
    message: "That’s wonderful 🙏 Gratitude makes life beautiful.",
    quotes: [
      "Gratitude turns what we have into enough. – Aesop",
      "The more you practice gratitude, the more there is to be grateful for. 💫",
    ],
    volunteer:
      "Share your light 🌟 Our volunteers love hearing uplifting moments — your gratitude might inspire someone today 💖",
  },
  healing: {
    mood: "Healing 🌿",
    message: "You’re growing stronger 🌿 Every small step counts.",
    quotes: [
      "Healing doesn’t mean the damage never existed. It means it no longer controls your life.",
      "You are growing through what you go through. 🌱",
    ],
    volunteer:
      "Healing is beautiful 🌷 Sometimes a kind voice helps the process — connect with our volunteers today 💬",
  },
  neutral: {
    mood: "Neutral 😌",
    message: "Balance is beautiful ⚖️ Stay centered and kind to yourself.",
    quotes: [
      "Sometimes doing nothing is the best thing you can do. 🌤️",
      "Peace is not the absence of trouble, but the presence of calm. 🌸",
    ],
    volunteer:
      "Even in balance, connection adds warmth 🌞 — reach out to a volunteer for a light chat 💌",
  },
};

const MoodPage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]); // store values like "happy","sad",...
  const [done, setDone] = useState(false);

  const handleAnswer = (value) => {
  const newAns = [...answers];
  newAns[current] = value;
  setAnswers(newAns);

  // If user is on the last question, check at least 10 answers
  if (current + 1 === questions.length) {
    const answeredCount = newAns.filter(v => v !== undefined).length;

    if (answeredCount < 10) {
      alert("Please answer at least 10 questions to get accurate results.");
      return; // stop finishing quiz
    }

    setDone(true); // enough answers, finish
    return;
  }

  // Otherwise move to next question
    setCurrent((c) => c + 1);
  };


  const handleSkip = () => {
  if (current + 1 === questions.length) {
    const answeredCount = answers.filter(v => v !== undefined).length;

    if (answeredCount < 10) {
      alert("Please answer at least 10 questions to finish.");
      return; 
    }

    setDone(true);
    return;
  }

    setCurrent((c) => c + 1);
  };


  const handleBack = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const calculateMood = () => {
    const moodCount = {};
    answers.forEach((m) => {
      if (!m) return;
      moodCount[m] = (moodCount[m] || 0) + 1;
    });
    return Object.entries(moodCount).sort((a, b) => b[1] - a[1])[0]?.[0];
  };

  const progressPercent = Math.round(((current + 1) / questions.length) * 100);
  const finalMood = calculateMood() || "neutral";
  const result = moodResponses[finalMood];

  return (
    <>
      <Navbar />

      <div className="mood-container">
        <div className="shape shape1" aria-hidden="true"></div>
        <div className="shape shape2" aria-hidden="true"></div>

        <div className="mood-box" role="region" aria-label="Mood Tracker">
          {/* Progress numbers + animated bar (hidden on results) */}
          {!done && (
            <>
              <div className="top-row">
                <div className="progress-wrapper" aria-hidden="true">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </>
          )}

          <h1 className="logo">Echo</h1>
          <h2 className="title">Mood Tracker 💗</h2>

          {!done ? (
            <>
              <p className="question">{questions[current].text}</p>

              <div className="options">
                {questions[current].options.map((opt, i) => (
                  <button
                    key={i}
                    className={`option-btn ${
                      answers[current] === opt.value ? "selected" : ""
                    }`}
                    onClick={() => handleAnswer(opt.value)}
                    aria-pressed={answers[current] === opt.value}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="controls-row">
                <button
                  className="back-btn nav-btn"
                  onClick={handleBack}
                  disabled={current === 0}
                >
                  ⬅ Back
                </button>

                <div className="right-controls">
                  <button className="skip-btn nav-btn" onClick={handleSkip}>
                    Skip
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3 className="result-title">{result.mood}</h3>
              <p className="result-text">{result.message}</p>

              <div className="quotes-box">
                {result.quotes.map((q, i) => (
                  <p key={i} className="quote">
                    “{q}”
                  </p>
                ))}
              </div>

              <div className="volunteer-box">
                <p className="volunteer-text">{result.volunteer}</p>
                <button
                  className="volunteer-btn"
                  onClick={() => navigate("/chat")}
                >
                  Contact a Volunteer 💌
                </button>
              </div>

              <div className="end-actions">
                <button
                  className="restart-btn"
                  onClick={() => {
                    setAnswers([]);
                    setCurrent(0);
                    setDone(false);
                  }}
                >
                  Restart Quiz
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MoodPage;
