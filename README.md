# React E-shop project

## Functionality

This React web page is a template for an E-shop which sells trading cards.
The user is greeted with a home page with a carousel featuring several products.
There is a navbar at the top which leads to the home page, products page, and the cart.
On the products page, there is a grid of items that are clickable and lead to their own individual page.
On the individual products page, each item can be added to cart, which keeps its state even when transitioning pages.
The cart lists a column of items with their own information.

## Problems I faced

I noticed that props sometimes were not being passed through to some modules so I ended up calling the firebase multiple times which seems like it could cause issues.
