import React, {Component} from 'react';
import Scroll from '../components/Scroll'
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import ErrorBoundry from '../components/ErrorBoundry'


class App extends Component {
	constructor(){
		super()
		this.state ={
	      robots : [],
	      searchfiled : '',
        };
	};
    
    componentDidMount(){
    	fetch("https://jsonplaceholder.typicode.com/users")
    	.then(response => response.json())
    	.then(users => this.setState( {robots: users} ));
    };

    onSearchChange = (event) => {
      this.setState({ searchfiled : event.target.value });
    };

	render() {
		const {robots, searchfiled} = this.state
		const filteredbots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfiled.toLowerCase())
           }
        );
        return !robots.length ?
        	<h1> Loading </h1> :
        	(
		    <div className = 'tc'>
		      <h1 className = 'one' > Your robo friends </h1>
		      <Searchbox searchChange= {this.onSearchChange} />
		      <Scroll>
		        <ErrorBoundry>
                  <Cardlist robots= {filteredbots} />
                </ErrorBoundry>
              </Scroll>
            </div>
        );
	};
};

export default App;