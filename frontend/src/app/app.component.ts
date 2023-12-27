import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  result:any;
  squareF!:FormGroup;
  registerF!:FormGroup;
  showForm:boolean=false;
  name:any;
  mobile:any;
  address:any;
  email:any;

  constructor(private socket:SocketService){}
  
  ngOnInit(): void {
    this.squareF=new FormGroup({
      value:new FormControl('')
    })

    this.registerF=new FormGroup({
      name:new FormControl(''),
      address:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
    })
  
  }

  makeSquare(){
    let post=this.squareF.value;
    this.socket.getData(post).subscribe((result:any)=>{
      this.result=result.value;
    })
  }

  submitF(){
    let post=this.registerF.value;
    this.socket.getData(post).subscribe((result:any)=>{
      if(result.status==1){
        this.showForm=true;
        this.result=result.data;
        this.name=this.result.name;
        this.mobile=this.result.mobile;
        this.address=this.result.address;
        this.email=this.result.email;
        this.registerF.reset();
      }else{
        this.showForm=false;
        alert(result.message);
      }
    })
  }

  gotohome(){
    this.showForm=false;
  }
}
