import React, {Component} from 'react';
import Menu from './Menu.js';


class Entity extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: false
		}

		this.handleOpen = this.handleOpen.bind(this);
	}

	handleOpen() {
		this.setState({open: !this.state.open})
	}

	render(){
		let {entity, parent} = this.props;
		let open = this.state.open;
		let icon;

		if(open) icon = <i onClick={this.handleOpen} className='fas fa-caret-down clickable'></i>;
		else icon = <i onClick={this.handleOpen} className='fas fa-caret-right clickable'></i>;

		if(parent || entity.key === 'Non-agentive physical object'){
			return(
			<div>
				{icon}
				<span onClick={(e) => this.props.onSelectCanvas(entity.key)} className='parentEntity'> {entity.key}</span>
				<Menu open={open} tree={entity.values} onSelectCanvas={this.props.onSelectCanvas}/>
			</div>);
		}
		else{
			return(
			<div>
				{ entity.values.length ? icon : null}
				<span> {entity.key}</span>
				{ (entity.values && entity.values.length && Object.keys(entity.values[0]).indexOf('value9') === -1) ? <Menu onSelectCanvas={this.props.onSelectCanvas} open={open} tree={entity.values}/> : null}
			</div>);
		}
		
	}		
}

export default Entity; 