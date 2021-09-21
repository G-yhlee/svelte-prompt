<script>
</script>

<div id="container">
	<div id="item">
		<textarea id="sheet" class="sheet" tabindex="0" spellcheck="false" placeholder="Write now..."></textarea>
	</div>
</div>


<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
#container {
	display: grid;
	position: fixed;
	width: 100%; 
    height: 100%;
	left: 0; 
    top: 0;
    z-index: 10; 
	background: rgb(10, 10, 17);
}
#item{
	width: 50%;
	height: 80%;
	display: grid;
	color: rgb(153, 153, 177);;
 	align-self: center;
	justify-self: center;
	text-align: center;
	font-family: 'Jua', sans-serif;

}
#sheet{
	font-size: 18px;
	align-self: center;
	justify-self: center;
	background: rgba(25, 25, 25,1);
	resize: none;
	line-height: 35px;
    resize: none;
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    /* font: 18px/35px var(--work-font), monospace; */
    caret-color: var(--accent8);
    background: transparent;
    color: var(--base3);
    box-sizing: border-box;
    user-select: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    padding: calc(var(--header-height) + var(--x8)) var(--side-padding);
    min-height: 100%;
    overflow-y: scroll;
    transition: transform var(--transition-duration) ease;
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