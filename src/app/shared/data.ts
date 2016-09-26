const PRESENT: Date = void(0);

export const RESUME = {
  'profile': {
    'name': {
      'first_name': 'Nathan',
      'last_name': 'Fang'
    },
    'intro': [
      `I am passionate about cutting-edge web technologies and aesthetic design.
       I love researching, discovering, and sharing.`,
      `I am able to handle most aspects in a development life cycle from scoping,
       design, development, deployment, to maintenance. I especially enjoy doing
       UX design, performance tuning, and building scalable and extendable front-end
       and back-end architecture.`
    ],
    'contacts': {
      'email': {
        'text': 'nathan.fang@icloud.com',
        'href': 'mailto:nathan.fang@icloud.com'
      },
      'phone': {
        'text': '+61 4 0317 2304',
        'href': 'tel:+61403172304'
      },
      'linkedin': {
        'text': 'linkedin.com/in/nathanfang',
        'href': 'https://www.linkedin.com/in/nathanfang'
      },
      'github': {
        'text': 'github.com/nfang',
        'href': 'https://github.com/nfang'
      }
    }
  },
  'experience': [
    {
      'company': 'LMI Group',
      'position': 'Senior Analyst Programmer',
      'location': 'Melbourne',
      'period': {
        'from': new Date(2016, 2, 21),
        'to': PRESENT
      },
      'description': ``
    },
    {
      'company': 'Letsface',
      'position': 'Senior Front-End Engineer',
      'location': 'Shanghai',
      'period': {
        'from': new Date(2014, 2, 17),
        'to': new Date(2015, 10, 11)
      },
      'description': `
        Responsible for developing interactive visual products and SaaS platform.
        Advised on UX design and web security.
      `
    },
    {
      'company': 'LMI Group',
      'position': 'Senior Analyst Programmer',
      'location': 'Melbourne',
      'period': {
        'from': new Date(2011, 0, 6),
        'to': new Date(2014, 1, 28)
      },
      'description': `
        Responsible for designing and developing the company's flagship products.
        Delivered reusable front-end and back-end components. Advised on UX design,
        web security and social media.
      `
    },
    {
      'company': 'Monash University',
      'position': 'Sessional Tutor',
      'location': 'Melbourne',
      'period': {
        'from': new Date(2010, 2, 1),
        'to': new Date(2012, 5, 30)
      },
      'description': `
        Teaching Component Technology, Handheld Application and Operating System,
        Web System.
      `
    },
    {
      'company': '',
      'position': 'Freelance Developer',
      'location': 'Worldwide',
      'period': {
        'from': new Date(2009, 1, 1),
        'to': PRESENT
      },
      'description': `
        Working on various kinds of projects, including web design & development,
        desktop application development, and IT consulting.
      `
    },
    {
      'company': 'Always Intelligence Co. Ltd',
      'position': 'Software Engineer',
      'location': 'Shanghai',
      'period': {
        'from': new Date(2008, 6, 11),
        'to': new Date(2009, 0, 25)
      },
      'description': `
        Responsible for application framework development and requirement analysis.
      `
    }
  ],
  'expertise': [
    {
      'skill': 'JavaScript, ECMAScript 6',
      'level': '85'
    },
    {
      'skill': 'Angular',
      'level': '90'
    },
    {
      'skill': 'CSS 3, SASS, LESS',
      'level': '90'
    },
    {
      'skill': 'Angular Material, Bootstrap',
      'level': '80'
    },
    {
      'skill': 'HTML 5',
      'level': '80'
    },
    {
      'skill': '.NET platform, ASP.NET, WPF',
      'level': '70'
    },
    {
      'skill': 'Git, Continuous Integration',
      'level': '80'
    }
  ],
  'education': [
    {
      'institution': 'Monash University',
      'degree': 'Master of Information Technology Professional',
      'period': {
        'from': new Date(2009, 2, 2),
        'to': new Date(2010, 11, 14)
      },
      'description': `
        Specialised in Distributed and Mobile Systems, Internet and Web Development,
        Security (GPA: 3.56 / 4, WAM: 82.88, est. top ~3%).
      `
    },
    {
      'institution': 'Shanghai University',
      'degree': 'Bachelor of Management',
      'period': {
        'from': new Date(2004, 8, 1),
        'to': new Date(2008, 5, 30)
      },
      'description': `
        Specialised in Information Management and Information System (GPA: 3.54 / 4).
      `
    }
  ],
  'portfolio': [
    {
      'name': 'Haru - daily task manager',
      'date': new Date(2016, 5, 20),
      'link': 'https://haruapp.surge.sh',
      'technologies': 'Angular 2, Material Design, ES6',
      'description': `A daily task manager.`
    },
    {
      'name': 'LuckyDraw for Piaget',
      'date': new Date(2015, 4, 12),
      'link': 'http://keno-demo.rubik-media.surge.sh',
      'technologies': 'JavaScript, CSS3 animation, HTML5',
      'description': `
        A web app that picks winners from all attendees of a Piaget
        product launch event.
      `
    },
    {
      'name': 'Kerry Centre NYE wish wall',
      'date': new Date(2014, 11, 31),
      'link': 'http://kc.ww.surge.sh',
      'technologies': 'jQuery, CSS3 animation',
      'description': `
        An interactive visual product that lets people write New Year wishes
        on tablets, and projects them to an LED screen.
      `
    },
    {
      'name': 'LMI PolicyComparison',
      'date': new Date(2013, 8, 24),
      'link': 'http://policycomparison.com',
      'technologies': 'ASP.NET, C#, jQuery, LESS',
      'description': `
        A web-based service that provides assistance with selling insurance
        products, compliance requirements, regulatory training, knowledge management
        and more.
      `
    }
  ]
};
