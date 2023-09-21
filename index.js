function criarTarefa() {
    const input = document.getElementById("tarefa")
    const diaDaSemana = document.getElementById("dias-semana").value  
    const divDia = document.getElementById(`${diaDaSemana}`)

    if (input.value !== ""){
        const tarefa = document.createElement("div")
        tarefa.className = "tarefa"
        const paragrafoInput = document.createElement("p")
        paragrafoInput.innerHTML = `<input type="checkbox" id="itemLista" name="itemLista" value="${input.value}">
        <label for="itemLista">${input.value}</label>`

        tarefa.appendChild(paragrafoInput)
        divDia.appendChild(tarefa)

        input.value = ""
    }
    
}