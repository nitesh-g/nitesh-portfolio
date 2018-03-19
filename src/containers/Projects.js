import React, { Component }  from 'react'
import MySkills from '../components/SkillsComponent/MySkills'
import MyWork from '../components/Work/MyWork'
import ProfessionalSkills from '../components/ProfessionalSkills/ProfessionalSkills'
import { work } from '../containers/data'

export default class Projects extends Component {
	render(){
		return(
			<div>
				<MySkills
				className="skills-row"
				title="Skills"
				 />
				<ProfessionalSkills />
				<MyWork workExp = {work} />
			</div>
		);
	}	
}
