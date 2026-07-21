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
    role: "Digital Systems Engineering Teaching Assistant",
    company: "Stephen J.R. Smith Faculty of Engineering and Applied Science",
    location: "Kingston, ON",
    period: "Jan 2026 - Apr 2026",
    points: [
      "Collaborated with course instructors and guided 100+ students through the semester-long design of a 32-bit RISC CPU in Verilog, covering datapath construction, control-unit sequencing, bus arbitration, and memory-subsystem integration.",
      "Led one-on-one lab debugging sessions using ModelSim and Quartus waveform analysis, teaching students to interpret timing behavior and write effective testbenches.",
    ],
    tech: ["Verilog", "ModelSim", "Intel Quartus", "FPGA"],
  },
  {
    role: "Autonomous Subsystem Lead",
    company: "Queen's Space Engineering Team",
    location: "Kingston, ON",
    period: "May 2025 - Apr 2026",
    points: [
      "Led a 10-member team building an autonomous rover on ROS 2; architected the Python/C++ stack integrating LIDAR, camera, and IMU data for autonomous navigation.",
      "Trained YOLOv8 object-detection models on collected rover data, enabling accurate obstacle identification to support safe autonomous navigation during testing.",
      "Implemented pathfinding algorithms for autonomous navigation and validated performance in a Gazebo simulation environment, reducing physical testing errors by 30%.",
    ],
    tech: ["ROS 2", "C++", "Python", "YOLOv8", "Gazebo"],
  },
  {
    role: "Software Engineer Intern",
    company: "Cywift",
    location: "London, UK (Remote)",
    period: "Apr 2025 - Jul 2025",
    points: [
      "Engineered a multithreaded ETL pipeline with data-quality validation in Python and MySQL, parallelizing ingestion and transformation to cut processing latency 10% across production data loads.",
      "Built a custom protocol server using Anthropic's MCP SDK in Python, exposing a GRC platform's governance layer as a tool API and integrating the platform with downstream clients.",
      "Automated access to live compliance and risk data by wiring the service into production GRC workflows, replacing manual database lookups with a standardized query interface.",
    ],
    tech: ["Python", "MCP SDK", "MySQL", "ETL"],
  },
  {
    role: "Cyber Defense Operations Intern",
    company: "Concentrix",
    location: "Gurgaon, India",
    period: "Aug 2024 - Sep 2024",
    points: [
      "Developed a Python alert-classification pipeline using pandas, NumPy, and regex-based parsing to normalize SIEM alert metadata, extract incident features, and route security events into triage categories for faster analyst review.",
      "Engineered an incident prioritization model using XGBoost multi-class classification on historical alert logs, reducing average time-to-escalation for critical security incidents by 20%.",
      "Automated daily incident categorization using scikit-learn and spaCy for text preprocessing, feature extraction, and model evaluation, achieving 85% classification accuracy on logged security alerts.",
    ],
    tech: ["Python", "pandas", "NumPy", "XGBoost", "scikit-learn", "spaCy"],
  },
];

export type ProjectFieldId = "software" | "ml-ai" | "robotics" | "hardware";

export const projectFields: {
  id: ProjectFieldId;
  label: string;
  summary: string;
}[] = [
  {
    id: "software",
    label: "Software",
    summary: "Backend systems, developer tools, agents, and production data workflows.",
  },
  {
    id: "ml-ai",
    label: "ML/AI",
    summary: "Applied machine learning, computer vision, model serving, and LLM systems.",
  },
  {
    id: "robotics",
    label: "Robotics",
    summary: "Autonomous navigation, perception, simulation, and edge robotics stacks.",
  },
  {
    id: "hardware",
    label: "Hardware",
    summary: "Digital systems, embedded firmware, FPGA tooling, and custom electronics.",
  },
];

export type Project = {
  slug: string;
  name: string;
  field: ProjectFieldId;
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
    field: "software",
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
    field: "ml-ai",
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
    field: "ml-ai",
    oneLiner:
      "Real-time computer-vision judge for powerlifting - pose estimation, barbell tracking, instant verdicts.",
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
    field: "ml-ai",
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
    field: "software",
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
    field: "ml-ai",
    oneLiner: "LLM-powered Formula 1 analysis served from serverless GPUs.",
    description: [
      "Small open models deployed on Modal answering F1 strategy and paddock questions.",
    ],
    tech: ["Python", "Modal", "Open LLMs"],
    repo: "https://github.com/NiketKakkar03/F1-Paddock-Oracle",
    featured: false,
  },
  {
    slug: "risc-cpu",
    name: "32-bit RISC CPU",
    field: "hardware",
    oneLiner:
      "Verilog CPU with a complete datapath, control unit, shared bus, and memory subsystem.",
    description: [
      "Implemented a 32-bit RISC-style CPU in Verilog with an ALU, register file, program counter, control unit, and shared system bus.",
      "Added load/store memory access across a multi-instruction ISA and verified the design with module-level and full-datapath testbenches.",
      "Simulated and synthesized the design with Intel/Altera FPGA tooling, including Quartus and .hex memory-initialization programs.",
    ],
    tech: ["Verilog", "Intel Quartus", "FPGA", "Testbenches"],
    featured: false,
  },
  {
    slug: "autonomous-taxi",
    name: "Autonomous Taxi System",
    field: "robotics",
    oneLiner:
      "Edge autonomous-driving stack on Raspberry Pi fusing camera and LiDAR perception.",
    description: [
      "Deployed an autonomous driving stack on Raspberry Pi 4 using camera and LiDAR inputs for real-time perception and vehicle control.",
      "Trained object detection for road-sign detection and combined Canny edge lane following with A* route planning.",
      "Integrated PID speed control to improve path-tracking accuracy by 30%.",
    ],
    tech: ["Raspberry Pi", "Python", "OpenCV", "LiDAR", "A*", "PID"],
    featured: false,
  },
  {
    slug: "qmk-macropad",
    name: "QMK Macropad",
    field: "hardware",
    oneLiner:
      "20-key custom macropad with hand-wired matrix, QMK firmware, and KiCad PCB design.",
    description: [
      "Designed and hand-wired a 20-key 4x5 matrix macropad on an ATmega32U4 Pro Micro.",
      "Developed custom QMK firmware in C with multi-layer keymaps, media controls, and application-launch macros.",
      "Debugged the firmware-hardware interface end to end and designed a KiCad PCB to replace the hand-wired prototype.",
    ],
    tech: ["C", "QMK", "ATmega32U4", "KiCad", "Embedded"],
    featured: false,
  },
];

export const now = {
  heading: "What I'm doing now",
  items: [
    {
      title: "Physical AI",
      body: "Working through the robot-learning stack - VLA models (OpenVLA, GR00T, SmolVLA), imitation learning with LeRobot, and RL in Isaac Lab. Goal: bridge my ROS 2 + LLM-infrastructure background into robots driven by foundation models.",
    },
    {
      title: "MCP everywhere",
      body: "Model Context Protocol is the connective tissue of my recent work - from enterprise GRC data at Cywift to live TSX market data. Currently exploring MCP as the System-2 interface layer for robotics.",
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
