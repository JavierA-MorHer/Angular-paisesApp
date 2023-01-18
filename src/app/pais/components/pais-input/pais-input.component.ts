import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.debouncer
        .pipe( debounceTime(1000) )
        .subscribe( valor => {
          this.onDebounce.emit( valor )
    })
  }

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  @Input()  placeholder:string ='';

  debouncer: Subject<string> = new Subject();

  termino :string = '';

  

  buscar( ){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( event:any){
    this.debouncer.next( this.termino );

  }

}
