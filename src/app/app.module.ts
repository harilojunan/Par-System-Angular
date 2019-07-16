import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideBarComponent } from "./shared/side-bar/side-bar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DashboardComponent } from "./shared/dashboard/dashboard.component";
import { HeaderComponent } from './shared/header/header.component';
import { ScheduleparSingleComponent } from './component/schedulepar-single/schedulepar-single.component';
import { ScoreMyParComponent } from './component/score-my-par/score-my-par.component';
import { EvaluateParComponent } from './component/evaluate-par/evaluate-par.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    ScheduleparSingleComponent,
    ScoreMyParComponent,
    EvaluateParComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
