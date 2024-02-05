import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule, LogoComponent],
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    private readonly _router = inject(Router);
    private readonly _authService = inject(AuthService);

    onClickSignOut(): void {
        this._authService.logout();
        this._router.navigate(['/auth/login']);
    }
}
