import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownModule } from '../../template/adminlte-custom';
import { HeaderInnerComponent } from './header-inner.component';

describe('HeaderInnerComponent', () => {
    let component: HeaderInnerComponent;
    let fixture: ComponentFixture<HeaderInnerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [DropdownModule],
            declarations: [HeaderInnerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderInnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
