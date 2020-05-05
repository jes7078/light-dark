import React from 'react'
import '../styles/vid.scss'

const Header = () => {
	return (
		<section>
			<section className="videoContainer">
				<video
					className="vid"
					src="https://res.cloudinary.com/jes7078/video/upload/v1588653473/StarWars/ShortStarWars_l4q9d0.mp4"
					autoPlay
					muted
					loop
				/>
				<div className="sphere">
					<video
						className="vid1"
						src="https://res.cloudinary.com/jes7078/video/upload/v1588653473/StarWars/ShortStarWars_l4q9d0.mp4"
						autoPlay
						muted
						loop
					/>
				</div>
			</section>
		</section>
	)
}

export default Header
