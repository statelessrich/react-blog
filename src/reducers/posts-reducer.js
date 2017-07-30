const initialState = [
    {
        title: `Enough is Enough`,
        content: `We can't allow this to continue.
        Enough is enough. Time to put our foot down and say "No. Not in my backyard!"
        Join me at the state house this Saturday @ 1pm.`,
        date: 'Wed‎, Aug ‎2, ‎2017‎ ‎08‎:21‎ ‎AM'
    },
    {
        title: `I've had it!`,
        content: `This is UNBELIEVABLE! Can you believe something like this has happened
        in OUR backyard? Do they expect us to take this lying down? No way. It's time
        for us to take a stand. It's time we let them know who
        we are, and that we're not gonna take it anymore.`,
        date: 'Tue, Aug‎ 1‎, ‎2017‎ ‎08‎:‎05‎ PM'
    },
    {
        title: `Can you believe it?!`,
        content: `Well, neither can I! Never in my life have I thought I'd see something
        like this happen in my own backyard. I don't even have the words to describe
        it. I haven't been this angry since yesterday's post.`,
        date: 'Tue, ‎Aug ‎1‎, ‎2017‎ ‎01‎:37‎ PM'
    },
    {
        title: `Not in my backyard`,
        content: `We just can't let this happen. Something has to be done. Do they think
        we're so stupid? That we'll just let them walk all over us? It's time for
        action!`,
        date: 'Mon, Jul 31‎, ‎2017‎ ‎10‎:‎00‎ ‎AM'
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            return [
                Object.assign({}, action.post),
                ...state
            ];
        default:
            return state;
    }
};
