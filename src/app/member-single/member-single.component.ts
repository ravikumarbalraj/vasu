import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../Services/common.service';
@Component({
  selector: 'app-member-single',
  templateUrl: './member-single.component.html',
  styleUrls: ['./member-single.component.scss']
})
export class MemberSingleComponent implements OnInit {

  ref_id: number;
  url:string; 
  MemberList: any;
  SingleMemberList: any;

  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.ref_id = params['ref_id'];
    });
    this.url=this.commonService.getMainURL(); 
    this.commonService.getData("", "SingleMember?ref_id="+this.ref_id, "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.MemberList = response.data;
          this.SingleMemberList = response.SingleData;
        }
        else {
          this.MemberList = [];
          this.SingleMemberList = [];
        }
      } catch (err) {   this.MemberList = [];
        this.SingleMemberList = [];   }
    });

  }


}
