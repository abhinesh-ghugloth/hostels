import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../../users.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-client-users',
  templateUrl: './client-users.component.html',
  styleUrls: ['./client-users.component.css']
})
export class ClientUsersComponent implements OnInit {
public user;
public demosUser
  
constructor(
  public dialogRef: MatDialogRef<ClientUsersComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any ,private users:UsersService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.branchTableLists()
  }
  branchTableLists(){
    this.users.usersGet()
       .subscribe(
        (response)=>{
          this.user = response; 
          this.demosUser=this.user
          console.log(this.demosUser,"kjsdnkjcndsknv");
                     })
        
      }

  // import {MatDialogModule} from '@angular/material/dialog';

  close(){
    this.dialogRef.close()
  }
}
