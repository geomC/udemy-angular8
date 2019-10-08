import {
  Component,
  Input,
  OnChanges, SimpleChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy,
  ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  @ContentChild('contentParagraph', {static: true})
  contentParagraph: ElementRef;

  constructor() {
    console.log('contructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called, changes are ', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('value for heading at ngOnInit: ', this.header.nativeElement.textContent); // logs nothing as second arg
    console.log('value for contentParagraph at ngOnInit: ', this.contentParagraph.nativeElement.textContent); // logs nothing as second arg
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('value for heading at ngAfterViewInit', this.header.nativeElement.textContent); // logs the heading as second arg
    console.log('value for contentParagraph at ngAfterViewInit', this.contentParagraph.nativeElement.textContent); // logs the heading as second arg
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}
