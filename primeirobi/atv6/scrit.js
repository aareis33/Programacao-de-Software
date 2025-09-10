document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addBtn = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");

    // Adicionar tarefa
    addBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Por favor, digite uma tarefa!");
            return;
        }

        const li = document.createElement("li");
        li.classList.add("pendente"); // Inicialmente a tarefa é "pendente"

        // Adicionar o texto da tarefa
        li.textContent = taskText;

        // Criar div para os botões de ações
        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("task-actions");

        // Botão Excluir
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.classList.add("action-btn", "delete-btn");
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        // Botão Concluído
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Concluído";
        doneBtn.classList.add("action-btn", "done-btn");
        doneBtn.addEventListener("click", () => {
            if (li.classList.contains("pendente")) {
                li.classList.remove("pendente");
                li.classList.add("done");
                doneBtn.textContent = "Desfazer";
            } else {
                li.classList.remove("done");
                li.classList.add("pendente");
                doneBtn.textContent = "Concluído";
            }
        });

        // Adicionar botões à div
        actionsDiv.appendChild(deleteBtn);
        actionsDiv.appendChild(doneBtn);

        // Adicionar a div de ações à tarefa
        li.appendChild(actionsDiv);

        // Adicionar a tarefa à lista
        taskList.appendChild(li);

        // Limpar o campo de input
        taskInput.value = "";
    });

    // Adicionar tarefa ao pressionar Enter
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addBtn.click();
        }
    });
});
