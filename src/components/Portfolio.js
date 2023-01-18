//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
	{
		id: 0,
		title: "MyGameList",
		languages: "react, jsx, css, js",
		packages: "apollo-server-express, bcryptjs, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, concurrently",
		image: "/img/mygamelist.png",
		description: "Search up video game titles, rate them (beta), and save them to your account to keep track of what you've played!",
		repo: "https://github.com/JonaThicke274/mygamelist",
		live: "https://djt-mygamelist.herokuapp.com/",
	},
	{
		id: 1,
		title: "DeepThoughts",
		languages: "html, react, jsx, css, js",
		packages: "apollo-server-express, bcryptjs, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, concurrently",
		image: "/img/deepthoughts.png",
		description: "Sample of a social networking application to demonstrate the power and utility of React!",
		repo: "https://github.com/JonaThicke274/deep-thoughts",
		live: "https://jonathicke-deep-thoughts.herokuapp.com/",
	},
	{
		id: 2,
		title: "Cinematic Spirits",
		languages: "html, css, js",
		packages: "html, css, js",
		image: "/img/movienight.png",
		description: "Looking for movie and/or a drink to pair with said movie? Look no further as Cinematic Spirits has got you covered! Search up a movie and get a paired cocktail; can't decide ona movie, we can provide you one randomly (with a paired drink of course)!",
		live: "https://jonathicke274.github.io/movie-night//",
		repo: "https://github.com/JonaThicke274/movie-night",
	},
	{
		id: 3,
		title: "Tech Blog",
		languages: "html, handlebars, js",
		packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, mysql2, sequelize",
		image: "/img/techblog.png",
		description: "Make blog posts about tech and other related topics! Comment and reply to other blog/posts as well!",
		live: "https://jonathicke-tech-blog.herokuapp.com/",
		repo: "https://github.com/JonaThicke274/MVC-Tech-Blog",
	},
	{
		id: 4,
		title: "Note Taker",
		languages: "html, css, js",
		packages: "Express.js",
		image: "/img/notetaker.png",
		description: "Write notes for yourself that you can save; you can read them and delete later at any time!",
		repo: "https://github.com/JonaThicke274/Note-Taker",
		live: "https://jonathicke-note-taker.herokuapp.com/",
	},
	{
		id: 5,
		title: "Work Day Scheduler",
		languages: "html, css, js",
		packages: "html, css, js",
		image: "/img/workdayscheduler.png",
		description: "Simple daily calendar app for daily tasks, meetings, etc. for your work day!",
		repo: "https://github.com/JonaThicke274/WorkDay-Scheduler",
		live: "https://jonathicke274.github.io/WorkDay-Scheduler/"
	}
];

function Portfolio() {
	return (
		<div>
			<p className="content is-medium">Portfolio</p>
		<hr />

			<Project projects={projects} />
		</div>
	);
}

export default Portfolio;
