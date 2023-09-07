import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AboutComponent } from '../views/about/about.component';
import { ContactComponent } from '../views/contact/contact.component';
import { TourismComponent } from '../views/tourism/tourism.component';
import { FauneFloreComponent } from '../views/faune-flore/faune-flore.component';
import { BankComponent } from '../views/bank/bank.component';
import { CalendarPageComponent } from '../views/calendar-page/calendar-page.component';
import { ModalProductComponent } from '../components/comercial-calendar-content/modal-product/modal-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'contactez-nous', component: ContactComponent },
  { path: 'calendrier-commercial', component: CalendarPageComponent },
  { path: 'tous-les-secteurs/tourisme', component: TourismComponent },
  { path: 'tous-les-secteurs/faune-et-flore', component: FauneFloreComponent },
  { path: 'test', component: ModalProductComponent },
  { path: 'institutions-financieres', component: BankComponent}
  // { path: "secteur-industriel", component: IndustryComponent}
  // { path: "socio-economiques", component: SocialEcoComponent}
  // { path: "aides", component: HelpComponent}
  // { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
