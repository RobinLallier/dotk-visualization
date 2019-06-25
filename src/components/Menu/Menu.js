import React, {Component} from 'react';
import Entity from './Entity.js';


class Menu extends Component {

	onSelectCanvas = (key) => {
		this.props.onSelectCanvas(key);
	}

	render(){
		let {tree, open} = this.props;
		
		let treeBuild =	tree.map((entity, index) => <Entity key={index} entity={entity} onSelectCanvas={this.onSelectCanvas}/>);
		
		if(open){
			return(
				<div className="menu">
					{treeBuild}
				</div>);
		}
		else return null;
			
	}
}

export default Menu; 