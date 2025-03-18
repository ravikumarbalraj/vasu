import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  download: any;
  url:string;
  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.url=this.commonService.getMainURL();
    this.commonService.getData("", "Download", "GET").subscribe((response: any) => {
      try {
        
        if (response.status == "Success") {
          this.download = response.data;
        }
        else {
          this.download = [];
        }
      } catch (err) {   this.download = [];   }
    });
  }

}
