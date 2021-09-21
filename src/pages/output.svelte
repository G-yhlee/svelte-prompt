<script>
	import { bufferCount, concat, filter, from, fromEvent, map, mapTo, merge, mergeMap, pluck, range, scan, skipLast, startWith, throttleTime, toArray } from 'rxjs';
	import {STATE_S} from '../lib/store/store.js'
	const lines = [
		"이들을 쉽게 설명하는 자료들도 많지 않거든요..!",
		"이건 시청자들에게 너무 불친절 하다 싶더라고요",
		"그래서 이러한 앱을 만들게 되었습니다",
		"이처럼 자막 모양의 프롬프터를 만들어서",
	]

	console.log($STATE_S.onWrite)
	// let lines = $STATE_S.onWrite
	const key$ = fromEvent(document, 'keydown').pipe(
		pluck('key'),
		filter(k=>k.includes('Arrow')),
		map(k=>{ return {
				ArrowUp : -1,
				ArrowDown : 1,
				ArrowRight: -1,
				ArrowLeft: 1
			}[k]})
	)

	const scroll$ = merge(
		fromEvent(document,'mousewheel'),
		fromEvent(document,'wheel'),
	).pipe(
		throttleTime(60),
		map( s=>  s.deltaY > 0 ? 1 : -1 )
	)


	const inputs$ = merge(
		key$,scroll$
	).pipe(startWith(0))


	const spaces = 4
	const spaces$ = range(0,spaces).pipe(mapTo(' '))
	const lines$ = (lines)=> concat(
		spaces$,from(lines),spaces$
	).pipe(
		bufferCount(spaces*2+1,1),
		skipLast(spaces*2),
		toArray()
	)


	const final$ = (lines)=>inputs$.pipe(
		scan((acc,cur) => {
			return Math.min(Math.max(acc +=cur,0),lines.length -1)
		}),
		mergeMap(cursor => {
			return lines$(lines).pipe(
				map(s=>s[cursor])
			)
		})
	)

	let texts;
	// final$($STATE_S.onWrite).subscribe((k) =>{ console.log(k); texts = k}) ;

$: { 
  ( 
    {
      F_01: ()=> "",
      F_10: ()=>"",
	  _: (lines)=> final$(lines).subscribe((k) =>{ console.log(k); texts = k}) 
    }[ "_" ]($STATE_S.onWrite)
  );
}

</script>

<div id="container">
	<div id="item">
		{#each texts as text , i}
			<div class="kansdlkn" id={i==4 ? "big" : ""}>
				{text}
			</div>
		{/each}
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
}

#item{
	display: grid;
	color: white;
 	align-self: center;
	justify-self: center;
	padding: 10px; 
}

.kansdlkn {
	text-align: center;
	padding: 10px 30px 10px 30px;
	font-family: 'Jua', sans-serif;
}

#big{
	margin: 20px;
	color: white;
	font-size: 30px;
	background-color: black;
	border:  2px solid  white ; 
	border-radius: 10px;
}
</style>