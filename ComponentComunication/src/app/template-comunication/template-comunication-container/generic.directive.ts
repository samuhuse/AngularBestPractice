import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGeneric]'
})
export class GenericDirective {

  text = 'additional text';

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    renderer.appendChild(elem.nativeElement, renderer.createText(this.text));
  }

  setText(text: string) {
    this.renderer.appendChild(this.elem.nativeElement, this.renderer.createText(text));
  }

}
