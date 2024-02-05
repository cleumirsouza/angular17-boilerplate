import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { LayoutHorizontalComponent } from './shared/components';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutHorizontalComponent],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    isAuthenticated$ = inject(AuthService).isAuthenticated$;

    ngOnInit(): void {
    }
}
