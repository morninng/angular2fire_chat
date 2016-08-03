import { Component, OnInit , AfterViewInit } from '@angular/core';
import * as Rx from "rxjs/Rx"
import * as $ from "jquery";

@Component({
  moduleId: module.id,
  selector: 'app-hadoken',
  templateUrl: 'hadoken.component.html',
  styleUrls: ['hadoken.component.css']
})
export class HadokenComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }



  ngAfterViewInit(){
/*

		const keydown_observable = Rx.Observable.fromEvent(document, 'keydown');
		const create_command = function(combination_key_arr, timeout : number, skill_execute){
			const get_source = () =>{
				let source = Rx.Observable.empty();
				combination_key_arr.forEach((keyCode, index)=>{
					let this_key_source = keydown_observable.filter((e: KeyboardEvent)=>{
						let is_collect = (e.keyCode === keyCode);
						if(is_collect === false){
							throw Error('incorrect key pressed');
						}else{
							return true;
						}
					}).take(1);
					if(index > 0){
						this_key_source = this_key_source.timeout(timeout);
					}
					source = source.concat(this_key_source);
				})
				return source;
			};


			const watch = function(){
				const source = get_source();
				source.subscribe(
					(e : KeyboardEvent)=>{
						console.log(e.keyCode);
						console.log("correct");
					},
					(error)=>{
						console.log(error.message);
						watch();
					},
					()=>{
						console.log("completed");
						watch();
						skill_execute();
					}
				)
			};
			watch();
		}

//https://developer.mozilla.org/ja/docs/Web/API/element/classList
//https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/jquery/jquery.d.ts
// http://dx.24-7.co.jp/flash-like-js-animation/
// hadoken_timeline

		let $ken = $('.ken');
		const $stage = $('.stage');
		let $fireball = null;
		const hadoken_init = function(){
			$fireball = $('<div class = "fireball"></div>');
			$ken.addClass('hadoken');
			$stage.append($fireball);
			console.log("hadoken init");
		}

		const hadoken_first = function(){
			$fireball.addClass('moving').animate({
				left: '+=250'
			},3000, "linear");
			console.log("hadoken first");
		}

		const hadoken_second = function(){
			$ken.removeClass("hadoken");
			console.log("hadoken_second");
		}

		const hadoken_third = function(){
			$fireball.addClass('explode');
			console.log("hadoken third");
		}
		const hadoken_timeline = [
			{ "animation": hadoken_init, "interval": 100 },
			{ "animation": hadoken_first, "interval": 1000 },
			{ "animation": hadoken_second, "interval": 1000 },
			{ "animation": hadoken_third, "interval": 1500 },
		]

		interface timeline_context{
			animation : string,
			interval : number
		};

		const execute_animation = (timeline) =>{
			let interval_sum = 0;
			let len = timeline.length;
			for(var i=0; i<len; i++){
				setTimeout(timeline[i].animation, interval_sum);
				interval_sum = interval_sum + timeline[i].interval;
			}
		}

		const skill = {
			hadoken : () => {
				console.log("execute hadoken");
				execute_animation(hadoken_timeline);
			},
			senpukyaku: ()=>{
			}
		};
		let keys = {left: 37,right: 39,	up: 38,	down: 40,a: 65,	s: 83};
		create_command([keys.left, keys.down, keys.right, keys.a], 500, skill.hadoken);
		//create_command([keys.right, keys.down, keys.left, keys.s], 500, skill.senpukyaku);

*/
  }




}
