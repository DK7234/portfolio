import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "social-media-publisher-saas",
    title: "Social Media Publisher SaaS",
    shortDescription:
      "Production-ready SaaS platform for connecting social accounts, uploading media, publishing content, and tracking analytics.",
    description:
      "A full-stack social media publishing platform developed during my SteptoMedia internship. The application connects Facebook, Instagram, and TikTok accounts, supports media uploads and multi-platform publishing, stores post history, and synchronizes social analytics.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MySQL",
      "OAuth",
      "Cloudflare R2",
    ],
    category: "Software Engineering",
    github: "",
    image: "/images/projects/social-media-publisher.png",
    status: "private",

    relatedProjects: [
  "automated-ip-reputation-checker",
  "forest-fire-prevention-iot-system",
  "cybersecurity-tools-portfolio",
],
  },
  {
    slug: "bloodhound-active-directory-attack-path-lab",
    title: "BloodHound Active Directory Attack Path Lab",
    shortDescription:
      "Active Directory security lab for collecting relationship data, visualizing attack paths, and analyzing privilege escalation opportunities.",
    description:
      "A hands-on Active Directory security lab focused on collecting directory relationship data, visualizing attack paths, identifying privilege escalation opportunities, and understanding common enterprise security weaknesses using BloodHound and SharpHound.",
    tech: [
      "BloodHound CE",
      "SharpHound",
      "Active Directory",
      "Windows Server 2022",
      "Kali Linux",
      "Neo4j",
      "GoPhish",
    ],
    category: "Cybersecurity",
    github: "https://github.com/DK7234/bloodhound-ad-lab",
    image: "/images/projects/bloodhound-ad-lab.png",
    status: "public",
    gallery: [
      {
    src: "/images/projects/bloodhound/active-directory-lab.png",
    alt: "Windows Server 2022 Active Directory Users and Computers management console",
    title: "Active Directory Lab",
    description:
      "Windows Server 2022 Active Directory environment configured with custom users, security groups, and domain resources for enterprise security testing.",
  },
  {
    src: "/images/projects/bloodhound/attack-path.png",
    alt: "BloodHound Active Directory attack path visualization",
    title: "Attack-path analysis",
    description:
      "BloodHound graph showing relationships and potential privilege escalation paths inside the Active Directory lab.",
  },
  {
    src: "/images/projects/bloodhound/phishing-attack.png",
    alt: "GoPhish phishing campaign used in the Active Directory security lab",
    title: "Phishing simulation",
    description:
      "Controlled phishing simulation created with GoPhish to demonstrate credential-targeting risks in an Active Directory environment.",
  },
],
relatedProjects: [
  "cybersecurity-tools-portfolio",
  "linux-recon-tool",
  "network-device-inventory-tool",
],

architecture: {
  title: "Active Directory Security Lab Architecture",
  description:
    "The lab combines Active Directory relationship analysis with a controlled phishing simulation to demonstrate technical and human attack paths.",
  flows: [
    {
      title: "Directory Attack-Path Analysis",
      description:
        "Active Directory relationship data is collected, stored as a graph, and analyzed for privilege-escalation paths.",
      nodes: [
        {
          title: "Windows Server 2022",
          subtitle: "Domain controller",
        },
        {
          title: "Active Directory",
          subtitle: "Users, groups, computers, and permissions",
        },
        {
          title: "SharpHound CE",
          subtitle: "Directory relationship collection",
        },
        {
          title: "Neo4j",
          subtitle: "Graph data storage",
        },
        {
          title: "BloodHound CE",
          subtitle: "Relationship visualization",
        },
        {
          title: "Attack-Path Analysis",
          subtitle: "Privilege-escalation investigation",
        },
      ],
    },
    {
      title: "Controlled Phishing Simulation",
      description:
        "A controlled GoPhish campaign targets the lab user John Smith to demonstrate credential-focused social-engineering risk.",
      nodes: [
        {
          title: "GoPhish",
          subtitle: "Campaign configuration",
        },
        {
          title: "Phishing Email",
          subtitle: "Controlled simulation message",
        },
        {
          title: "John Smith (jsmith)",
          subtitle: "Lab user and campaign target",
        },
        {
          title: "Landing Page",
          subtitle: "Controlled credential-capture simulation",
        },
        {
          title: "Campaign Results",
          subtitle: "Security-awareness analysis",
        },
      ],
    },
  ],
},
  },
  {
    slug: "cybersecurity-tools-portfolio",
    title: "Cybersecurity Tools Portfolio",
    shortDescription:
      "Collection of Python-based security tools for packet analysis, host discovery, port scanning, password auditing, and network monitoring.",
    description:
      "A collection of Python-based cybersecurity utilities designed to strengthen practical experience in packet analysis, host discovery, port scanning, password auditing, socket programming, multithreading, cryptography, and defensive network monitoring.",
    tech: [
      "Python",
      "Scapy",
      "Socket Programming",
      "Multithreading",
      "Regex",
      "Cryptography",
    ],
    category: "Security Engineering",
    github: "https://github.com/DK7234/security-projects",
    image: "/images/projects/security-tools.png",
    status: "public",
    gallery: [
  {
    src: "/images/projects/security-tools/port-scanner-menu.png",
    alt: "Python Port Scanner running in VS Code",
    title: "Port scanning",
    description:
      "TCP port scanner that discovers open services, identifies common ports, and reports scan results with execution timing.",
  },
  {
    src: "/images/projects/security-tools/port-scanner-results.png",
    alt: "Port scanner detecting open ports",
    title: "Open port detection",
    description:
      "Example scan identifying reachable services and displaying structured scan results for the target host.",
  },

  {
    src: "/images/projects/security-tools/packet-sniffer-start.png",
    alt: "Packet Sniffer interface selection",
    title: "Live packet capture",
    description:
      "Interactive packet sniffer allowing interface selection, packet limits, and live traffic monitoring using Scapy.",
  },
  {
    src: "/images/projects/security-tools/packet-sniffer-results.png",
    alt: "Packet Sniffer capturing network traffic",
    title: "Traffic analysis",
    description:
      "Captured live network packets with protocol classification, color-coded traffic, and exported packet logs.",
  },

  {
    src: "/images/projects/security-tools/password-checker-start.png",
    alt: "Password Strength Checker loading leaked password database",
    title: "Password auditing",
    description:
      "Loads a leaked password database and evaluates password strength using multiple security rules.",
  },
  {
    src: "/images/projects/security-tools/password-checker-results.png",
    alt: "Weak password analysis",
    title: "Weak password detection",
    description:
      "Detects weak passwords, common patterns, leaked credentials, and provides recommendations for stronger passwords.",
  },

  {
    src: "/images/projects/security-tools/bruteforce-start.png",
    alt: "Brute Force Detector analyzing authentication logs",
    title: "Authentication log analysis",
    description:
      "Processes SSH and Windows authentication logs to identify suspicious login activity.",
  },
  {
    src: "/images/projects/security-tools/bruteforce-results.png",
    alt: "Brute Force Detector report",
    title: "Brute-force detection",
    description:
      "Identifies repeated failed login attempts, flags suspicious IP addresses, and generates a structured security report.",
  },

  {
    src: "/images/projects/security-tools/firewall-start.png",
    alt: "Firewall Rule Analyzer parsing firewall rules",
    title: "Firewall rule parsing",
    description:
      "Parses Linux iptables and Windows Firewall configurations before performing automated security auditing.",
  },
  {
    src: "/images/projects/security-tools/firewall-results.png",
    alt: "Firewall Rule Analyzer detecting dangerous rules",
    title: "Security misconfiguration detection",
    description:
      "Detects insecure firewall configurations, assigns severity levels, and generates a detailed audit report.",
  },

  {
    src: "/images/projects/security-tools/caesar-menu.png",
    alt: "Interactive Caesar Cipher Tool",
    title: "Interactive encryption toolkit",
    description:
      "Interactive terminal application supporting encryption, decryption, ciphertext cracking, and demonstration mode.",
  },
  {
    src: "/images/projects/security-tools/caesar-crack.png",
    alt: "Caesar Cipher frequency analysis",
    title: "Automated cipher cracking",
    description:
      "Performs frequency analysis, ranks possible keys, and automatically recovers the original plaintext without the encryption key.",
  },
],
architecture: {
  title: "Python Cybersecurity Toolkit",
  description:
    "A collection of security-focused Python utilities covering network reconnaissance, password auditing, traffic analysis, firewall auditing, brute-force detection, and cryptography.",

  flows: [
    {
      title: "Network Security Utilities",
      description:
        "Utilities focused on network discovery, monitoring, and traffic analysis.",
      nodes: [
        {
          title: "Python",
          subtitle: "Core application",
        },
        {
          title: "Port Scanner",
          subtitle: "TCP enumeration",
        },
        {
          title: "Packet Sniffer",
          subtitle: "Live traffic capture",
        },
        {
          title: "Traffic Analysis",
          subtitle: "Protocol inspection",
        },
      ],
    },

    {
      title: "Security Assessment Utilities",
      description:
        "Utilities for auditing passwords, detecting attacks, analyzing firewall rules, and demonstrating cryptographic concepts.",
      nodes: [
        {
          title: "Password Checker",
          subtitle: "Strength auditing",
        },
        {
          title: "Brute Force Detector",
          subtitle: "Log analysis",
        },
        {
          title: "Firewall Analyzer",
          subtitle: "Security auditing",
        },
        {
          title: "Caesar Cipher",
          subtitle: "Encryption & cryptanalysis",
        },
      ],
    },
  ],
},
relatedProjects: [
  "bloodhound-active-directory-attack-path-lab",
  "linux-recon-tool",
  "automated-ip-reputation-checker",
],
  },
  {
    slug: "forest-fire-prevention-iot-system",
    title: "Forest Fire Prevention IoT System",
    shortDescription:
      "Cloud-based IoT system using Microsoft Azure services and machine learning to monitor environmental conditions and identify fire risks.",
    description:
      "A cloud-based IoT and machine-learning project designed to monitor environmental conditions and identify potential forest-fire risks. The system uses Microsoft Azure services, IoT Hub, Azure Machine Learning, and Microsoft SQL Server to collect, process, and analyze sensor data.",
    tech: [
      "Microsoft Azure",
      "Azure IoT Hub",
      "Azure Machine Learning",
      "Microsoft SQL Server",
      "IoT",
      "Cloud Computing",
    ],
    category: "Cloud & IoT",
    github: "",
    image: "/images/projects/forest-fire.png",
    status: "private",
    relatedProjects: [
  "social-media-publisher-saas",
  "automated-ip-reputation-checker",
  "network-device-inventory-tool",
],
  },
  {
    slug: "automated-ip-reputation-checker",
    title: "Automated IP Reputation Checker",
    shortDescription:
      "Security automation workflow that checks IP reputation through VirusTotal and sends categorized threat alerts to Slack.",
    description:
      "An automated cybersecurity workflow built with n8n that receives IP addresses, checks their reputation using the VirusTotal API, categorizes the security risk, and sends structured threat alerts to Slack. The workflow can be deployed locally using Docker.",
    tech: [
      "n8n",
      "VirusTotal API",
      "Slack",
      "Docker",
      "Security Automation",
    ],
    category: "Automation",
    github: "https://github.com/DK7234/n8n-security-workflows",
    image: "/images/projects/ip-reputation.png",
    status: "public",
    gallery: [
  {
    src: "/images/projects/ip-reputation/workflow-overview.png",
    alt: "Complete n8n IP Reputation Checker workflow",
    title: "Complete IP Reputation Checker Workflow",
    description:
      "End-to-end automation built in n8n that receives an IP address, queries the VirusTotal API, evaluates its reputation, and sends automated Slack notifications.",
  },
  {
    src: "/images/projects/ip-reputation/http-request.png",
    alt: "VirusTotal API HTTP Request node",
    title: "VirusTotal API Request",
    description:
      "HTTP Request node retrieving IP reputation data from the VirusTotal v3 API using secure API authentication.",
  },
  {
    src: "/images/projects/ip-reputation/decision-logic.png",
    alt: "Conditional logic for malicious IP detection",
    title: "Automated Threat Classification",
    description:
      "Conditional workflow evaluating the returned reputation score and routing execution to either a safe or malicious notification path.",
  },
  {
    src: "/images/projects/ip-reputation/input-form.png",
    alt: "n8n IP Reputation Checker form",
    title: "Interactive IP Submission Form",
    description:
      "Simple web form allowing analysts to submit an IP address for automated reputation analysis.",
  },
  {
    src: "/images/projects/ip-reputation/slack-alert.png",
    alt: "Slack notification generated by the workflow",
    title: "Automated Slack Notification",
    description:
      "Security Alert Bot automatically posts the analysis result to Slack, distinguishing between clean and malicious IP addresses.",
  },
  {
    src: "/images/projects/ip-reputation/workflow-success.png",
    alt: "Successful execution of the complete workflow",
    title: "Successful Automation Execution",
    description:
      "Completed workflow showing every node executed successfully from submission to notification delivery.",
  },
],
relatedProjects: [
  "network-device-inventory-tool",
  "linux-recon-tool",
  "cybersecurity-tools-portfolio",
],
architecture: {
  title: "Automated Threat Intelligence Workflow",
  description:
    "An n8n automation that receives an IP address, queries VirusTotal, classifies the result, and delivers a structured Slack alert.",
  flows: [
    {
      title: "IP Reputation Analysis",
      description:
        "The workflow collects analyst input, enriches the IP address with threat-intelligence data, and routes the result based on reputation.",
      nodes: [
        {
          title: "Analyst",
          subtitle: "Submits an IP address",
        },
        {
          title: "n8n Form",
          subtitle: "Workflow input interface",
        },
        {
          title: "VirusTotal API",
          subtitle: "Threat-intelligence lookup",
        },
        {
          title: "Classification Logic",
          subtitle: "Safe or malicious decision path",
        },
        {
          title: "Slack Alert",
          subtitle: "Automated security notification",
        },
      ],
    },
  ],
},
  },
  {
    slug: "linux-recon-tool",
    title: "Linux Recon Tool",
    shortDescription:
      "Bash-based reconnaissance utility for gathering system, network, DNS, and target information in Linux environments.",
    description:
      "A Bash-based reconnaissance utility designed for Linux and Kali Linux environments. The tool gathers system information, network details, DNS data, target information, and Nmap results through a structured command-line workflow.",
    tech: [
      "Bash",
      "Linux",
      "Kali Linux",
      "Nmap",
      "Reconnaissance",
    ],
    category: "Cybersecurity",
    github: "https://github.com/DK7234/recon-tool",
    image: "/images/projects/linux-recon.png",
    status: "public",
    gallery: [
  {
    src: "/images/projects/linux-recon/system-overview.png",
    alt: "Linux Recon Tool system overview",
    title: "System and Environment Discovery",
    description:
      "Collects essential host information including operating system, kernel version, filesystem usage, uptime, and logged-in user details.",
  },
  {
    src: "/images/projects/linux-recon/security-environment.png",
    alt: "Linux Recon Tool installed security tools",
    title: "Security Tools and Running Services",
    description:
      "Enumerates installed security utilities, identifies running services, and provides a quick overview of the security assessment environment.",
  },
  {
    src: "/images/projects/linux-recon/network-analysis.png",
    alt: "Linux Recon Tool network analysis",
    title: "Network and Process Inspection",
    description:
      "Analyzes network interfaces, active processes, authentication logs, and checks for suspicious utilities commonly used during attacks.",
  },
  {
    src: "/images/projects/linux-recon/security-summary.png",
    alt: "Linux Recon Tool security assessment summary",
    title: "Privilege Escalation and Integrity Checks",
    description:
      "Performs SUID enumeration, verifies critical system files, evaluates disk health, and summarizes the Linux security assessment.",
  },
],
relatedProjects: [
  "cybersecurity-tools-portfolio",
  "network-device-inventory-tool",
  "bloodhound-active-directory-attack-path-lab",
],
architecture: {
  title: "Linux Security Reconnaissance Workflow",
  description:
    "A Bash-based auditing workflow that collects host, network, process, service, authentication, and privilege information from a Linux system.",
  flows: [
    {
      title: "Host Reconnaissance",
      description:
        "The script gathers system and network context before performing deeper security checks.",
      nodes: [
        {
          title: "Linux Host",
          subtitle: "Assessment target",
        },
        {
          title: "Bash Recon Script",
          subtitle: "Automated collection workflow",
        },
        {
          title: "System Discovery",
          subtitle: "OS, kernel, users, uptime, and storage",
        },
        {
          title: "Network Inspection",
          subtitle: "Interfaces, routes, and connectivity",
        },
        {
          title: "Process & Service Audit",
          subtitle: "Running services and suspicious processes",
        },
        {
          title: "Security Summary",
          subtitle: "Integrity and privilege findings",
        },
      ],
    },
    {
      title: "Privilege and Integrity Review",
      description:
        "Additional checks identify potential privilege-escalation opportunities and system-integrity concerns.",
      nodes: [
        {
          title: "Authentication Logs",
          subtitle: "Login and security-event review",
        },
        {
          title: "SUID Enumeration",
          subtitle: "Privileged binary discovery",
        },
        {
          title: "Critical File Checks",
          subtitle: "Integrity verification",
        },
        {
          title: "Assessment Report",
          subtitle: "Consolidated findings",
        },
      ],
    },
  ],
},
  },
  {
    slug: "network-device-inventory-tool",
    title: "Network Device Inventory Tool",
    shortDescription:
      "Python networking tool for discovering devices, collecting host information, and exporting inventory records to CSV.",
    description:
      "A Python networking utility that discovers reachable devices, collects host and network information, and exports structured inventory records to CSV. The project demonstrates socket programming, TCP/IP concepts, virtual environments, and practical network documentation.",
    tech: [
      "Python",
      "Socket Programming",
      "TCP/IP",
      "CSV",
      "Virtual Environment",
    ],
    category: "Networking",
    github: "https://github.com/DK7234/network-inventory-tool",
    image: "/images/projects/network-inventory.png",
    status: "public",
    gallery: [
  {
    src: "/images/projects/network-inventory/device-scan.png",
    alt: "Network Device Inventory Tool scanning the local network",
    title: "Network Device Discovery",
    description:
      "Scans the local subnet to discover active hosts and identifies commonly exposed services by checking standard TCP ports.",
  },
  {
    src: "/images/projects/network-inventory/inventory-export.png",
    alt: "Generated CSV inventory report",
    title: "Inventory Export",
    description:
      "Exports the discovered devices and their open ports into a CSV inventory report for documentation and future analysis.",
  },
],
relatedProjects: [
  "linux-recon-tool",
  "cybersecurity-tools-portfolio",
  "automated-ip-reputation-checker",
],
architecture: {
  title: "Network Inventory Discovery Pipeline",
  description:
    "A Python-based workflow that scans a local network, identifies reachable hosts and exposed services, and exports the results to a structured CSV inventory.",
  flows: [
    {
      title: "Device Discovery and Inventory",
      description:
        "The tool moves from network scanning to structured documentation of discovered assets.",
      nodes: [
        {
          title: "Target Network",
          subtitle: "Local subnet",
        },
        {
          title: "Host Discovery",
          subtitle: "Reachable-device detection",
        },
        {
          title: "Port Enumeration",
          subtitle: "Common TCP service checks",
        },
        {
          title: "Device Inventory",
          subtitle: "Host and service records",
        },
        {
          title: "CSV Export",
          subtitle: "Structured inventory report",
        },
      ],
    },
  ],
},
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function getRelatedProjects(project: Project) {
  if (!project.relatedProjects?.length) {
    return [];
  }

  return project.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);
}

export function getAdjacentProjects(currentSlug: string) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug,
  );

  if (currentIndex === -1) {
    return {
      previousProject: null,
      nextProject: null,
    };
  }

  return {
    previousProject:
      currentIndex > 0 ? projects[currentIndex - 1] : null,

    nextProject:
      currentIndex < projects.length - 1
        ? projects[currentIndex + 1]
        : null,
  };
}