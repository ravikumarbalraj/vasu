import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  url:string; 
  Awards: any;
  AwardsToggle: number = 0;

  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.url=this.commonService.getMainURL();
    this.commonService.getData("", "Awards", "GET").subscribe((response: any) => {
      try {
        
        if (response.status == "Success") {
          this.Awards = response.data;
        }
        else {
          this.Awards = [];
        }
      } catch (err) {   this.Awards = [];   }
    });
  }

  
  funToggle(i:number)
  {
      this.AwardsToggle = i;
  }

}
