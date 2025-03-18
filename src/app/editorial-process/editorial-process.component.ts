import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-editorial-process',
  templateUrl: './editorial-process.component.html',
  styleUrls: ['./editorial-process.component.scss']
})
export class EditorialProcessComponent implements OnInit {
  About: any;
  url: string;

  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.url=this.commonService.getMainURL();
    this.commonService.getData("", "About", "GET").subscribe((response: any) => {
      try {
        
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
