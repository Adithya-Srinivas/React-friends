import React from 'react';


const Card = ({name, id, email}) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 '>
		  <h2> {name} friend </h2>
		  <img src= {`https://robohash.org/${id}?200x200`} alt="Robot" width="180" height="180" />
		  <div>
		     <h2> {name} </h2>
		     <p> {email}</p>
		  </div>
		</div>
		);
};

export default Card;