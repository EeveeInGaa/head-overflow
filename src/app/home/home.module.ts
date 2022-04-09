import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SeparatorComponent } from '../components/separator/separator.component';
import { HeadingComponent } from '../components/heading/heading.component';
import { ButtonComponent } from '../components/button/button.component';
import { SplitterComponent } from '../components/splitter/splitter.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    SeparatorComponent,
    HeadingComponent,
    ButtonComponent,
    SplitterComponent,
    HeaderComponent,
  ],
})
export class HomePageModule {}
