import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-publication-ethics',
  templateUrl: './publication-ethics.component.html',
  styleUrls: ['./publication-ethics.component.scss']
})
export class PublicationEthicsComponent implements OnInit {

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
