import { Component } from '@angular/core';
import { CmdCrudService } from '../../Services/cmd-crud.service';

@Component({
  selector: 'app-commande-crud',
  standalone: true,
  imports: [],
  templateUrl: './commande-crud.component.html',
  styleUrl: './commande-crud.component.css'
})
export class CommandeCrudComponent {
  
  data=this.cmd.cmds;

  constructor(private cmd:CmdCrudService){

  }

}
