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
    ]
});