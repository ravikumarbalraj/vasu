import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-special-issue-proposal',
  templateUrl: './special-issue-proposal.component.html',
  styleUrls: ['./special-issue-proposal.component.scss']
})
export class SpecialIssueProposalComponent implements OnInit {
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
