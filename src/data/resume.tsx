import { Icons } from "@/components/icons";

export const DATA = {
  name: "Soona",
  initials: "",
  url: "https://chainsona.dev",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/paris",
  description:
    "Anon, Degen, Builder. Always into the latest trends to push the boundaries of what’s possible. WAO.",
  summary:
    "With over a decade in tech, I transitioned from a lead software engineer to a full-time entrepreneur in the exciting world of web3. I succeed on transforming innovative ideas into real, user-friendly products. My unique blend of coding expertise and market insight allows me to seamlessly bridge the gap between technology and business. Driven by a hands-on approach, I tackle complex tech challenges head-on, always seeking for optimal performance and cost-efficiency. Let’s build a bright future together!",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Rust",
    "Python",
    "Go",
    "Postgres",
    "SQLite",
    "Kafka",
    "Solidity",
    "Solana",
    "Anchor",
    "Metaplex",
    "Docker",
    "Kubernetes",
    "Ansible",
    "AWS",
    "Azure",
    "GCP",
    "Vercel",
    "Scaleway",
    "Terraform",
    "CI/CD",
    "ArgoCD",
    "Tensorflow",
    "Keras",
    "PyTorch",
    "Model Fine-tuning",
    "Figma",
  ],
  contact: {
    social: {
      GitHub: {
        url: "https://github.com/chainsona",
        icon: Icons.github,
      },
      X: {
        url: "https://x.com/chainsona",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "Soona",
      href: "https://github.com/chainsona",
      badges: [],
      location: "Worldwide",
      title: "Web3 Engineer",
      logoUrl: "/me.png",
      start: "2024",
      end: "Now",
      description:
        "Building secure, fast, and scalable programs with Rust. Working on dApps to make blockchain great again. Teaming up with smart folks to design and roll out architectures that actually work.",
    },
    {
      company: "████████████",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/coding.png",
      start: "2022",
      end: "2024",
      description:
        "Designed and implemented software solutions for a Web3 platform of verifiable identities and credentials. Leveraged AI technologies to enhance user experience and increase team productivity.",
    },
    {
      company: "████████████",
      href: "",
      badges: [],
      location: "Paris",
      title: "Cloud Engineer",
      logoUrl: "/cloud-infrastructure.png",
      start: "2021",
      end: "2022",
      description:
        "Led the design and implementation of secure, scalable cloud infrastructure using Scaleway and AWS. Automated infrastructure provisioning with Terraform and Ansible. Automated cloud operations with Terraform and Ansible, reducing manual effort by 50%.",
    },
    {
      company: "Multiple Startups",
      href: "",
      badges: [],
      location: "Paris",
      title: "Cloud Engineer",
      logoUrl: "/cloud-infrastructure.png",
      start: "2014",
      end: "2021",
      description:
        "Building and maintaining scalable, secure cloud infrastructures on AWS, Azure, OVH and Scaleway. Automating deployments and operations to ensure smooth, continuous delivery. Working closely with the dev team to implement cloud solutions that support rapid growth and innovation. Monitoring and optimizing cloud resources to keep everything running efficiently and cost-effectively. Helping the team navigate the complexities of cloud security and compliance.",
    },
  ],
  education: [
    {
      school: "Coursera",
      href: "https://www.coursera.org/specializations/machine-learning-introduction",
      degree: "Machine Learning Specialization",
      logoUrl: "/coursera.png",
      start: "2013",
      end: "2013",
    },
    {
      school: "Engineering School",
      href: "https://www.cesi.fr/en/",
      degree: "Bachelor's Degree in Computer Science (BCS)",
      logoUrl: "/school.png",
      start: "2011",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Demind",
      href: "https://demind.ai",
      dates: "Feb 2024 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Node.js",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "MagicEden",
        "Tensor",
        "Underdog",
        "Jupiter",
        "OpenAI",
      ],
      links: [
        {
          type: "Website",
          href: "https://demind.ai",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Social",
          href: "https://x.com/demindai",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/demind-showcase.png",
      video: "",
    },
    {
      title: "Solex",
      href: "https://solex.chainsona.dev",
      dates: "July 2024",
      active: true,
      description:
        "User-friendly Solana blockchain explorer offering real-time data.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn",
        "Coingecko",
        "Solana SDK",
      ],
      links: [
        {
          type: "Website",
          href: "https://solex.chainsona.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/chainsona/solexplorer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/solexplorer-showcase.png",
      video: "",
    },
    {
      title: "GenesysGo D.A.G.G.E.R. Testnet2 Dashboard",
      href: "https://dagger-dashboard.chainsona.dev",
      dates: "Jan 2024 - Apr 2024",
      active: true,
      description:
        "GenesysGo D.A.G.G.E.R. Testnet2 Dashboard provides a user-friendly alternative to the official GenesysGo dashboard. It allows users to view the current state of the network and monitor the performance/rewards of their nodes.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Solana IDL",
        "Helius RPC",
      ],
      links: [
        {
          type: "Website",
          href: "https://dagger-dashboard.chainsona.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/chainsona/genesysgo-dagger-dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/genesysgo-dagger.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Talent Olympics",
      dates: "Jul 11th - 14th, 2024",
      location: "Worldwide",
      description:
        "Completed challenges to win prizes and receive interviews with top companies and teams on Solana. Hosted by Superteam, Turbin3 and Rise in.",
      image: "/talent-olympics.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          href: "https://earn.superteam.fun/talent-olympics/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Social",
          href: "https://x.com/SuperteamDAO/status/1809212929411109038",
          icon: <Icons.x className="size-3" />,
        },
      ],
    },
    {
      title: "Metaplex cHack",
      dates: "Feb 1st - 29th, 2024",
      location: "Worldwide",
      description:
        "Developed, Demind AI, a dapp which leverage AI to generate a feed of valuable insights from news so crypto traders can instantly interact with the blockchain (using frames).",
      image:
        "https://pbs.twimg.com/media/GHoJSFka8AAv6bJ?format=jpg&name=4096x4096",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          href: "https://chack.metaplex.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Social",
          href: "https://x.com/metaplex/status/1745502973277691931",
          icon: <Icons.x className="size-3" />,
        },
      ],
    },
  ],
} as const;
