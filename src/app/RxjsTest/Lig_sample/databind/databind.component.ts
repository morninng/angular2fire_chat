import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Rx from "rxjs/Rx"
@Component({
  moduleId: module.id,
  selector: 'app-databind',
  templateUrl: 'databind.component.html',
  styleUrls: ['databind.component.css']
})
export class DatabindComponent implements OnInit, AfterViewInit  {

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit(){


		const text_input_element
		      = document.getElementById("text_container").getElementsByTagName("input")[0];
		const rx_txt_sub = new Rx.BehaviorSubject(text_input_element.value);

		const size_input_element
		      = document.getElementById("size_container").getElementsByTagName("input")[0];
		const rx_size_sub = new Rx.BehaviorSubject(size_input_element.value);

		const color_input_element
		      = document.getElementById("color_container").getElementsByTagName("input")[0];
		const rx_color_sub = new Rx.BehaviorSubject(size_input_element.value);



		const text_textbind = document.getElementById("text_bind");

		rx_txt_sub.subscribe((val)=>{
			text_textbind.innerText = val;
		})
		rx_size_sub.subscribe((val)=>{
			text_textbind.style.fontSize = val + "px";
		})
		rx_color_sub.subscribe((val)=>{
			text_textbind.style.color = val;
		})

		const bind = function(eType, elem, subject){
			Rx.Observable.fromEvent(elem, eType).subscribe( (e : any)=>{
				console.log(e.target.value)
				subject.next(e.target.value);
			})
		}
		bind('keyup',text_input_element, rx_txt_sub);
		bind('change',size_input_element, rx_size_sub);
		bind('change',color_input_element, rx_color_sub);

  }

}
