import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.css']
})
export class InputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim(); //remove espaços em branco
     //(espaços, tabulações, quebras de linha, etc.)

    if(this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList); //envia dados através do Output com o emitter
      this.addItemTaskList = "";
    }
  }


}
