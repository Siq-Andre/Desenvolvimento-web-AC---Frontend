import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  editUserForm: FormGroup

  constructor(private router: Router){
    this.editUserForm = new FormGroup({
      name: new FormControl('Andre', Validators.required),
      email: new FormControl('andre@gmail.com', [Validators.required, Validators.email]),
      role: new FormControl('EngBE', Validators.required),
      password: new FormControl('987654321', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
    })
  }

  addUser(){
    console.log("Usuario adicionado")
    console.log(this.editUserForm.value)
    this.router.navigate(["/app/users"])
  }
}
