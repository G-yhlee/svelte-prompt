import {STATE_S,F_onWrite} from './store'
export function onWrite(e) {
	let {y,target}= e.target.dataset
     STATE_S.update(s=>{s[target]=[e.target.value].map(str=>str.split(/\r?\n/) )[0] ; console.log(s[target]) ;return s})
}

