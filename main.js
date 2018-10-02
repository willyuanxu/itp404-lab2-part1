let restaurantTemplateString = document.getElementById('restaurant-template').innerHTML;
let renderRestaurants = Handlebars.compile(restaurantTemplateString);

$.getJSON('https://thejsguy.com/teaching/2018/api/restaurants.json').then((response) => {
	let renderedRestaurants = renderRestaurants({
		restaurants : response.data
	})

	$('body').append(renderedRestaurants);
}, function(error){
	console.log(error);
})