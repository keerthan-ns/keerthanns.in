import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs"

export const socials = {
  mail: "mailto:keerthanns091@gmail.com",
  github: "https://github.com/keerthan-ns",
  linkedin: "https://www.linkedin.com/in/keerthan-ns/",
  twitter: "https://twitter.com/keerthan_ns",
  instagram: "https://instagram.com/keerthan_ns",
  resume: "https://drive.google.com/file/d/1xLsjvASL_1YQIYaOR1QiOd6NXYdTxZAc/view?usp=sharing"
}

export const socialsWithIcons = [
  {
    name: 'Github',
    href: socials.github,
    icon: () => (
      <BsGithub className="w-4 h-4 hover:animate-wiggle hover:text-white" />
    ),
  }, {
    name: 'LinkedIn',
    href: socials.linkedin,
    icon: () => (
      <BsLinkedin className="w-4 h-4 hover:animate-wiggle hover:text-white" />
    ),
  }, {
    name: 'Instagram',
    href: socials.instagram,
    icon: () => (
      <BsInstagram className="w-4 h-4 hover:animate-wiggle hover:text-white" />
    ),
  }, {
    name: 'Twitter',
    href: socials.twitter,
    icon: () => (
      <BsTwitterX className="w-4 h-4 hover:animate-wiggle hover:text-white" />
    ),
  }
]

export const experiences = [
  {
    title: "Product Engineer",
    company: "Edgeverve Systems (Infosys finacle)",
    location: "Bangalore, Karnataka",
    website: "https://www.edgeverve.com/",
    logo: "finacle.png",
    period: "Aug 2024- Present",
    description: `• Gained hands-on experience in UI/UX development using ReactJS, Typescript, HTML5, CSS, JS.
            • Worked on DevOps and deployment automation using Jenkins, Docker, and Kubernetes.
            • Developed internal tools that improved developer productivity and reduced API development time by 30%.`,
  }, {
    title: "Product Engineer Intern",
    company: "Edgeverve Systems",
    location: "Bangalore, Karnataka",
    website: "https://www.edgeverve.com/",
    logo: "edgeverve.png",
    period: "Feb 2024- Jul 2024",
    description: `• Built and maintained 5+ Spring Boot batch jobs and microservices, and developed RESTful APIs for a
            banking application handling high-volume transactions.
            • Implemented unit tests using JUnit and Mockito, achieving 80% code coverage.`,
  }, {
    title: "Software Developer Intern",
    company: "Inspirante Technology Pvt. Ltd",
    location: "Udupi, Karnataka",
    website: "https://inspirantech.in/",
    logo: "inspirante.jpeg",
    period: "Aug 2022-Feb 2024",
    description: `• Gained experience in UI development using Next.js, Typescript along with Prisma ORM and GraphQL. 
            • Developed a full- stack web application for Anugraha coaching using t3 stack.
            • Revamped the company website and Abhijnya services website using a modern theme (Next.js).`,
  }, {
    title: "Web Development Intern",
    company: "Vitvara Technology",
    location: "Mangalore, Karnataka",
    website: "https://www.vitvara.in/",
    logo: "vitvara.png",
    period: "Aug 2021-Sept 2021",
    description: `• Developed a responsive website for a local business using HTML5, CSS, and JavaScript.`,
  }
]

export const education = [
  {
    timeline:'2021-2024',
    name:'NMAM Institute of Technology, Nitte',
    designation:'BE in Computer Science & Engineering'
  },{
    timeline:'2018-2021',
    name:'NRAM Polytechnic, Nitte',
    designation:'Diploma in Computer Science'
  },{
    timeline:'2006-2018',
    name:'Dr.NSAM English Medium High School, Nitte',
    designation:'Secondary Education'
  }
]

