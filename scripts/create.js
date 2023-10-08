import { URL_IN_USE } from './config.js'


function disableAll() {
  document.querySelectorAll(`input`).forEach(element => {
    element.setAttribute('disabled', 'disabled')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  disableAll()
  const now = new Date().toLocaleDateString().split('/')
  document.getElementById('data_cadastro').value = `${now[2]}-${now[1]}-${now[0]}`
  let data_send
  const new_aba = document.getElementById('new_aba')
  //Exibe apenas os elementos da classe do mesmo tipo de dado "new_aba"
  new_aba.addEventListener('change', () => {
    disableAll()
    document.querySelectorAll(`.${new_aba.value}`).forEach(element => {
      element.control.removeAttribute('disabled')
    })
  })
  document.getElementsByTagName('form')[0].addEventListener('submit', evt => {
    evt.preventDefault()
    if (new_aba.value == '') {
      alert('Selecione um tipo de cadastro.')
      new_aba.focus()
      return
    }
    
    data_send = {}
    for (let index = 0; index < evt.target.length; index++) {
      const element = evt.target[index];
      if (element.type == 'checkbox') {
        data_send[String(element.id).replace('new_', '')] = element.checked
        continue
      }
      if ((element.nodeName == 'INPUT') && (!element.disabled)) {
        data_send[String(element.id).replace('new_', '')] = element.value
      }
    }
    console.log(data_send);

    fetch(`${URL_IN_USE}/${new_aba.value}/new`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data_send),
    })
      .then(response => response.json())
      .then(json => console.log(json));
    console.log('\nSalvando...');
    evt.target.reset()
  })
})
