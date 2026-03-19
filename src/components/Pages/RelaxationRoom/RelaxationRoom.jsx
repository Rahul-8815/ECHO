import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import {
  Wind,
  Sun,
  Moon,
  Music,
  Coffee,
  BookOpen,
  Leaf,
  Cloud,
  Flower,
  Smile,
  Quote,
  Heart,
} from "lucide-react";
import "./RelaxationRoom.css";

const RelaxationRoom = () => {
  const [isBreathing, setIsBreathing] = useState(false);

  const affirmations = [
    "You are safe. You are calm. You are enough.",
    "Breathe in peace, breathe out tension.",
    "You deserve rest and kindness — even from yourself.",
    "Let go of what you can’t control. Feel the present moment.",
    "Peace begins with a deep breath 🌿",
  ];

  const relaxingActivities = [
    { icon: <Sun className="w-12 h-12 text-yellow-400 mb-4" />, title: "Morning Calm ☀️", desc: "Start your day with stretches and gratitude journaling." },
    { icon: <Moon className="w-12 h-12 text-indigo-500 mb-4" />, title: "Evening Relax 🌙", desc: "Wind down with soft music or reflection before bed." },
    { icon: <Music className="w-12 h-12 text-pink-500 mb-4" />, title: "Soothing Music 🎵", desc: "Listen to calm instrumental tunes or nature sounds." },
    { icon: <Coffee className="w-12 h-12 text-amber-600 mb-4" />, title: "Tea Meditation 🍵", desc: "Sip your favorite tea slowly and mindfully." },
    { icon: <BookOpen className="w-12 h-12 text-blue-600 mb-4" />, title: "Mindful Reading 📖", desc: "Read something uplifting for your soul." },
    { icon: <Leaf className="w-12 h-12 text-green-600 mb-4" />, title: "Nature Walk 🌿", desc: "Step outside and breathe the fresh air deeply." },
    { icon: <Cloud className="w-12 h-12 text-gray-500 mb-4" />, title: "Cloud Gazing ☁️", desc: "Lie back and watch the clouds drift by." },
    { icon: <Flower className="w-12 h-12 text-pink-400 mb-4" />, title: "Gratitude Bloom 🌸", desc: "List three things you’re thankful for." },
    { icon: <Smile className="w-12 h-12 text-yellow-400 mb-4" />, title: "Joyful Movement 💃", desc: "Move freely — dance, stretch, and smile!" },
  ];

  const greatQuotes = [
    { author: "Osho", text: "Be — don’t try to become. The moment you become, you are unhappy." },
    { author: "Acharya Prashant", text: "Truth is not comfortable, but it liberates you." },
    { author: "Buddha", text: "Peace comes from within. Do not seek it without." },
    { author: "Rumi", text: "The wound is the place where the Light enters you." },
    { author: "Thich Nhat Hanh", text: "Feelings come and go like clouds. Conscious breathing is my anchor." },
    { author: "Eckhart Tolle", text: "Realize deeply that the present moment is all you ever have." },
    { author: "Lao Tzu", text: "When you realize nothing is lacking, the whole world belongs to you." },
    { author: "Sadhguru", text: "If you resist change, you resist life." },
    { author: "Jiddu Krishnamurti", text: "The ability to observe without evaluating is the highest form of intelligence." },
    { author: "Dalai Lama", text: "The purpose of our lives is to be happy." },
    { author: "Marcus Aurelius", text: "You have power over your mind — not outside events. Realize this, and you will find strength." },
    { author: "Seneca", text: "We suffer more often in imagination than in reality." },
    { author: "Epictetus", text: "It's not what happens to you, but how you react that matters." },
    { author: "Alan Watts", text: "Muddy water is best cleared by leaving it alone." },
    { author: "Swami Vivekananda", text: "You cannot believe in God until you believe in yourself." },
    { author: "Ralph Waldo Emerson", text: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
    { author: "Henry David Thoreau", text: "Go confidently in the direction of your dreams. Live the life you’ve imagined." },
    { author: "Gautama Buddha", text: "No one saves us but ourselves. We must walk the path." },
    { author: "Kahlil Gibran", text: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars." },
    { author: "Sri Sri Ravi Shankar", text: "Smile more, it costs nothing and adds much." },
    { author: "Paramahansa Yogananda", text: "Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become." },
    { author: "Ram Dass", text: "We're all just walking each other home." },
    { author: "Deepak Chopra", text: "In the midst of movement and chaos, keep stillness inside of you." },
    { author: "Mooji", text: "You need nothing to be happy, but you need something to be sad." },
    { author: "Byron Katie", text: "When you argue with reality, you lose — but only 100% of the time." },
    { author: "Hermann Hesse", text: "Within you, there is a stillness and a sanctuary to which you can retreat at any time." },
    { author: "Jean Klein", text: "The mind creates the abyss, the heart crosses it." },
    { author: "Papaji", text: "Keep quiet. Do not let your mind think. This is freedom." },
    { author: "Radhanath Swami", text: "Happiness is not in things; it is in the heart." },
    { author: "Kabir", text: "Wherever you are is the entry point." },
    { author: "Sri Aurobindo", text: "True knowledge is not attained by thinking. It is what you are; it is what you become." },
    { author: "Adi Shankaracharya", text: "The world is illusory; Brahman alone is real." },
    { author: "Carl Jung", text: "Who looks outside, dreams; who looks inside, awakes." },
    { author: "Friedrich Nietzsche", text: "He who has a why to live can bear almost any how." },
    { author: "Albert Einstein", text: "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness." },
    { author: "Pema Chödrön", text: "You are the sky. Everything else — it’s just the weather." },
    { author: "Ramakrishna", text: "The winds of grace are always blowing, but you have to raise your sail." },
    { author: "Shunryu Suzuki", text: "In the beginner’s mind there are many possibilities, in the expert’s mind there are few." },
    { author: "Maharshi Ramana", text: "The mind is only a bundle of thoughts. Stop thinking and see who you are." },
    { author: "Desmond Tutu", text: "Do your little bit of good where you are; it’s those little bits that overwhelm the world." },
    { author: "Mother Teresa", text: "Peace begins with a smile." },
    { author: "Victor Frankl", text: "When we are no longer able to change a situation, we are challenged to change ourselves." },
    { author: "Wayne Dyer", text: "Change the way you look at things and the things you look at change." },
    { author: "Rhonda Byrne", text: "Your thoughts become things." },
    { author: "Paulo Coelho", text: "When you want something, all the universe conspires in helping you to achieve it." },
    { author: "Mahatma Gandhi", text: "The best way to find yourself is to lose yourself in the service of others." },
    { author: "Bruce Lee", text: "Be like water, my friend." },
    { author: "Steve Jobs", text: "Your time is limited, so don’t waste it living someone else’s life." },
    { author: "Robin Sharma", text: "Change is hard at first, messy in the middle, and gorgeous at the end." },
    { author: "Jay Shetty", text: "Don’t let compliments go to your head and criticisms to your heart." },
  ];

  const startBreathing = () => {
    setIsBreathing(true);
    setTimeout(() => setIsBreathing(false), 10000);
  };

  return (
    <>
      <Navbar />
      <div className="relax-container">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        <div className="relax-box">
          <h1 className="logo">Echo 🌸</h1>
          <h2 className="title">Relaxation Room</h2>

          {/* Breathing Circle */}
          <div className="breathe-section">
            <div className={`breathe-circle ${isBreathing ? "breathe-animate" : ""}`}></div>
            <button onClick={startBreathing} className="breathe-btn">
              <Wind className="w-5 h-5" />
              {isBreathing ? "Just Breathe..." : "Start Breathing Exercise"}
            </button>
          </div>

          {/* Affirmations */}
          <div className="affirmation-box">
            <h3>Positive Affirmations 💫</h3>
            <ul>
              {affirmations.map((a, i) => (
                <li key={i}>“{a}”</li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <h3 className="section-title">Relaxing Activities 🕊️</h3>
          <div className="activities-grid">
            {relaxingActivities.map((a, i) => (
              <div key={i} className="activity-card">
                {a.icon}
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Quotes Section */}
          <h3 className="section-title">
            <Quote className="inline-block w-6 h-6 mb-1 text-blue-400" /> Words of Wisdom ✨
          </h3>
          <div className="quotes-grid">
            {greatQuotes.map((q, i) => (
              <div key={i} className="quote-card">
                <p className="quote-text">“{q.text}”</p>
                <h5 className="quote-author">— {q.author}</h5>
              </div>
            ))}
          </div>

          <p className="footer-quote">
            “Within you, there is a stillness and a sanctuary to which you can retreat at any time.” — Hermann Hesse
          </p>

          <div className="heart-footer">
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
            <span> Relax. Breathe. Be Present. </span>
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RelaxationRoom;
