import React, { Component } from "react";
import shortid from "shortid";
class Form extends Component {
    state = { // данные инпута не должны хранится в Арр()
        name: '',
      password: '',
      expirience: 'junior',
      licence: ''
    }
//В случае если мы привязываем ДЕЙБЛЫ К ИНПУТУ ТО Айдишники у формы должны быть уникальные, поэтому мы их генерируем НПМ пакет import shortid from "shortid";
inputNameId = shortid.generate() //уникальный Айди имя
inputPasswordId = shortid.generate() //уникальный Айди пароля

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
    this.props.propOnSubmit(this.state); //получаем пропс в который передаем state: name, password
    this.resetForm(); // сброс формы
  }
    resetForm = () => {
      this.setState({
        name: '',
        password: ''
      })
    }
  hendleChakedBox = (e) => {
    console.log(e.currentTarget.checked)
    this.setState({
      licence: e.currentTarget.checked,
    })
    }

    render() {
        return (
            <form onSubmit={this.hendleSubmit}>
          <label htmlFor={this.inputNameId}>
            Name
           <input type="text" name="name" value={this.state.name} onChange={this.hendleOnChange} id={this.inputNameId}></input>
          </label>
            <label htmlFor={this.inputPasswordId}>
            Password
              <input
                type="numbers"
                name="password"
                value={this.state.password}
                onChange={this.hendleOnChange}
                id={this.inputPasswordId}></input>
            </label>
            <label>
              Купить
              <input
                type="radio"
                name="expirience"
                value="Купить"
                onChange={this.hendleOnChange}
                checked={this.state.expirience === "Купить"}
                >
                </input>  
            </label>

            <label>
              Продать
              <input
                type="radio"
                name="expirience"
                value="Продать"
                onChange={this.hendleOnChange}
                checked={this.state.expirience === "Продать"}
                >
              </input>
              
            </label>
            <label>
              Обмен
              <input
                type="radio"
                name="expirience"
                value="Обмен"
                onChange={this.hendleOnChange}
              checked={this.state.expirience === "Обмен"}
                >
                </input>
            </label>
            <label>
              <input type="checkbox"
                name="licence"
                checked={this.state.licence}
                onChange={this.hendleChakedBox}
              />Согласен с лицензией
                
            </label>
            
          <button type='submit' disabled={!this.state.licence}>Отправить</button>
        </form>
        )
    }
}

export default Form;
