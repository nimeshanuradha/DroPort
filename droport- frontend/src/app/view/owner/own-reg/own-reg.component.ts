import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { $ } from 'protractor';
import { HttpClient,HttpResponse,HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";
import { } from 'rxjs/add/operator/map'
import { renderNode } from '@angular/core/src/view/util';
import { RequestOptions } from "@angular/http";




@Component({
  selector: 'app-own-reg',
  templateUrl: './own-reg.component.html',
  styleUrls: ['./own-reg.component.css']
})
export class OwnRegComponent implements OnInit {

  data_arr: any[]
  
  constructor(private http: HttpClient ){}


  ngOnInit() {
  }
  
  get_own_data():void{

    console.log(this.http.get("http://localhost:3000/req/asd"))
        

  }
 
}

