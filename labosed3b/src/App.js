import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,
  Container, Modal,ModalHeader,ModalBody,FormGroup, ModalFooter,
} from "reactstrap";

// -----------datos quemados----------
const data = [
  { id: 1, character: "Ironman", category: "Avenger" },
  { id: 2, character: "Wolverine", category: "x Men" },
  { id: 3, character: "MsMarvel", category: "Inhuman" },
 
];

class App extends React.Component {
  state = {
    data: data,
    updateModal: false,
    insertModal: false,
    form: {
      id: "",
      character: "",
      category: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

   // -----------Modal para insertar----------

   showInsertModal = () => {
    this.setState({
      insertModal: true,
    });
  };

  hideInsertModal = () => {
    this.setState({ insertModal: false });
  };

  insert= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ insertModal: false, data: lista });
  }

  // -----------Modal para Actualizar ----------

  showUpdateModal = (data) => {
    this.setState({
      form: data,
      updateModal: true,
    });
  };

  hideUpdateModal = () => {
    this.setState({ updateModal: false });
  };

  update = (data) => {
    var counter = 0;
    var array = this.state.data;
    array.map((record) => {
      if (data.id == record.id) {
        array[counter].character = data.character;
        array[counter].category = data.category;
      }
      counter++;
    });
    this.setState({ data: array, updateModal: false });
  };

    // ----------- Eliminar  ----------
  
  delete = (data) => {
    var option = window.confirm("Are you sure you want to delete the character? "+data.id);
    if (option == true) {
      var counter = 0;
      var array = this.state.data;
      array.map((record) => {
        if (data.id == record.id) {
          array.splice(counter, 1);
        }
        counter++;
      });
      this.setState({ data: array, updateModal: false });
    }
  };

  

  render() {
    
    return (
      <>
        <Container >
          <div class="col text-center">
          <h1>MARVEL FAN CRUD</h1>
          </div>
        
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Character</th>
                <th>Category</th>
                <th>Tools</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.character}</td>
                  <td>{data.category}</td>
                  <td>
                    <Button
                      color="info"
                      onClick={() => this.showUpdateModal(data)}
                    >
                      update
                    </Button>{" "}
                    <Button color="secondary" onClick={()=> this.delete(data)}>delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <br />
          <br />
          <div class="col text-center">
          <Button  color="primary" onClick={()=>this.showInsertModal()}>Insert New MARVEL fav character</Button>
          </div>
        
        </Container>

    

        <Modal isOpen={this.state.insertModal}>
          <ModalHeader>
           <div><h3>Insert character</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                No: 
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
                character: 
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
                category: 
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
              color="info"
              onClick={() => this.insert()}
            >
              insert
            </Button>
            <Button
              className="btn btn-secondary"
              onClick={() => this.hideInsertModal()}
            >
              exit
            </Button>
          </ModalFooter>
        </Modal>






        <Modal isOpen={this.state.updateModal}>
          <ModalHeader>
           <div><h3>Update the MARVEL character</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               No:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                character: 
              </label>
              <input
                className="form-control"
                name="character"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.character}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                category: 
              </label>
              <input
                className="form-control"
                name="category"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.category}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="info"
              onClick={() => this.update(this.state.form)}
            >
              update
            </Button>
            <Button
              color="secondary"
              onClick={() => this.hideUpdateModal()}
            >
              exit
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;