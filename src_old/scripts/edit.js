import { URL_IN_USE } from './config.js'

document.addEventListener('DOMContentLoaded', () => {
  const url_params = new URLSearchParams(window.location.search)
  const item_id = url_params.get('id')
  const data_aba = url_params.get('aba')
  const form = document.getElementsByTagName('form')
  var data_cadastro
  var temp_date

  document.querySelectorAll(`input`).forEach((element) => {
    element.setAttribute('disabled', 'disabled')
  })
  document.querySelectorAll(`.${data_aba}s`).forEach((element) => {
    element.control.removeAttribute('disabled')
  })

  //Verifica se tem id e aba do item para pesquisar no DB
  if (item_id && data_aba) {
    fetch(`${URL_IN_USE}/${data_aba}/${item_id}`)
      .then((res) => res.json())
      .then((res) => {
        data_cadastro = res.data_cadastro
        temp_date = String(data_cadastro).split('/')
        if (temp_date[0] < 10) {
          temp_date[0] = '0' + temp_date[0]
        }
        if (temp_date[1] < 10) {
          temp_date[1] = '0' + temp_date[0]
        }
        document.getElementById(
          'data_cadastro'
        ).value = `${temp_date[2]}-${temp_date[1]}-${temp_date[0]}`
        //percorre os elementos INPUT do formulário para preencher com os dados recebidos
        for (let index = 0; index < form[0].length; index++) {
          const element = form[0][index]
          if (element.nodeName != 'INPUT') {
            continue
          }
          if (element.type == 'checkbox') {
            element.checked = res[element.id]
            continue
          }
          element.value = res[element.id] == undefined ? '' : res[element.id]
        }
        form[0].onreset = (evt) => {
          window.location.reload()
        }
      })
      .catch((res) => {
        console.log(res)
      })

    //Exibe apenas os elementos da classe do mesmo tipo de dado "aba"
    document.querySelectorAll(`.${data_aba}`).forEach((element) => {
      element.style.display = 'inline-block'
    })
  } else {
    // se não tiver ID e aba, volta para a página inicial
    alert('Sem dados...')
    window.location.href = window.location.origin
  }

  form[0].onsubmit = (evt) => {
    evt.preventDefault()
    let data_send = {}
    // data_send['data_cadastro'] = data_cadastro
    for (let index = 0; index < evt.target.length; index++) {
      const element = evt.target[index]
      if (!element.parentElement.className.includes(data_aba)) {
        continue
      }
      if (element.type == 'checkbox') {
        data_send[String(element.id).replace('new_', '')] = element.checked
        continue
      }
      if (element.nodeName == 'INPUT') {
        data_send[String(element.id).replace('new_', '')] = element.value
      }
    }
    // console.log(data_send);
    fetch(`${URL_IN_USE}/${data_aba}/${item_id}/edit`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data_send)
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
    console.log('\nSalvando...')
    // window.location.href = window.location.origin
  }
})
