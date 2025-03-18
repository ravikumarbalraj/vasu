import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public payuform: any = {};
  MainURL: string = "";
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
  ButtonDisable: boolean = true;
  CountryData: any;
  StateData: any;
  CityData: any;
  productinfo: any;
  firstname: any;
  email: any;
  phone: any;
  address: any;
  amount: any;
  pincode: any;
  city: any;
  state: any;
  country: any;
  type_of_award: any;
  selection_ref_no: any;
  membership_type: any;
  journal: any;
  ms_id_no: any;
  title: any;
  description: any;
  payment_remarks: any;
  recaptcha: any;
  surl: any;
  furl: any;
  curl: any;
  key: any;
  hash: any;
  txnid: any;
  service_provider: any;
  action = "";
  About: any;
  url: string;
  SberImage: string;
  constructor(private commonService: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.MainURL = this.commonService.getMainURL();
    this.surl = this.MainURL + "Success";
    this.furl = this.MainURL + "Failure";
    this.curl = this.MainURL + "Cancel";
    this.service_provider = "payu_paisa";
    this.Submit = "Confirm";
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
    this.commonService.getData("", "getKey", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.recaptcha = response.data;
        }
        else {
          this.recaptcha = "";
        }
      } catch (err) {
        this.recaptcha = "";
      }
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
  }

  unsetValue() {
    this.AwardView = false;
    this.MembershipView = false;
    this.PublicationView = false;
    this.OthersView = false;
    this.selection_ref_no = "";
    this.membership_type = "";
    this.journal = "";
    this.ms_id_no = "";
    this.title = "";
    this.description = "";
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
    this.state = "";
    this.city = "";
    this.commonService.getData("", "states/" + country, "GETPublicWToken").subscribe((response: any) => {
      try {
        this.StateData = response;
      } catch (err) { this.StateData = []; }
    });
  }

  StateChg(state) {
    this.CityData = [];
    this.city = "";
    this.commonService.getData("", "cities/" + state, "GETPublicWToken").subscribe((response: any) => {
      try {
        this.CityData = response;
      } catch (err) { this.StateData = []; }
    });
  }

  onSubmit() {
    if (this.Submit == "Confirm") {
      this.form = this.formBuilder.group({
        'amount': [this.amount],
        'payment_for': [this.productinfo, [Validators.required]],
        'productinfo': [this.productinfo, [Validators.required]],
        'name': [this.firstname, Validators.required],
        'firstname': [this.firstname, Validators.required],
        'email': [this.email, [Validators.required, Validators.email]],
        'phone': [this.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        'address': [this.address],
        'pincode': [this.pincode],
        'city': [this.city, [Validators.required]],
        'state': [this.state, [Validators.required]],
        'country': [this.country, [Validators.required]],
        'type_of_award': [this.type_of_award],
        'selection_ref_no': [this.selection_ref_no],
        'membership_type': [this.membership_type],
        'journal': [this.journal],
        'ms_id_no': [this.ms_id_no],
        'title': [this.title],
        'description': [this.description],
        'payment_remarks': [this.payment_remarks],
        'recaptcha': [this.recaptcha],
        "service_provider": [this.service_provider],
        "furl": [this.furl],
        "surl": [this.surl]
      });
      this.Submit = "Loading....";
      const result = Object.assign({}, this.form.value);
      console.log(result);
      debugger;
      if (this.form.invalid) {
        this.Submit = "Confirm";
        //return;
      }
      this.commonService.getData(result, "Save_Payment", "POST").subscribe((response: any) => {
        try {
          this.ButtonDisable = false;
          this.BtnSuccess = true;
          this.Submit = "Pay Now";
          // this.key = response.data.key;
          // this.hash = response.data.hash;
          this.action = response.data.action;
          // this.txnid = response.data.txnid;
        } catch (err) {
        }
      });
    }
  }

}