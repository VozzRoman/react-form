import React, { Component } from 'react';
import Form from './components/Form/Form';
//Так как в тудуЛист мы будем менять Стейт и хранить его в Арр() то из функции мы дклаем класс
class App extends Component {





  //События инпут - получения данных из инпута! можно написать отдельно для каждого инпута метод
  //но это не удобно поскольку ипутов может быть много, поэтому лучше написать один метод для все ипутов
  // через атрибут name=""

  // hendleNameChangeInput = (event) => { // передаем событие ипут
  //   console.log(event.currentTarget.value)
  //   this.setState({
  //     name: event.currentTarget.value
  //   })
  // }

  //  hendlePasswordChangeInput = (event) => { // передаем событие ипут
  //   console.log(event.currentTarget.value)
  //   this.setState({
  //     password: event.currentTarget.value
  //   })
  // }


 

	render() {
 
		return (
      <>
  <Form />
      
    </>
		)
	}
}

export default App;
