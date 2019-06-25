import React, { Component } from 'react';

import SvgOntology from '../svg/Ontology';
import SvgAbstract from '../svg/Abstract';
import SvgEndurants from '../svg/Endurants';
import SvgNonAgentivePhysicaObjects from '../svg/NonAgentivePhysicalObjects';
import SvgPerdurants from '../svg/Perdurants';


class Figure extends Component {
	constructor(props){
		super(props);
		this.state={
			canvas: 'Ontology',
			style: null
		}
	}

	componentWillReceiveProps(nextProps) {
  		this.setState({ canvas: nextProps.canvas });  
  		//this.rotateAndZoom(33, 1.4, 200);
	}

	/*rotateAndZoom = (angle, zoom, xMove) => {
		let styles = {
			transform : `scale(${zoom}) rotate(${angle}) translateX(${xMove}px)`		
		};
		this.setState({style: styles});
	}

	onSelectCanvas = (key) => {
		this.props.onChangeCanvas(key);
	}*/



	render(){

		let chooseOntology = () => {
			switch(this.state.canvas){
				case 'Ontology': 
					return <SvgOntology/>;
				case 'Abstract': 
					return <SvgAbstract/>;
				case 'Endurants':
					return <SvgEndurants/>;
				case 'Perdurants':
					return <SvgPerdurants/>;
				case 'Non-agentive physical object':
					return <SvgNonAgentivePhysicaObjects/>;
				default :
					return<SvgOntology/>;					
			}
		}



		return(
		<div className="figure" style={this.state.style}>
			{chooseOntology()}
		</div>
	);
	}
	

}

export default Figure; 