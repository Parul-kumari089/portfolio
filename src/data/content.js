export const profile = {
  name: 'Parul Kumari',
  role: 'Aspiring Software Engineer',
  tagline: 'Learning to build software that solves problems worth solving.',
  status: 'Final-year CS Engineering student · Open to internships & full-time SDE roles',
  cgpa: '9.36',
  gradYear: '2027',
  email: 'parulluharuka2005@gmail.com',
  github: 'https://github.com/Parul-kumari089',
  linkedin: 'https://linkedin.com/in/Parulkumari02',
  githubUsername: 'Parul-kumari089',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  { key: 'lang', label: 'Programming', items: ['Python', 'Java (basics)', 'C/C++', 'HTML', 'CSS'] },
  { key: 'core', label: 'Core CS', items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
  { key: 'ml', label: 'AI / ML', items: ['Generative AI', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'Pandas', 'NumPy'] },
  { key: 'db', label: 'Database', items: ['MySQL', 'SQL'] },
  { key: 'deploy', label: 'Deployment', items: ['Render'] },
  { key: 'tools', label: 'Tools', items: ['Git', 'GitHub', 'Linux', 'VS Code'] },
]

export const flagshipProject = {
  name: 'ResQ',
  subtitle: 'Rapid Emergency Response System',
  badge: 'Flagship Project · Team of 3',
  tagline:
    'An AI-powered disaster response application built with two teammates during an IBM SkillBuild internship — built to let users report emergencies, locate nearby shelters, and get real-time assistance, with support for multiple languages including Marathi and Tamil.',
  breakdown: [
    {
      title: 'Overview',
      text: 'ResQ is a disaster response application that helps people report emergencies, find nearby shelters, and get real-time assistance during natural disasters.',
    },
    {
      title: 'Problem',
      text: 'During a disaster, information is scattered and hard to act on quickly — there is no single place to report an emergency and get guided help in your own language.',
    },
    {
      title: 'Solution',
      text: 'A web application where users can report emergencies and receive real-time assistance, with multilingual support including Marathi and Tamil.',
    },
    {
      title: 'My Contribution',
      text: 'I worked on API integration and deployment — connecting the application to its APIs and deploying it live on Render.',
    },
    {
      title: 'Challenges',
      text: 'Coordinating a shared codebase across three teammates and getting the integrated APIs to work reliably once deployed.',
    },
    {
      title: 'Learning',
      text: 'This project was my first real exposure to integrating APIs and shipping a deployed application as part of a team, rather than solo coursework.',
    },
    {
      title: 'Impact',
      text: 'Built and presented as part of an IBM SkillBuild Generative AI & Cloud Computing internship, 22 June – 30 July 2026.',
    },
    {
      title: 'Team',
      text: 'Built collaboratively with two teammates — a three-member team effort from concept to deployment.',
    },
  ],
  stack: ['HTML', 'CSS', 'FastAPI', 'REST APIs', 'Render'],
}

export const otherProjects = [
  {
    title: 'Food Recognition & Nutrition Analyzer',
    description:
      'A deep learning app that recognizes food from an image and estimates its nutrition, using transfer learning for accurate classification.',
    tags: ['Python', 'TensorFlow', 'MobileNetV2', 'Streamlit'],
  },
  {
    title: 'Credit Card Fraud Detection',
    description:
      'A machine learning model to detect fraudulent transactions — trained a Random Forest classifier on an imbalanced dataset and evaluated it with standard classification metrics.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'IoT Smoke Detection System',
    description:
      'An IoT-based safety system that integrates a gas sensor with a microcontroller to send live alerts when smoke exceeds safe thresholds.',
    tags: ['ESP8266', 'MQ-2 Sensor', 'Arduino IDE', 'Blynk'],
  },
]

export const whyCards = [
  {
    title: 'Strong Academic Foundation',
    text: 'A 9.36 CGPA built on genuinely understanding core CS fundamentals, not just exam prep.',
  },
  {
    title: 'Problem Solver',
    text: 'I enjoy taking a vague problem and turning it into something that actually works, end to end.',
  },
  {
    title: 'Fast Learner',
    text: 'New tools, frameworks, and concepts don\'t slow me down — I pick up what a project needs quickly.',
  },
  {
    title: 'Continuous Learner',
    text: 'From certifications to internships, I keep looking for the next thing to understand properly.',
  },
]

export const journey = [
  { date: '2023', title: 'Started B.Tech CSE', text: 'Began my Computer Science & Engineering degree at RCEW, Jaipur, under Rajasthan Technical University.' },
  { date: '2023–24', title: 'Learned Programming', text: 'Built a foundation in Java, Python, and C++ through coursework and self-driven practice.' },
  { date: '2024–25', title: 'Built ML Projects', text: 'Applied classroom learning to real projects — a food recognition model and a cancer prediction classifier.' },
  { date: '22 Jun – 30 Jul 2026', title: 'IBM SkillBuild Internship', text: 'Completed a virtual internship in Generative AI & Cloud Computing.' },
  { date: '2026', title: 'Built ResQ', text: 'Contributed to ResQ, an AI-assisted disaster response project, as part of a three-person team.' },
  { date: 'Now', title: 'Preparing for SDE Placements', text: 'Sharpening data structures, algorithms, and core CS fundamentals ahead of campus placements.' },
]

export const achievements = [
  { value: '9.36', label: 'CGPA maintained across all semesters' },
  { value: 'IBM', label: 'SkillBuild Internship — Generative AI & Cloud Computing' },
  { value: 'MS · SAP', label: 'AI Careers for Women — Microsoft, SAP India & Edunet Foundation' },
  { value: 'Cisco', label: 'Networking & Cybersecurity certifications' },
  { value: '4+', label: 'Academic projects across AI/ML and software development' },
  { value: 'GitHub', label: 'Active repositories documenting my learning' },
]

export const certifications = [
  { code: 'IBM', title: 'Generative AI & Cloud Computing', issuer: 'IBM SkillBuild' },
  { code: 'MS', title: 'AI Careers for Women', issuer: 'Microsoft, SAP India & Edunet Foundation' },
  { code: 'TL', title: 'Artificial Intelligence & Machine Learning', issuer: 'Torr Lab, 2025' },
  { code: 'AZ', title: 'Azure Fundamentals', issuer: 'Microsoft Azure' },
  { code: 'CS', title: 'Intro to Cybersecurity + OS Basics', issuer: 'Cisco' },
]
