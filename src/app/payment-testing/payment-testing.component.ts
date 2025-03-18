import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-testing',
  templateUrl: './payment-testing.component.html',
  styleUrls: ['./payment-testing.component.scss']
})
export class PaymentTestingComponent implements OnInit {

  public form: FormGroup;
  public submitMessage: string;
  public submitBG: string;
  PhotoBtn: string;
  BiodataBtn: string;
  PaymentBtn: string;
  Member_Master: any;
  Submit: string;
  BtnSuccess: boolean = false;
  AwardView: boolean = false;
  MembershipView: boolean = false;
  PublicationView: boolean = false;
  OthersView: boolean = false;
  PaymentDiv: string;

  CountryData: any;
  StateData: any;
  CityData: any;
  About: any;
  url: string;
  SberImage: string;
  constructor(private commonService: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.Submit = "Pay Now";
    this.PhotoBtn = "Upload Passport Size Photo";
    this.BiodataBtn = "Upload CV/Biodate";
    this.PaymentBtn = "Upload information of Payment";
    this.commonService.getData("", "getaccesstoken", "GETPublic").subscribe((response: any) => {
      try {
        if (response != null && response.auth_token != null)
          this.commonService.setAuthToken(response.auth_token);
        this.commonService.getData("", "countries", "GETPublicWToken").subscribe((response: any) => {
          try {
            this.CountryData = response;
          } catch (err) { this.CountryData = []; }
        });
      } catch (err) { this.CountryData = []; }
    });
    this.commonService.getData("", "Member_Master", "GET").subscribe((response: any) => {
      try {

        if (response.status == "Success") {
          this.Member_Master = response.data;
        }
        else {
          this.Member_Master = [];
        }
      } catch (err) { this.Member_Master = []; }
    });

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

    this.form = this.formBuilder.group({
      'payment_for': ['', [Validators.required]],
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'address': [''],
      'pincode': [''],
      'city': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'type_of_award': [''],
      'selection_ref_no': [''],
      'membership_type': [''],
      'journal': [''],
      'ms_id_no': [''],
      'title': [''],
      'description': [''],
      'payment_remarks': [''],
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

  unsetValue() {
    this.AwardView = false;
    this.MembershipView = false;
    this.PublicationView = false;
    this.OthersView = false;
    this.form.get("selection_ref_no").setValue('');
    this.form.get("membership_type").setValue('');
    this.form.get("journal").setValue('');
    this.form.get("ms_id_no").setValue('');
    this.form.get("title").setValue('');
    this.form.get("description").setValue('');
    this.PaymentDiv = '';
  }

  paymentchg(value) {
    this.unsetValue();
    if (value == "Award registration charges") {
      this.AwardView = true;
    }
    else if (value == "Membership charges") {
      this.MembershipView = true;
    }
    else if (value == "Publication charges") {
      this.PublicationView = true;
    }
    else if (value == "Parcel/Postal charges") {
      this.OthersView = true;
      this.getPaymentInfo(value);
    }
  }

  getPaymentInfo(value) {
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


  CountryChg(country) {
    this.CityData = [];
    this.StateData = [];
    this.form.get("state").setValue('');
    this.form.get("city").setValue('');
    this.commonService.getData("", "states/" + country, "GETPublicWToken").subscribe((response: any) => {
      try {
        this.StateData = response;
      } catch (err) { this.StateData = []; }
    });
  }

  StateChg(state) {
    this.CityData = [];
    this.form.get("city").setValue('');
    this.commonService.getData("", "cities/" + state, "GETPublicWToken").subscribe((response: any) => {
      try {
        this.CityData = response;
      } catch (err) { this.StateData = []; }
    });
  }


  onSubmit() {
    if (this.Submit == "Pay Now") {
      this.Submit = "Loading....";
      const result = Object.assign({}, this.form.value);
      console.log(result);
      if (this.form.invalid) {
        this.Submit = "Pay Now";
        return;
      }
      this.commonService.getData(result, "Save_Payment", "POST").subscribe((response: any) => {
        try {
          this.submitMessage = response.data.message;
          this.submitBG = response.data.colorcode;
          let element: HTMLElement = document.querySelector(".paynow") as HTMLElement;
          if (element != null) {
            element.click();
          }
          this.BtnSuccess = true;
          this.Submit = "Pay Now";
        } catch (err) {
        }
      });
    }
  }

}