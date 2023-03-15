import React, { Component } from 'react'
import JSON from "./User.json"

class App15 extends Component {
constructor()
{
    super()
    this.state={json:JSON}
}

  render() {
    return (
      <div>
        <user1 data={this.state.json}/>
      </div>
    )
  }
}
export default App15