import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  data: any;

  constructor(private service:ServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.getall()
  }
  getall(){
    this.service.getall().subscribe((res:any)=>{
      console.log('kkkkkkk',res);
      this.data=res
      console.log(this.data,'dataa')

    })

  }
  edit(userId: any) {
    this.router.navigate(['create'], { queryParams: { userId } })
  }
  // delete function
  delet(userId: any) {
    this.service.deletinguser(userId).subscribe((newUser) => {
       this.getall()

    })
  
}
}
