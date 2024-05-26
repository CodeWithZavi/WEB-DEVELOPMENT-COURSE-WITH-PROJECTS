// This example uses basic JavaScript to add a simple click event listener to the buttons
// For a full e-commerce store, you'd need a server-side shopping cart implementation.

const buttons = document.querySelectorAll('.product button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('This product has been added to your cart (not implemented yet)!');
  });
});
