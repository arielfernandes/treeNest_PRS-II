<template>
<div class="search">
<div class="form-outline">
<input type="search" id="search-input" class="form-control" placeholder="Search" >
<button type="button" id="i-Search" class="btn btn-primary">
<img src="./../../assets/search.svg" class="fa i-search" alt="">
</button>
</div>
</div>
</template>

<script>
const searchFocus = document.getElementById('search-focus');
const keys = [
{ keyCode: 'AltLeft', isTriggered: false },
{ keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
	keys.forEach((obj) => {
		if (obj.keyCode === e.code) {
			obj.isTriggered = true;
		}
	});

	const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

	if (shortcutTriggered) {
		searchFocus.focus();
	}
})
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#search-input {
	display: inline;
width: 250px;
}

#i-Search {
	vertical-align: middle;
	height: 40px;
	margin-left: -2px;
	margin-top: -5px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
</style>
