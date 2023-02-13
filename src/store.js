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
    ]
});