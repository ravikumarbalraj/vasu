import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {
  Conference: any;
  url:string; 

  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.url=this.commonService.getMainURL();
    this.commonService.getData("", "Conference", "GET").subscribe((response: any) => {
      try {
        
        if (response.status == "Success") {
          this.Conference = response.data;
        }
        else {
          this.Conference = [];
        }
      } catch (err) {   this.Conference = [];   }
    });
  }

}
