
/**
 * @imports
 */
import { getAll, detailsAll } from '../src/projects-utils.js';
import List from '../src/List.js';

/**
 * Handles main HTTP process.
 * 
 * @param Request   request
 * @param Any       recieved
 * @param Function  next
 * 
 * @return object
 */
export default async (request, recieved, next) => {
    if (next.pathname) {
        return next();
    }

    const featuredProjects = detailsAll(getAll(), false).filter(a => (a.categories || []).includes('Featured'));
    featuredProjects.forEach(p => {
        p.meta = [
            {title: 'Tags', desc: `#${p.tags.join(', #')}`},
            {title: 'License', desc: 'MIT'},
        ];
    });

    const sections = [{
        header: 'We work on low-abstraction tooling and potential web standards that make your code more native, universal, stable and future-proof.',
        footer: '',
        name: 'tooling',
        icon: 'braces',
        graphic: '/img/illus/tooling/dev.fw.png',
        title: 'Tooling',
        desc: '<b>WebQit Tooling</b> is an obsessive focus on new methodologies that let you do your magic using conventional paradigms and less engineering. You end up banking more on native technologies and less on abstractions.',
        highlights: [
            {icon: 'code', content: '<b>Frontend</b> - find tools that let you author the UI with no more than HTML5, CSS3 and ES6+.',},
            {icon: 'braces', content: '<b>Backend</b> - find tools that let you create powerful backends with half the engineering.'},
            {icon: 'shuffle', content: '<b>Fullstack</b> - find tools that let you use the same code across all layers of your application stack.',},
            {icon: 'arrow-return-right', content: 'End up with less code! Succeed with less!'},
        ],
        featured: featuredProjects,
    }, {
        header: 'We work on the most streamlined way yet to provision the most native apps with the cloud that\'s purpose-built for web-native development.',
        footer: '',
        name: 'cloud',
        icon: 'cloud',
        graphic: '/img/illus/cloud/images(35).fw.png',
        title: 'Cloud',
        desc: '<b>WebQit Cloud</b> is the easiest way to run your web-native backends; designed to further enrich your experience by helping you manage all the concerns and workloads of an app in production.',
        highlights: [
            {icon: 'arrow-down-up', content: '<b>Instant APIs</b> - use instant APIs for User Auth, Database and Storage.'},
            {icon: 'cloud-upload', content: '<b>Application deployment</b> - deploy apps to production faster; scale to your imagination.'},
            {icon: 'controller', content: '<b>Minimalistic and intuitive dashboards</b> - stay in control with fewer clicks - even on the go.'},
            {icon: 'arrow-return-right', content: 'Build in a weekend, scale to millions.'},
        ],
        featured: [{
            icon: 'app-indicator',
            name: 'platform',
            shortTitle: 'Webflo Cloud',
            title: 'Webflo Cloud',
            desc: 'Instant deployment platform for Webflo apps. A robust infrastructure for when you\'re scaling by the day; fully managed to keep you focused and your apps healthy. Webflo Cloud is the most-delightful way to ship and iterate and scale!',
            desc2: 'Just push code to deploy! Connect multiple repos to multiple locations of your app to empower your distributed teams. Stay in control with an intuitive dashboard.',
            meta: [
                {title: 'Pricing', desc: 'Free to start'},
                {title: 'Status', desc: 'Coming soon'},
            ],
            cta: 'Be on the waitlist',
            ctaRef: '/cloud',
            //ctaIsAlt: true,
        }, {
            icon: 'layers',
            name: 'database',
            shortTitle: 'Objective DB',
            title: 'Objective DB',
            desc: 'Managed cloud database with native Objective SQL. Objective DB is built for the simplicity and developer experience that Objective SQL brings, and ofcourse, the scale, speed and reliability you\'d expect!',
            desc2: 'Provision a database in one click and get instant data APIs for your app! Speak the same Objective SQL as with when you host your DB locally. Reach for your dashboard and unlock a whole new experience.',
            meta: [
                {title: 'Pricing', desc: 'Free to start'},
                {title: 'Status', desc: 'Coming soon'},
            ],
            cta: 'Be on the waitlist',
            ctaRef: '/cloud',
            //ctaIsAlt: true,
        }],
    }, {
        header: 'We work in the bigger picture to help the community bank more on native web technologies and less on abstractions.',
        footer: '',
        name: 'community',
        icon: 'flag',
        graphic: '/img/cloud-itls-image-best-approach.png',
        title: 'Community',
        desc: '<b>WebQit community</b> is a focused set of initiatives for recognizing community projects that explore new possibilities on the web platform, and for facilitating community uptake of native web technologies.',
        highlights: [
            {icon: 'person-check', content: 'Learn or showcase your web-native skills and get recognized.'},
            {icon: 'heart', content: 'Offer help or get help in the community with web-native development.'},
            {icon: 'dice-3', content: 'Innovate around native technologies and explore new ways to succeed with them and get community support for your work.'},
            {icon: 'arrow-return-right', content: 'Leverage the support system for web-native development!'},
        ],
        featured: [/**{
            icon: 'flag',
            name: 'webqit',
            shortTitle: 'WebQit',
            title: 'WebQit Community',
            desc: 'WebQit community for Dev success.',
            desc2: 'The best place to ask questions and provide feedback on your WebQit experience.',
            meta: [
                {title: 'OOHTML', desc: `<a href="https://github.com/webqit/oohtml/discussions">Github Discussions</a>, <a href="https://github.com/webqit/oohtml/issues">Github Issues</a>`},
                //{title: 'Observer', desc: `<a href="https://github.com/webqit/observer/discussions">Github Discussions</a>, <a href="https://github.com/webqit/observer/issues">Github Issues</a>`},
                //{title: 'Subscript', desc: `<a href="https://github.com/webqit/subscript/discussions">Github Discussions</a>, <a href="https://github.com/webqit/subscript/issues">Github Issues</a>`},
            ],
            cta: 'Join a project community below',
            ctaRef: '/#community',
            ctaIsAlt: true,
        }, */{
            icon: 'flag',
            name: 'web-native',
            shortTitle: 'Web-Native CG',
            title: 'Web-Native (W3C) Community Group',
            desc: 'The Web-Native Community Group at W3C. Web-Native is a unique way to contribute to web standardization and facilitate community uptake of web technologies. You\'re welcome in!',
            desc2: 'Join Web-Native and help implement strategies and community work with a global impact. Help bridge the divide between native technologies and the developer community.',
            meta: [
                {title: '...', desc: '<a  href="https://w3.org/community/web-native">Learn more about Web-Native CG</a>'},
            ],
            cta: 'Join Web-Native',
            ctaRef: 'https://w3.org/community/web-native/join',
        }],
    },];

    return {
        title: 'The WebQit Project',
        sections,
    }
};

/**
 * Creates and configures the rendering window.
 * 
 * @param Request   request
 * @param Object    data
 * @param Function  next
 * 
 * @return window
 */
export async function render(request, data, next) {
    if (!next.pathname) {
        data.sections.forEach(s => {
            s.featured = List.create(s.featured.map((item, i) => ({active: i === 0, overflowCollapsed: false, ...item})));
        });
    }
    return next(data);
}
