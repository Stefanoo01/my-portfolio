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
    href: "#",
    repo: "https://github.com/Stefanoo01/Facial-Emotion-Recognition",
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