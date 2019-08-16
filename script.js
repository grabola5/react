'use strict';
var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: '../images/harry_potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowiadający o królu sawanny',
		img: '../images/król_lew.jpg'
	},
	{
		id: 3,
		title: 'Titanic',
		desc: 'Film o najsłynniejszym statku świata',
		img: '../images/titanic.jpg'
	},
	{
		id: 4,
		title: 'Green Book',
		desc: 'Film o wyjątkowej podróży',
		img: '../images/green_book.jpg'

	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key:movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
			React.createElement('img', {src: movie.img})
		);
});

var element = 
	React.createElement('div', {}, 
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement('ul', {}, moviesElements)
    	);

ReactDOM.render(element, document.getElementById('app'));

