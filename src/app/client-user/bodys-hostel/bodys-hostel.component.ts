import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ClientUsersComponent } from '../client-users/client-users.component';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-bodys-hostel',
  templateUrl: './bodys-hostel.component.html',
  styleUrls: ['./bodys-hostel.component.css']
})
export class BodysHostelComponent implements OnInit {
public gethostelDetalis;
public hostelDetalis
 

  constructor(public dialog: MatDialog,private US:UsersService) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(ClientUsersComponent, {
      width: '100%',
      height:'100%',
      panelClass:'boys-popup',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  ngOnInit() {
    this. boysHostelsDetails()
  }

  boysHostelsDetails(){
   
      this.US.usersGet()
         .subscribe(
          (response)=>{
            this.hostelDetalis = response; 
            this.gethostelDetalis=this.hostelDetalis
            console.log(this.gethostelDetalis,"kjsdnkjcndsknv");
                       })
          
        
  
  }



}
