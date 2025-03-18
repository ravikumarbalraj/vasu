import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-fellow-members',
  templateUrl: './fellow-members.component.html',
  styleUrls: ['./fellow-members.component.scss']
})
export class FellowMembersComponent implements OnInit {
  id: any;
  MemberData: any;
  url: string;
  MainTitle: string;
  About: any;
  Member_Master: any;
  SberImage: string;
  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit() {
    this.SberImage = "assets/images/apply-now.jpg";
    this.activatedRoute.params.subscribe(
      params => {
        const id = +params['id'];
        this.getMembers(id);
      }
    );
  }
  getMembers(id) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.url = this.commonService.getMainURL();
    this.commonService.getData("", "MemberData?id=" + this.id, "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.MemberData = response.data;
          this.MainTitle = response.MainTitle;
        }
        else {
          this.MemberData = [];
        }
      } catch (err) { this.MemberData = []; }
    });
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
    this.commonService.getData("", "Member_Master?home=1", "GET").subscribe((response: any) => {
      try {
        console.log(response);
        if (response.status == "Success") {
          this.Member_Master = response.data;
        }
        else {
          this.Member_Master = [];
        }
      } catch (err) { this.Member_Master = []; }
    }, (err) => {
      if (err.status == 404) {
        window.location.href = err.url;
        console.log(err.url);
      }
    });
  }

}
