<script>
import Input from "./pages/input.svelte";
import Output from "./pages/output.svelte";
</script>

<div id="main">
<Input/>
<!-- <Output/> -->
</div>

<div id="footer">
	<button  id="button" >Done</button>
</div>

<style>
#footer{
	position: absolute;
	bottom: 0;
	height: 10%;
	width: 100%;
	z-index: 12;
}
#button{
	font-size: 18px;
	color: rgb(153, 153, 177,0.4);
	font-family: 'Jua', sans-serif;
	height: 100%;
	width: 100%;
	background-color: transparent;
	transition: 0.5s;
}
#button:hover{
	color: white;
	

}
</style>