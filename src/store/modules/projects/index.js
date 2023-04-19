export default {
    namespaced: true,
    state() {
        return {
            projects: {
                'freelance projects': [
                    {
                        title: 'Fire Station Open Day',
                        languages: ['VueJs', 'Vue-Router', 'ApiRestful', 'Firebase', 'CSS'],
                        description: "A project made for the open day of the Marcq-en-Barœul's fire station (near the city Lille). The idea was that users scan the QR connection code at the entrance of the fire station to create an account first. Then to scan the QR codes of the questions located at the corresponding stands, inside the barrack. I wanted to make sure that the organizer could create a new activity, then modify or delete it afterwards, without asking me. By creating an activity, a QR code is automatically generated, thus linking the question with this QR code. The activity works like a quiz : there are a question and proposals. And if you answer correctly, you get a point. The application had to be responsive, because people were going to use their phone to scan the QR code. Some modifications have been made on this project so that you can have a better experience when using it",
                        url: 'https://portes-ouvertes-2022.netlify.app',
                        github: 'https://github.com/ParvaCamer/portes-ouvertes-2022'
                    },
                    {
                        title: 'Boy or Girl',
                        languages: ['HTML', 'CSS', 'JavaScript'],
                        description: 'My close companions recently requested that I undertake the task of constructing a website to determine the gender of their upcoming child. To achieve this goal, they specifically requested several features, namely a timer that counts down until the expected delivery date, a scratch card that can be used to reveal the gender, and a dynamic animation that plays behind the card upon the expiration of the timer.',
                        url: 'https://parvacamer.github.io/BoyOrGirl/',
                        github: 'https://github.com/ParvaCamer/BoyOrGirl'
                    }
                ],
                'individual projects': [
                    {
                        title: 'Wedding Sharing',
                        languages: ['VueJs', 'Vue-Router', 'CSS', 'Firebase', 'ApiRestful', 'Vite', 'Encrypted-Data'],
                        description: "A website for storing and downloading images. Specialized in wedding theme. Admin can create space, add, delete or edit the images. Each space is protected. The administrator can give the rights to visitors to also add photos, or restrict them to downloading only. We were two for this project: <a href='https://github.com/KonisDesign'>Julien Devos</a> who took care of the design and CSS, and myself who follows me busy with the rest. If you have a problem with downloading, it's the CORS Policy that prevents you from doing so. I don't have a solution at the moment.",
                        url: 'https://wedding-sharing.netlify.app/',
                        github: 'https://github.com/ParvaCamer/wedding-sharing'
                    },
                    {
                        title: 'Pokemon API',
                        languages: ['React', 'SCSS'],
                        description: 'My initial foray into React development involved utilizing the PokeAPI API as a primary data source. The primary objective of the project was to showcase a selected pokemon and its corresponding details through a seamless and visually appealing display.',
                        url: 'https://parvacamer-poke-api.netlify.app/',
                        github: 'https://github.com/ParvaCamer/poke-api'
                    },
                    {
                        title: 'Weather Application',
                        languages: ['VueJs', 'ApiRestful', 'SCSS'],
                        description: 'I had the opportunity to create a user-friendly weather application that boasts an array of noteworthy features, including geolocation and an efficient data recovery system. This application not only delivers real-time weather information for the present day, but also provides users with a six-day forecast. Additionally, users can modify the selected city to obtain fresh and relevant information.',
                        url: 'https://parvacamer-weather-application.netlify.app/',
                        github: 'https://github.com/ParvaCamer/weather-app'
                    },
                    {
                        title: 'Password Generator',
                        languages: ['HTML', 'SCSS', 'JavaScript'],
                        description: 'I embarked on an exciting project that aimed to generate secure and unique passwords at random. This password generator provides users with a wide range of customization options, including the ability to select the desired password length, incorporate uppercase characters, symbols, and numbers. By empowering users to tailor the generated password to their specific requirements, this project enhances the security and usability of password management systems.',
                        url: 'https://parvacamer.github.io/password-generator/',
                        github: 'https://github.com/ParvaCamer/password-generator'
                    },
                    {
                        title: 'Hanged-Man Game',
                        languages: ['HTML', 'CSS', 'Less', 'JavaScript'],
                        description: 'I took on the challenge of developing a captivating and interactive hangman game that features randomly generated words to keep players engaged and entertained. With a dynamic and constantly evolving word selection system, players can enjoy a unique experience every time they play, making this game an excellent choice for anyone seeking an entertaining and challenging way to pass the time.',
                        url: 'https://parvacamer.github.io/hanged-man/',
                        github: 'https://github.com/ParvaCamer/hanged-man'
                    },
                    {
                        title: 'Tic-Tac-Toe',
                        languages: ['HTML', 'SCSS', 'JavaScript'],
                        description: 'I had the pleasure of creating a classic tic-tac-toe game that offers players multiple gameplay options. This exciting game can be played either against a friend, providing a fun and interactive way to spend time with others, or against the computer for a challenging solo experience. With its easy-to-use interface and customizable gameplay settings, this tic-tac-toe game is sure to provide hours of entertainment for players of all skill levels.',
                        url: 'https://parvacamer.github.io/tic-tac-toe/',
                        github: 'https://github.com/ParvaCamer/tic-tac-toe',
                    },
                    {
                        title: 'Word Counter',
                        languages: ['HTML', 'SCSS', 'JavaScript'],
                        description: 'In an effort to enhance my programming skills and further explore the vast potential of regex, I embarked on a project to create a simplistic yet efficient word and letter counter. As an added feature, I also integrated voice recognition technology, which elevates the user experience and enables users to obtain accurate and real-time word and letter counts with ease. With this powerful tool at their disposal, users can quickly and accurately analyze and manipulate text data for a wide range of applications.',
                        url: 'https://parvacamer.github.io/word-counter/',
                        github: 'https://github.com/ParvaCamer/word-counter'
                    },
                    {
                        title: 'Calculator',
                        languages: ['HTML', 'SCSS', 'JavaScript'],
                        description: 'I had the pleasure of designing and developing a user-friendly and efficient application that offers a comprehensive and intuitive calculator experience. This powerful tool provides users with all the essential arithmetic functions, including addition, subtraction, multiplication, and division, and can handle both basic and advanced calculations with ease. With its sleek and modern interface, this simple yet powerful calculator application is a must-have for anyone seeking a quick and reliable way to perform mathematical calculations.',
                        url: 'https://parvacamer.github.io/calculator/',
                        github: 'https://github.com/ParvaCamer/calculator'
                    }
                ],
                'learning projects': [
                    {
                        title: 'First Project VueJs',
                        languages: ['HTML', 'CSS', 'JavaScript', 'VueJs'],
                        description: 'A project made with a VueJs course on Udemy. I had to create a simple turn-based game',
                        url: 'https://parvacamer.github.io/FirstProjectUdemy-Vue.Js/',
                        github: 'https://github.com/ParvaCamer/FirstProjectUdemy-Vue.Js'
                    },
                    {
                        title: 'Second Project VueJs',
                        languages: ['VueJs'],
                        description: 'A project made with a VueJs course on Udemy. This project was a realization of a resource storage. You can either consult them or add more resources',
                        url: 'https://second-project-udemy-vuejs.netlify.app/',
                        github: 'https://github.com/ParvaCamer/SecondProjectUdemy-Vue.Js'
                    },
                    {
                        title: 'Third Project VueJs',
                        languages: ['VueJs', 'Vue-Router', 'Vuex'],
                        description: 'A project made with a VueJs course on Udemy. I had to create a simple online store',
                        url: 'https://third-project-udemy-vuejs.netlify.app/',
                        github: 'https://github.com/ParvaCamer/ThirdProjectUdemy-Vue.Js'
                    },
                    {
                        title: 'Main Project VueJs',
                        languages: ['VueJs', 'Vue-Router', 'Vuex', 'Composition-API', 'ApiRestful', 'Firebase'],
                        description: 'The last and main project with the VueJs course on Udemy. The objective was to be able to authenticate as a coach in order to be able to create a profile there. The visitor can therefore consult the information of each coach as well as contact them',
                        url: 'https://main-project-udemy-vuejs.netlify.app/',
                        github: 'https://github.com/ParvaCamer/MainProjectUdemy-Vue.Js'
                    },
                    {
                        title: 'First Project Pinia',
                        languages: ['VueJs', 'Pinia', 'Vite', 'CSS'],
                        description: 'The project I worked on was a todo-list application built using Vue.js and Pinia. This was primarily a learning exercise aimed at helping me gain experience with Pinia for state management in Vue.js applications. The app itself allowed users to add, delete, and favorite tasks. It was designed to be simple and intuitive, with dynamic updates based on user actions like sorting tasks by favorites or deleting tasks.',
                        url: 'https://first-project-pinia.netlify.app/',
                        github: 'https://github.com/ParvaCamer/FirstProject-Pinia'
                    }
                ],
                'projects for my professional certificates': [
                    {
                        title: 'Bank Application',
                        languages: ['HTML', 'Less', 'JavaScript'],
                        description: 'As part of my training with the esteemed M2i formation bootcamp, I was tasked with the creation of a dynamic and responsive website for a leading bank company. Furthermore, I also implemented a data storage system utilizing local storage, ensuring that user information is safeguarded and readily accessible whenever required. With its seamless user interface and robust functionality, this website is a testament to my commitment to excellence and my unwavering dedication to producing top-tier results.',
                        url: 'https://parvacamer.github.io/m2i/Algorithmie/tp-banque/#',
                        github: 'https://github.com/ParvaCamer/m2i/tree/main/Algorithmie/tp-banque'
                    },
                    {
                        title: 'Restaurants reviews website',
                        languages: ['VueJs', 'ApiRestful', 'CSS'],
                        description: `As part of my intensive and dynamic training program with OpenClassrooms bootcamp, I was given the exciting opportunity to dive into the world of VueJs and put my newly acquired skills to the test in a real-world project. This project marked a significant milestone in my journey as a programmer, as it challenged me to create a fully functional and user-friendly restaurants review website from scratch. While I focused primarily on enhancing the visual aesthetics and user experience of the site through CSS modifications, I was also tasked with implementing a wide range of features and functionalities to ensure that the site is both engaging and informative. Through my hard work and dedication, I was able to successfully complete this project and gain valuable insights into the power and versatility of VueJs as a programming language.`,
                        url: 'https://github.com/ParvaCamer/OpenClassroomsP7',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP7'
                    },
                    {
                        title: 'Improve a project',
                        languages: ['JavaScript'],
                        description: 'As part of my rigorous and comprehensive training program with OpenClassrooms bootcamp, I was tasked with taking an existing project and elevating it to new heights through a thorough and methodical process of reworking and improvement. This project demanded a high level of skill and attention to detail, as I was required to assess and evaluate the strengths and weaknesses of the original project, identify areas for enhancement, and implement a wide range of modifications to optimize the user experience and streamline functionality. Through my dedication and perseverance, I was able to successfully transform this project into a polished and refined product that meets the highest standards of quality and excellence.',
                        url: 'https://parvacamer.github.io/OpenClassroomsP8/',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP8'
                    },
                    {
                        title: 'Turn-based board game',
                        languages: ['HTML', 'CSS', 'JavaScript'],
                        description: 'As part of my intensive and rewarding training program with OpenClassrooms bootcamp, I was tasked with designing and developing an engaging and immersive turn-based board game utilizing the power of JavaScript. This exciting and challenging project required me to draw on a diverse range of skills and expertise, from conceptualizing the game\'s core mechanics and gameplay elements to implementing advanced algorithms and data structures to ensure smooth and seamless performance. Through careful planning and meticulous execution, I was able to deliver a top-tier board game experience that captivates players and showcases my passion for programming and game design.',
                        url: 'https://parvacamer.github.io/OpenClassroomsP6/',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP6'
                    },
                    {
                        title: 'Quote Generator',
                        languages: ['HTML', 'Bootstrap', 'JavaScript'],
                        description: 'During my beginner-level training with OpenClassrooms bootcamp, I was tasked with creating a quote generator. This project challenged me to think creatively and apply my newfound skills in programming to create a user-friendly tool that generates random quotes on various topics. I learned a lot from this project and was proud to see it come to life.',
                        url: 'https://parvacamer.github.io/OpenClassroomsP5/',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP5'
                    },
                    {
                        title: "Movies' Festival",
                        languages: ['HTML', 'Bootstrap'],
                        description: 'For a school project, I was asked to help a client plan their film festival. I had to research different aspects of film festivals like the movies, the place, and how to tell people about it. I talked to the client to understand what they wanted, and I gave them some ideas to make it better. I learned a lot about planning events and making sure everything runs smoothly.',
                        url: 'https://parvacamer.github.io/OpenClassroomsP3/',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP3'
                    }
                ]
                /* {
                        title: '',
                        languages: [],
                        description: '',
                        url: '',
                        github: ''
                    } */
            },
        }
    }
}
