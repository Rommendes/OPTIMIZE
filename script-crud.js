//encontrar botão adicionar tarefas

const botaoAdicionarTarefa = document.querySelector('.app__button--add-task');

const formAdicionarTarefa = document.querySelector('.app__form-add-task')


botaoAdicionarTarefa.addEventListener("click", () => {
    formAdicionarTarefa.classList.toggle('.esconder')//hidden
})