import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import hero from "../assets/hero.png";

const words = ["React", "Hooks", "Routing", "MongoDB", "Express", "Node"];

const topics = [
  {
    icon: "🎯",
    title: "useState",
    text: "Store and update values inside a component and re-render the UI automatically.",
    path: "/use-state",
  },
  {
    icon: "🔁",
    title: "useEffect",
    text: "Run side effects like timers, subscriptions and cleanup on every render.",
    path: "/use-effect",
  },
  {
    icon: "🌐",
    title: "useEffect + API",
    text: "Fetch data from a REST API with axios and show it once it arrives.",
    path: "/use-effect-api",
  },
  {
    icon: "📌",
    title: "useRef",
    text: "Hold a mutable value or reach a DOM node without causing a re-render.",
    path: "/use-ref",
  },
  {
    icon: "⚡",
    title: "useMemo",
    text: "Cache an expensive calculation so it only runs when its inputs change.",
    path: "/use-memo",
  },
  {
    icon: "🧭",
    title: "React Router",
    text: "Move between pages with Link and Routes without reloading the browser.",
    path: "/about",
  },
];

var Home = () => {
  // Typing animation for the hero heading
  var [wordIndex, setWordIndex] = useState(0);
  var [text, setText] = useState("");
  var [deleting, setDeleting] = useState(false);

  // Live counter demo
  var [count, setCount] = useState(0);

  useEffect(() => {
    const word = words[wordIndex];
    const speed = deleting ? 60 : 140;

    const timer = setTimeout(() => {
      const next = deleting
        ? word.substring(0, text.length - 1)
        : word.substring(0, text.length + 1);
      setText(next);

      if (!deleting && next === word) {
        setTimeout(() => setDeleting(true), 900);
      } else if (deleting && next === "") {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  useEffect(() => {
    document.title = "Home | KPRCAS MERN";
  }, []);

  return (
    <div className="home">
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-text">
          <span className="badge">KPRCAS • MERN VALUE ADDED COURSE</span>
          <h1>
            Learn to build with <span>MERN</span>
          </h1>
          <p className="typing">
            Today we are learning {text}
            <span className="cursor">|</span>
          </p>
          <p className="desc">
            A hands-on playground built during class. Every menu item above is a
            working example you can open, read and break — components, props,
            state, hooks, routing and API calls, all in one app.
          </p>
          <div className="hero-buttons">
            <Link to="/use-state" className="btn btn-primary">
              Start with Hooks
            </Link>
            <Link to="/about" className="btn btn-outline">
              About the Course
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <img src={hero} alt="MERN stack illustration" />
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="stats">
        <div className="stat">
          <h2>4</h2>
          <p>TECHNOLOGIES</p>
        </div>
        <div className="stat">
          <h2>{topics.length}</h2>
          <p>LIVE DEMOS</p>
        </div>
        <div className="stat">
          <h2>30+</h2>
          <p>HOURS</p>
        </div>
        <div className="stat">
          <h2>100%</h2>
          <p>PRACTICAL</p>
        </div>
      </section>

      {/* ---------- Topics ---------- */}
      <section className="section">
        <h2 className="title">What's inside this app</h2>
        <p className="subtitle">Click any card to open the live example</p>
        <div className="cards">
          {topics.map((topic) => (
            <Link to={topic.path} key={topic.title} className="card">
              <div className="icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Mini demo ---------- */}
      <section className="section demo">
        <h2 className="title">useState in one minute</h2>
        <p className="subtitle">
          This little counter is the whole idea behind React state
        </p>
        <div className="demo-box">
          <p className="count">{count}</p>
          <div className="demo-buttons">
            <button onClick={() => setCount(count - 1)}>− Decrease</button>
            <button className="ghost" onClick={() => setCount(0)}>
              Reset
            </button>
            <button onClick={() => setCount(count + 1)}>+ Increase</button>
          </div>
          <p className="demo-note">
            setCount() changes the value, React re-renders this section for you.
          </p>
        </div>
      </section>

      <footer className="home-footer">
        Built in class • KPR College of Arts, Science and Research • MERN VAC
      </footer>
    </div>
  );
};
export default Home;
