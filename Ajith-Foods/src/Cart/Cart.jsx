export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};

export const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
   window.dispatchEvent(new Event('cartUpdated'));
};

export const addToCart = (item) => {
  const cart = getCart();
  const existing = cart.find(i => i.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart(cart);
    window.dispatchEvent(new Event('cartUpdated'));
};

export const buyNow = (item) => {
  const cart = [{ ...item, quantity: 1 }]; // Only that item
  saveCart(cart);
};