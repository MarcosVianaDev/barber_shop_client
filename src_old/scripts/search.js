import { URL_IN_USE } from './config.js'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementsByTagName('form')
  const aba = document.getElementById('aba')
  const id = document.getElementById('id')
  var data_cadastro
  var temp_date

  function limparCampos() {
    document.querySelectorAll(`#result input`).forEach((element) => {
      element.value = ''
    })
  }
  limparCampos()

  form[0].onsubmit = (evt) => {
    evt.preventDefault()
    if (aba.value == '') {
      alert('Selecione um tipo de cadastro')
      aba.focus()
      return
    }
    limparCampos()

    fetch(`${URL_IN_USE}/${aba.value}/${id.value}`) //referencia direta ao objeto com ID 'id' no DOM
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        //percorre os elementos INPUT do formulário para preencher com os dados recebidos
        document.querySelectorAll(`.${aba.value}s`).forEach((element) => {
          if (element.getElementsByTagName('input')[0].type == 'date') {
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
          } else if (
            element.getElementsByTagName('input')[0].type == 'checkbox'
          ) {
            element.getElementsByTagName('input')[0].checked =
              res[element.getElementsByTagName('input')[0].id]
          } else {
            element.getElementsByTagName('input')[0].value =
              res[element.getElementsByTagName('input')[0].id]
          }
        })
      })
      .catch((res) => {
        console.log(res)
      })
  }

  document.getElementById('btn_editar').addEventListener('click', () => {
    console.log(window.location.href)
    window.location.href = `${window.location.origin}/edit_data.html?aba=${aba.value}&id=${id.value}`
  })
})
