import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a dedicated full stack developer with a proven track record of building robust and scalable web applications. With 6 months of hands-on experience, I excel in front-end technologies such as React and Angular, and back-end frameworks including .NET and Spring. My expertise extends to database management with MS SQL, PostgreSQL, and MongoDB. I am passionate about leveraging my skills to craft innovative solutions that drive business growth and deliver outstanding user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including Angular, .Net , MS SQL,Azure DevOps. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024-02 - Present",
    role: "Junior Full Stack Developer",
    company: "SII Group Morocco.",
    description: `Development of a Web Application for Network Monitoring and Expansion using .Net, Angular. Implemented RESTful APIs and integrated with MS Sql databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["C#", ".Net", "Angular", "MS Sql"],
  },
  {
    year: "2023-07 - 2023-09",
    role: "Java/J2E Developer",
    company: "MAJAL SDL",
    description: `Design and development of the MG2T application using Spring, a software for creating, planning, and tracking public projects.`,
    technologies: ["J2E" ,"Spring", "Angular", "mySQL"],
  },
  {
    year: "2022-07 - 2022-08",
    role: ".Net Developer",
    company: "MARAFIK SDL",
    description: `Development of a web application for managing green spaces using .Net , designed to streamline employee management.`,
    technologies: ["C#","ASP.NET MVC", "MS Sql", "Three.js"],
  }
];

export const PROJECTS = [
  {
    title: "Network Monitoring and Expansion App",
    image: project1,
    description:
      "A fully functional network monitoring application offering real-time monitoring and tracking of network performance and activity. It includes features such as live performance metrics for immediate issue detection, continuous tracking of network status for up-to-date insights, and a secure user authentication system to protect sensitive data and configuration settings. This comprehensive solution enhances network management through robust oversight and secure access controls..",
    technologies: ["C#",".NET 7","Angular 17","MS Sql"],
  },
  {
    title: "Monitoring Bottom To Top App",
    image: project2,
    description:
      "An application designed for managing public projects, featuring tools for task creation, assignment, and progress tracking. This platform allows users to efficiently create and allocate tasks, monitor their progress in real-time, and ensure that project milestones are met. Its comprehensive functionality supports effective project management and enhances collaboration among team members.",
    technologies: ["Java", "Spring", "Angular", "MySql"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website that highlights projects, skills, and contact information. It serves as a dynamic platform to showcase completed work, demonstrate professional abilities, and provide an easy way for potential clients or employers to get in touch. This website effectively presents an individual's expertise and accomplishments in a visually appealing and accessible format.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  }
];

export const CONTACT = {
  address: "10 Rue Tafoughalt Hay Qods, Berkane, 63300 ",
  phoneNo: "+212 615 503 124",
  email: "moradahmaidi9@gmail.com",
};
