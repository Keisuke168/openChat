import React from 'react';
import Axios from 'axios';

export class Comp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {value: '',msgs:[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <h1>課題C</h1>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <textarea name="text" cols="80" rows="4" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <input type="submit" value="送信" />
              </form>
              <ul>{this.state.msgs.map((msg) =>{
                return <li>{msg}</li>
            })}</ul>
            </header>
          </div>
        );
      }
    
    
      getdata = text => {
        //console.log("input text >>"+text)
        Axios.post('http://127.0.0.1:5000/data/', {
          post_text: text
        }).then(res =>{
            this.setState({msgs:res.data.msgs})
        })
      };
    
      handleSubmit = event => {
        this.getdata(this.state.value)
        console.log(this.state.msgs)
        event.preventDefault();
      };
    
      handleChange = event => {
        this.setState({ value: event.target.value });
      };
}
export default Comp