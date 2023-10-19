import { Component, OnInit } from '@angular/core';
import { TaskList } from '../model/task-list';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]'); //Inicia a taskList com o conteúdo salvo no localStorage


  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck() { // chama o método setLocalStorage sempre que acontece alguma modificação
    this.setLocalStorage()
  }

  public setEmitTaskList(event: string) { //Aguarda um evento e adiciona a lista
    return this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) { //deleta o item da lista pelo índice
    return this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() { //método para limpar a lista
    const confirm = window.confirm("Tem certeza que deseja Deletar tudo?");

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }

  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

}
