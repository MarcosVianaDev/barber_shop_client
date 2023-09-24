document.addEventListener('DOMContentLoaded', () => {
  const new_aba = document.getElementById('new_aba')
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
      if (element.nodeName == 'INPUT') {
        data_send[String(element.id).replace('new_', '')] = element.value
      }
    }
    console.log(data_send);

    fetch(`http://localhost:8080/${new_aba.value}/new`, {
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
