import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-recorridos',
  templateUrl: './ver-recorridos.page.html',
  styleUrls: ['./ver-recorridos.page.scss'],
})
export class VerRecorridosPage implements OnInit {

  recorridos: any = require("src/assets/static/recorridos.json");

  id: any;
  recorrido_selecionado : any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let recorridos_list=this.recorridos.comunas;
    for(let item of recorridos_list){
      if(item.lugar==this.id){
        this.recorrido_selecionado = item;
      }
    }
    console.log(this.recorrido_selecionado);
  }

  volver(){
    this.router.navigate(['/tabs/tab2']);
  }

}
