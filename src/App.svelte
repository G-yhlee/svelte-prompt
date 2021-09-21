<script>
import Input from "./pages/input.svelte";
import Output from "./pages/output.svelte";
import {STATE_S,F_onDone} from './lib/store/store.js'
import {onDone} from './lib/store/onDone.js'

let e_onDone;

$: { // onvideo
  ( // e.button
    {
      F_01: ()=> {e_onDone= "Close"},
      F_10: ()=> e_onDone="Done",
	  _: ()=> {e_onDone= "Done"},
    }[ $F_onDone]()
  );
  
}


</script>

<div id="main">
	<div data-target="onDone1" data-x={"S0"} data-y={$STATE_S.onDone}>
		<Input/>
	</div>
	<div data-target="onDone1" data-x={"S1"} data-y={$STATE_S.onDone}> 
		<Output/>
	</div>


</div>

<div id="footer">
	<div  id="button" data-target="onDone" data-y={$STATE_S.onDone} on:click={onDone} >{e_onDone}</div>
</div>

<style>

#footer{
	
	display: flex;
	position: absolute;
	bottom: 0;
	height: 8%;
	width: 100%;
	z-index: 12;
}
#button{
	align-self: center;
	justify-self: center;
	align-items: center;
	text-align: center;
	font-size: 18px;
	color: rgb(153, 153, 177,0.4);
	font-family: 'Jua', sans-serif;
	height: 100%;
	width: 100%;
	background-color: transparent;
	transition: 0.5s;
	border: none;
}
#button:hover{
	color: white;
}


[data-target="onDone1"]{
  display: none;
}

[data-target="onDone1"][data-x="S0"][data-y="S0"]{
	display:block;
}
[data-target="onDone1"][data-x="S1"][data-y="S1"]{
	display:block;
}


</style>