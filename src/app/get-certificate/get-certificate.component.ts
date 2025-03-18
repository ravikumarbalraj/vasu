import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-certificate',
  templateUrl: './get-certificate.component.html',
  styleUrls: ['./get-certificate.component.scss']
})
export class GetCertificateComponent implements OnInit {

  public form: FormGroup;
  public submitMessage: string;
  public submitBG: string;
  Submit: string = "Submit";
  Journal: any;
  constructor(private commonService: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.Submit = "Submit";
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(2)]],
      'email': ['', [Validators.required, Validators.email]],
      'mobile': ['', Validators.required],
      'complete_affiliation': ['', Validators.required],
      'journal': ['', Validators.required],
      'certificate_type': ['', Validators.required],
      'manuscript': ['', Validators.required],
      'recaptcha': ['', Validators.required]
    });
    this.commonService.getData("", "Journal", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.Journal = response.data;
        }
        else {
          this.Journal = [];
        }
      } catch (err) { this.Journal = []; }
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
      this.commonService.getData(result, "Submitcertificate", "POST").subscribe((response: any) => {
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
