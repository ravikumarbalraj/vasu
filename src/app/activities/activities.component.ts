import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  ActivitiesToggle: number = 0;
  Activities: any[];

  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.commonService.getData("", "Activities", "GET").subscribe((response: any) => {
      try {
        
        if (response.status == "Success") {
          this.Activities = response.data;
        }
        else {
          this.Activities = [];
        }
      } catch (err) {   this.Activities = [];   }
    });
  }

  funToggle(i:number)
  {
      this.ActivitiesToggle = i;
  }
  

}
