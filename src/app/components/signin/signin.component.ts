import {Component, Input} from '@angular/core';
import {UserDTO} from "../../model/user-dto";

@Component({
  selector: 'app-singin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  userDTO:UserDTO;

  constructor() {
    this.userDTO = new UserDTO();
  }

  public register(){
    //console.log("Se registró el usuario con nickname " + this.userDTO.nickname) +  "hola mundo";
    console.log(this.userDTO);
  }

  public confirmPassword (){
    return this.userDTO.password == this.userDTO.confirmPassword;
  }
}
