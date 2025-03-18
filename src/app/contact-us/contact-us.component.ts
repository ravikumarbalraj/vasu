import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public form: FormGroup;
  public submitMessage: string;
  public submitBG: string;
  Submit: string = "Submit";
  About: any;

  constructor(private commonService: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.Submit = "Submit";
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(2)]],
      'email': ['', [Validators.required, Validators.email]],
      'subject': ['', Validators.required],
      'message': [''],
      'contactcheck': [''],
      'recaptcha': ['', Validators.required]
    });
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
      this.commonService.getData(result, "Submitcontact", "POST").subscribe((response: any) => {
        try {
          this.Submit = "Submit";
          this.submitMessage = response.data.message;
          this.submitBG = response.data.colorcode;
        } catch (err) {
        }
      });
    }
  }

}
