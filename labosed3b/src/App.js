import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
 
const data = [
  { id: 1, character: "Ironman", category: "Avenger" },
  { id: 2, character: "Wolverine", category: "Dragon Ball" },
  { id: 3, character: "MsMarvel", category: "Rurouni Kenshin" },
  { id: 4, character: "Monkey D. Luffy", category: "One Piece" },
  { id: 5, character: "Edward Elric", category: "Fullmetal Alchemist: Brotherhood"},
  { id: 6, character: "Seto Kaiba", category: "Yu-Gi-Oh!" },
];

class App extends React.Component {
state={
  data: data
}
 render(){ 
  return (
   <>
   <Container>
     <br/>
   <Button color="primary">Insert a Marvel character </Button>
   <br/><br/>

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
                      <td><Button color="primary">Edit</Button>
                      <Button color="danger">Delete</Button></td>
                    </tr>
                  ))}
                </tbody>

  </Table>
   </Container>
   </>)
 }
}

export default App;
