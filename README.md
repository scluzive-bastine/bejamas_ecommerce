# Bejamas Frontend Test

A test to create a proof of concept of an ecommerce solution - Task done by Nwachukwu Sabastine

## Libraries/Framework
* React Js
* Next Js
* TailwindCss
* Redux

## How to run
*In the root project directory, type npm install to install the project's dependencies.
*Once installation is complete, type npm run dev to start the project in your local browser. This will start up the full react application.


## Requirements / Implementation

* Featured Products: The products list being fetched from the backend had one product with a flag of featured=true. This product was filtered from the array and displayed at the top of the page. Code implementation can be found here: components/Featured.js

* Product List: The products displays 6 items at first and hovering over the image displays the "add to cart" button. Some products also have the best seller flag.

* Add to cart: Redux was used to store the items in cart,  add to cart button add elements to the cart and make the cart dropdown visible.

* Pagination: Displays 6 items, next button is disabled if the page is the last and prev is disabled if the page is first page

* Sorting: Dynamic category filter. Categories were dynamically filtered from the list of API data. Also price ranges were also dynamically filtered based the mininum and maximum prices from the API data.

* Filtering: I implemented filtering of products based on price and name in ascending and descending order. This was achieved with javascript filter functions.

* Web performance: In order to achieve great web performance, i utitlized the next js image component to render images specified for every screen thereby reducing Largest Contentful Paint(LCP) core web vital, very cool :).

### Coming soon
* Using Sanity persist items in cart
* Next Auth to authenitcate users
* Checkout with strip
