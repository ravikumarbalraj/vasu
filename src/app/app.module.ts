import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConferenceComponent } from './conference/conference.component';
import { AwardsComponent } from './awards/awards.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JoinMemberComponent } from './join-member/join-member.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { PaymentComponent } from './payment/payment.component';
import { GetCertificateComponent } from './get-certificate/get-certificate.component';
import { FellowMembersComponent } from './fellow-members/fellow-members.component';
import { JournalsComponent } from './journals/journals.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { JoinEditorialBoardComponent } from './join-editorial-board/join-editorial-board.component';
import { BecomeReviewerComponent } from './become-reviewer/become-reviewer.component';
import { EditorialProcessComponent } from './editorial-process/editorial-process.component';
import { SpecialIssueProposalComponent } from './special-issue-proposal/special-issue-proposal.component';
import { MembershipComponent } from './membership/membership.component';
import { CommonService } from './Services/common.service';
import { HttpClientModule } from '@angular/common/http';
import { DownloadComponent } from './download/download.component';
import { BioticaLifeMemberComponent } from './biotica-life-member/biotica-life-member.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { PublicationEthicsComponent } from './publication-ethics/publication-ethics.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { DisclaimerPolicyComponent } from './disclaimer-policy/disclaimer-policy.component';
import { CollaborateExistingComponent } from './collaborate-existing/collaborate-existing.component';
import { CollaborateNewComponent } from './collaborate-new/collaborate-new.component';
import { CollaborateSeminarComponent } from './collaborate-seminar/collaborate-seminar.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { FailurePaymentComponent } from './failure-payment/failure-payment.component';
import { CancelPaymentComponent } from './cancel-payment/cancel-payment.component';
import { MemberSingleComponent } from './member-single/member-single.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentTestingComponent } from './payment-testing/payment-testing.component';
import { LightboxModule } from 'ngx-lightbox';
import { JoinMembershipComponent } from './join-membership/join-membership.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ConferenceComponent,
    AwardsComponent,
    ActivitiesComponent,
    GalleryComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    JoinMemberComponent,
    ApplyNowComponent,
    PaymentComponent,
    GetCertificateComponent,
    FellowMembersComponent,
    JournalsComponent,
    GuidelinesComponent,
    JoinEditorialBoardComponent,
    BecomeReviewerComponent,
    EditorialProcessComponent,
    SpecialIssueProposalComponent,
    MembershipComponent,
    DownloadComponent,
    BioticaLifeMemberComponent,
    GalleryDetailComponent,
    PublicationEthicsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    DisclaimerPolicyComponent,
    CollaborateExistingComponent,
    CollaborateNewComponent,
    CollaborateSeminarComponent,
    SuccessPaymentComponent,
    FailurePaymentComponent,
    CancelPaymentComponent,
    MemberSingleComponent,
    PaymentTestingComponent,
    JoinMembershipComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    LightboxModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
