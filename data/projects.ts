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