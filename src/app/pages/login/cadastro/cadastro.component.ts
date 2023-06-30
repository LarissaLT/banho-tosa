import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {AuthenticationHttpService} from '../../../service/authenticationHttp.service';


@Component({
  selector: 'cadastro-cmp',
  moduleId: module.id,
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.css']
})

export class CadastroComponent implements OnInit{

  password: string;
  showPassword: boolean;

  constructor(
    private authenticationService: AuthenticationHttpService, private router: Router, private route: ActivatedRoute) {

    this.showPassword = undefined;
  }

  ngOnInit() { }


  }
