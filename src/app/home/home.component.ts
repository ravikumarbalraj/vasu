import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptionsMainBanner: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
  };
  customOptionseownedSpeakers: OwlOptions = {
    items: 4,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    autoHeight: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      540: {
        items: 2
      },
      740: {
        items: 4
      },
    },
  };
  meetTeams: OwlOptions = {
    items: 6,
    loop: true,
    margin: 20,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    autoHeight: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      540: {
        items: 3
      },
      740: {
        items: 4
      },
      850: {
        items: 5
      },
      1000: {
        items: 6
      },
    },
  };
  publicationImageSlider: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 900,
    nav: false,
    autoHeight: true,
    autoplayHoverPause: true,
    navText: ['', ''],
  };
  publicationSlider: OwlOptions = {
    items: 4,
    loop: true,
    margin: 20,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    autoHeight: true,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      540: {
        items: 2
      },
      740: {
        items: 4
      },
    },
  };
  reownedSpeakers: OwlOptions = {
    items: 4,
    loop: true,
    margin: 20,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    autoHeight: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      540: {
        items: 2
      },
      740: {
        items: 4
      },
    },
  };
  collaboratedWith: OwlOptions = {
    items: 6,
    loop: true,
    margin: 20,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: false,
    autoHeight: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      540: {
        items: 3
      },
      740: {
        items: 5
      },
      960: {
        items: 6
      },
    },
  };



  customOptionsPioneers: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    autoHeight: true,
    navText: ['', ''],
  };

  singleSliderWithNav: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    navText: ['', ''],
  }

  customOptionsAssociatedList: OwlOptions = {
    items: 2,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    autoHeight: true,
    navText: ['', ''],
  };

  customOptionsCertifiedBy: OwlOptions = {
    items: 3,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    autoHeight: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      540: {
        items: 2
      },
      740: {
        items: 3
      },
    },
  };

  customOptionsCollaborators: OwlOptions = {
    items: 4,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    autoHeight: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      540: {
        items: 2
      },
      740: {
        items: 4
      },
    },
  };



  latestNews: any;
  Slider: any;
  url: string;
  About: any;
  Member_Master: any;
  Vision_Message: any;
  Journal: any;
  Certified: any;
  Latest_News: any;
  SberImage: string;
  Collaborator: any;
  Renownedspeaker: any;
  LatestUpdates: any;
  WhatsNewList: any;
  Published_ArticlesList: any;
  Journal_Publication: any;
  Our_Team: any;
  AssociatedList: any;
  private albums: any = [];
  aboutNationPresidenttext: any;
  aboutNationPresidenttextReadMore: boolean;
  constructor(private commonService: CommonService, private _lightbox: Lightbox) { }


  ngOnInit() {
    this.url = this.commonService.getMainURL();
    this.SberImage = "assets/images/apply-now.jpg";

    this.commonService.getData("", "Slider", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.Slider = response.data;
        }
        else {
          this.Slider = [];
        }
      } catch (err) { this.Slider = []; }
    });

    this.commonService.getData("", "About", "GET").subscribe((response: any) => {
      try {

        if (response.status == "Success") {
          this.About = response.data;
          setTimeout(() => {
            this.aboutNationPresidentread(true);
          }, 100)
        }
        else {
          this.About = [];
        }
      } catch (err) { this.About = []; }
    });

    this.commonService.getData("", "Member_Master?home=1", "GET").subscribe((response: any) => {
      try {
        console.log(response);
        if (response.status == "Success") {
          this.Member_Master = response.data;
        }
        else {
          this.Member_Master = [];
        }
      } catch (err) { this.Member_Master = []; }
    }, (err) => {
      if (err.status == 404) {
        window.location.href = err.url;
        console.log(err.url);
      }
    });

    this.commonService.getData("", "Vision_Message", "GET").subscribe((response: any) => {
      try {

        if (response.status == "Success") {
          this.Vision_Message = response.data;
          for (let i = 0; i < response.data.length; i++) {
            const src = this.url + response.data[i].image;
            const caption = response.data[i].title;
            const thumb = this.url + response.data[i].image;
            const album = {
              src: src,
              caption: caption,
              thumb: thumb
            };
            this.albums.push(album);
            console.log(this.albums);
          }
        }
        else {
          this.Vision_Message = [];
        }
      } catch (err) { this.Vision_Message = []; }
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

    this.commonService.getData("", "Certified", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.Certified = response.data;
        }
        else {
          this.Certified = [];
        }
      } catch (err) { this.Certified = []; }
    });

    this.commonService.getData("", "Latest_News", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.latestNews = response.data;
        }
        else {
          this.latestNews = [];
        }
      } catch (err) { this.latestNews = []; }
    });

    this.commonService.getData("", "Collaborator", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.Collaborator = response.data;
        }
        else {
          this.Collaborator = [];
        }
      } catch (err) { this.Collaborator = []; }
    });

    this.commonService.getData("", "Our_Team", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.Our_Team = response.data;
        }
        else {
          this.Our_Team = [];
        }
      } catch (err) { this.Our_Team = []; }
    });

    this.commonService.getData("", "Renownedspeaker", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.Renownedspeaker = response.data;
        }
        else {
          this.Renownedspeaker = [];
        }
      } catch (err) { this.Renownedspeaker = []; }
    });



    this.commonService.getData("", "Journal_Publication", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.Journal_Publication = response.data;
        }
        else {
          this.Journal_Publication = [];
        }
      } catch (err) { this.Journal_Publication = []; }
    });



    this.commonService.getData("", "Latest_Update", "GET").subscribe((response: any) => {
      try {
        if (response.status == "Success") {
          this.LatestUpdates = response.data;
        }
        else {
          this.LatestUpdates = [];
        }
      } catch (err) { this.LatestUpdates = []; }
    });

    this.commonService.getData("", "WhatsNew", "GET").subscribe((response: any) => {
      try {

        if (response.status == "Success") {
          this.WhatsNewList = response.data;
        }
        else {
          this.WhatsNewList = [];
        }
      } catch (err) { this.WhatsNewList = []; }
    });

    this.commonService.getData("", "Associated", "GET").subscribe((response: any) => {
      try {

        if (response.status == "Success") {
          this.AssociatedList = response.data;
        }
        else {
          this.AssociatedList = [];
        }
      } catch (err) { this.AssociatedList = []; }
    });



    this.commonService.getData("", "Published_Articles", "GET").subscribe((response: any) => {
      try {

        if (response.status == "Success") {
          this.Published_ArticlesList = response.data;
        }
        else {
          this.Published_ArticlesList = [];
        }
      } catch (err) { this.Published_ArticlesList = []; }
    });

  }

  aboutNationPresidentread(cond: boolean) {
    if (cond) {
      let height = document.getElementById("nationPresidentimg").offsetHeight;
      let width = document.getElementById("nationPresidentP").offsetWidth;
      document.getElementById("nationPresidentP").style.maxHeight = height + "px";
      this.aboutNationPresidenttext = this.About.from_desk.substring(0, height + width + 10);
      this.aboutNationPresidenttext += "....";
      this.aboutNationPresidenttextReadMore = true;
    } else {
      document.getElementById("nationPresidentP").style.maxHeight = "inherit";
      this.aboutNationPresidenttext = this.About.from_desk;
      this.aboutNationPresidenttextReadMore = false;
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
