let posts = [
    {id: 1, message: 'Hello there!', likesCount: 0 },
    {id: 2, message: 'Its my first post!', likesCount: 23 }
]

let dialogs = [
    {id: 1, name: 'Marian'},
    {id: 2, name: 'Dioma'},
    {id: 3, name: 'Andrew'},
    {id: 4, name: 'Sergio'},
    {id: 5, name: 'Yarko'},
]

let messages = [
    {id: 1, message: 'Hello there'},
    {id: 2, message: 'qq'},
    {id: 3, message: 'Assalamualeikum'},
    {id: 4, message: 'XDD'},
    {id: 5, message: 'See ya'},
]

let state = {
    profilePage:{
        posts : [
            {id: 1, message: 'Hello there!', likesCount: 0 },
            {id: 2, message: 'Its my first post!', likesCount: 23 }
        ],
    },
    dialogsPage:{
        dialogs : [
            {id: 1, name: 'Marian'},
            {id: 2, name: 'Dioma'},
            {id: 3, name: 'Andrew'},
            {id: 4, name: 'Sergio'},
            {id: 5, name: 'Yarko'},
        ],
        messages : [
            {id: 1, message: 'Hello there'},
            {id: 2, message: 'qq'},
            {id: 3, message: 'Assalamualeikum'},
            {id: 4, message: 'XDD'},
            {id: 5, message: 'See ya'},
        ]
    }
}

export default state;