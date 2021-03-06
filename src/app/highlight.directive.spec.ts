import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `

    <p testingHighlight="cyan">First</p>
    <p testingHighlight>Second</p>

  `
})
class DirectiveHostComponent { }

describe('HighlightDirective', () => {

  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [DirectiveHostComponent, HighlightDirective]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

});
