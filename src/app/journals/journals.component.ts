import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.scss']
})
export class JournalsComponent implements OnInit {

  url:string; 
  Journal: any[];

  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.url=this.commonService.getMainURL();
    this.commonService.getData("", "Journal", "GET").subscribe((response: any) => {
      try {
        
        if (response.status == "Success") {
          this.Journal = response.data;
        }
        else {
          this.Journal = [];
        }
      } catch (err) {   this.Journal = [];   }
    });
  }

}
