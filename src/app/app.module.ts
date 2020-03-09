import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RadioComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { PlayerComponent } from './player/player.component';

import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChannelListItemComponent } from './channel-list-item/channel-list-item.component';

@NgModule({
  declarations: [
    RadioComponent,
    PlayerComponent,
    ChannelListItemComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSliderModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RadioComponent]
})
export class AppModule { }
