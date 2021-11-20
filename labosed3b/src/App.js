import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
 
const data = [
  { id: 1, character: "Ironman", category: "Avenger" },
  { id: 2, character: "Wolverine", category: "x Men" },
  { id: 3, character: "MsMarvel", category: "Inhuman" },
  { id: 4, character: "Hulk", category: "One Piece" },
  { id: 5, character: "Black WIdow", category: "Avenger"},
  { id: 6, character: "Spider Man", category: "Avenger" },
];

class App extends React.Component {
state= {
  data: data,
  form:{
    id:'' ,
    character:'' ,
    category:''
  },
  insertModal: false,
};

handleChange=e=>{
this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value,
  }
});
}

 ShowInsertModal=() => {
   this.setState({insertModal: true});
 }

 hideInsertModal=() => {
  this.setState({insertModal: false});
}

insert= ()=>{
  var valorNuevo= {...this.state.form};
  valorNuevo.id=this.state.data.length+1;
  var lista= this.state.data;
  lista.push(valorNuevo);
  this.setState({ insertModal: false, });
}

 render(){ 
  return (
   <>
   <Container>
     <br/>
   <Button color="success" onClick={()=>this.ShowInsertModal()}>Insert a Marvel character </Button>
   <br/>
   <br/>

   <Table>
            <thead><tr><th>ID</th>
                <th>Character</th>
                <th>Category</th>
                <th>Action</th></tr> </thead>
                <tbody>
                  {this.state.data.map((elemento)=>(
                    <tr> 
                      <td>{elemento.id}</td>
                      <td>{elemento.character}</td>
                      <td>{elemento.category}</td>
                      <td><Button color="primary">Update</Button>{"  "}
                      <Button color="danger">Delete</Button></td>
                    </tr>
                  ))}
                </tbody>

  </Table>
  </Container>

  <Modal isOpen={this.state.insertModal}>
          <ModalHeader>
           <div><h3>Insert MARVEL Character</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Character: 
              </label>
              <input
                className="form-control"
                name="character"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Category: 
              </label>
              <input
                className="form-control"
                name="category"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary" onClick={()=>this.insert()}
             
            >
              Insert
            </Button>
            <Button
             color="danger" onClick={()=>this.hideInsertModal()}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
  
   </>
   );
 }
}

export default App;
