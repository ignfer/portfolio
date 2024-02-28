const experienceJSON = {
  'experience':[
    {
      'id':'0',
      'imagepath':'./assets/images/portfolio.png',
      'cards':[
        {
          'path' : './assets/images/buddgy.png',
          'description' : 'Site overview'
        },{
          'path' : './assets/images/buddgy-demo-01.gif',
          'description' : 'Creating a new expense card'
        },{
          'path' : './assets/images/buddgy-demo-02.gif',
          'description' : 'Deleting an expense card'
        },{
          'path' : './assets/images/buddgy-demo-03.gif',
          'description' : 'Updating the amount of money'
        }
      ],
      'title':'Personal Web Portfolio',
      'description':'The site you are reading right now!',
      'badges':[
        'Frontend',
        'React',
        'Yarn',
        'Vite',
        'GitHub Pages'
      ],
      'modalRole':'React Frontend Developer - UI Designer',
      'modalDescription':[
        'Aiming to go beyond a traditional resume or portfolio, the main goal was to establish a digital hub which provides a centralized space where interested people like recruiters or colleagues, can explore my previous works, educational background, and recommendations from professionals I have collaborated with. So, I felt that the idea was a valuable project to settle and display my learning and control over React. With this project I gained hands-on experience working with conditional rendering, handling and creating valid JSON, creating react components and various react hooks',
        'The site creates a connection point in which you could see a more meaningful description or examples of my experience, given that we live in a fast-pace world I preferred a more dashboard approach, making all the info easily accesible and with no long transitions or scroll animations.',
        'The project is currently deployed on GitHub pages and was created with the Vite framework, It took me 6 months of developing on my free time after work or after college for the 0.0.1 version to be up and running and during those 6 months I came up with a Figma design and started the implementation from scratch and using vanilla CSS for the styles and the responsiveness. I improved my CSS skills creating a very modern and serious design with a consistent style and my own personal touch on every detail.',
        'In the future I am planning on adding a mark down component to make my life easier when adding new info, also I am working on a blog and a tech stack section, both will add to the main goal of creating a place to present my whole journey as a developer. Additionally I would like to introduce a Spanish translation and a light theme option relying on the react useContext hook.'
      ],
      'modalRepoRoute':'https://github.com/ignfer/portfolio.github.io'
    },{
      'id':'1',
      'imagepath':'./assets/images/buddgy.png',
      'cards':[
        {
          'path' : './assets/images/buddgy.png',
          'description' : 'Site overview'
        },{
          'path' : './assets/images/buddgy-demo-01.gif',
          'description' : 'Creating a new expense card'
        },{
          'path' : './assets/images/buddgy-demo-02.gif',
          'description' : 'Deleting an expense card'
        },{
          'path' : './assets/images/buddgy-demo-03.gif',
          'description' : 'Updating the amount of money'
        }
      ],
      'title':'Java Fullstack distributed app',
      'description':'Consisting of a Java Backend, a SOAP API and a web page created using JSP and Servlets, the goal was to create a webpage able to communicate tourist and activities on Uruguay.',
      'badges':[
        'FullStack',
        'Java',
        'ORM',
        'MySQL'
      ],
      'modalRole':'React Developer',
      'modalDescription':[
        'After building various useful and abarcative projects this was the perfect oportunity to use my experience working with React to create a common place in which I could upload all my work and create my own personal brand, to explain my journey as a developer and show my value as a developer.',
        'The design process started on Figma'
      ],
      'modalRepoRoute':'https://github.com/ignfer/portfolio.github.io',
    },{
      'id':'2',
      'imagepath':'./assets/images/buddgy.png',
      'cards':[
        {
          'path' : './assets/images/buddgy.png',
          'description' : 'Site overview'
        },{
          'path' : './assets/images/buddgy-demo-01.gif',
          'description' : 'Creating a new expense card'
        },{
          'path' : './assets/images/buddgy-demo-02.gif',
          'description' : 'Deleting an expense card'
        },{
          'path' : './assets/images/buddgy-demo-03.gif',
          'description' : 'Updating the amount of money'
        }
      ],
      'title':'Web Spending Tracker',
      'description':'A web project to keep track of your expenses in an organized and easily accessible cross platform way.',
      'badges':[
        'Frontend',
        'HTML',
        'CSS',
        'Java Script',
        'GitHub Pages'
      ],
      'modalRole':'Web Developer - UI Designer',
      'modalDescription':[
        'The motivation behind this project was to create a solution to easily visualize and create records when I buy products or pay services, also I have created a tag system to help the categorization of each expense and the fast recognition of the areas which my money goes.',
        'I started the project from scratch with a Figma design which I later translated into code creating all the styles from zero, with a heavy focus on responsive helping to the task of accesing the platform from a mobile device either for adding new expenses or just check existing ones.',
        'It has a dashboard approach making everything visible at all times, you can create new expense cards, each card have tags and each tag updates an expense history. You can also see the current amount of money you have and a dashboard with spending trends.(which is hard coded at least for now)',
        'The stack used was HTML, CSS, and JavaScript, the persistency is supported by the local storage of the browser. In the future I would like to add an english translation, and persistency on a relational database. Also the project is deployed on GitHub pages and is easily accesible from anywhere.'
      ],
      'modalRepoRoute':'https://github.com/ignfer/buddgy.github.io',
      'modalProjectRoute':'https://ignfer.github.io/buddgy.github.io/'
    }
  ]
};

export default experienceJSON;