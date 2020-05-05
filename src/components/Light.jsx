import React from 'react'
import '../styles/light.scss'

const Light = () => {
	return (
		<section className="lightStyle">
			<section className="lightImageWrapper">
				<img
					className="imageLight"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652984/StarWars/Rey_co0omq.jpg"
					alt="first"
				/>
			</section>
			<section className="lightImageWrapper">
				<img
					className="imageLight"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652984/StarWars/ObiWan_ugu5lv.jpg"
					alt="second"
				/>
			</section>
			<section className="lightImageWrapper">
				<img
					className="imageLight"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652984/StarWars/MaceWindu_s5juk1.jpg"
					alt="third"
				/>
			</section>
			<section className="lightImageWrapper">
				<img
					className="imageLight"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652984/StarWars/Yoda_sghadr.jpg"
					alt="fourth"
				/>
			</section>
			<section className="lightImageWrapper">
				<img
					className="imageLight"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652984/StarWars/LukeSkywalker_vwwhqu.jpg"
					alt="fifth"
				/>
			</section>
		</section>
	)
}

export default Light
