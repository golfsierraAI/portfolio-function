const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
app.use(cors());
const router = express.Router();

let records = [];

router.get("/", (req, res) => {
  res.send({
    name: "Gourav sharma",
    resumeHeadingSection: {
      role: "Expert Frontend Developer",
      description:
        "Detail-oriented Front End Developer with more than 1 year of development experience working with HTML, CSS, Javascript, React.js, and TypeScript. Highly adept at both independent and collaborative projects, with an emphasis on mobile-first website development.",
    },
    contactAndSkills: {
      portfolioLink: "/",
      location: "New Delhi, India",
      email: "gourav.npm@gmail.com",
      linkedInURL: "https://www.linkedin.com/in/golfSierra/",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "SCSS",
        "TypeScript",
        "React.js",
        "Redux",
        "Redux-saga",
        "Redux-thunk",
        "Material UI",
        "React-router",
        "Node.js",
        "Git ",
      ],
    },
    experienceSection: {
      description:
        "I've worked on a handful of web projects over the years, some of which were for the following organizations:",

      organisationList: [
        {
          companyName: "Optum, United health group",
          description:
            "Optum is a healthcare services and technology company that focuses on improving the delivery and management of healthcare through innovative solutions.",
          duration: "Jan 2023 - Present",
          role: "Associate Software Engineer 2",
          bulletPoints: [
            "Working as an Associate Software Engineer 2 Fullstack in a team responsible for developing and maintaining a critical healthcare product using a combination of frontend and backend technologies.",
            "Use React, Angular, Java, SpringBoot, and Node.js for developing frontend and backend functionality to ensure seamless communication and smooth functioning of the application.",
            "Collaborate with cross-functional teams, including developers, product managers, and UX designers, to understand requirements and translate them into functional specifications and design documents.",
            "Develop and maintain frontend features and functionality using React and Angular, including components, forms, and data visualization tools, to ensure an intuitive user experience.",
            "Implement RESTful APIs and Microservices using Java and SpringBoot for efficient communication between frontend and backend.",
            "Write clean, well-documented code following established coding standards and best practices, and mentor junior developers to improve coding skills.",
            "Conduct testing of the codebase using tools such as Jest, JUnit, and Mockito, to identify and address bugs and performance issues, and collaborate with senior developers to resolve complex issues.",
            "Provide guidance to junior developers and help teammates in resolving technical challenges.",
            "Stay up to date with emerging trends and best practices in fullstack development and participate in learning and training opportunities to improve technical skills.",
            "Participate in code reviews, provide feedback to other developers, and ensure high code quality and maintainability of the application.",
            "Follow agile methodologies and participate in agile ceremonies to ensure timely and efficient delivery of software products.",
          ],
        },
        {
          companyName: "Highradius",
          description:
            "HighRadius is a fintech enterprise software company that provides intelligent automation solutions for accounts receivable and treasury management, helping businesses streamline and optimize their financial operations.",
          duration: "Dec 2020 - September 2022",
          bulletPoints: [
            "Contributed to the development of a complex React application that served as a key component in HighRadius' suite of financial management software.",
            "Collaborated with more senior developers, product managers, and UX designers to understand business requirements and translate them into functional specifications and design documents.",
            "Implemented various frontend features and functionality using React, such as components, forms, and data visualization tools, under the guidance and mentorship of more experienced developers.",
            "Utilized Redux for state management, ensuring that the application's state was well-organized and easy to maintain.",
            "Wrote clean, well-documented code following established coding standards and best practices, and worked closely with more experienced developers to continuously improve coding skills.",
            "Conducted testing of the frontend codebase to identify and address bugs and performance issues, and worked with more experienced developers to resolve more complex issues.",
            "Assisted in integrating frontend components with the application's backend infrastructure, using REST APIs and other technologies.",
            "Maintained an awareness of emerging trends and best practices in frontend development, and participated in learning and training opportunities to improve technical skills.",
            "Participated in code reviews and provided feedback to other developers, contributing to maintaining a high level of code quality across the entire project.Contributed to the development of a complex React application that served as a key component in HighRadius' suite of financial management software.",
            "Collaborated with more senior developers, product managers, and UX designers to understand business requirements and translate them into functional specifications and design documents.",
            "Implemented various frontend features and functionality using React, such as components, forms, and data visualization tools, under the guidance and mentorship of more experienced developers.",
            "Utilized Redux for state management, ensuring that the application's state was well-organized and easy to maintain.",
            "Wrote clean, well-documented code following established coding standards and best practices, and worked closely with more experienced developers to continuously improve coding skills.",
            "Conducted testing of the frontend codebase to identify and address bugs and performance issues, and worked with more experienced developers to resolve more complex issues.",
            "Assisted in integrating frontend components with the application's backend infrastructure, using REST APIs and other technologies.",
            "Maintained an awareness of emerging trends and best practices in frontend development, and participated in learning and training opportunities to improve technical skills.",
            "Participated in code reviews and provided feedback to other developers, contributing to maintaining a high level of code quality across the entire project.",
          ],
        },
      ],
    },

    projectSection: {
      description:
        "Links to some of my work can be found on <link>gouravsharma.netlify.app/work</link> and details can be provided upon request via a scheduled demo call.",
    },
  });
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
