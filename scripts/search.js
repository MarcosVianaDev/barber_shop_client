document.addEventListener('DOMContentLoaded', () => {
    const aba = document.getElementById('aba');
    aba.addEventListener('change', (evt) => {
        document.querySelectorAll('.output_form').forEach(element => {
            element.style.display = 'none'
        })
        document.querySelectorAll('.output_form input').forEach(element => {
            element.value = ''
        })
        document.getElementById(`output_${evt.target.value}`).style.display = 'flex'
    })

    document.getElementById('pesquisar_btn').addEventListener('click', (evt) => {
        evt.preventDefault()

        if (aba.value == '') {
            alert('Selecione um tipo de cadastro!')
            aba.focus()
            return
        }
        var id_input = document.getElementById('id_input').value

        if (id_input == '') {
            alert('Digite um ID!')
            document.getElementById('id_input').focus()
            return
        }

        fetch(`http://localhost:8080/${aba.value}/${id_input}`)
            .then(res => res.json())
            .then((res) => {
                if (res == `Id ${id_input} not found` || res.detail == "Not Found") {
                    alert('ID não encontrado!')
                } else {
                    if (aba.value == 'barbeiros') {
                        document.getElementById('out_nome_completo').value = res.nome
                        document.getElementById('out_apelido').value = res.apelido
                        temp_date = String(res.data_cadastro).split('/')
                        document.getElementById('out_data_cadastro_barbeiro').value = `${temp_date[2]}-${temp_date[1]}-${temp_date[0]}`
                        document.getElementById('out_local_trabalho').value = res.local_trabalho
                        document.getElementById('out_ativo_barbeiro').checked = res.ativo == '1'
                    } else if (aba.value == 'barbearias') {
                        document.getElementById('out_nome_estabelecimento').value = res.nome
                        temp_date = String(res.data_cadastro).split('/')
                        document.getElementById('out_data_cadastro_barbearia').value = `${temp_date[2]}-${temp_date[1]}-${temp_date[0]}`
                        document.getElementById('out_nome_responsável').value = res.responsavel
                        document.getElementById('out_email_responsável').value = res.email
                        document.getElementById('out_telefone_barbearia').value = res.telefone
                        document.getElementById('out_cep_barbearia').value = res.cep
                        document.getElementById('out_ativo_barbearia').checked = res.ativo == '1'
                    } else if (aba.value == 'proprietarios') {
                        document.getElementById('out_nome_proprietario').value = res.nome
                        temp_date = String(res.data_cadastro).split('/')
                        document.getElementById('out_data_cadastro_proprietario').value = `${temp_date[2]}-${temp_date[1]}-${temp_date[0]}`
                        document.getElementById('out_dono_de_proprietario').value = res.dono_de
                        document.getElementById('out_email_proprietario').value = res.email
                        document.getElementById('out_telefone_proprietario').value = res.telefone
                        document.getElementById('out_ativo_proprietario').checked = res.ativo == '1'
                    }
                }
                document.getElementById('id_input').focus()
            })
    })

    document.getElementById('editar_btn').addEventListener('click', editar)
    document.getElementById('cancelar_btn').addEventListener('click', cancelar)

    document.querySelectorAll(".output_form input").forEach(element => {
        element.setAttribute('disabled', 'disabled')
    });
    // salvar()

})

function editar() {
    document.querySelectorAll(`#output_${aba.value} input`).forEach(element => {
        element.removeAttribute('disabled')
    });
}

function cancelar() {
    document.querySelectorAll(".output_form input").forEach(element => {
        element.setAttribute('disabled', 'disabled')
    });
}

function salvar() {
    console.log('Salvando');
    // fetch(`http://localhost:8080/${aba.value}/${id_input}/edit`, {
    fetch(`http://localhost:8080/barbeiros/1/edit`, {
        method: 'PUT',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            'nome': 'Túlio Maravilha',
            'apelido': 'Idem',
            'local_trabalho': '2;3',
            'ativo':'1',
        })
    })
        .then(response => response.json())
        .then(json => console.log(json));
}