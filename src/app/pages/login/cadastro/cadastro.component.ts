import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {CadastroHttpService, Cliente} from '../../../service/cadastroHttp.service';

@Component({
  selector: 'cadastro-cmp',
  moduleId: module.id,
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.css']
})

export class CadastroComponent implements OnInit{
  erro: string;
  cliente: Cliente = {} as Cliente;

  password: string;
  showPassword: boolean;

  constructor(
    private cadastroService: CadastroHttpService, private router: Router, private route: ActivatedRoute) {

    this.showPassword = undefined;
  }



  ngOnInit() { }

  salvarCliente(cliente: Cliente) {
    this.cadastroService.salvar(cliente).subscribe(
      {
        next: (clienteSalvo: Cliente) => {
          console.log('Cliente salvo:', clienteSalvo);
          this.router.navigate(['tutor-listar']);
        },
        error: (err: any) => {
          console.log('ERROR:', err);
          alert('Ocorreu um erro ao salvar o cliente.');
          this.erro = err;
        }
      }
    );
  }
  }
