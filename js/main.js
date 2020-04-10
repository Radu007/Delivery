document.querySelector('#cart-button').addEventListener('click', function (e) {
	document.querySelector('.modal').classList.add('is-open')
})

document.querySelector('.close').addEventListener('click', function (e) {
	document.querySelector('.modal').classList.remove('is-open')
})
