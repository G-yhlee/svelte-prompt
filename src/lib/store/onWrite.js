import {STATE_S,F_onWrite,F_onWrite_trigger} from './store'
export function onWrite(e) {
	let {y,target}= e.target.dataset
     STATE_S.update(s=>{s[target]=[e.target.value].map(str=>str.split(/\r?\n/) )[0] ; console.log(s[target]) ;return s})
    //  F_onWrite.update(f=>[e.target.value].map(str=>str.split(/\r?\n/) )[0] )
     F_onWrite.update(f=>e.target.value)
     F_onWrite_trigger.update(f=>f*-1)
}

