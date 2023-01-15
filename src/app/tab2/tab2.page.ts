import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{

  recorridos_list: any[] = [];
  recorridos: any = require("src/assets/static/recorridos.json");

  constructor(private router: Router) {}
  ngOnInit(): void {
    
    this.recorridos_list=this.recorridos.comunas;
    console.log(this.recorridos_list);
    //throw new Error('Method not implemented.');
  }

  verRecorrido(id: string){
    this.router.navigate(['/tabs/tab2/ver-recorridos',id])
  }

}
