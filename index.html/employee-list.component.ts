import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Employee} from '../../../employee'
import { EmployeeService } from '../../../employee.service';




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[];
  constructor(private employeeService : EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
   this.getEmployees();
   
  }
 

//     this.employees=[{
//     "id":100,
//     "firstName":"Balaji",
//     "lastName":"Biradar",
//     "emailId":"balaji@gmail.com"

//   },
// {
//   "id":101,
//     "firstName":"vrushabh",
//     "lastName":"patil",
//     "emailId":"patil@gmail.com"

// },{

//   "id":200,
//     "firstName":"sudarshan",
//     "lastName":"jadhav",
//     "emailId":"jadhav@gmail.com"

// },
// {
//   "id":2210703,
//     "firstName":"vikram",
//     "lastName":"patil",
//     "emailId":"patil909@gmail.com"

// }
// ]
     
  
   private getEmployees(){
     this.employeeService.getEmployeesList().subscribe(data =>{
       this.employees=data;
     });
   }
   updateEmployee(id:number){
      this.router.navigate(['update-employee',id]);
   }

   employeeDetails(id:number){
    this.router.navigate(['employee-details',id]);
   }
   deleteEmployee(id:number){
     this.employeeService.deleteEmployee(id).subscribe( data =>{
      console.log(data); 
      // this.getEmployees(['delete-employee',id]);
     })
    
   }
}
