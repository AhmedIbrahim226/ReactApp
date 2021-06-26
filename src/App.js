import React, { Component } from 'react';
import './App.css';
import Items from './components/items';

class App extends Component{

  state = {
    items: [
      {id: 1, name: "ahmed", age: 21, count: 1},
      {id: 2, name: "ahmed", age: 21, count: 2},
      {id: 3, name: "ahmed", age: 21, count: 3},
      {id: 4, name: "ahmed", age: 21, count: 4},

    ]
  }

  render(){
    return(
      <div className="App">
        <Items item={this.state.items}/>
      </div>
    );
  }
}

export default App;
































// class App extends Component{

//   state = {
//     name: ""
//   }

//   handleChange = (e) =>{
//     this.setState({
//       name: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.name)
//   }

//   render(){
//     return(
//       <div className="App">
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" onChange={this.handleChange}></input>
//           <button>Submit</button>
//         </form>
//         {this.state.name}
//       </div>
//     );
//   }
// }

// export default App;



// class App extends Component{

//   state = {
//     name: "Ahmed",
//     age: 21
//   }

//   Change = () =>{
//     this.setState({
//       name: "Mohamed",
//       age: 30
//     });
//   };

//   render(){
//     return(
//       <div className="App">
//         <button onClick={ this.Change }> ChangeState </button>
//         <p>{ this.state.name }</p>
//         <p>{ this.state.age }</p>
//       </div>
//     );
//   }
// }

// export default App;