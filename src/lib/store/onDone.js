import {STATE_S,F_onDone} from './store'
export function onDone(e) {
	let {y,target}= e.target.dataset
	F_onDone.update( f => {
		//f
		f = y == "S0" ? "F_01" 
			: y == "S1"  ? "F_10" 
			: "_"
		//s
		;(
			{
			F_01: ({y})=> STATE_S.update(s=>{s[y]="S1"; return s}),
			F_10: ({y})=> STATE_S.update(s=>{s[y]="S0"; return s}),
			_: ({y})=> "_",
			}[f ]( {y: target})
		);
	return f
	})
}

