import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  detail:any
  username:any;
  userage:any;
  userjob:any
  title: any;
  userId:any
  // allUsers: any;
  body: any;
  changingname:any='submit'
  update:any=false;

  constructor( private service:ServiceService,private router:Router, private aRoute:ActivatedRoute) {
    this.aRoute.queryParams.subscribe(params => {
        this.userId = params['userId'];
        if(this.userId != undefined) {
        this.service.getId(this.userId).subscribe((res: any) => {
          console.log(res, 'respone')
          this.update = true;
          this.changingname = 'update';
          this.userId = res[0].id;
          this.username = res[0].name;
          this.userage = res[0].age;
          this.userjob = res[0].job;
        })  
      }
      })
       
  }

  



  ngOnInit(): void {
  }

  addUser(){
    if (this.update==false) {

      //console.log({name:this.username,age:this.userage,job:this.userjob}, 'ssssss')

      this.service.addinguser({ name: this.username, age: this.userage, job: this.userjob }).subscribe((newUser) => {

        // console.log(newUser)

        this.router.navigate(['/read'])

      })
        
    } else {

      this.service.edituser({ id: this.userId, name: this.username, age: this.userage, job: this.userjob }).subscribe((newUser) => {

        // console.log(newUser)
        this.router.navigate(['/read'])

      })

    }

  }
}
