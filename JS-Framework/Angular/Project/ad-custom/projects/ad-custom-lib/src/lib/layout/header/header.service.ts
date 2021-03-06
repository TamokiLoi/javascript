import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  public elementRef: ElementRef;

  /**
   * [offsetHeight description]
   * @method offsetHeight
   * @return [description]
   */
  public get offsetHeight(): number {
    return this.elementRef ? this.elementRef.nativeElement.offsetHeight : 0;
  }
}
