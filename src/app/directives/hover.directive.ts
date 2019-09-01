import { Directive, ElementRef, Renderer, Renderer2, Input, Output } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  change: boolean;
  tooltip: HTMLElement;
  offset = 10;
  // tslint:disable-next-line:no-input-rename
  @Input('tooltip') tooltipTitle: string;
  @Input() placement: string;
  @Input() delay: number;
  // tslint:disable-next-line:no-input-rename
  // @Input('highlightColor') highlightColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter', ['$event']) onMouseEnter() {
        if (!this.tooltip) {
          this.show();
          console.log('tooltip yes');
        }
        // this.highlight(this.highlightColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
      if (this.tooltip) {
        this.hide();
        console.log('tooltip no');
      }
      // this.highlight(null);
    }

  show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }, this.delay);
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);

    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition() {

    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();

    const tooltipPos = this.tooltip.getBoundingClientRect();

    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top;
    let left;
    /*let right;
    let bottom;*/

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

  /*private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }*/

}
