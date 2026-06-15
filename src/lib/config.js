import OpenAnimeMobile from './images/projects/openanime.png';
import SettleCoLogo from './images/projects/settleco_logo.png';
import IsolationLogo from './images/projects/isolation.png';
import FbalmunLogo from './images/projects/fbalmun.png';
import AbletonPatcherGUILogo from './images/projects/abletonpatchergui.png';
import DevFestLogo from './images/projects/devfest.png';
import QuarLogo from './images/projects/quar.png';

import memoji1 from '$lib/images/memoji/memoji1.png';
import memoji2 from '$lib/images/memoji/memoji3.png';
import memoji3 from '$lib/images/memoji/memoji4.png';
import memoji4 from '$lib/images/memoji/memoji2.png';
import memoji5 from '$lib/images/memoji/memoji5.png';
import memoji6 from '$lib/images/memoji/memoji6.png';

const CONFIG = {
    PROJECTS_RADIUS: 3,
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
    PROJECTS_MODE: 1,
    PROJECTS: [
        {
            year: '2020 - present',
            title: 'OpenAnime',
            job: 'Front-end Developer',
            description: 'OpenAnime is an open source anime platform that aims on community, security and speed. It provides some of the unique features that you will rarely see on an anime platform.',
            link: 'https://openani.me',
            image: OpenAnimeMobile,
            css: 'w-4/6 top-5 hover:-translate-y-3 transition-transform duration-300'
        },
        {
            year: '2025 - 2025',
            title: "DevFest'25 Izmir",
            job: 'Staff',
            description: 'Organized by the Google Developers Group (GDG), DevFest Izmir is the largest community-driven tech conference in Izmir and the Aegean region, bringing together passionate developers from around the globe.',
            link: 'https://devfest.gdgizmir.org/',
            linkText: 'Check it out',
            image: DevFestLogo,
            css: ''
        },
        {
            year: '2026',
            title: `Quar`,
            description: `Quar is a lightning-fast, privacy-focused QR code scanner designed for macOS.`,
            link: 'https://github.com/ReXulEc/quar',
            image: QuarLogo,
            ignoreLines: [6],
            mdlink: "https://raw.githubusercontent.com/ReXulEc/quar/refs/heads/main/README.md",
            css: 'w-2/3 drop-shadow-[0_0px_4px_rgba(255,255,255,0.1)] '
        },
        {
            year: '2025',
            title: 'Ableton Patcher GUI',
            description: 'An Open-Souce Implementation of the R2R Ableton Modification. All Versions above Live 9 are supported.',
            link: 'https://github.com/ReXulEc/abletonPatcherGUI',
            image: AbletonPatcherGUILogo,
            mdlink: "https://raw.githubusercontent.com/ReXulEc/abletonPatcherGUI/refs/heads/main/README.md",
            ignoreLines: [0],
            css: 'rounded-xl w-11/12 shadow-lg shadow-white/20'
        },
        {
            year: '2024 - 2024',
            title: `FBALMUN'24`,
            job: 'Head of IT',
            description: `FBALMUN'24 is the Second official session of Aliağa Fen Bilimleri Anatolian High School Model United Nations. The website includes a registration system, a blog and a gallery.`,
            link: '',
            image: FbalmunLogo,
            css: 'w-2/3'
        },
        {
            year: '2021 - 2022',
            title: 'SettleCo',
            job: 'Founder & Lead Developer',
            description: 'SettleCo is a tiny development company with fully remote team working throughout Turkey, Izmir. Our main goal is to produce creative and innovative solutions.',
            image: SettleCoLogo,
            link: '',
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
            "start": "2022",
            "end": "2026",
            "description": "I am currently studying at Atakent Anotolian High School, a well-established educational institution that offers a wide range of education to students. I am also studying German as a second language.",
            "link": ""
        }
    ],
    FOOTER: [
        {
            "name": "Email",
            "link": "mailto:business@mert.day",
            "value": "business@mert.day"
        },
        {
            "name": "Github",
            "link": "https://github.com/rexulec",
            "value": "github.com/rexulec"
        },

        {
            "name": "Linkedin",
            "link": "https://www.linkedin.com/in/rexulec/",
            "value": "linkedin.com/in/rexulec/"
        },
        {
            "name": "Instagram",
            "link": "https://www.instagram.com/rexulec/",
            "value": "@rexulec"
        }
    ]
}

export default CONFIG;