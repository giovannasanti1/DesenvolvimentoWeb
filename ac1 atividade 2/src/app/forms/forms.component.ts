import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {

  imcForm: FormGroup;
  imc: number;
  classificacao: string;
  imcResultado: number;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();

   }

  createForm() {
    this.imcForm = this.formBuilder.group({
      peso: ['', [Validators.required, Validators.min(1), Validators.max(500)]],
      altura: ['', [Validators.required, Validators.min(0.01), Validators.max(3)]]
    });
  }

  calculateIMC() {
    const peso = this.imcForm.get('peso').value;
    const altura = this.imcForm.get('altura').value;

    const imc = peso / (altura * altura);
    this.imcResultado = peso / (altura * altura);
    this.classificacao = this.getClassificacao(this.imc);
  }
  getClassificacao(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso normal';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Excesso de peso';
    } else if (imc >= 30 && imc <= 34.9) {
      return 'Obesidade classe I';
    } else if (imc >= 35 && imc <= 39.9) {
      return 'Obesidade classe II';
    } else {
      return 'Obesidade classe III';
    }
  }

}
