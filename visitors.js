const visitors = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Doctor Alex',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
];



(function (visitors) {

    var roomsArr = [];
    var guests_count = visitors.length;

        visitors.map( visitor => {

            visitor.rooms.map(value => {
                if(!Object.values(value)[0]){ 
                    roomsArr.push(Object.keys(value)[0]);
                }
            });
            
        }); 
    
    roomsArr.forEach( room =>  { 
        roomsArr[room] = (roomsArr[room] || 0)+1;
        if( roomsArr[room] == guests_count) {
            console.log(room);
        }
    });
    
})(visitors)