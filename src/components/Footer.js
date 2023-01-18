//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<p>
					<strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
						<a href="https://github.com/JonaThicke274" target="_blank" rel="noreferrer">
							Jonathan Lipata Arevalo
						</a>
						.
					<hr />
					<a
						href="https://www.linkedin.com/in/jonathan-lipata-arevalo-137900101/"
						target="_blank" rel="noreferrer"
					>
						LinkedIn
					</a>{" "}
					{/* |{" "}{" "} */}
					{/* <a href="" target="_blank" rel="noreferrer">
						Nothing????
					</a> */}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
