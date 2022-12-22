import React, { Component } from "react";

class Form extends Component {
    state = {
        name: '',
        password: ''
    }


    hendleOnChange = (event) => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.name); // input name or input passwor
    console.log(event.currentTarget.value); // result 
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

     //Метод Сабмит отправка формы
    hendleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
  }

    render() {
        return (
            <form onSubmit={this.hendleSubmit}>
          <label>
            Name
           <input type="text" name="name" value={this.state.name} onChange={this.hendleOnChange}></input>
          </label>
            <label>
            Password
           <input type="numbers" name="password" value={this.state.password} onChange={this.hendleOnChange}></input>
          </label>
          <button type='submit'>Отправить</button>
        </form>
        )
    }
}

export default Form;
