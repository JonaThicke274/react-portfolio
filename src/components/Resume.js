// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";

function Resume() {
	return (
		<div className="columns">
		<div className="column">
			<p className="content is-medium">Resume</p>
			<hr />

			<a
			className="button is-primary"
			href={process.env.PUBLIC_URL + "/jla-resume-2-5-2023.pdf"}
			target="_blank" rel="noreferrer"
			>
			<span className="icon">
				<i className="fas fa-download"></i>
			</span>
			<span>Download My Resume</span>
			</a>
		</div>
		<div className="column">
			<p className="content is-medium">Skills</p>
			<hr />
			<ul>
				<li>HTML, CSS, Javascript</li>
				<li>OpenAPI, JSON</li>
				<li>React, Next.js, Hugo</li>
				<li>Markdown</li>
				<li>Git</li>
				<li>Github Repo Management</li>
			</ul>
		</div>
		</div>
	);
}

export default Resume;
