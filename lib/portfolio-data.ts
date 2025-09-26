export const portfolio = {
  name: "Stefano Racca",
  role: "AI & Machine Learning Student",
  summary:
    "Master’s student in AI Systems with a background in Computer Science. I build practical AI solutions in deep learning, NLP, and computer vision, focusing on explainability, reliability, and real-world impact.",
  social: {
    github: "https://github.com/Stefanoo01",
    linkedin: "https://www.linkedin.com/in/stefano-racca-056412335",
  },
}

export const projects = [
  {
    slug: "explainable-cnn",
    title: "ExplainableCNN",
    subtitle: "Interpretable vision models with real-time visualizations",
    description:
      "Built an end-to-end CNN training pipeline with explainability methods (Grad-CAM, Grad-CAM++). Developed a Streamlit app to run inference, visualize heatmaps, and manage experiments with Lightning and TensorBoard.",
    tags: ["PyTorch", "CNN", "Explainability", "Streamlit"],
    video: "/explainable-cnn.mp4",
    image: "/projects/explainable-cnn.png",
    href: "https://huggingface.co/spaces/Stefano01/ExplainableCNN",
    repo: "https://github.com/Stefanoo01/ExplainableCNN",
  },
  {
    slug: "smart-delivery-agents",
    title: "Smart Delivery Agents",
    subtitle: "Multi-agent system for adaptive delivery planning",
    description:
      "Developed a multi-agent delivery system using BDI architecture with adaptive planning (PDDL + BFS fallback). Implemented coordination and competitive protocols for efficient delivery strategies.",
    tags: ["Multi-Agent", "Node.js", "PDDL", "BDI"],
    video: "/smart-delivery-agents.mp4",
    image: "/projects/smart-delivery-agents.png",
    href: "#",
    repo: "https://github.com/Stefanoo01/Smart_Delivery_Agent",
  },
  {
    slug: "lm-nlu",
    title: "Language Modeling & NLU",
    subtitle: "LSTMs and BERT for intent detection and slot filling",
    description:
      "Implemented LSTM-based language models with advanced regularization. Built BiLSTM and BERT models for joint intent classification and slot filling, evaluating trade-offs in performance and generalization.",
    tags: ["NLP", "PyTorch", "LSTMs", "BERT"],
    video: "/lm-nlu.mp4",
    image: "/projects/lm-nlu.png",
    href: "#",
    repo: "https://github.com/Stefanoo01/lm-nlu-exp",
  },
  {
    slug: "facial-emotion-recognition",
    title: "Facial Emotion Recognition",
    subtitle: "Hybrid approach with rule-based and CNN pipelines",
    description:
      "Created dual pipelines for emotion recognition: a landmark-based approach with MediaPipe Face Mesh and a CNN-based solution with DeepFace. Supported both real-time and recorded-video analysis with OpenCV.",
    tags: ["Computer Vision", "OpenCV", "MediaPipe", "DeepFace"],
    video: "/facial-emotion-recognition.mp4",
    image: "/projects/facial-emotion-recognition.png",
    href: "#",
    repo: "https://github.com/Stefanoo01/Facial-Emotion-Recognition",
  },
]

export const experience = [
  {
    company: "Acme AI",
    role: "Senior AI Engineer",
    period: "2023 — Present",
    summary:
      "Led LLM platform: retrieval pipelines, evals, and production rollouts serving millions of requests monthly.",
  },
  {
    company: "DataWorks",
    role: "Machine Learning Engineer",
    period: "2021 — 2023",
    summary:
      "Shipped ranking and summarization systems with strong offline/online eval alignment and observability.",
  },
  {
    company: "Freelance",
    role: "AI Engineer",
    period: "2018 — 2021",
    summary:
      "Delivered custom AI solutions: RAG apps, model fine-tunes, and analytics with dashboards and alerts.",
  },
]

export const education = [
  {
    degree: "Master's Degree in Artificial Intelligence Systems",
    institution: "University of Trento",
    location: "Trento, Italy",
    period: "Sep. 2024 - Pres.",
    items: [
      "Key Courses: Machine Learning, Deep Learning, Applied NLP, Computer Vision",
    ],
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "University of Turin",
    location: "Turin, Italy",
    period: "Sep. 2021 - Jul. 2024",
    items: [
      "Key Courses: Algorithms and Data Structures, Databases, Website Development",
    ],
  },
  {
    degree: "Scientific High School Diploma",
    institution: "I.I.S. Arimondi-Eula",
    location: "Racconigi (Cuneo), Italy",
    period: "Sep. 2015 - Jun. 2020",
    items: [],
  },
]

export const skills = [
  // Core from showcased projects
  "PyTorch",
  "CNNs",
  "Explainability (Grad-CAM/++)",
  "Computer Vision",
  "OpenCV",
  "MediaPipe",
  "DeepFace",
  "NLP",
  "LSTMs",
  "BERT",
  "Streamlit",
  "PyTorch Lightning",
  "TensorBoard",
  "Multi-Agent Systems",
  "PDDL",
  "BDI",
  // App & tooling
  "Python",
  "Node.js",
  "Next.js",
]

export const skillsByCategory = [
  {
    name: "Deep Learning & Vision",
    subtitle: "Modeling, training, explainability",
    items: [
      { label: "PyTorch", level: 85, note: "Training, debugging, optimization" },
      { label: "CNNs", level: 83, note: "Architectures, regularization" },
      { label: "Explainability (Grad‑CAM/++)", level: 80, note: "Visual insights, comparisons" },
      { label: "Computer Vision (OpenCV/MediaPipe/DeepFace)", level: 78 },
    ],
  },
  {
    name: "NLP",
    subtitle: "Sequence models and transformers",
    items: [
      { label: "LSTMs", level: 78, note: "Language modeling, regularization" },
      { label: "BERT", level: 76, note: "Intent + slot filling" },
    ],
  },
  {
    name: "ML Tooling",
    subtitle: "Apps, logging, and experiment tracking",
    items: [
      { label: "Streamlit", level: 82, note: "Interactive demos & UX" },
      { label: "PyTorch Lightning", level: 78, note: "Training loops, callbacks" },
      { label: "TensorBoard", level: 76, note: "Metrics, visualization" },
    ],
  },
  {
    name: "Multi‑Agent Systems",
    subtitle: "Planning and agent architectures",
    items: [
      { label: "PDDL", level: 74, note: "Planning models" },
      { label: "BDI", level: 72, note: "Agent design & protocols" },
    ],
  },
  {
    name: "Systems & Apps",
    subtitle: "APIs, UI integration, and reliability",
    items: [
      { label: "Python", level: 84, note: "Data tooling, scripts, notebooks" },
      { label: "Node.js", level: 72, note: "Services, integrations" },
      { label: "Next.js", level: 75, note: "Sites & components" },
    ],
  },
]
