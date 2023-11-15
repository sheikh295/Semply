import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/semply-logo.png";
import { animated, useTransition } from "@react-spring/web";
import { AccountCircle, Add } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditIcon from "@mui/icons-material/Edit";
import InputCard from "./components/EducationCard";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";
import EducationCard from "./components/EducationCard";
import WorkCard from "./components/WorkCard";
import { useSelector } from "react-redux";
import EducationList from "./components/EducationList";
import WorkList from "./components/WorkList";

function Onboarding(props) {
  const [visible, setVisible] = useState(true);

  const date = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "10" },
    { label: "11" },
    { label: "12" },
    { label: "13" },
    { label: "14" },
    { label: "15" },
    { label: "16" },
    { label: "17" },
    { label: "18" },
    { label: "19" },
    { label: "20" },
    { label: "21" },
    { label: "22" },
    { label: "23" },
    { label: "24" },
    { label: "25" },
    { label: "26" },
    { label: "27" },
    { label: "28" },
    { label: "29" },
    { label: "30" },
    { label: "31" },
  ];
  const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const year = [
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
  ];

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const frontEndStack = [
    "Angular",
    "Ant Design",
    "Aurelia",
    "Backbone.js",
    "Bootstrap",
    "Bulma",
    "Chart.js",
    "Cordova",
    "Cycle.js",
    "D3.js",
    "Electron",
    "Ember.js",
    "Emotion",
    "Foundation",
    "Gatsby.js",
    "Highcharts",
    "Ionic",
    "jQuery",
    "JavaScript",
    "Knockout.js",
    "Material-UI",
    "Mobx",
    "Next.js",
    "Nuxt.js",
    "Polymer",
    "Quasar",
    "React.js",
    "Redux",
    "RxJS",
    "SASS/SCSS",
    "Semantic UI",
    "Stencil",
    "Styled-components",
    "Tailwind CSS",
    "Three.js",
    "Vue.js",
  ];

  const backEndStack = [
    "ASP.NET Core",
    "Django",
    "Express.js",
    "Flask",
    "Hibernate",
    "Koa.js",
    "Laravel",
    "Meteor",
    "Nest.js",
    "Node.js",
    "Phoenix (Elixir)",
    "Ruby on Rails",
    "Sails.js",
    "Sequelize",
    "Spring Boot",
    "Strapi",
    "Symfony",
    "Yii",
    "Zend Framework",
  ];

  const frontEndMobileStack = [
    "React Native",
    "Flutter",
    "Xamarin",
    "NativeScript",
    "Ionic",
    "PhoneGap (Apache Cordova)",
    "Sencha Touch",
    "Appcelerator Titanium",
    "jQuery Mobile",
    "Onsen UI",
    "Framework7",
    "Kotlin/Java (Android)",
    "Swift/Objective-C (iOS)",
    "Adobe PhoneGap",
    "Corona SDK",
    "Appgyver",
    "Quasar",
    "Vue Native",
    "Weex",
    "MvvmCross",
    "Red Hat Mobile (formerly FeedHenry)",
    "Tabris.js",
  ];

  const backEndMobileStack = [
    "Firebase",
    "AWS Mobile SDK",
    "Google Cloud Mobile",
    "Microsoft Azure Mobile Apps",
    "IBM Mobile Foundation",
    "Parse Server",
    "Kinvey",
    "Kuzzle",
    "LoopBack",
    "Hapi.js",
    "Express.js (for REST APIs)",
    "Django REST framework (for Python/Django)",
    "Ruby on Rails (for mobile APIs)",
    "Flask-RESTful (for Python/Flask)",
    "Strapi",
    "Meteor",
    "DreamFactory",
    "Sails.js",
    "Feathers",
    "Tornado (for Python)",
    "Slim (for PHP)",
    "Nest.js",
    "Hoodie",
    "Sprint",
  ];

  const databases = [
    // Relational Databases
    "MySQL",
    "PostgreSQL",
    "Microsoft SQL Server",
    "Oracle Database",
    "SQLite",
    "MariaDB",
    "Amazon RDS",
    "Google Cloud SQL",
    "IBM Db2",
    "SAP HANA",
    "CockroachDB",
    "Snowflake",
    "Amazon Redshift",
    "Aurora",
    "Teradata",

    // NoSQL Databases
    "MongoDB",
    "Cassandra",
    "Redis",
    "Couchbase",
    "CouchDB",
    "Elasticsearch",
    "Neo4j",
    "Amazon DynamoDB",
    "Google Cloud Firestore",
    "Firebase Realtime Database",
    "Apache HBase",
    "RavenDB",
    "ArangoDB",
    "Aerospike",
    "Riak",

    // NewSQL Databases
    "Spanner",
    "CockroachDB",
    "NuoDB",
    "VoltDB",
    "ClustrixDB",

    // Time Series Databases
    "InfluxDB",
    "TimescaleDB",
    "OpenTSDB",

    // Columnar Databases
    "ClickHouse",
    "Apache Cassandra",
    "Amazon Redshift",
    "Vertica",

    // Graph Databases
    "Neo4j",
    "Amazon Neptune",
    "ArangoDB",
    "OrientDB",

    // Key-Value Stores
    "Redis",
    "Memcached",
    "Riak KV",
    "DynamoDB",

    // Document Stores
    "MongoDB",
    "Couchbase",
    "CouchDB",
    "Firebase Firestore",
    "Elasticsearch",

    // Search Engines
    "Elasticsearch",
    "Apache Solr",

    // Object Databases
    "db4o",
    "ObjectDB",

    // Column-Family Stores
    "HBase",
    "Cassandra",

    // In-Memory Databases
    "Redis",
    "Memcached",
    "Apache Ignite",
    "Hazelcast",
  ];

  const fullStackMobileStack = [
    // Front-End (Mobile)
    "React Native",
    "Flutter",
    "Xamarin",
    "NativeScript",
    "Ionic",
    "PhoneGap (Apache Cordova)",
    "Sencha Touch",
    "Appcelerator Titanium",
    "jQuery Mobile",
    "Onsen UI",
    "Framework7",
    "Kotlin/Java (Android)",
    "Swift/Objective-C (iOS)",
    "Adobe PhoneGap",
    "Corona SDK",
    "Appgyver",
    "Quasar",
    "Vue Native",
    "Weex",
    "MvvmCross",
    "Red Hat Mobile (formerly FeedHenry)",
    "Tabris.js",

    // Back-End (Mobile)
    "Firebase",
    "AWS Mobile SDK",
    "Google Cloud Mobile",
    "Microsoft Azure Mobile Apps",
    "IBM Mobile Foundation",
    "Parse Server",
    "Kinvey",
    "Kuzzle",
    "LoopBack",
    "Hapi.js",
    "Express.js (for REST APIs)",
    "Django REST framework (for Python/Django)",
    "Ruby on Rails (for mobile APIs)",
    "Flask-RESTful (for Python/Flask)",
    "Strapi",
    "Meteor",
    "DreamFactory",
    "Sails.js",
    "Feathers",
    "Tornado (for Python)",
    "Slim (for PHP)",
    "Nest.js",
    "Hoodie",
    "Sprint",
    // Add more full-stack mobile development technologies here as needed
  ];

  const fullStackWebStack = [
    // Front-End
    "React.js",
    "Angular",
    "Vue.js",
    "jQuery",
    "Bootstrap",
    "Foundation",
    "Semantic UI",
    "Material-UI",
    "SASS/SCSS",
    "Styled-components",
    "Emotion",
    "Bulma",
    "Tailwind CSS",
    "Ant Design",
    "Redux",
    "Mobx",
    "RxJS",
    "Three.js",
    "D3.js",
    "Chart.js",
    "Highcharts",
    "Gatsby.js",
    "Next.js",
    "Nuxt.js",
    "Quasar",
    "Electron",
    "Ionic",
    "Cordova",
    "Polymer",
    "Backbone.js",
    "Knockout.js",
    "Ember.js",
    "Aurelia",
    "Cycle.js",
    "Stencil",

    // Back-End
    "Express.js",
    "Django",
    "Ruby on Rails",
    "Spring Boot",
    "Flask",
    "ASP.NET Core",
    "Nest.js",
    "Phoenix (Elixir)",
    "Sequelize",
    "Hibernate",
    "Laravel",
    "Meteor",
    "Sails.js",
    "Strapi",
    "Symfony",
    "Yii",
    "Zend Framework",
    "Koa.js",
    "Sinatra",
    "DreamFactory",
    "Sprint",
    // Add more full-stack web development technologies here as needed
  ];

  const aiAndMachineLearningStack = [
    // Machine Learning Frameworks
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "XGBoost",
    "LightGBM",
    "Caffe",
    "Theano",
    "MXNet",
    "H2O.ai",
    "Apache Mahout",
    "Weka",

    // Deep Learning Frameworks
    "TensorFlow.js",
    "ONNX",
    "CNTK (Microsoft Cognitive Toolkit)",

    // Natural Language Processing (NLP)
    "NLTK (Natural Language Toolkit)",
    "spaCy",
    "Gensim",
    "Stanford NLP",
    "OpenNLP",
    "BERT (Bidirectional Encoder Representations from Transformers)",
    "GPT (Generative Pre-trained Transformer)",

    // Computer Vision
    "OpenCV",
    "Dlib",
    "YOLO (You Only Look Once)",
    "Faster R-CNN",
    "Mask R-CNN",

    // Reinforcement Learning
    "OpenAI Gym",
    "RLlib",
    "Stable Baselines",
    "Deep Reinforcement Learning (DRL)",
    "PySC2 (StarCraft II Learning Environment)",
    "Unity ML-Agents",

    // Data Science Tools
    "Jupyter Notebook",
    "Pandas",
    "NumPy",
    "SciPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Tableau",
    "R (RStudio)",

    // AutoML (Automated Machine Learning)
    "AutoML (Google Cloud AutoML, Auto-Sklearn, etc.)",
    "H2O.ai Driverless AI",
    "DataRobot",

    // AI Development Platforms
    "IBM Watson",
    "Google Cloud AI",
    "Microsoft Azure AI",
    "Amazon SageMaker",

    // AI Chatbots and Conversational AI
    "Dialogflow",
    "Microsoft Bot Framework",
    "Rasa",
    "Amazon Lex",

    // AI Model Deployment
    "TensorFlow Serving",
    "Kubeflow",
    "MLflow",

    // AI Datasets
    "ImageNet",
    "COCO (Common Objects in Context)",
    "MNIST",
    "CIFAR-10",
    "IMDb Movie Reviews",
    "UCI Machine Learning Repository",
    "Kaggle Datasets",

    // AI Ethics and Bias Mitigation
    "AI Fairness 360",
    "AI Explainability 360",

    // AI Research Frameworks (for advanced users)
    "Caffe2",
    "Chainer",
    "PyTorch Lightning",

    // AI Hardware Acceleration
    "NVIDIA CUDA",
    "Google TPUs (Tensor Processing Units)",
    "Intel AI Hardware",

    // Quantum Machine Learning
    "Qiskit",
    "Forest (D-Wave)",
  ];

  const dataScienceStack = [
    // Data Analysis and Manipulation
    "Python",
    "R",
    "Pandas",
    "NumPy",
    "SciPy",
    "MATLAB",
    "Julia",
    "Jupyter Notebook",
    "RStudio",
    "SPSS",
    "SAS",

    // Data Visualization
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Bokeh",
    "ggplot2 (for R)",
    "Tableau",
    "Power BI",
    "D3.js",
    "QlikView",
    "Looker",

    // Machine Learning
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "XGBoost",
    "LightGBM",
    "CatBoost",
    "H2O.ai",
    "AutoML (e.g., Auto-Sklearn)",
    "WEKA",

    // Data Wrangling and Cleaning
    "OpenRefine",
    "Trifacta",
    "DataWrangler",
    "Pandas (Data cleaning with Python)",

    // Big Data and Distributed Computing
    "Apache Hadoop",
    "Apache Spark",
    "Apache Flink",
    "Hive",
    "Pig",
    "Databricks",
    "HiveQL",
    "Pig Latin",
    "HDFS (Hadoop Distributed File System)",

    // Data Storage and Databases
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Microsoft SQL Server",
    "Oracle Database",
    "MongoDB",
    "Cassandra",
    "Redis",
    "SQLite",
    "HBase",
    "Elasticsearch",

    // Data Integration and ETL (Extract, Transform, Load)
    "Talend",
    "Apache NiFi",
    "Informatica",
    "Apache Beam",
    "AWS Glue",
    "Microsoft SSIS",

    // Data Mining and Text Analytics
    "RapidMiner",
    "KNIME",
    "Orange",
    "TextBlob",
    "NLTK (Natural Language Toolkit)",

    // Statistical Analysis
    "IBM SPSS Statistics",
    "SAS Analytics",
    "Stata",
    "Minitab",
    "Weka",

    // Cloud-Based Data Science Platforms
    "Google Colab",
    "IBM Watson Studio",
    "Azure Machine Learning",
    "AWS SageMaker",

    // Data Science Collaboration and Version Control
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "DVC (Data Version Control)",
    "Kaggle (for data competitions)",
  ];

  const desktopAppStack = [
    // Cross-Platform Desktop App Frameworks
    "Electron",
    "Qt",
    "JavaFX",
    "Avalonia",
    "Flutter (for desktop)",
    "Gtk",
    "WinForms (Windows Forms)",
    "WPF (Windows Presentation Foundation)",
    "Java Swing",
    "Tkinter (Python)",
    "Cocoa (macOS)",

    // Native Desktop App Development
    "C++ (with native APIs)",
    "C# (for Windows desktop apps)",
    "Objective-C (for macOS)",
    "Swift (for macOS)",
    "Delphi",

    // GUI (Graphical User Interface) Libraries
    "GTK+",
    "Qt Widgets",
    "Win32 API (for Windows)",
    "Cocoa (for macOS)",

    // Game Development for Desktop
    "Unity (for 2D/3D games)",
    "Godot Engine",
    "Unreal Engine",
    "SFML (Simple and Fast Multimedia Library)",

    // Database Connectivity
    "ODBC (Open Database Connectivity)",
    "ADO.NET (for Windows)",
    "Java Database Connectivity (JDBC)",

    // UI Design Tools
    "Adobe XD",
    "Figma",
    "Sketch",
    "InVision",
    "Balsamiq",

    // Installer and Packaging Tools
    "WiX Toolset",
    "Inno Setup",
    "NSIS (Nullsoft Scriptable Install System)",
    "InstallShield",
    "Qt Installer Framework",

    // Version Control for Desktop Apps
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",

    // Desktop App Testing Frameworks
    "Selenium (for web-based desktop apps)",
    "Appium (for mobile desktop apps)",
    "TestComplete",
    "WinAppDriver (for Windows apps)",

    // Localization and Internationalization
    "GNU gettext",
    "Qt Linguist",
    "ResX",
    "Apple NSLocalizedString",

    // IDEs (Integrated Development Environments)
    "Visual Studio",
    "Visual Studio Code",
    "Qt Creator",
    "Xcode (for macOS development)",
    "Eclipse",
    "NetBeans",
    "IntelliJ IDEA",
  ];

  const uiUxDesignStack = [
    // UI/UX Design Tools
    "Adobe XD",
    "Figma",
    "Sketch",
    "InVision",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Creative Cloud",
    "Axure RP",
    "Balsamiq",
    "Zeplin",
    "Marvel",
    "Principle",
    "Moqups",
    "Flinto",
    "SketchBook",
    "Framer",
    "Adobe After Effects (for animations)",

    // Prototyping and Wireframing
    "Wireframe.cc",
    "UXPin",
    "MockFlow",
    "Lucidchart",
    "Proto.io",
    "Cacoo",
    "Fluid UI",

    // User Research and Testing
    "UsabilityHub",
    "Optimal Workshop",
    "UserTesting",
    "Crazy Egg",
    "Hotjar",
    "Lookback",

    // 3D Modeling and Animation (for 3D UI/UX)
    "Blender",
    "Cinema 4D",
    "Maya",
    "ZBrush",

    // Design Handoff and Development
    "Zeplin",
    "Avocode",
    "Abstract",
    "Zeplin",
    "Zeplin",

    // UI/UX Design Communities and Resources
    "Dribbble",
    "Behance",
    "Awwwards",
    "Smashing Magazine",
    "Medium (for UX articles)",
    "UX Design Institute",

    // Motion Graphics and Video Editing (for UI/UX animations)
    "Adobe Premiere Pro",
    "Final Cut Pro",
    "HitFilm",
    "Motion",
    "Camtasia",

    // Color and Typography Resources
    "Adobe Color Wheel",
    "Google Fonts",
    "Typekit",
    "Font Awesome",
    "Type Scale",
  ];

  const cybersecurityStack = [
    // Network Security
    "Firewalls",
    "Intrusion Detection Systems (IDS)",
    "Intrusion Prevention Systems (IPS)",
    "Virtual Private Networks (VPNs)",
    "Network Access Control (NAC)",
    "SIEM (Security Information and Event Management)",
    "Penetration Testing Tools (e.g., Nmap, Metasploit)",
    "Snort (Network IDS/IPS)",
    "Wireshark (Packet Analyzer)",

    // Endpoint Security
    "Antivirus and Antimalware Software",
    "Host-Based Intrusion Detection (HIDS)",
    "Endpoint Detection and Response (EDR)",

    // Identity and Access Management (IAM)
    "Single Sign-On (SSO)",
    "Multi-Factor Authentication (MFA)",
    "Role-Based Access Control (RBAC)",
    "Privileged Access Management (PAM)",

    // Encryption and Data Protection
    "Encryption Algorithms (e.g., AES, RSA)",
    "SSL/TLS (Secure Sockets Layer/Transport Layer Security)",
    "Data Loss Prevention (DLP) Solutions",

    // Application Security
    "Web Application Firewalls (WAF)",
    "Static Application Security Testing (SAST)",
    "Dynamic Application Security Testing (DAST)",
    "OWASP (Open Web Application Security Project) Tools",
    "Secure Development Frameworks (e.g., OWASP SAMM)",

    // Cloud Security
    "Cloud Access Security Brokers (CASB)",
    "Identity and Access Management (IAM) for Cloud",
    "Serverless Security",

    // Security Information and Event Management (SIEM)
    "Splunk",
    "QRadar",
    "LogRhythm",
    "ArcSight",

    // Security Compliance and Governance
    "ISO/IEC 27001",
    "NIST Cybersecurity Framework",
    "PCI DSS (Payment Card Industry Data Security Standard)",
    "GDPR (General Data Protection Regulation)",

    // Incident Response and Forensics
    "Incident Response Plans (IRP)",
    "Digital Forensics Tools (e.g., EnCase, FTK)",

    // Security Education and Certification
    "Certified Information Systems Security Professional (CISSP)",
    "Certified Ethical Hacker (CEH)",
    "Certified Information Security Manager (CISM)",
    "Certified Information Systems Auditor (CISA)",

    // Cybersecurity Communities and Resources
    "Cybersecurity & Infrastructure Security Agency (CISA)",
    "SANS Institute",
    "Cybersecurity News Websites (e.g., KrebsOnSecurity, Threatpost)",
    "Hack The Box",
    "OWASP (Open Web Application Security Project)",

    // Security Best Practices
    "Least Privilege Principle",
    "Zero Trust Security Model",
    "Defense in Depth",
    "Security Awareness Training",
    "Patch Management",
  ];

  const devOpsStack = [
    // Continuous Integration and Continuous Deployment (CI/CD)
    "Jenkins",
    "Travis CI",
    "CircleCI",
    "GitLab CI/CD",
    "TeamCity",
    "GitHub Actions",
    "Bamboo",
    "GoCD",
    "Spinnaker",

    // Configuration Management
    "Ansible",
    "Puppet",
    "Chef",
    "SaltStack",
    "Terraform",
    "AWS CloudFormation",

    // Containerization and Orchestration
    "Docker",
    "Kubernetes",
    "Docker Compose",
    "OpenShift",
    "Elastic Kubernetes Service (EKS)",
    "Azure Kubernetes Service (AKS)",
    "Google Kubernetes Engine (GKE)",

    // Infrastructure as Code (IaC)
    "Terraform",
    "AWS CloudFormation",
    "Pulumi",
    "Ansible",
    "Chef Infra",

    // Version Control and Collaboration
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Gerrit",

    // Monitoring and Logging
    "Prometheus",
    "Grafana",
    "ELK Stack (Elasticsearch, Logstash, Kibana)",
    "Splunk",
    "New Relic",
    "AppDynamics",

    // Cloud Platforms
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "IBM Cloud",
    "Oracle Cloud",

    // Scripting and Automation
    "Bash Scripting",
    "Python",
    "PowerShell",
    "Ruby",

    // Continuous Testing
    "Selenium",
    "JUnit",
    "TestNG",
    "Cucumber",
    "JMeter",

    // Collaboration and Communication
    "Slack",
    "Microsoft Teams",
    "Jira",
    "Confluence",
    "ChatOps",

    // DevOps Culture and Practices
    "Agile",
    "Scrum",
    "Lean",
    "Site Reliability Engineering (SRE)",
    "DevSecOps",

    // DevOps Education and Certification
    "AWS Certified DevOps Engineer",
    "Docker Certified Associate",
    "Certified Kubernetes Administrator (CKA)",
    "Certified Jenkins Engineer (CJE)",
    "Google Cloud Professional DevOps Engineer",

    // DevOps Communities and Resources
    "DevOps Institute",
    "DevOps.com",
    "DevOpsDays",
    "The Phoenix Project (Book)",
  ];

  const gameDevStack = [
    // Game Engines
    "Unity",
    "Unreal Engine",
    "Godot Engine",
    "CryEngine",
    "Lumberyard (Amazon)",
    "GameMaker",
    "Phaser (for HTML5 games)",
    "Construct (Construct 3)",
    "RPG Maker",
    "Defold",

    // Game Development Languages
    "C# (for Unity)",
    "C++ (for Unreal Engine)",
    "GDScript (for Godot)",
    "Lua (for Love2D and other engines)",
    "JavaScript (for web-based games)",

    // 2D Game Development
    "Tilemap Editors (Tiled, TileD)",
    "Sprite Editors (Aseprite, Pyxel Edit)",
    "Physics Engines (Box2D, Physics.js)",
    "Spine (2D skeletal animation)",

    // 3D Game Development
    "Blender (3D modeling and animation)",
    "Maya (3D modeling and animation)",
    "ZBrush (3D sculpting)",
    "Substance Painter (3D texturing)",
    "3ds Max (3D modeling and animation)",

    // Game Audio
    "FMOD Studio",
    "Wwise",
    "Audacity (for sound editing)",

    // Game Development IDEs
    "Visual Studio (for Unity and C#)",
    "Visual Studio Code (with game development extensions)",
    "Unreal Engine Editor",

    // Game Asset Creation
    "Adobe Photoshop (for 2D art)",
    "Adobe Illustrator (for vector art)",
    "GIMP (GNU Image Manipulation Program)",

    // Game Testing and Debugging
    "Playtesting",
    "Bug Tracking Tools (Jira, Bugzilla)",

    // Game Development Communities and Resources
    "Unity Connect",
    "Unreal Engine Forums",
    "GameDev.net",
    "Indie Game Dev Subreddit",

    // Game Design and Documentation
    "GDD (Game Design Document)",
    "Trello (for project management)",
    "Lucidchart (for flowcharts and diagrams)",
  ];

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const transition = useTransition(visible, {
    from: { x: 300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -300, opacity: 0 },
  });

  const [education2, setEducation2] = useState(false);
  const [education3, setEducation3] = useState(false);

  const [educationSave, setEducationSave] = useState(false);

  const [work2, setWork2] = useState(false);
  const [work3, setWork3] = useState(false);

  const [workSave, setWorkSave] = useState(false);

  const userData = useSelector((state) => state.dbData.userData);

  return (
    <div style={{ height: "1100px" }}>
      <Box sx={{ mt: 3, ml: 3 }}>
        <img width={120} src={logo} />
      </Box>
      {transition((style, item) =>
        item ? (
          <animated.div
            style={{
              width: "900px",
              height: "1100px",
              boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              marginTop: "40px",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "space-between",
              borderRadius: "10px",
              border: "1px solid #ded7d9",
              display: "flex",
              padding: "40px 40px 0 40px",
              ...style,
            }}
          >
            <Box sx={{ width: "30%", mt: 5 }}>
              <Avatar
                sx={{
                  height: "150px",
                  width: "150px",
                  fontSize: 50,
                  ml: 3,
                }}
                alt="John Walker"
                src="/static/images/avatar/1.jpg"
              />
              <Button
                size="small"
                sx={{
                  mt: -7,
                  ml: 3,
                  display: "flex",
                  flexDirection: "column",
                  color: "#e2668f",
                  width: "150px",
                  ":hover": {
                    bgcolor: "transparent",
                  },
                }}
                component="label"
                variant="text"
              >
                Upload picture
                <CloudUploadIcon />
                <VisuallyHiddenInput type="file" />
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  mx: "auto",
                  mt: 7,
                }}
              >
                <TextField
                  sx={{
                    height: "40px",
                    width: "47%",
                    fontSize: 12,
                  }}
                  id="fName"
                  label="First Name"
                  variant="standard"
                  defaultValue={userData.fName}
                  inputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  sx={{
                    height: "40px",
                    width: "47%",
                    fontSize: 12,
                  }}
                  id="lName"
                  label="Last Name"
                  variant="standard"
                  defaultValue={userData.lName}
                  inputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
              <Box sx={{ mt: 5 }}>
                <TextField
                  onChange={(event) => setEmail(event.target.value)}
                  sx={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "10px",
                    fontSize: 12,
                    marginX: "auto",
                  }}
                  id="Email"
                  label="Email"
                  variant="standard"
                  defaultValue={userData.email}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
            <Box component="form" sx={{ width: "65%", mt: 10 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 5,
                }}
              >
                <TextField
                  sx={{
                    height: "40px",
                    width: "230px",
                    fontSize: 12,
                  }}
                  id="username"
                  label="Username"
                  variant="standard"
                />
                <Autocomplete
                  sx={{
                    height: "40px",
                    width: "18%",
                    fontSize: 8,
                  }}
                  id="Experience"
                  options={[
                    "1 yr",
                    "2 yrs",
                    "3 yrs",
                    "4 yrs",
                    "5 yrs",
                    "6 yrs",
                    "7 yrs",
                    "8 yrs",
                    "9 yrs",
                    "10 yrs",
                    "10+ yrs",
                  ]}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Experience"
                      variant="standard"
                    />
                  )}
                />
                <Box
                  sx={{
                    width: "230px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      opacity: 0.7,
                      fontSize: 12,
                      position: "absolute",
                      mt: -3,
                      ml: -0.3,
                    }}
                  >
                    Date of Birth
                  </Typography>
                  <Autocomplete
                    sx={{
                      height: "40px",
                      width: "55px",
                      fontSize: 8,
                    }}
                    id="date"
                    options={date}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                      <TextField {...params} label="DD" variant="standard" />
                    )}
                  />
                  <Autocomplete
                    sx={{
                      height: "40px",
                      width: "55px",
                      fontSize: 8,
                    }}
                    id="Month"
                    options={month}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField {...params} label="MM" variant="standard" />
                    )}
                  />
                  <Autocomplete
                    sx={{
                      height: "40px",
                      width: "100px",
                      fontSize: 8,
                    }}
                    id="Year"
                    options={year}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField {...params} label="YYYY" variant="standard" />
                    )}
                  />
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 7 }}
              >
                <Autocomplete
                  sx={{
                    height: "40px",
                    width: "30%",
                    fontSize: 8,
                  }}
                  id="Gender"
                  options={["Male", "Female"]}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField {...params} label="Gender" variant="standard" />
                  )}
                />
                <Autocomplete
                  sx={{
                    height: "40px",
                    width: "30%",
                    fontSize: 8,
                  }}
                  id="Developer"
                  options={[
                    "Front-End (Web)",
                    "Back-end (Web)",
                    "Full Stack (Web)",
                    "Front-End (Mobile)",
                    "Back-end (Mobile)",
                    "Full Stack (Mobile)",
                    "AI & ML",
                    "Data-Science/Analytics",
                    "Desktop Application",
                    "UI/UX Designer",
                    "Cybersecurity",
                    "DevOps Engineer",
                    "Database Administrator (DBA)",
                    "Cloud Computing",
                    "Game Developer",
                    "Networking",
                    "Embedded Systems Developer",
                  ]}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Developer Stack"
                      variant="standard"
                    />
                  )}
                />
                <Autocomplete
                  sx={{
                    height: "40px",
                    width: "30%",
                    fontSize: 8,
                  }}
                  id="Country"
                  options={countries}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField {...params} label="Country" variant="standard" />
                  )}
                />
              </Box>
              <Autocomplete
                sx={{
                  height: "40px",
                  width: "100%",
                  fontSize: 8,
                  mt: 7,
                }}
                multiple
                id="Stack"
                options={fullStackMobileStack}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tech Stack"
                    variant="standard"
                  />
                )}
              />
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  width: "92%",
                  justifyContent: "space-between",
                  position: "absolute",
                  ml: -40,
                }}
              >
                <Stack sx={{ width: "45%" }}>
                  <Box
                    sx={{
                      mt: 5,
                      opacity: 0.8,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: 22 }}>Education</Typography>
                    <IconButton
                      aria-label="add"
                      sx={{ opacity: 0.8 }}
                      onClick={() => {
                        if (education2 == false) {
                          setEducation2(true);
                        }
                        if (education2 == true) {
                          setEducation3(true);
                        }
                      }}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                  <EducationList
                    education2={education2}
                    education3={education3}
                    setEducation2={setEducation2}
                    setEducation3={setEducation3}
                    setEducationSave={setEducationSave}
                  />
                </Stack>
                <Stack sx={{ width: "45%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 5,
                      opacity: 0.8,
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: 22 }}>Work History</Typography>
                    <IconButton
                      aria-label="add"
                      onClick={() => {
                        if (work2 == false) {
                          setWork2(true);
                        }
                        if (work2 == true) {
                          setWork3(true);
                        }
                      }}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                  <WorkList
                    work2={work2}
                    work3={work3}
                    setWork2={setWork2}
                    setWork3={setWork3}
                    setWorkSave={setWorkSave}
                  />
                </Stack>
              </Box>
            </Box>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Onboarding;
