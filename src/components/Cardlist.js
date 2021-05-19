import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
	const userlist = robots.map((user, idx)=>{
		return(
			<Card key = {idx} id={robots[idx].id} name={robots[idx].name} email={robots[idx].email}/>
		)});
	return(
	<div>
	 {userlist}
	</div>
	);
};

export default Cardlist;