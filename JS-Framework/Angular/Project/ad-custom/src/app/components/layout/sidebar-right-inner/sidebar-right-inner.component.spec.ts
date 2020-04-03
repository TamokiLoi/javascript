import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRightInnerComponent } from './sidebar-right-inner.component';
import { TabsModule, LayoutModule } from 'ad-custom-lib';

describe('SidebarRightInnerComponent', () => {
    let component: SidebarRightInnerComponent;
    let fixture: ComponentFixture<SidebarRightInnerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                LayoutModule.forRoot(null),
                TabsModule
            ],
            declarations: [SidebarRightInnerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarRightInnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
