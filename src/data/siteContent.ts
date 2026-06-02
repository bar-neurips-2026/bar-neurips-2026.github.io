export type Organizer = {
  name: string;
  title: string;
  shortTitle: string;
  website: string;
  bio: string;
  email: string;
  image: {
    src: string;
    alt: string;
    status: "downloaded" | "placeholder";
    source: string;
  };
};

export type TopicArea = {
  title: string;
  question: string;
  topics: string[];
};

export const siteContent = {
  title: "BAR: Brain, Agents, and Robots",
  slogan: "Define the BAR for future AI",
  venue: "NeurIPS 2026 Workshop, Sydney",
  date: "Fri Dec 11, 2026",
  heroBadge: "NeurIPS 2026 Workshop",
  navigation: [
    { key: "home", label: "Home", href: "/" },
    { key: "call-for-papers", label: "Call for Papers", href: "/call-for-papers/" },
    { key: "schedule", label: "Schedule", href: "/schedule/" },
    { key: "organizers", label: "Organizers", href: "/organizers/" },
  ],
  sections: {
    about: "About",
    topics: "Topics of Interest",
    importantDates: "Important Dates",
    schedule: "Schedule",
    organizers: "Organizers",
    speakers: "Speakers",
  },
  scheduleColumns: ["Time", "Session"],
  pages: {
    callForPapers: {
      title: "Call for Papers",
      description: "Submit your work to Brain, Agents, and Robots (BAR)",
      intro:
        "We invite submissions of original research papers on topics related to neuroscience, agentic AI, embodied intelligence, and their intersections. Both empirical studies and conceptual contributions are welcome.",
      topicColumns: [
        [
          "Cognitive Foundations",
          "Neural and Cognitive Mechanisms of Intelligence",
          "Memory, Abstraction, and Knowledge Representation",
          "Brain-Inspired Computational Models",
          "Adaptive and Lifelong Learning",
          "Learning from Interaction and Experience",
        ],
        [
          "Agency and Autonomous Decision Making",
          "Reasoning, Planning, and Goal-Directed Behavior",
          "Embodied Intelligence and Robot Learning",
          "Perception-Action Integration",
          "Human-AI-Robot Collaboration",
          "Integrated Systems Connecting Cognition, Agency, and Embodiment",
        ],
      ],
      submissionGuidelines: [
        ["Format", "PDF (NeurIPS main conference template)"],
        ["Length", "Long papers: up to 8 pages + references\nShort papers: up to 4 pages + references"],
        ["Review Process", "Double-blind"],
        ["Submission Site", "TBA"],
      ],
      note: "All deadlines are 23:59 AoE.",
    },
    schedule: {
      title: "Schedule",
      description: "Workshop program and schedule",
      note: "The program below is the planned workshop schedule for Fri Dec 11, 2026 in Sydney.",
      acceptedPapersText: "To be announced after the review process.",
    },
    organizers: {
      title: "Organizers",
      description: "Meet the organizing committee",
      committeeHeading: "Organizing Committee",
      contactHeading: "Contact",
      contactText: "For workshop inquiries, please contact the organizing committee.",
      contactEmails: ["xinshu.li@rmit.edu.au", "feng.xia@rmit.edu.au"],
    },
  },
  about:
    "The next breakthroughs in intelligence may emerge not from a single discipline, but from the intersection of neuroscience, AI, and robotics. This workshop creates a forum for researchers to exchange ideas, challenge assumptions, and uncover the principles that will shape future intelligent systems.",
  importantDates: [
    ["Workshop Application Open", "April 21, 2026, AoE"],
    ["Workshop Application Deadline", "June 06, 2026, AoE"],
    ["Workshop Acceptance Notification", "July 11, 2026, AoE"],
    ["Suggested Submission Date for Workshop Contributions", "August 29, 2026, AoE"],
    ["Mandatory Accept/Reject Notification Date", "September 29, 2026, AoE"],
    ["Workshop Date", "Fri Dec 11, 2026, Sydney"],
  ],
  topics: [
    {
      title: "Cognitive Foundations",
      question:
        "How do biological and artificial systems acquire, represent, and organize knowledge?",
      topics: [
        "Neural and cognitive mechanisms of intelligence",
        "Memory, abstraction, and knowledge representation",
        "Learning and adaptation in biological systems",
        "Brain-inspired computational models",
      ],
    },
    {
      title: "Adaptive Learning",
      question:
        "How can intelligent systems continuously acquire, refine, and transfer knowledge in changing environments?",
      topics: [
        "Continual and lifelong learning",
        "Transfer learning",
        "Learning from interaction and experience",
        "Generalization beyond training distributions",
        "Adaptation in dynamic and open-ended environments",
      ],
    },
    {
      title: "Agency and Autonomy",
      question: "How do intelligent systems reason, plan, and pursue goals independently?",
      topics: [
        "Reasoning and decision-making mechanisms",
        "Planning and long-horizon behavior",
        "Autonomous agents and goal-directed systems",
        "Computational models of agency",
      ],
    },
    {
      title: "Embodied Intelligence",
      question:
        "How can intelligence emerge through perception, action, and interaction with the physical world?",
      topics: [
        "Embodied AI and robot learning",
        "Sensorimotor intelligence",
        "Perception-action integration",
        "Real-world deployment and adaptation",
      ],
    },
    {
      title: "Human-AI-Robot Systems",
      question:
        "How can humans and intelligent systems collaborate, communicate, and learn from one another?",
      topics: [
        "Human-AI and human-robot collaboration",
        "Shared autonomy and interactive intelligence",
        "Collective intelligence across humans and machines",
        "Integrated systems connecting cognition, agency, and embodiment",
      ],
    },
  ] satisfies TopicArea[],
  schedule: [
    ["08:00", "Opening Remarks"],
    ["08:10", "Keynote Talk 1"],
    ["08:40", "Keynote Talk 2"],
    ["09:10", "Coffee Break"],
    ["09:40", "Keynote Talk 3"],
    ["10:40", "Lightning Talks (Contributed Papers)"],
    ["11:10", "Lunch Break"],
    ["12:30", "Keynote Talk 4"],
    ["13:00", "Keynote Talk 5"],
    ["13:30", "Keynote Talk 6"],
    ["14:00", "Poster Session (Contributed Papers)"],
    ["15:00", "Coffee Break"],
    ["15:30", "Group Discussion (All Participants)"],
    ["16:45", "Closing Remarks & Best Paper Awards"],
    ["17:00", "End of Workshop"],
  ],
  organizers: [
    {
      name: "Dr. Xinshu Li",
      title: "Lecturer, School of Computing Technologies, RMIT University",
      shortTitle: "RMIT University",
      website: "https://xinshu-li.github.io/",
      bio: "Dr. Xinshu Li is a Lecturer in the School of Computing Technologies at RMIT University. Her research focuses on brain-inspired intelligence, causal AI, autonomous agents, and embodied intelligence. She has published in leading venues including KDD, AAAI, WWW, ICDM, and ACM Multimedia. Her work bridges multiple themes represented in BAR, spanning cognition, agency, and embodiment. Her expertise in causal reasoning and agentic intelligence will help connect emerging advances in neuroscience, autonomous agents, and embodied AI.",
      email: "To be added",
      image: {
        src: "/images/organizers/xinshu-li.jpg",
        alt: "Dr. Xinshu Li",
        status: "downloaded",
        source: "Personal website profile photo",
      },
    },
    {
      name: "Dr. Feng Xia",
      title: "IEEE Fellow and Professor, School of Computing Technologies, RMIT University",
      shortTitle: "RMIT University",
      website: "https://www.xia.ai/",
      bio: "Dr. Feng Xia is an IEEE Fellow and Professor in the School of Computing Technologies at RMIT University. His research focuses on brain science, digital health, robotics, and intelligent systems, with an emphasis on developing AI technologies that enhance human wellbeing and real-world decision making. He has published extensively in leading international venues and has led numerous interdisciplinary research initiatives spanning AI, healthcare, and cyber-physical systems. He will provide strategic leadership and a broad perspective spanning brain science, intelligent systems, and real-world AI applications.",
      email: "To be added",
      image: {
        src: "/images/organizers/feng-xia.webp",
        alt: "Dr. Feng Xia",
        status: "downloaded",
        source: "RMIT public profile photo",
      },
    },
    {
      name: "Dr. Minhae Kwon",
      title:
        "Associate Professor, Department of Electrical and Computer Engineering, Sungkyunkwan University",
      shortTitle: "Sungkyunkwan University",
      website: "https://brainmil.wordpress.com/minhae/",
      bio: "Dr. Minhae Kwon is an Associate Professor in the Department of Electrical and Computer Engineering at Sungkyunkwan University. Her research spans brain science, computational neuroscience, physical AI, and robotics. Her work closely aligns with the vision of BAR, connecting principles of biological intelligence with autonomous agents and embodied systems. Her research provides a unique perspective on how principles of biological intelligence can inform learning, reasoning, and adaptation in artificial systems.",
      email: "To be added",
      image: {
        src: "/images/organizers/minhae-kwon.png",
        alt: "Dr. Minhae Kwon",
        status: "downloaded",
        source: "BMIL profile photo",
      },
    },
    {
      name: "Dr. Feras Dayoub",
      title: "Associate Professor, Australian Institute for Machine Learning, University of Adelaide",
      shortTitle: "University of Adelaide",
      website: "https://ferasdayoub.com/",
      bio: "Dr. Feras Dayoub is an Associate Professor at the Australian Institute for Machine Learning (AIML) at the University of Adelaide. His research focuses on autonomous perception, robotic vision, and intelligent robotic systems operating in complex and uncertain environments. He leads the Embodied AI and Robotic Vision Group and serves as Co-Director of the French-Australian CROSSING Lab on Human-Autonomous Agents Teaming. His expertise in trustworthy robot perception and human-robot collaboration will strengthen the embodied intelligence and robotics dimensions of BAR.",
      email: "To be added",
      image: {
        src: "/images/organizers/feras-dayoub.png",
        alt: "Dr. Feras Dayoub",
        status: "downloaded",
        source: "Personal website profile photo",
      },
    },
    {
      name: "Dr. David Lo",
      title:
        "OUB Chair Professor of Computer Science and Director of the Information and Systems Cluster, Singapore Management University",
      shortTitle: "Singapore Management University",
      website: "http://www.mysmu.edu/faculty/davidlo/",
      bio: "Dr. David Lo is the OUB Chair Professor of Computer Science and Director of the Information and Systems Cluster in the School of Computing and Information Systems at Singapore Management University. His research spans AI, data science, software analytics, cybersecurity, and intelligent systems, with a focus on understanding and improving complex socio-technical systems. He is an ACM Fellow, IEEE Fellow, and Fellow of Automated Software Engineering, and has received numerous international research and service awards. His expertise in large-scale intelligent systems, AI-driven decision support, and international research leadership will contribute a systems-oriented perspective to BAR and strengthen the workshop’s interdisciplinary scope.",
      email: "To be added",
      image: {
        src: "/images/organizers/david-lo.jpg",
        alt: "Dr. David Lo",
        status: "downloaded",
        source: "SMU personal faculty page photo",
      },
    },
  ] satisfies Organizer[],
  speakers: {
    heading: "Speakers",
    text: "Speakers to be announced.",
  },
  footer: "BAR: Brain, Agents, and Robots\nNeurIPS 2026 Workshop · Sydney · Fri Dec 11, 2026",
} as const;
