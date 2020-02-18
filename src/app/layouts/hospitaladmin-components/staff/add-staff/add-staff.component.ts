import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffService } from 'app/shared/services/staff.service';
import { NotificationsService } from 'app/shared/services/notifications.service'
import { MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class StaffComponent implements OnInit {
  


 
  constructor(private service : StaffService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<StaffComponent>
    ) { }

 

  ngOnInit() {
      this.service.getStaff();
    }

    onClear(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      
      
    }

    onSubmit(){
      if(this.service.form.valid){
        if(!this.service.form.get('$key').value)
          this.service.insertStaff(this.service.form.value);
        else
        this.service.updateStaff(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success('Submitted Successfully');
        this.onClose();
        
        
      }
    }

    onClose(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }



}

