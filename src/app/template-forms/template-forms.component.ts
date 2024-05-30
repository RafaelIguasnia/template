import { Component } from "@angular/core";


interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}
@Component({
  selector: "app-template-forms",
  templateUrl: "./template-forms.component.html",
  styleUrls: ["./template-forms.component.css"]
})
export class TemplateFormsComponent {
  register: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
  };
  constructor(){}
  submit() {
    console.log("Datos de inicio de sesion");
    console.log(this.register.name);
    console.log(this.register.email);
    console.log(this.register.password);
    console.log(this.register.repeatPassword);

    if(this.register.password !== this.register.repeatPassword){
      console.log(
        "Hay que introducir las dos contraseñas iguales para validarlo"
      )
       
      
      return;
    }
}



}
