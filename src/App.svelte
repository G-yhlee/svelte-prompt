<script>
	import { bufferCount, concat, filter, from, fromEvent, map, mapTo, merge, mergeMap, pluck, range, scan, skipLast, startWith, throttleTime, toArray } from 'rxjs';
	const lines = [
		"이들을 쉽게 설명하는 자료들도 많지 않거든요",
		"이건 시청자들에게 너무 불친절 하다 싶더라고요",
		"그래서 이러한 앱을 만들게 되었습니다",
		"이처럼 자막 모양의 프롬프터를 만들어서",
		"이걸 읽어가면서 동시에 화면도 녹화한다음 ",
		"화려 강산",
		"대한 사람 대한으로",
		"길이 보전하세",
		"남산 위의 저 소나무",
		"철갑을 두른 듯",
		"바람 서리 불변함은",
		"우리 기상일세",
		'무궁화 삼천리',
		'화려 강산',
		'대한 사람 대한으로',
		'길이 보전하세',
		"동해물과 백두산이",
		"마르고 닳도록",
		"하느님이 보우하사",
		"우리나라 만세",
		"무궁화 삼천리",
		"화려 강산",
		"대한 사람 대한으로",
		"길이 보전하세",
		"남산 위의 저 소나무",
		"철갑을 두른 듯",
		"바람 서리 불변함은",
		"우리 기상일세",
		'무궁화 삼천리',
		'화려 강산',
		'대한 사람 대한으로',
		'길이 보전하세',
		"동해물과 백두산이",
		"마르고 닳도록",
		"하느님이 보우하사",
		"우리나라 만세",
		"무궁화 삼천리",
		"화려 강산",
		"대한 사람 대한으로",
		"길이 보전하세",
		"남산 위의 저 소나무",
		"철갑을 두른 듯",
		"바람 서리 불변함은",
		"우리 기상일세",
		'무궁화 삼천리',
		'화려 강산',
		'대한 사람 대한으로',
		'길이 보전하세',
		"동해물과 백두산이",
		"마르고 닳도록",
		"하느님이 보우하사",
		"우리나라 만세",
		"무궁화 삼천리",
		"화려 강산",
		"대한 사람 대한으로",
		"길이 보전하세",
		"남산 위의 저 소나무",
		"철갑을 두른 듯",
		"바람 서리 불변함은",
		"우리 기상일세",
		'무궁화 삼천리',
		'화려 강산',
		'대한 사람 대한으로',
		'길이 보전하세',
		"동해물과 백두산이",
		"마르고 닳도록",
		"하느님이 보우하사",
		"우리나라 만세",
		"무궁화 삼천리",
		"화려 강산",
		"대한 사람 대한으로",
		"길이 보전하세",
		"남산 위의 저 소나무",
		"철갑을 두른 듯",
		"바람 서리 불변함은",
		"우리 기상일세",
		'무궁화 삼천리',
		'화려 강산',
		'대한 사람 대한으로',
		'길이 보전하세',
		"동해물과 백두산이",
		"마르고 닳도록",
		"하느님이 보우하사",
		"우리나라 만세",
		"무궁화 삼천리",
		"화려 강산",
		"대한 사람 대한으로",
		"길이 보전하세",
		"남산 위의 저 소나무",
		"철갑을 두른 듯",
		"바람 서리 불변함은",
		"우리 기상일세",
		'무궁화 삼천리',
		'화려 강산',
		'대한 사람 대한으로',
		'길이 보전하세',
		"동해물과 백두산이",
		"마르고 닳도록",
		"하느님이 보우하사",
		"우리나라 만세",
		"무궁화 삼천리",
		"화려 강산",
		"대한 사람 대한으로",
		"길이 보전하세",
		"남산 위의 저 소나무",
		"철갑을 두른 듯",
		"바람 서리 불변함은",
		"우리 기상일세",
		'무궁화 삼천리',
		'화려 강산',
		'대한 사람 대한으로',
		'길이 보전하세',
	]

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
		map( s=> s.deltaY > 0 ? 1 : -1 )
	)


	const inputs$ = merge(
		key$,scroll$
	).pipe(startWith(0))


	const spaces = 4
	const spaces$ = range(0,spaces).pipe(mapTo(' '))
	const lines$ = concat(
		spaces$,from(lines),spaces$
	).pipe(
		bufferCount(spaces*2+1,1),
		skipLast(spaces*2),
		toArray()
	)
	const final$ = inputs$.pipe(
		scan((acc,cur) => {
			return Math.min(Math.max(acc +=cur,0),lines.length -1)
		}),
		mergeMap(cursor => {
			return lines$.pipe(
				map(s=>s[cursor])
			)
		})
	)

	let texts;
	final$.subscribe((k) =>{ console.log(k); texts = k}) ;

</script>

<div id="container">
	<div id="item">
		{#each texts as text , i}
			<div class="hi" id={i==4 ? "big" : ""}>
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
    background: rgba(25, 25, 25, 0.95);
    z-index: 10; 
}

#item{
	display: grid;
	color: white;
 	align-self: center;
 	/* align-self: start; */
	justify-self: center;
	/* justify-self: end; */
	/* gap: 2px 10px; */
	padding: 10px; 
}

.hi {
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