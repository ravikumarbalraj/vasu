import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
  ref_id: number;
  url:string; 
  GalleryList: any;
  SingleGalleryList: any;

  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.ref_id = params['ref_id'];
    });
    this.url=this.commonService.getMainURL(); 
    this.commonService.getData("", "SingleGallery?ref_id="+this.ref_id, "GET").subscribe((response: any) => {
      try {
        
        if (response.status == "Success") {
          this.GalleryList = response.data;
          this.SingleGalleryList = response.SingleData;
        }
        else {
          this.GalleryList = [];
          this.SingleGalleryList = [];
        }
      } catch (err) {   this.GalleryList = [];
        this.SingleGalleryList = [];   }
    });

  }

}