export const projects = [
  {
    title: 'Incridea-2023',
    description: 'Website for the annual techno-cultural fest of NMAMIT, called Incridea. Worked in team of 9. The website was visited by over 5000+ people throughout the duration of the fest.',
    github: 'https://github.com/incridea-nmamit/incridea-client/tree/2023',
    link: 'http://incridea.in',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1683852443/portfolioProjects/uqau9y2uttv5ma9wjqa1.png",
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'GraphQl', 'Prisma']
  }, {
    title: 'Incridea-2024',
    description: 'Website for the annual techno-cultural fest of NMAMIT, called Incridea. Worked in team of 24. The website was visited by over 5000+ people throughout the duration of the fest.',
    github: 'https://github.com/incridea-nmamit/incridea-client/tree/2024',
    link: 'http://incridea.in',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1717234994/portfolioProjects/nuasdlmme1hwy6n8evki.png",
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'GraphQl', 'Prisma']
  },
  {
    title: 'Anugraha coaching',
    description: 'Anugraha Online Coaching Center is built with the T3 stack. It supports English and Kannada languages. Students can submit details and payment proof, which the admin can verify and manage. Automatic mail confirmation feature.',
    link: 'https://anugraha.vercel.app',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1705248952/portfolioProjects/anugraha_o1932k.png",
    tags: ['Next.js', 'Typescript', 'Tailwindcss', 'Prisma', 'tRPC', 'NextAuth', 'Supabase']
  },
  {
    title: 'Abhijinya Services',
    description: 'Revamped the Abhijnya Education website, a Mangalore-based service under the Abhijnya Services. Designed and developed Abhijnya Physiotherapy service site under the same built as a static web application using a modern, theme-based design approach.',
    link: 'https://www.abhijnya.com/',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1761797862/portfolioProjects/abhijServices_xwnkix.png",
    tags: ['Next.js[Page Router]', 'Typescript', 'Tailwindcss', ' NodeMailer', 'ShadCN UI']
  },
  {
    title: 'My Portfolio (Current)',
    description: 'My personal portfolio website built with Next.js, TypeScript, and TailwindCSS, showcasing projects and skills.',
    github: 'https://github.com/keerthan-ns/keerthanns.in/',
    link: 'https://keerthanns.in/',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1761831376/portfolioProjects/portfolio_phdccq.png",
    tags: ['Next.js[App Router]', 'Typescript', 'TailwindCSS', 'Aceternity UI', 'Hero UI']
  },
  {
    title: 'Inspirante Technologies',
    description: 'Inspirante Technologies Pvt Ltd provides Software-as-a-Service [SAAS] ERP solutions. I have revamped the website by adding recaptcha, auto-mail system features and validations.',
    link: 'https://inspirantech.in/',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1705248981/portfolioProjects/inspirantech_opvkzj.png",
    tags: ['Html', 'css', 'Bootstrap', 'Javascript', 'Php']
  },
  {
    title: 'Abhijinya Education (currently Abhijnya Services)',
    description: 'A static website built while an web development intern in Inspirante Technologies Pvt.Ltd. Abhijinya Education Services offers Aptitude training, Soft skills, Workshops, Seminars, Job preparation techniques & Personality development programs.',
    link: 'https://abhijnyaeducation.com/',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1683852442/portfolioProjects/udibcop7esvui5bylgy8.png",
    tags: ['html', 'css/scss', ' Bootstrap']
  },
  {
    title: 'My Portfolio V1 (Old portfolio)',
    description: 'This is my portfolio website. It is a static website built using ReactJS and TailwindCSS. I really enjoyed building this website.',
    github: 'https://github.com/keerthan-ns/portfolio',
    link: 'https://keerthanns-v1.vercel.app/',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1688752957/portfolioProjects/portPro_b6lsrl.png",
    tags: ['React.js', 'css', 'TailwindCSS', 'Three.js']
  },
  {
    title: 'VChat',
    description: 'The Vchat(Instagram clone) is a user-friendly web-application. The website has a modern, responsive design, and uses a combination of technologies such as ReactJS and MongoDB to provide a smooth and seamless user experience.',
    github: 'https://github.com/keerthan-ns/Vchat',
    link: 'https://vchat-now.vercel.app/',
    img: "https://res.cloudinary.com/dg7etzwks/image/upload/v1683852442/portfolioProjects/wxp6qwy2qw9beyygziog.png",
    tags: ['React.js', 'css/scss', 'Django', 'MongoDB']
  }
]

export const techStacks = [
  { name: 'Java', src: '/static/stacks/java.svg' },
  { name: 'Typescript', src: '/static/stacks/typescript.svg' },
  { name: 'Next.js', src: '/static/stacks/nextjs.svg' },
  { name: 'React.js', src: '/static/stacks/react.svg' },
  { name: 'Tailwind', src: '/static/stacks/tailwind.svg' },
  { name: 'Spring boot', src: '/static/stacks/springboot.svg' },
  { name: 'NodeJs', src: '/static/stacks/nodejs.svg' },
  { name: 'Git', src: '/static/stacks/git.svg' },
  { name: 'Docker', src: '/static/stacks/docker.svg' },
  { name: 'Kubernetes', src: '/static/stacks/kubernetes.svg' },
  { name: 'Jenkins', src: '/static/stacks/jenkins.svg' },

]
