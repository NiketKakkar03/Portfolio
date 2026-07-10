export const profile = {
  name: "Niket Kakkar",
  title: "Software & ML Engineer",
  tagline:
    "Computer Engineering grad from Queen's University building at the intersection of LLM infrastructure and physical AI.",
  location: "Toronto, Canada",
  email: "niketkakkar@gmail.com",
  github: "https://github.com/NiketKakkar03",
  linkedin: "https://www.linkedin.com/in/niketkakkar",
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Cywift",
    location: "London, UK (Remote)",
    period: "Apr 2025 – Jul 2025",
    points: [
      "Built a custom MCP server in Python exposing a GRC platform's data governance layer — compliance data with lineage tracking — to LLM clients.",
      "Used Anthropic's MCP SDK to standardize LLM access to live compliance and risk data, connecting AI directly to production GRC workflows.",
      "Engineered an ETL pipeline with data-quality validation using Python and MySQL, parallelizing ingestion and transformation across production data loads.",
    ],
    tech: ["Python", "MCP SDK", "MySQL", "ETL"],
  },
  {
    role: "Autonomous Subsystem Lead",
    company: "Queen's Space Engineering Team",
    location: "Kingston, ON",
    period: "May 2025 – Apr 2026",
    points: [
      "Led a 10-member team building an autonomous rover on ROS 2, designing the architecture in Python/C++ integrating LIDAR, camera, and IMU data.",
      "Trained YOLOv8 object-detection models on collected rover data for obstacle identification during autonomous navigation.",
      "Implemented pathfinding and validated it in a Gazebo simulation environment before hardware deployment, cutting physical testing errors by 30%.",
    ],
    tech: ["ROS 2", "C++", "Python", "YOLOv8", "Gazebo"],
  },
  {
    role: "Digital Systems Teaching Assistant",
    company: "Smith Engineering, Queen's University",
    location: "Kingston, ON",
    period: "Jan 2026 – Apr 2026",
    points: [
      "Mentored students through CPU design and FPGA implementation across digital logic and computer architecture coursework.",
      "Supported students one-on-one during labs, debugging Verilog and hardware designs.",
    ],
    tech: ["Verilog", "FPGA", "Computer Architecture"],
  },
  {
    role: "Cyber Defense Operations Intern",
    company: "Concentrix",
    location: "Gurgaon, India",
    period: "Aug 2024 – Sep 2024",
    points: [
      "Engineered an AI-assisted prioritization tool using XGBoost multi-class classification, cutting time-to-escalation for critical security incidents by 20%.",
      "Built an automated incident categorization pipeline with Python, scikit-learn, and spaCy, processing daily alerts at 85% classification accuracy.",
    ],
    tech: ["Python", "XGBoost", "scikit-learn", "spaCy"],
  },
];

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string[];
  tech: string[];
  repo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "tsx-mcp-server",
    name: "Canadian Financial Intelligence Agent",
    oneLiner:
      "MCP server + multi-agent system putting live TSX market data in the hands of any LLM.",
    description: [
      "A FastMCP server fetching live TSX data with a LangGraph multi-agent system that assembles full investment reports.",
      "Full-text search over financial filings with ranked results, and a 24-hour PostgreSQL caching layer that cut redundant API calls by 90%.",
      "Exposes financial data through MCP Tools, Resources, and Prompts so Claude Desktop users can query live TSX earnings and filings in natural language.",
    ],
    tech: ["Python", "FastMCP", "LangGraph", "PostgreSQL"],
    repo: "https://github.com/NiketKakkar03/TSX-Financial-Data-MCP-Server",
    featured: true,
  },
  {
    slug: "feature-store",
    name: "Real-Time Feature Store & Serving Platform",
    oneLiner:
      "Clickstream-to-inference ML platform: Kafka ingestion, Redis-backed Feast store, A/B-routed FastAPI serving.",
    description: [
      "Real-time feature pipeline ingesting clickstream events via Kafka into a Redis-backed Feast online store for sub-millisecond retrieval.",
      "FastAPI inference API with deterministic A/B routing across two model variants, measuring a 64ms vs 18ms latency gap across 500+ users.",
      "Prometheus metrics per request and GitHub Actions CI covering lint, unit tests, Docker builds, and smoke tests.",
    ],
    tech: ["Kafka", "Redis", "Feast", "FastAPI", "Prometheus", "Docker"],
    repo: "https://github.com/NiketKakkar03/ml-feature-store-platform",
    featured: true,
  },
  {
    slug: "lift-analysis",
    name: "AI for Competitive Lift Analysis",
    oneLiner:
      "Real-time computer-vision judge for powerlifting — pose estimation, barbell tracking, instant verdicts.",
    description: [
      "Capstone project: a real-time rep-detection pipeline targeting competition-standard lift judging with millisecond verdict latency.",
      "YOLOv8-Pose + OpenCV detect 14-keypoint skeletal poses and track barbell path in real time.",
      "A confidence quality gate rejects verdicts when tracking confidence drops below 70%, preventing wrong calls instead of hiding them.",
    ],
    tech: ["YOLOv8-Pose", "OpenCV", "Python"],
    featured: true,
  },
  {
    slug: "chest-xray",
    name: "Chest X-Ray Disease Classification",
    oneLiner:
      "End-to-end medical imaging classifier detecting 14 chest conditions on CheXpert.",
    description: [
      "PyTorch model architecture with a FastAPI backend, trained and evaluated on the CheXpert dataset (average AUC 0.77).",
      "Delivered as a documented, inference-ready repository.",
    ],
    tech: ["PyTorch", "FastAPI", "CheXpert"],
    repo: "https://github.com/NiketKakkar03/Medical-Image-Classification",
    featured: false,
  },
  {
    slug: "local-repo-reviewer",
    name: "Local Repo Reviewer",
    oneLiner:
      "Local-first agentic code reviewer combining static analysis with a local LLM.",
    description: [
      "Ruff, Bandit, and Semgrep findings fused with local LLM reasoning for private, offline code review.",
    ],
    tech: ["Python", "Ruff", "Semgrep", "Local LLMs"],
    repo: "https://github.com/NiketKakkar03/local-repo-reviewer",
    featured: false,
  },
  {
    slug: "f1-paddock-oracle",
    name: "F1 Paddock Oracle",
    oneLiner: "LLM-powered Formula 1 analysis served from serverless GPUs.",
    description: [
      "Small open models deployed on Modal answering F1 strategy and paddock questions.",
    ],
    tech: ["Python", "Modal", "Open LLMs"],
    repo: "https://github.com/NiketKakkar03/F1-Paddock-Oracle",
    featured: false,
  },
];

export const now = {
  heading: "What I'm doing now",
  items: [
    {
      title: "Physical AI",
      body: "Working through the robot-learning stack — VLA models (OpenVLA, GR00T, SmolVLA), imitation learning with LeRobot, and RL in Isaac Lab. Goal: bridge my ROS 2 + LLM-infrastructure background into robots driven by foundation models.",
    },
    {
      title: "MCP everywhere",
      body: "Model Context Protocol is the connective tissue of my recent work — from enterprise GRC data at Cywift to live TSX market data. Currently exploring MCP as the System-2 interface layer for robotics.",
    },
    {
      title: "Job hunt",
      body: "Graduated April 2026 (BASc Computer Engineering, ML specialization, Queen's). Looking for software / ML / robotics engineering roles in Toronto or remote across Canada.",
    },
  ],
  interests: [
    "Robotics & physical AI",
    "LLM tooling & agents",
    "Formula 1 (see the projects)",
    "Powerlifting",
  ],
};
