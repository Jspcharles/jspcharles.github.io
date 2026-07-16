// ============================================================
// Site content. Edit this file to update anything on the page —
// the HTML renders from these objects, you shouldn't need to
// touch index.html for routine updates.
// ============================================================

const SITE = {

  profile: {
    name: "Charles Joseph",
    firstName: "Charles",
    lastName: "Joseph",
    status: "Open to PhD collaborations & data roles",
    tagline: "Researcher · Data Scientist · Builder",
    heroBio: "I spent years teaching computer science and keeping campus systems running. Then I moved into explainable AI for climate risk. Now I build models that have to earn a farmer's trust, not just a benchmark score.",
    aboutBio: [
      "I'm a PhD candidate in Information Systems at the University of Southern Queensland, working on explainable deep learning for drought risk — specifically, how to close the gap between what a weather-index insurance policy pays out and what a farmer actually loses. My thesis is called \u201cDeep Learning the Drought: Explainable AI Approaches for Reducing Basis Risk in Weather Index Insurance for Agribusiness.\u201d",
      "Before the PhD, my path wasn't a straight line into AI. I taught undergraduate computer science at Sabaragamuwa University of Sri Lanka, ran the learning management system for an entire faculty, and later worked in Germany reviewing ad-compliance systems at Eyeo. Somewhere in there I also built emotion-classification models for folk music, because I was curious whether a neural network could hear what I heard.",
      "That mix — classroom, infrastructure, industry, research — is why I care more about whether a model can be trusted and understood than whether it tops a leaderboard. Most of my current work lives in the Queensland and Western Australian wheatbelts, using SPI/SPEI drought indices, SHAP, and attention weights to make yield predictions that a farmer, an insurer, or a regulator could actually interrogate.",
      "Outside of papers and pipelines, I've picked up a working habit of saying yes to things slightly outside my lane — a quantum computing summer school, a robotics lab in Germany, a hackathon pitch competition — mostly because the intersection of fields is usually where the interesting problems hide."
    ],
    email: "charles.joseph@unisq.edu.au",
    resumeFile: "Charles_Joseph_Resume.pdf",
    social: {
      linkedin: "",
      github: "https://github.com/Jspcharles",
      scholar: ""
    }
  },

  education: [
    {
      period: "2024 — Present",
      degree: "PhD, Information Systems",
      org: "University of Southern Queensland, Australia",
      detail: "Thesis: \u201cDeep Learning the Drought: Explainable AI Approaches for Reducing Basis Risk in Weather Index Insurance for Agribusiness.\u201d"
    },
    {
      period: "2023 — 2024",
      degree: "MSc, Artificial Intelligence",
      org: "Friedrich-Alexander University of Erlangen-Nuremberg, Germany",
      detail: "Partially completed."
    },
    {
      period: "2009 — 2013",
      degree: "BSc, Computing and Information Systems",
      org: "Sabaragamuwa University of Sri Lanka",
      detail: "Thesis: \u201cMachine Learning-Based Emotion Classification of Musical Audio Signals.\u201d CGPA 3.60/4.00."
    }
  ],

  // "tag" drives the Journey filter: academic | industry | research
  journey: [
    {
      period: "Mar — May 2026",
      role: "Research Assistant",
      org: "Queensland University of Technology (QUT), Australia",
      tag: "research",
      bullets: ["Collaborated with interdisciplinary teams to deliver reports, publications, and presentations in Computational Mechanics."]
    },
    {
      period: "Nov 2025 — Present",
      role: "Research Assistant",
      org: "University of Southern Queensland (USQ), Australia",
      tag: "research",
      bullets: [
        "Develop AI-based models for analysing large-scale environmental and temporal datasets.",
        "Support interdisciplinary research projects across data processing, evaluation, and reporting.",
        "Translate analytical results into research outcomes with supervisors and collaborators."
      ]
    },
    {
      period: "Apr — Sep 2024",
      role: "Acceptable Ads Monitoring Specialist",
      org: "Eyeo GmbH, Germany",
      tag: "industry",
      bullets: [
        "Reviewed websites for compliance with agreed advertising standards.",
        "Verified ad delivery across test environments and platforms; built test cases with TAM/AM/AA teams.",
        "Ran pre-release, circumvention, and legal compliance checks on DNS-based ad filtering."
      ]
    },
    {
      period: "Oct 2021 — May 2023",
      role: "Lecturer in Computer Science",
      org: "Sabaragamuwa University of Sri Lanka",
      tag: "academic",
      bullets: [
        "Designed and delivered undergraduate CS/IT courses with student-centred teaching methods.",
        "Built curriculum, lesson plans, lab activities, and outcome-aligned assessments.",
        "Supervised undergraduate student projects and provided academic mentoring."
      ]
    },
    {
      period: "Oct 2020 — Sep 2023",
      role: "Visiting Lecturer in Computer Science",
      org: "Center for Open and Distance Learning, Sabaragamuwa University",
      tag: "academic",
      bullets: []
    },
    {
      period: "Apr 2020 — May 2023",
      role: "System Administrator",
      org: "Centre of Computer Studies, Sabaragamuwa University",
      tag: "industry",
      bullets: [
        "Led implementation of a new Learning Management System (LMS) for the faculty.",
        "Delivered LMS training for faculty, staff, and students; handled ongoing technical support.",
        "Analysed LMS usage data and reported on adoption and engagement."
      ]
    },
    {
      period: "Jan 2020 — Sep 2023",
      role: "Temporary Demonstrator in Computer Science",
      org: "Sabaragamuwa University of Sri Lanka",
      tag: "academic",
      bullets: []
    },
    {
      period: "Nov 2017 — Apr 2018",
      role: "Trainee Software Engineer",
      org: "Eyepax IT Consulting, Sri Lanka",
      tag: "industry",
      bullets: [
        "Designed and developed PHP-based applications; wrote and ran unit tests.",
        "Implemented API integrations and worked with Angular and Node.js."
      ]
    }
  ],

  // Placeholder cover art per project (CSS-drawn, no external image needed) —
  // swap in real screenshots any time by adding an `image` field with a path.
  projects: [
    {
      name: "DeepYield-ResNet-V2",
      tagline: "Two-stage drought-conditioned wheat yield model",
      description: "A two-stage network for the Queensland wheatbelt: a potential-yield estimator followed by a dual-branch model that predicts realised yield under drought using separate climate and SPEI-3/SPEI-6 branches. SHAP is used to frame results as an insurance basis-risk finding.",
      tags: ["PyTorch", "SHAP", "SPEI", "Remote sensing"],
      github: "https://github.com/Jspcharles/DeepYield-ResNet-V2",
      cover: "contour"
    },
    {
      name: "ProDrought-Detection",
      tagline: "Spatiotemporal drought detection, Queensland",
      description: "The pipeline behind a published paper monitoring protracted dry conditions across Queensland — detecting and characterising drought episodes from spatiotemporal climate data rather than a single snapshot index.",
      tags: ["Python", "Spatiotemporal", "Climate data"],
      github: "https://github.com/Jspcharles/ProDrought-Detection",
      cover: "grid"
    },
    {
      name: "Drought-Propagation",
      tagline: "Modelling how drought spreads through a landscape",
      description: "Models how drought signals propagate spatially and temporally, connecting meteorological drought to the downstream agricultural and hydrological impacts it eventually causes.",
      tags: ["Python", "Spatial analysis"],
      github: "https://github.com/Jspcharles/Drought-Propagation",
      cover: "wave"
    },
    {
      name: "Lockyer-Valley-QLD",
      tagline: "Regional case study — Lockyer Valley, Queensland",
      description: "A focused case study applying the broader wheatbelt drought-yield methodology to Queensland's Lockyer Valley, one of Australia's most productive agricultural regions.",
      tags: ["Jupyter", "Case study", "Agribusiness"],
      github: "https://github.com/Jspcharles/Lockyer-Valley-QLD",
      cover: "field"
    }
  ],

  techStack: [
    {
      group: "Languages",
      items: ["python", "javascript", "typescript", "c", "cplusplus", "kotlin", "html5", "css3", "gnubash"]
    },
    {
      group: "Frameworks & Web",
      items: ["react", "nextdotjs", "bootstrap", "nodedotjs", "django", "flask", "fastapi", "tailwindcss"]
    },
    {
      group: "AI / ML",
      items: ["tensorflow", "pytorch", "scikitlearn", "opencv", "numpy", "pandas", "huggingface"]
    },
    {
      group: "Data & Infrastructure",
      items: ["mysql", "postgresql", "mongodb", "firebase", "redis", "docker", "microsoftazure", "amazonaws"]
    },
    {
      group: "Tools",
      items: ["git", "github", "linux", "visualstudiocode", "vercel", "jupyter", "figma", "postman"]
    }
  ],

  publications: [
    {
      type: "journal",
      status: "submitted",
      year: 2026,
      title: "Learning drought memory for wheat yield anomaly prediction: A residual attention LSTM using multi-scale drought indicators",
      venue: "Technological Forecasting and Social Change (Q1, IF 13.5), Elsevier",
      authors: "Charles Joseph, Qingxia Wang, Mushtaq Shahbaz, Li Yan, Jonathan Barratt, Tim Barratt",
      link: ""
    },
    {
      type: "journal",
      status: "published",
      year: 2026,
      title: "Deep learning the droughts: Spatiotemporal monitoring of protracted dry conditions in Queensland, Australia",
      venue: "Science of the Total Environment (Q1, IF 8.0), Elsevier",
      authors: "Charles Joseph, Qingxia Wang, Mushtaq Shahbaz, Li Yan, Jonathan Barratt, Tim Barratt",
      link: "https://doi.org/10.1016/j.scitotenv.2026.181564"
    },
    {
      type: "journal",
      status: "published",
      year: 2026,
      title: "Advancing weather index insurance for climate risk management: A review of modelling techniques and implementation strategies",
      venue: "Environmental Impact Assessment Review (Q1, IF 12.2), vol. 119, p. 108376, Elsevier",
      authors: "Charles Joseph, Qingxia Wang, Mushtaq Shahbaz, Li Yan, Jonathan Barratt, Tim Barratt",
      link: "https://doi.org/10.1016/j.eiar.2026.108376"
    },
    {
      type: "journal",
      status: "published",
      year: 2024,
      title: "Siamese network-based lightweight framework for tomato leaf disease recognition",
      venue: "Computers (Q1, IF 5.2), vol. 13, p. 323, MDPI",
      authors: "Thuseethan Selvarajah, Vigneshwaran Palanisamy, Joseph Charles, Wimalasooriya Chathrie",
      link: "https://doi.org/10.3390/computers13120323"
    },
    {
      type: "journal",
      status: "published",
      year: 2024,
      title: "Change detection for forest ecosystems using remote sensing images with siamese attention U-Net",
      venue: "Technologies (Q1, IF 5.2), vol. 12, p. 160, MDPI",
      authors: "Hewarathna Ashen Iranga, Hamlin Luke, Joseph Charles, Vigneshwaran Palanisamy, George Romiyal, Thuseethan Selvarajah, Wimalasooriya Chathrie, Shanmugam Bharanidharan",
      link: "https://doi.org/10.3390/technologies12090160"
    },
    {
      type: "conference",
      status: "published",
      year: 2021,
      title: "An ensemble learning approach for automatic emotion classification of Sri Lankan folk music",
      venue: "Proceedings of ICSES 2020, pp. 289\u2013302, Springer Nature",
      authors: "Charles Joseph, Lekamge Sugeeswari",
      link: "https://doi.org/10.1007/978-981-33-4355-9_23"
    },
    {
      type: "conference",
      status: "published",
      year: 2020,
      title: "Machine learning for emotion classification of Sri Lankan folk music",
      venue: "14th Conference on Industrial and Information Systems (ICIIS), pp. 360\u2013365, IEEE",
      authors: "Charles Joseph, Lekamge Sugeeswari",
      link: "https://doi.org/10.1109/ICIIS47346.2019.9063313"
    }
  ],

  // Awards, summer schools, visiting research, certificates, memberships — one feed.
  milestones: [
    { year: 2026, type: "Exchange", text: "Participant, Quantum Computing Summer School — RMIT School of Computing Technologies & CSIRO Data61 Quantum Systems Team" },
    { year: 2025, type: "Award", text: "First Place Winner, Innovation Challenges Pitch Competition — Study Queensland" },
    { year: 2025, type: "Award", text: "Participant, Adaptive Hackathon — Study Queensland & Dept. of Primary Industries (DPI)" },
    { year: 2024, type: "Exchange", text: "Visiting Researcher, Assistive Intelligent Robotics Lab (AIROB) — FAU Erlangen-N\u00fcrnberg, Germany" },
    { year: 2024, type: "Award", text: "Full Postgraduate Scholarship — Australian Research Council (ARC) & University of Southern Queensland" },
    { year: 2026, type: "Membership", text: "Associate Member (#4428084) — Australian Computer Society (ACS)" },
    { year: 2025, type: "Membership", text: "Student Member (#22651) — Geospatial Council of Australia" }
  ]
};
