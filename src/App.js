import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './App.css';
import Figure from './components/Figure/Figure';
import RootMenu from './components/Menu/RootMenu';
import originalTree from './ontology.js';


class App extends Component {
  constructor(){
    super();
    this.state={
      showHow: false,
      showAbout: false,
      canvas: 'Ontology', 
      tree: originalTree
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(choice) {
    if (choice === 'showHow')this.setState({ showHow: false });
    else this.setState({showAbout: false});
  }

  handleShow(choice) {
    if (choice === 'showHow') this.setState({ showHow: true });
    else this.setState({showAbout: true});
    
  }

  findCanvasTree = (tree, value) => {
    for(let entity of tree){
      if (entity.key === value) {
        console.log('found the correct tree', entity);
        this.setState({tree: entity});
        break;
      }
      else if(entity.values) this.findCanvasTree(entity.values, value); 
    }
  }

  onChangeCanvas = (canvas) => {
    this.setState({canvas: canvas});
    this.findCanvasTree(this.state.tree, canvas);
  }

  reset = () => {
    this.setState({canvas: 'Ontology',
      tree: originalTree
      });
  }

  render(){

    let {showHow, showAbout, canvas, tree} = this.state;

    let menu;
    if (tree === originalTree) menu = (
      <div className="Menu">
        <h2>Ontology</h2>
        <RootMenu tree={tree} parent={true} onChangeCanvas={this.onChangeCanvas}/>
      </div>
      );
    else menu = (
      <div className="Menu">
        <h2><span className='fas fa-arrow-left' onClick={this.reset}></span> {tree.key}</h2>
        <RootMenu tree={tree.values} parent={false} onChangeCanvas={this.onChangeCanvas}/>
      </div>
      );  
        
    return (
      <div className="App">
        <h1> Visualisation de l'ontologie descriptive des connaissances <br/>territoriales du développement durable à Troyes</h1>
        <div className='mainSection'>
          <Figure canvas={canvas}/>
          <aside>
            {menu}
            <Button className="greenButton" onClick={(e) => this.handleShow('showHow')}>
              How to Navigate ?
            </Button>
            <Button className="greenButton" onClick={(e) => this.handleShow('showAbout')}>
              About
            </Button>
          </aside>
        </div>


        <Modal show={showHow} onHide={(e) => this.handleClose('showHow')}>
          <Modal.Header closeButton>
            <Modal.Title>How to Navigate this ontology</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>Welcome to the descriptive ontology of territorial knowledge of Troyes. 
          This website was designed to help you navigate through 3 complex trees of informations.</p>
          <h3>The Menu</h3>
          <p>The first tool you can use is the menu on your right. Simply click on an entity element to display all of its children. 
          Entities that possess their own data visualization, such as Abstract, Endurants or Perdurants, are accessible by clicking on them.
          Click on the arrow icons to open sub-branches of the visualization, and explore eache branch you find pertinent.
          Once you switched
          </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e) => this.handleClose('showHow')}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showAbout} onHide={(e) => this.handleClose('showAbout')}>
          <Modal.Header closeButton>
            <Modal.Title>What is this website about?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>ADD HERE ANY RELEVANT INFORMATION YOU WANT TO PASS TO YOUR VISITORS</p>
          <p>This website is designed to showcase the thesis work of Mr. Amer Ezoji. 
          It was designed by Robin Lallier during a university project of UTT (Université de Technologie de Troyes), under the supervision of Ms. Nada Matta.
          </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e) => this.handleClose('showAbout')}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
    
}

export default App;
