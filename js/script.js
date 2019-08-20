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

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		)
	},
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
			)
		},
});

var MovieImg = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired
	},
	render: function() {
		return (
			React.createElement('img', {src: this.props.img})
		)
	},
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieDescription, {desc: this.props.movie.desc}),
			React.createElement(MovieImg, {img: this.props.movie.img})
		)
		)
	}
});

var moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key:movie.id, movie: movie},
		);
});

var MovieList = 
		React.createElement('div', {},
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement('ul', {}, moviesElements),
    );

ReactDOM.render(MovieList, document.getElementById('app'));

