import React, {useState, Component} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

class App extends Component {
  state = {
      contact: []
  }

  componentDidMount() {
    fetch('http://192.168.2.56:8080/contacts')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contact: data })
          console.log(this.state.contact)
        })
        .catch(console.log)
    }

    render() {
        return (
            <div className="container">
                <h1>CRUD App (React)</h1>
                <div className="flex-row">
                    <div className="flex-large">
                        <h2>Add user</h2>
                        <AddUserForm/>
                    </div>
                    <div className="flex-large">
                        <h2>View users</h2>
                        <UserTable users={this.state.contact}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;

