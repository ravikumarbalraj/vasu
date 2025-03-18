import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConferenceComponent } from './conference/conference.component';
import { AwardsComponent } from './awards/awards.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
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
import { JoinMembershipComponent } from './join-membership/join-membership.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Success', component: SuccessPaymentComponent },
  { path: 'Failure', component: FailurePaymentComponent },
  { path: 'Cancel', component: CancelPaymentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'conference', component: ConferenceComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'join-member', component: JoinMemberComponent },
  { path: 'join-membership', component: JoinMembershipComponent },
  { path: 'apply-now', component: ApplyNowComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'get-certificate', component: GetCertificateComponent },
  { path: 'members/:id', component: FellowMembersComponent },
  { path: 'member-detail', component: MemberSingleComponent },
  { path: 'journals', component: JournalsComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'join-editorial-board', component: JoinEditorialBoardComponent },
  { path: 'become-reviewer', component: BecomeReviewerComponent },
  { path: 'editorial-process', component: EditorialProcessComponent },
  { path: 'special-issue-proposal', component: SpecialIssueProposalComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'biotica-life-member', component: BioticaLifeMemberComponent },
  { path: 'gallery-detail', component: GalleryDetailComponent },
  { path: 'publication-ethics', component: PublicationEthicsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'disclaimer-policy', component: DisclaimerPolicyComponent },
  { path: 'collaborate-existing', component: CollaborateExistingComponent },
  { path: 'propose-new-journal', component: CollaborateNewComponent },
  { path: 'collaborate-seminar', component: CollaborateSeminarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
