export default {
    namespaced: true,
    state() {
        return {
            projects: {
                'freelance projects': [
                    {
                        title: 'Fire Station Open Day',
                        languages: ['Vue.Js', 'Vue Router', 'ApiRestful', 'Firebase', 'CSS'],
                        description: "A project made for the open day of the Marcq-en-Barœul's fire station (near the city Lille). The idea was that users scan the QR connection code at the entrance of the fire station to create an account first. Then to scan the QR codes of the questions located at the corresponding stands, inside the barrack. I wanted to make sure that the organizer could create a new activity, then modify or delete it afterwards, without asking me. By creating an activity, a QR code is automatically generated, thus linking the question with this QR code. The activity works like a quiz : there are a question and proposals. And if you answer correctly, you get a point. The application had to be responsive, because people were going to use their phone to scan the QR code. Some modifications have been made on this project so that you can have a better experience when using it",
                        url: 'https://portes-ouvertes-2022.netlify.app',
                        github: 'https://github.com/ParvaCamer/portes-ouvertes-2022'
                    },
                    {
                        title: 'Boy or Girl',
                        languages: ['HTML', 'CSS', 'JavaScript'],
                        description: 'Friends asked me to do this website to know the gender of their kid. So they asked for a timer until the expected date, a scratch card and animation behind the card when the timer is done.',
                        url: 'https://parvacamer.github.io/BoyOrGirl/',
                        github: 'https://github.com/ParvaCamer/BoyOrGirl'
                    }
                ],
                'individual projects': [
                    {
                        title: 'Wedding Sharing',
                        languages: ['Vue.Js', 'VueRouter', 'CSS', 'Firebase', 'ApiRestful', 'Vite', 'Encrypted data'],
                        description: "A website for storing and downloading images. Specialized in wedding theme. Admin can create space, add, delete or edit the images. Each space is protected. The administrator can give the rights to visitors to also add photos, or restrict them to downloading only. We were two for this project: <a href='https://github.com/KonisDesign'>Julien Devos</a> who took care of the design and CSS, and myself who follows me busy with the rest. If you have a problem with downloading, it's the CORS Policy that prevents you from doing so. I don't have a solution at the moment.",
                        url: 'https://wedding-sharing.netlify.app/',
                        github: 'https://github.com/ParvaCamer/wedding-sharing'
                    },
                    {
                        title: 'Weather Application',
                        languages: ['Vue.Js', 'ApiRestful', 'SASS'],
                        description: 'A simple weather application, with geolocation and data recovery system. We get information for the day in real time, as well as for the next 6 days. The city can be changed to access to new informations.',
                        url: 'https://parvacamer-weather-application.netlify.app/',
                        github: 'https://github.com/ParvaCamer/weather-app'
                    },
                    {
                        title: 'Password Generator',
                        languages: ['HTML', 'SCSS', 'JavaScript'],
                        description: 'A project to generate a random password',
                        url: 'https://parvacamer.github.io/password-generator/',
                        github: 'https://github.com/ParvaCamer/password-generator'
                    },
                    {
                        title: 'Hanged-Man Game',
                        languages: ['HTML', 'CSS', 'LESS', 'JavaScript'],
                        description: 'A hangman game with random generation of words',
                        url: 'https://parvacamer.github.io/hanged-man/',
                        github: 'https://github.com/ParvaCamer/hanged-man'
                    },
                    {
                        title: 'Tic-Tac-Toe',
                        languages: ['HTML', 'SCSS', 'JavaScript'],
                        description: 'A tic-tac-toe game. We can play a game against a friend, or against computer.',
                        url: 'https://parvacamer.github.io/tic-tac-toe/',
                        github: 'https://github.com/ParvaCamer/tic-tac-toe',
                    },
                    {
                        title: 'Word Counter',
                        languages: ['HTML', 'SCSS', 'JavaScript'],
                        description: 'A simple word and letter counter. I wanted to create it to use regex. Voice recognition has been added.',
                        url: 'https://parvacamer.github.io/word-counter/',
                        github: 'https://github.com/ParvaCamer/word-counter'
                    },
                    {
                        title: 'Calculator',
                        languages: ['HTML', 'SCSS', 'JavaScript'],
                        description: 'A simple application to use a calculator.',
                        url: 'https://parvacamer.github.io/calculator/',
                        github: 'https://github.com/ParvaCamer/calculator'
                    }
                ],
                'learning projects': [
                    {
                        title: 'First Project Vue.Js',
                        languages: ['HTML', 'CSS', 'JavaScript', 'Vue.Js'],
                        description: 'A project made with a VueJs course on Udemy. I had to create a simple turn-based game',
                        url: 'https://parvacamer.github.io/FirstProjectUdemy-Vue.Js/',
                        github: 'https://github.com/ParvaCamer/FirstProjectUdemy-Vue.Js'
                    },
                    {
                        title: 'Second Project Vue.Js',
                        languages: ['Vue.Js'],
                        description: 'A project made with a VueJs course on Udemy. This project was a realization of a resource storage. You can either consult them or add more resources',
                        url: 'https://second-project-udemy-vuejs.netlify.app/',
                        github: 'https://github.com/ParvaCamer/SecondProjectUdemy-Vue.Js'
                    },
                    {
                        title: 'Third Project Vue.Js',
                        languages: ['Vue.Js', 'Vue Router', 'Vuex'],
                        description: 'A project made with a VueJs course on Udemy. I had to create a simple online store',
                        url: 'https://third-project-udemy-vuejs.netlify.app/',
                        github: 'https://github.com/ParvaCamer/ThirdProjectUdemy-Vue.Js'
                    },
                    {
                        title: 'Main Project Vue.Js',
                        languages: ['Vue.Js', 'Vue Router', 'Vuex', 'Composition API', 'API Restful', 'Firebase'],
                        description: 'The last and main project with the VueJs course on Udemy. The objective was to be able to authenticate as a coach in order to be able to create a profile there. The visitor can therefore consult the information of each coach as well as contact them',
                        url: 'https://main-project-udemy-vuejs.netlify.app/',
                        github: 'https://github.com/ParvaCamer/MainProjectUdemy-Vue.Js'
                    }
                ],
                'bootcamp projects': [
                    {
                        title: 'Bank Application',
                        languages: ['HTML', 'Less', 'JavaScript'],
                        description: 'A website for a bank company. With account creation and data save in the local storage.',
                        url: 'https://parvacamer.github.io/m2i/Algorithmie/tp-banque/#',
                        github: 'https://github.com/ParvaCamer/m2i/tree/main/Algorithmie/tp-banque'
                    },
                    {
                        title: 'Improve a project',
                        languages: ['JavaScript'],
                        description: 'A project requested by my bootcamp OpenClassrooms. I had to rework and improve an existing project',
                        url: 'https://parvacamer.github.io/OpenClassroomsP8/',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP8'
                    },
                    {
                        title: 'Turn-based board game',
                        languages: ['HTML', 'CSS', 'JS'],
                        description: 'A project requested by my bootcamp OpenClassrooms. I had to create a turn-based board game with JavaScript',
                        url: 'https://parvacamer.github.io/OpenClassroomsP6/',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP6'
                    },
                    {
                        title: 'Quote Generator',
                        languages: ['HTML', 'CSS', 'JavaScript'],
                        description: 'A project requested by my bootcamp OpenClassrooms. I had to imagine a quote generator',
                        url: 'https://parvacamer.github.io/OpenClassroomsP5/',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP5'
                    },
                    {
                        title: 'Restaurants reviews website',
                        languages: ['Vue.Js', 'API Restful', 'CSS'],
                        description: `A project requested by my bootcamp OpenClassrooms. This project is the first I coded with Vue.js, I only changed the CSS for a better experience for you. I had to do my own restaurants reviews website.`,
                        url: 'https://github.com/ParvaCamer/OpenClassroomsP7',
                        github: 'https://github.com/ParvaCamer/OpenClassroomsP7'
                    },
                    {
                        title: "Movies' Festival",
                        languages: ['HTML', 'Bootstrap'],
                        description: 'A project requested by my school. I had to analyze the needs of a client for his film festival',
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
    },
    /* getters: {
        display: state => state.display
    },
    mutations: {
        updateStatus(state) {
            state.display = !state.display;
        },
    },
    actions: {
        toggleDisplay({ commit }) {
            commit('updateStatus')
        }
    } */
}
