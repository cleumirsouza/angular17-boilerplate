import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

    private readonly _destroy = new Subject();

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this._destroy.complete();
        this._destroy.unsubscribe();
    }

}
