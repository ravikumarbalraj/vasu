import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-collaborate-seminar',
  templateUrl: './collaborate-seminar.component.html',
  styleUrls: ['./collaborate-seminar.component.scss']
})
export class CollaborateSeminarComponent implements OnInit {

  About: any;
  url: string;

  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.url=this.commonService.getMainURL();
    this.commonService.getData("", "About", "GET").subscribe((response: any) => {
      try {        
        debugger;
        if (response.status == "Success") {
          this.About = response.data; 
        }
        else {
          this.About = [];
        }
      } catch (err) {   this.About = [];   }
    });
  }

}
