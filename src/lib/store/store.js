import {writable} from 'svelte/store'


export let STATE_S = writable({
	"onDone": "S0",
	"onWrite": [""],
})

// USE
export let F_onDone = writable("_")
export let F_onWrite = writable("")
export let F_onWrite_trigger = writable(1)
