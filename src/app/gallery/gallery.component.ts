import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  GalleryList: any;
  url:string;  

  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.url=this.commonService.getMainURL();
    this.commonService.getData("", "Gallery", "GET").subscribe((response: any) => {
      try {
        
        if (response.status == "Success") {
          this.GalleryList = response.data;
        }
        else {
          this.GalleryList = [];
        }
      } catch (err) {   this.GalleryList = [];   }
    });
  }

}
