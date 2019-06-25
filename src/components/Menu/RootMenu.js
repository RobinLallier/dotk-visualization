import React, {Component} from 'react';
import Entity from './Entity.js';


class RootMenu extends Component {

	onSelectCanvas = (key) => {
		this.props.onChangeCanvas(key);
	}

	render(){
		let tree = this.props.tree;

		let treeBuild =	tree.map((entity, index) => <Entity key={index} entity={entity} parent={this.props.parent} onSelectCanvas={this.onSelectCanvas}/>);
		
		return(
			<div className="RootMenu">
				{treeBuild}
			</div>
		);
	}
}

export default RootMenu; 