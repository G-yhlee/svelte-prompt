import {writable} from 'svelte/store'


export let STATE_S = writable({
	"onDone": "S0",
	"onWrite": ["a"],
})

// USE
export let F_onDone = writable("_")
export let F_onWrite = writable("_")
