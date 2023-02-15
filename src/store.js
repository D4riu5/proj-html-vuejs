import { reactive } from 'vue'

export const store = reactive({
    headerLinks: [
        {
            text: 'home'
        },
        {
            text: 'courses'
        },
        {
            text: 'instructors'
        },
        {
            text: 'events'
        },
        {
            text: 'pages'
        },
        {
            text: 'elements'
        },
    ],
    headerIcons: [
        {
            type: 'fa-magnifying-glass',
        },
        {
            type: 'fa-bag-shopping',
            items: 0,
        },
        {
            type: 'fa-bars',
        },
    ],
    jumboSlides: [
        {
            bg: '/h5-slide-1-background.jpg',
            title: 'Accelerate Your Career',
            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ab consectetur esse quos inventore culpa nobis quae rerum ad aliquam ab consectetur esse quos inventore culpa nobis quae rerum ad aliquam.',
            button: 'REGISTER NOW',
        },
        {
            bg: '/h5-slide-2-background.jpg',
            title: 'Leaders in Learning',
            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            button: 'PLAY',
        },
        {
            bg: '/h5-slide-3-background.jpg',
            title: 'Contemporary Ideas',
            paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ab consectetur esse quos inventore culpa nobis quae rerum ad aliquam ab consectetur esse quos inventore culpa nobis quae rerum ad aliquam.',
            button: 'REGISTER NOW',
        },
    ],
    categories: [
        {
            image: '/h5-custom-icon-1.png',
            text: 'Languages',
        },
        {
            image: '/h5-custom-icon-2.png',
            text: 'Software',
        },
        {
            image: '/h5-custom-icon-3.png',
            text: 'Business',
        },
        {
            image: '/h5-custom-icon-4.png',
            text: 'Chemistry',
        },
        {
            image: '/h5-custom-icon-5.png',
            text: 'Science',
        },
        {
            image: '/h5-custom-icon-6.png',
            text: 'DIY&Craft',
        },
    ],
    testimonialSlides: [
        {
            name: 'Joan Collins',
            image: 'testimonials-standard-1.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ea, ad vitae ab enim voluptatum illo dignissimos eveniet in dolorem voluptatibus voluptate neque pariatur fuga?',
            occupation: 'STUDENT',
            bg: '/h5-parallax-img-1.png'
        },
        {
            name: 'Neymar Jr.',
            image: 'testimonials-standard-2.png',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, laboriosam ex optio laborum ab nisi.',
            occupation: 'FOOTBALL PLAYER',
            bg: '/h5-parallax-img-2.png'
        },
        {
            name: 'Harry Potter',
            image: 'testimonials-standard-3.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat doloribus pariatur obcaecati amet beatae iste illum omnis dolores velit distinctio repudiandae, mollitia ex quisquam quasi iure. Non sit voluptate exercitationem cumque quod perspiciatis! Nobis autem quaerat enim odit quo.',
            occupation: 'AUROR',
            bg: '/h5-parallax-img-3.png'
        },
        {
            name: 'Squall Leonhart',
            image: 'testimonials-standard-4.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolores mollitia accusantium ea vel consequatur vitae molestiae quo provident eligendi illo eos. Ipsa vitae quo doloribus sunt repellat expedita autem.',
            occupation: 'S.E.E.D',
            bg: '/h5-parallax-img-4.png'
        },
        {
            name: 'Geralt of Rivia',
            image: 'testimonials-standard-5.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            occupation: 'WITCHER',
            bg: '/h5-parallax-img-5.png'
        },
    ],
    infos: [
        {
            title: 'What We Do',
            header: 'Learning Possibilities',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt ',
            image: '/h12-tabs-icon-1.png',
        },
        {
            title: 'Degree Programme',
            header: 'Inspiring Minds',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt ',
            image: '/h12-tabs-icon-2.png',
        },
        {
            title: 'Career Achievements',
            header: 'Investing in Knowledge',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt ',
            image: '/h12-tabs-icon-3.png',
        },
        {
            title: 'Personal Managment',
            header: 'Secure Your Future',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt ',
            image: '/h12-tabs-icon-4.png',
        },
        {
            title: 'Steps To Success',
            header: 'Where Learning Begins',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt ',
            image: '/h12-tabs-icon-5.png',
        },
        {
            title: 'Knowledge Transfer',
            header: 'Knowledge is Power',
            description: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt ',
            image: '/h12-tabs-icon-6.png',
        },
    ],
    courses: [
        {
            title: "Business English",
            teacher: 'Preston Marshall',
            price: '$20',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '35',
            tag: 'LANGUAGES',
            image: '/course-1-f-img.jpg',
        },
        {
            title: "Social Computing",
            teacher: 'David Sanders',
            price: 'FREE',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '20',
            tag: 'PROGRAMMING',
            image: '/course-2-f-img.jpg',
        },
        {
            title: "Learn Spanish",
            teacher: 'Jennie King',
            price: '$20',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '1',
            tag: 'LANGUAGES',
            image: '/course-3-f-img.jpg',
        },
        {
            title: "Android Developer",
            teacher: 'David Sanders',
            price: 'FREE',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '0',
            tag: 'PROGRAMMING',
            image: '/course-4-f-img.jpg',
        },
        {
            title: "Web Designing",
            teacher: 'Jennifer Powell',
            price: '$10',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '1',
            tag: 'PROGRAMMING',
            image: '/course-5-f-img.jpg',
        },
        {
            title: "Financial Modeling",
            teacher: 'Edward Bowman',
            price: '$40',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '1',
            tag: 'BUSINESS',
            image: '/course-6-f-img.jpg',
        },
        {
            title: "Academic English",
            teacher: 'Dave Robbins',
            price: 'FREE',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '55',
            tag: 'LANGUAGES',
            image: '/course-7-f-img.jpg',
        },
        {
            title: "Modern Psychology",
            teacher: 'Kathryn Webb',
            price: '$60',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '15',
            tag: 'BUSINESS',
            image: '/course-8-f-img.jpg',
        },
        {
            title: "Basic Marketing",
            teacher: 'Edward Bowman',
            price: '$40',
            description: 'Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.',
            students: '0',
            tag: 'BUSINESS',
            image: '/course-9-f-img.jpg',
        },
    ],
    sponsors: [
        {
            image: '/h5-client-1.png',
            title: 'iAcademy'
        },
        {
            image: '/h5-client-2.png',
            title: 'Study Central'
        },
        {
            image: '/h5-client-3.png',
            title: 'Educator'
        },
        {
            image: '/h5-client-4.png',
            title: 'Scholar University'
        },
    ],
    
});