import React from 'react';


const Searchbox = ({searchChange}) => {
       return (
         <div className = 'pa2'>
           <input className = 'bg-light-blue dib br3 pa3'
           type='search' 
           onChange = {searchChange}
           placeholder='search your robots' />
         </div>
       	);
};

export default Searchbox;

