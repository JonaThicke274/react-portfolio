// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
	return (
		<div>
			<p className="content is-medium">Full Stack Developer</p>
			<hr />
			<img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
			<p className="content is-italic mt-4">
				I'm Jonathan, a full stack developer looking to apply himself and contribute the best way he can to any team or project!
			</p>
			<p className="content">
				I'm currently a Property Manager that's recently finished the GWU Coding Bootcamp Program for full stack web development.
				Thank you for taking the time to view my portfolio; please feel free to reach out to me via the contact form above!
			</p>
		</div>
	);
}

export default About;
