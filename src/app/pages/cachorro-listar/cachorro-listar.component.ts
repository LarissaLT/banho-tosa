import {Component, OnInit} from '@angular/core';
import {Cachorro, CachorroHttpService} from 'app/service/cachorroHttp.service';
import {Router} from '@angular/router';
import {AuthTokenService} from '../../service/authToken.service';

@Component({
  selector: 'cachorro-listar-cmp',
  moduleId: module.id,
  templateUrl: 'cachorro-listar.component.html'
})

export class ListaCachorroComponent implements OnInit {

  constructor(private cachorroService: CachorroHttpService, private router: Router, public authTokenService:AuthTokenService) {
  }

  public cachorrosTableData: Cachorro[];
  erro: string

  ngOnInit() {
    this.listarCachorro()
  };

  cadastrarCachorro() {
    this.router.navigate(['/cachorro']);
  }

  listarCachorro() {
    this.cachorroService.listar().subscribe(
      {
        next: (response: Cachorro[]) => {
          this.cachorrosTableData = response.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
          });
        },
        error: (err: any) => {
          console.log('ERROR: ' + err)
          alert('ERRO')
          this.erro = err
        },
        complete: function () {
          console.log('Completed');
        }
      }
    )
  }

  deletarCachorro(id: number) {
    const confirmacao = confirm('Tem certeza que deseja deletar o cachorro?');

    if (confirmacao) {
      this.cachorroService.deletar(id).subscribe(
        {
          next: () => {
            console.log('Cachorro deletado:');
            this.listarCachorro();
          },
          error: (err: any) => {
            console.log('ERROR:', err);
            alert('Ocorreu um erro ao deletar o cachorro.');
            this.erro = err;
          }
        }
      );
    } else {
      console.log('Deleção cancelada pelo usuário.');
    }
  }
}
