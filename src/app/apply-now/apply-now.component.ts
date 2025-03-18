import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit {


  public form: FormGroup;
  public submitMessage: string;
  public submitBG: string;
  Journal: any;
  PhotoBtn: string;
  BiodataBtn: string;
  Submit: string = "";
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
          debugger;
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
          debugger;
          this.form.get("biodata").setValue(response.fileName);
          console.log(this.form.value);
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

  constructor(private commonService: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SberImage = "assets/images/apply-now.jpg";
    this.Submit = "Submit";
    this.PhotoBtn = "Upload Passport Size Photo";
    this.BiodataBtn = "Upload CV/Biodate";
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

    this.form = this.formBuilder.group({
      'journal': ['', [Validators.required, Validators.minLength(2)]],
      'member_type': ['', [Validators.required]],
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'complete_affiliation': [''],
      'photo': ['', [Validators.required]],
      'biodata': ['', [Validators.required]],
      'recaptcha': ['', Validators.required],
      'membership_id': ['', Validators.required]
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
      this.commonService.getData(result, "ApplyNow", "POST").subscribe((response: any) => {
        try {
          this.submitMessage = response.data.message;
          this.submitBG = response.data.colorcode;
          this.Submit = "Submit";
        } catch (err) {
        }
      });
    }
  }

}
