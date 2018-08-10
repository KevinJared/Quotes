import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteUpvoteComponent } from './quote-upvote.component';

describe('QuoteUpvoteComponent', () => {
  let component: QuoteUpvoteComponent;
  let fixture: ComponentFixture<QuoteUpvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteUpvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteUpvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
