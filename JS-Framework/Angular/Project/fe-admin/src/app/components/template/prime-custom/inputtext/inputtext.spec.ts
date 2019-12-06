import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InputText } from './inputtext';

@Component({
    template: `<input id="input" type="text" pInputText> `
  })
  class TestInputTextComponent {
  }
  
describe('InputText', () => {
  
    let inputtext: InputText;
    let fixture: ComponentFixture<TestInputTextComponent>;

    beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            NoopAnimationsModule
        ],
        declarations: [
            InputText,
            TestInputTextComponent
        ]
    });

    fixture = TestBed.createComponent(TestInputTextComponent);
    inputtext = fixture.debugElement.children[0].componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();
  
        const inputEl = fixture.debugElement.query(By.css('input'));
        expect(inputEl.nativeElement).toBeTruthy();
        expect(inputEl.nativeElement.className).toContain("ui-inputtext");
        expect(inputEl.nativeElement.className).toContain("ui-corner-all");
        expect(inputEl.nativeElement.className).toContain("ui-state-default");
        expect(inputEl.nativeElement.className).toContain("ui-widget");

    });

    it('should call updateFilledState', () => {
        fixture.detectChanges();
  
        const inputEl = fixture.debugElement.query(By.css('input'));
        inputEl.nativeElement.value = "primeng";
        inputEl.nativeElement.dispatchEvent(new Event("input"));
        fixture.detectChanges();

        expect(inputEl.nativeElement.className).toContain("ui-state-filled");
    });
});
