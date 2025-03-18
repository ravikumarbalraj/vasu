import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-biotica-life-member',
  templateUrl: './biotica-life-member.component.html',
  styleUrls: ['./biotica-life-member.component.scss']
})
export class BioticaLifeMemberComponent implements OnInit {
  About: any;
  url: string;
  SberImage: string;
  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.SberImage = "assets/images/apply-now.jpg";
    this.url = this.commonService.getMainURL();
    this.commonService.getData("", "About", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.About = response.data;
        }
        else {
          this.About = [];
        }
      } catch (err) { this.About = []; }
    });
  }

}
