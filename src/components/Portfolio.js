import React, { useState } from 'react';
import * as Icon from 'react-feather';
import FsLightbox from 'fslightbox-react';

function Portfolio(props) {
	const [ toggler, setToggler ] = useState(false);
	const { title, language, project, click, subtitle, imageUrl, largeImageUrl, url } = props.content;

	const handleToggler = (value) => {
		setToggler(value);
	};

	return (
		<div className="mi-portfolio">
			<div className="mi-portfolio-image">
				<img src={imageUrl} alt="Image" />
				<ul>
					{/* {!largeImageUrl ? null : (
						<li>
							<button onClick={() => handleToggler(!toggler)}>
								<Icon.ZoomIn />
							</button>
						</li>
					)} */}

					<li>
						<a rel="noopener noreferrer" target="_blank" href={url}>
							{url ? <Icon.Link /> : null}
						</a>
						{click ? <p>{click}</p> : null}
					</li>
				</ul>
			</div>

			{!url ? (
				<h5>{title}</h5>
			) : (
				<h5>
					<a rel="noopener noreferrer" target="_blank" href={url}>
						{title}
					</a>
				</h5>
			)}
			{language ? <h6 style={{ fontWeight: 'bolder' }}>Language utilisé : {language}</h6> : null}

			<div style={{ marginTop: 10 }}>
				{project ? <h6>Projet {project}</h6> : null}
				{subtitle ? <h6>{subtitle}</h6> : null}
			</div>
			{/* {!largeImageUrl ? null : <FsLightbox toggler={toggler} sources={largeImageUrl} />} */}
		</div>
	);
}

export default Portfolio;
