import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const skills = [
	{
		skill: 'HTML+CSS',
		level: 'advanced',
		color: 'rgb(92, 117, 207)',
	},
	{
		skill: 'Javascript',
		level: 'intermediate',
		color: 'rgb(223, 223, 17)',
	},
	{
		skill: 'Web Design',
		level: 'intermediate',
		color: 'rgb(125, 147, 131)',
	},
	{
		skill: 'Git and Github',
		level: 'intermediate',
		color: 'rgb(87, 175, 197)',
	},
	{
		skill: 'React',
		level: 'beginner',
		color: 'rgb(217, 106, 59)',
	},
];

function App() {
	return (
		<div className='wrapper'>
			<div className='card'>
				<Avatar photoName='photo/avatar.jpg' />
				<div className='data'>
					<Intro
						name='Szymon Sauer'
						content='I am an IT Project Manager and I want to work as a Frontend Developer. In my free time I like to enjoy coffee with a good novel containing interesting psychological themes.'
					/>
					{skills.map((el) => (
						<SkillList skillsObject={el} key={el.skill} />
					))}
					{/* <SkillList /> */}
				</div>
			</div>
		</div>
	);
}

function Avatar(props) {
	return <img src={props.photoName} alt={props.photoName} className='avatar' />;
}

function Intro(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<p>{props.content}</p>
		</div>
	);
}

function SkillList({ skillsObject }) {
	return (
		<div className='skill-list'>
			<Skill
				skill={skillsObject.skill}
				// emoji='👍'
				emoji={
					skillsObject.level === 'beginner'
						? (skillsObject.emoji = '👶')
						: skillsObject.level === 'intermediate'
						? (skillsObject.emoji = '👍')
						: (skillsObject.emoji = '💪')
				}
				color={skillsObject.color}
			/>
			{/* <Skill skill='HTML+CSS' emoji='👍' color='rgb(92, 117, 207)' />
			<Skill skill='JavaScript' emoji='👍' color='rgb(223, 223, 17)' />
			<Skill skill='Web Design' emoji='👍' color='rgb(125, 147, 131)' />
			<Skill skill='Git and GitHub' emoji='👍' color='rgb(92, 117, 207)' />
			<Skill skill='React' emoji='👶' color='rgb(217, 106, 59)' /> */}
		</div>
	);
}
// function SkillList() {
// 	return (
// 		<div className='skill-list'>
// 			<Skill skill='HTML+CSS' emoji='👍' color='rgb(92, 117, 207)' />
// 			<Skill skill='JavaScript' emoji='👍' color='rgb(223, 223, 17)' />
// 			<Skill skill='Web Design' emoji='👍' color='rgb(125, 147, 131)' />
// 			<Skill skill='Git and GitHub' emoji='👍' color='rgb(92, 117, 207)' />
// 			<Skill skill='React' emoji='👶' color='rgb(217, 106, 59)' />
// 		</div>
// 	);
// }

function Skill(props) {
	return (
		<div className='skill' style={{ backgroundColor: props.color }}>
			<span>{props.skill}</span>
			<span>{props.emoji}</span>
		</div>
	);
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
