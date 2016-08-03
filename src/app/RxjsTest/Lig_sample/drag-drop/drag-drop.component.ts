import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Rx from "rxjs/Rx"

@Component({
  moduleId: module.id,
  selector: 'app-drag-drop',
  templateUrl: 'drag-drop.component.html',
  styleUrls: ['drag-drop.component.css']
})
export class DragDropComponent implements OnInit, AfterViewInit {

  constructor() {

   }

  ngOnInit() {
  }


  ngAfterViewInit(){

		const box_element = document.getElementById("box");
		const mouseup_event = Rx.Observable.fromEvent(box_element, 'mouseup');
		const mousemove_event = Rx.Observable.fromEvent(box_element, 'mousemove');
		const mousedown_event = Rx.Observable.fromEvent(box_element, 'mousedown');

		const source = mousedown_event.flatMap( (event : MouseEvent) => {
			
			let start_pageX = event.pageX;
			let start_pageY = event.pageY;
			let start_left = box_element.offsetLeft;
			let start_top = box_element.offsetTop;
			console.log("start x" , start_pageX , 'start y' , start_pageY);
			console.log("start box left" , start_left , 'start box top' , start_top);
			box_element.className = "hovering";

			return mousemove_event.map((e : MouseEvent)=>{
				console.log("mouse x" , e.pageX , "mouse y" , e.pageY)
				return {
					left: start_left + (e.pageX - start_pageX),
					top: start_top + (e.pageY - start_pageY)
				};
			}).takeUntil(mouseup_event);
		});

		mouseup_event.subscribe(
			()=>{
				box_element.className = null;
			}
		);
		source.subscribe((pos)=>{
			console.log("pos X" , pos.left , "pos y" , pos.top);
			console.log("left", box_element.style.left , "top", box_element.style.top  )
			box_element.style.left = String(pos.left) + "px";
			box_element.style.top = String(pos.top) + "px";
			console.log("---------------");
		})

  }




}
