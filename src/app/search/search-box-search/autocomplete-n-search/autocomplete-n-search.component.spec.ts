import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AutocompleteNSearchComponent} from './autocomplete-n-search.component';

describe('AutocompleteNSearchComponent', () => {
    let component: AutocompleteNSearchComponent;
    let fixture: ComponentFixture<AutocompleteNSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AutocompleteNSearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AutocompleteNSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
