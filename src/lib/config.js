import OpenAnimeMobile from './images/projects/openanime.png';
import SettleCoLogo from './images/projects/settleco_logo.png';
import IsolationLogo from './images/projects/isolation.png';

import memoji1 from '$lib/images/memoji/memoji1.png';
import memoji2 from '$lib/images/memoji/memoji3.png';
import memoji3 from '$lib/images/memoji/memoji4.png';
import memoji4 from '$lib/images/memoji/memoji2.png';
import memoji5 from '$lib/images/memoji/memoji5.png';
import memoji6 from '$lib/images/memoji/memoji6.png';

const CONFIG = {
    NAVBAR: [
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	],
    MEMOJI: [
        memoji1, 
        memoji2, 
        memoji3, 
        memoji4, 
        memoji5, 
        memoji6
    ],
    PROJECTS: [
		{
			year: '2020 - present',
			title: 'OpenAnime',
			description: 'OpenAnime is an open source anime platform that aims on community, security and speed. It provides some of the unique features that you will rarely see on an anime platform.',
			link: 'https://openani.me',
			image: OpenAnimeMobile,
			css: 'w-4/6 top-5'
		},
		{
			year: '2021 - 2022',
			title: 'SettleCo',
			description: 'SettleCo is a tiny development company with fully remote team working throughout Turkey, Izmir. Our main goal is to produce creative and innovative solutions.',
			link: 'https://settleco.net',
			image: SettleCoLogo,
			css: 'w-1/2'
		},
		{
			year: '2022 - 2022',
			title: 'Isolation',
			description: 'Isolation is a start page with some widgets to keep you focused.',
			link: '',
			image: IsolationLogo,
			css: 'w-3/4 rounded-2xl'
		}
	],
    EDUCATION: [
        {
            "name": "Ali Kaya Middle School",
            "location": "Izmir, Turkey",
            "start": "2017",
            "end": "2021",
            "description": "Ali Kaya Secondary School offers a quality learning experience in Karşıyaka with its Erasmus supported education that gives students an international perspective.",
            "link": ""
        },
        {
            "name": "Atakent Anotolian High School",
            "location": "Izmir, Turkey",
            "start": "2021",
            "end": "2025",
            "description": "I am currently studying at Atakent Anotolian High School, a well-established educational institution that offers a wide range of education to students. I am studying in the science department. I am also studying German as a second language.",
            "link": ""
        }
    ],
    FOOTER: [
        {
            "name": "Github",
            "link": "https://github.com/rexulec"
        },
        {
            "name": "Twitter",
            "link": "https://twitter.com/rexulec"
        },
        {
            "name": "Linkedin",
            "link": "https://www.linkedin.com/in/rexulec/"
        },
        {
            "name": "Instagram",
            "link": "https://www.instagram.com/rexulec/"
        }
    ]
}

export default CONFIG;