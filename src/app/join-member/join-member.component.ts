import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-member',
  templateUrl: './join-member.component.html',
  styleUrls: ['./join-member.component.scss']
})
export class JoinMemberComponent implements OnInit {

  public form: FormGroup;
  public submitMessage: string;
  public submitBG: string;
  PhotoBtn: string;
  BiodataBtn: string;
  PaymentBtn: string;
  Member_Master: any;
  Submit: string;
  BtnSuccess: boolean = false;
  PaymentDiv: any;
  About: any;
  url: string;
  SberImage: string;

  onFileChangePhoto(event) {
    this.PhotoBtn = "Uploading....";
    let formData = new FormData();
    for (var i = 0; i < event.length; i++) {
      formData.append("uploads", event[i], event[i].name);
    }
    this.commonService.getData(formData, "uploadimage", "FILE").subscribe((response: any) => {
      try {
        if (response.fileName != null) {
          this.form.get("photo").setValue(response.fileName);
          this.PhotoBtn = "Uploaded";
        }
        else {
          this.PhotoBtn = "Error Pls try Again";
          this.form.get("photo").setValue("");
        }
      } catch (err) { }
    }, (err) => {
      console.log(err);
    });
  }

  onFileChangeBiodata(event) {
    this.BiodataBtn = "Uploading....";
    let formData = new FormData();
    for (var i = 0; i < event.length; i++) {
      formData.append("uploads", event[i], event[i].name);
    }
    this.commonService.getData(formData, "uploadimage", "FILE").subscribe((response: any) => {
      try {
        if (response.fileName != null) {
          this.form.get("biodata").setValue(response.fileName);
          this.BiodataBtn = "Uploaded";
        }
        else {
          this.BiodataBtn = "Error Pls try Again";
          this.form.get("biodata").setValue("");
        }
      } catch (err) { }
    }, (err) => {
      console.log(err);
    });
  }

  onFileChangePayment(event) {
    this.PaymentBtn = "Uploading....";
    let formData = new FormData();
    for (var i = 0; i < event.length; i++) {
      formData.append("uploads", event[i], event[i].name);
    }
    this.commonService.getData(formData, "uploadimage", "FILE").subscribe((response: any) => {
      try {
        if (response.fileName != null) {
          this.form.get("payment_info").setValue(response.fileName);
          this.PaymentBtn = "Uploaded";
        }
        else {
          this.PaymentBtn = "Error Pls try Again";
          this.form.get("payment_info").setValue("");
        }
      } catch (err) { }
    }, (err) => {
      console.log(err);
    });
  }

  constructor(private commonService: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.Submit = "Submit";
    this.PhotoBtn = "Upload Passport Size Photo";
    this.BiodataBtn = "Upload CV/Biodate";
    this.PaymentBtn = "Upload information of Payment";
    
    this.url = this.commonService.getMainURL();
    this.SberImage = "assets/images/apply-now.jpg";
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

    this.commonService.getData("", "Member_Master?join=1", "GET").subscribe((response: any) => {
      try {

        if (response.status == "Success") {
          this.Member_Master = response.data;
        }
        else {
          this.Member_Master = [];
        }
      } catch (err) { this.Member_Master = []; }
    });


    this.form = this.formBuilder.group({
      'membership_type': ['', [Validators.required]],
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'complete_affiliation': [''],
      'photo': ['', [Validators.required]],
      'biodata': ['', [Validators.required]],
      'join_members_remarks': [''],
      'transaction_id': ['', [Validators.required]],
      'amount_paid': ['', [Validators.required]],
      'recaptcha': ['']
    });
    this.commonService.getData("", "getKey", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.form.get("recaptcha").setValue(response.data);
        }
        else {
          this.form.get("recaptcha").setValue('');
        }
      } catch (err) { this.form.get("recaptcha").setValue(''); }
    });
  }

  onSubmit() {
    if (this.Submit == "Submit") {
      this.Submit = "Loading....";
      const result = Object.assign({}, this.form.value);
      if (this.form.invalid) {
        this.Submit = "Submit";
        return;
      }
      this.commonService.getData(result, "JoimMember", "POST").subscribe((response: any) => {
        try {
          this.submitMessage = response.data.message;
          this.submitBG = response.data.colorcode;
          // let element: HTMLElement = document.getElementById("paynow") as HTMLElement;
          // if (element != null) {
          //   element.click();
          // }
          this.BtnSuccess = true;
          this.Submit = "Submit";
        } catch (err) {
        }
      });
    }
  }



  getPaymentInfo(event) {
    let value = event.target['options']
    [event.target['options'].selectedIndex].text;
    this.commonService.getData({ title: value }, "API_Button", "POST").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          if (response.data != null && response.data.title != undefined) {
            if (response.data.btn_value != '' && response.data.btn_value != null) {
              this.PaymentDiv = response.data.btn_value;
            }
            else {
              this.PaymentDiv = '';
            }
          } else {
            this.PaymentDiv = '';
          }
        }
        else {
          this.Member_Master = [];
          this.PaymentDiv = '';
        }
      } catch (err) {
        this.Member_Master = [];
        this.PaymentDiv = '';
      }
    });
  }

}
