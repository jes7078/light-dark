import React, { useState } from 'react'
import '../styles/dark.scss'
import DarthSidious from '../components/DarthSidious'
import DarthSidiousCard from '../components/DarthSidiousCard'

const Dark = () => {
	const [ sidious, setSidious ] = useState(true)
	const [ buttonValue, setButtonValue ] = useState('More Info')

	const checkClick = () => {
		if (buttonValue === 'More Info') {
			setSidious(false)
			setButtonValue('Close')
		} else {
			setSidious(true)
			setButtonValue('More Info')
		}
	}
	return (
		<section className="darkStyle">
			<section>{sidious ? <DarthSidious /> : <DarthSidiousCard />}</section>
			<button className="moreInfoDark" onClick={checkClick}>
				{buttonValue}
			</button>
			<section className="DarkImageWrapper">
				<img
					className="imageDark"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652984/StarWars/DarthMaul_yq1xbb.jpg"
					alt="second"
				/>
			</section>
			<section className="DarkImageWrapper">
				<img
					className="imageDark"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652983/StarWars/DarthVadar_cwug8v.jpg"
					alt="third"
				/>
			</section>
			<section className="DarkImageWrapper">
				<img
					className="imageDark"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652984/StarWars/KyloRen_t9sioo.jpg"
					alt="fourth"
				/>
			</section>
			<section className="DarkImageWrapper">
				<img
					className="imageDark"
					src="https://res.cloudinary.com/jes7078/image/upload/v1588652984/StarWars/Dooku_ln8baj.jpg"
					alt="fifth"
				/>
			</section>
		</section>
	)
}

export default Dark
