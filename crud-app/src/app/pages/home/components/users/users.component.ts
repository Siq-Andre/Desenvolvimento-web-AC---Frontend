import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList = [
    {nome: 'Andre', email: 'andre@gmail.com', funcao: 'Engenheiro de BE' },
    {nome: 'Rafael', email: 'rafael@gmail.com', funcao: 'Líder Técnico' },
    {nome: 'Pedro', email: 'pedro@gmail.com', funcao: 'Analista de Dados' }
  ];

  constructor(private router: Router){

  }

  chamaEdita(){
    this.router.navigate(["/app/edit-user"])
  }

  excluiUsuario(user: any, index: number){
    this.userList.splice(index, 1)
  }

  criaNovoUsuario(){
    this.router.navigate(["app/add-user"])
  }
}
