import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        NgClass,
        RouterLink
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() name?: string;
    @Input() badge?: string;
    @Input() link?: string;
    @Input() subtitle?: string;
    @Input() description?: string;
    @Input() type: 'blue' | 'red' | 'green' | 'yellow' | 'gold' | 'orange' = 'gold';

}
