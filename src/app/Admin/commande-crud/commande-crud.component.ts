import { Component, OnInit } from '@angular/core';
import { CmdCrudService } from '../../Services/cmd-crud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commande-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commande-crud.component.html',
  styleUrl: './commande-crud.component.css'
})
export class CommandeCrudComponent implements OnInit {
  
  data=this.cmd.cmds;
  
  constructor(private cmd:CmdCrudService){
    
  }
  ngOnInit(): void {
    
  }

}
