import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email ]],
      cep: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null, Validators.required],
      rua: [null],
      cidade: [null],
      bairro: [null],
      estado: [null]
    });
    }

    onSubmit(){
      console.log(this.formulario.value);
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);
        //Reseta o form
        this.resetar();
      },
      (erro: any) => alert('Erro'));
    }
    resetar() {
      if(this.formulario.valid) {
        this.formulario.reset();
      }
    }

    verificaValidTouched(campo) {

      return this.formulario.get(campo).valid && this.formulario.get(campo).touched;

    }

    aplicaCssErro(campo){
      
    }

}
