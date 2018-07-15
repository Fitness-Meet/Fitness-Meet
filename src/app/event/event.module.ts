import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card/event-card.component';
import { MatCardModule, MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
    ],
    declarations: [
        EventCardComponent
    ],
    exports: [
        EventCardComponent
    ]
})
export class EventModule { }
