import React, { useEffect, useState } from 'react';
import { getCart, saveCart } from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery');
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(getCart());
    const savedAddress = localStorage.getItem('shippingAddress');
    if (savedAddress) setAddress(JSON.parse(savedAddress));
  }, []);

  const updateQuantity = (id, action) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        if (action === 'increase') item.quantity += 1;
        else if (action === 'decrease' && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = +(totalPrice * 0.02).toFixed(2);
  const totalWithTax = (totalPrice + tax).toFixed(2);
const triggerConfetti = () => {
  confetti({
    particleCount: 190,
    spread: 90,
    origin: { y: 0.6 },
  });
};
  const handleRazorpayPayment = () => {
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // ✅ Use your test key here
      amount: Math.round(totalWithTax * 100), // in paisa
      currency: "INR",
      name: "Ajith Foods",
      description: "Food Order",
      handler: function (response) {
        saveCart([]);
        setCartItems([]);
        setPaymentSuccess(true);
       triggerConfetti();
      },
      prefill: {
        name: "Test Name",
        email: "ajith@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#facc15" // Tailwind yellow-400
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Modal for Razorpay payment success
  const renderPaymentSuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-green-600">✅ Payment Successful</h2>
        <p className="mb-2">Your order has been placed successfully.</p>
        <p className="mb-4 text-gray-600">It will reach you within 30 minutes.</p>
        <button
          onClick={() => {
            setPaymentSuccess(false);
            navigate('/home');
          }}
          className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition"
        >
          Okay
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-4 md:p-10">
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-yellow-600">🧾 Proceed to Payment</h2>
            <p className="mb-4">Total Amount: ₹{totalWithTax}</p>
            <div className="mb-4">
              <select
                className="w-full border px-2 py-1 rounded"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option>Cash On Delivery</option>
                <option>Online Payment</option>
              </select>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  if (paymentMethod === 'Cash On Delivery') {
                    setShowConfirmationModal(true);
                  } else {
                    handleRazorpayPayment();
                  }
                }}
                className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
              >
                Proceed to Pay
              </button>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-green-600">✅ Confirm Order</h2>
            <p className="mb-4">Are you sure you want to confirm your order?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  saveCart([]);
                  setCartItems([]);
                  setShowConfirmationModal(false);
                  setShowModal(true);
                  triggerConfetti();

                }}
                className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setShowConfirmationModal(false);
                  setShowPaymentModal(true);
                }}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-green-600">🎉 Order Confirmed!</h2>
            <p className="mb-2">Your food order has been placed successfully.</p>
            <p className="mb-4 text-gray-600">Order will reach you within 30 minutes.</p>
            <button
              onClick={() => {
                setShowModal(false);
                navigate('/home');
              }}
              className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      {paymentSuccess && renderPaymentSuccessModal()}

      <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Shopping Cart</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {cartItems.length === 0 ? (
            <p className="text-gray-700">No items in cart</p>
          ) : (
            <>
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th>Image</th>
                    <th>Title</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, i) => (
                    <tr key={i} className="border-b">
                      <td><img src={item.image} alt={item.title} className="w-16 h-16 rounded" /></td>
                      <td>{item.title}</td>
                      <td>
                        <button onClick={() => updateQuantity(item.id, 'decrease')}>−</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 'increase')}>+</button>
                      </td>
                      <td>₹{item.price}</td>
                      <td>₹{item.price * item.quantity}</td>
                      <td>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600">✕</button>
                      </td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td colSpan="4">Total</td>
                    <td colSpan="2">₹{totalPrice}</td>
                  </tr>
                </tbody>
              </table>
              <button
                onClick={() => navigate('/home')}
                className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
              >
                ← Continue Shopping
              </button>
            </>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Order Summary</h3>
          <div className="mb-4">
            <p className="text-sm text-gray-600">DELIVERY ADDRESS</p>
            {address ? (
              <div>
                <p className="text-md">{`${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.zip}`}</p>
                <p className="text-sm text-gray-600">Phone: {address.phone}</p>
                <button
                  onClick={() => navigate('/add-address')}
                  className="text-white bg-yellow-600 px-3 py-1 rounded text-sm hover:bg-yellow-700 mt-2"
                >
                  Change
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('/add-address')}
                className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 mt-2"
              >
                Add Address
              </button>
            )}
          </div>
          <div className="text-sm">
            <p className="flex justify-between"><span>Price</span><span>₹{totalPrice.toFixed(2)}</span></p>
            <p className="flex justify-between"><span>Shipping Fee</span><span className="text-green-600">Free</span></p>
            <p className="flex justify-between"><span>Tax (2%)</span><span>₹{tax}</span></p>
            <hr className="my-2" />
            <p className="flex justify-between font-bold"><span>Total Amount</span><span>₹{totalWithTax}</span></p>
          </div>
          {address && cartItems.length > 0 && (
            <button
              onClick={() => setShowPaymentModal(true)}
              className="w-full mt-4 bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
            >
              Place Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;