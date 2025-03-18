import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-membership',
  templateUrl: './join-membership.component.html',
  styleUrls: ['./join-membership.component.scss']
})
export class JoinMembershipComponent implements OnInit {

  url: string;
  public form: FormGroup;
  bankDetails: any;
  About: any;
  constructor(private commonService: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.url = this.commonService.getMainURL();
    this.commonService.getData("", "Bankdetail", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.bankDetails = response.data;
          console.log('bank', this.bankDetails[0]);
        }
        else {
          this.bankDetails = [];
        }
      } catch (err) { this.bankDetails = []; }
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

    this.form = this.formBuilder.group({
      'member_name': ['', [Validators.required]],
      'father_name': [''],
      'date_of_birth': [''],
      'highest_academic': [''],
      'outstanding_contribution': [''],
      'present_position': [''],
      'type_of_membership': [''],
      'offcial_address': [''],
      'residence_address': [''],
      'total_published': [''],
      'total_issued': [''],
      'transaction_id': [''],
      'amount_paid': [''],
      'signature': [''],
    });
  }

}
