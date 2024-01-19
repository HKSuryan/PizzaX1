// import React, { useState } from "react";
// import Razorpay from "razorpay-reactjs";

// const Payment = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [amount, setAmount] = useState("");

//   const createPayment = async () => {
//     const order = await Razorpay.createOrder({
//       amount,
//       currency: "INR",
//       receipt: `${name}_${email}_${amount}`,
//     });

//     const payment = await Razorpay.open(order);

//     if (payment.status === "captured") {
//       // Create a payment receipt
//     }
//   };

//   return (
//     <form onSubmit={createPayment}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="number"
//         name="amount"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button type="submit">Pay Now</button>
//     </form>
//   );
// };

// export default Payment;
import React from 'react'

export default function Payment() {
  const loadscript = (src)=>{
    return new Promise((resolve)=>{
      const script = document.createElement('script')
      script.src = src

      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
      document.body.appendChild(script)

    })
  }
  const displayRazorpay = async(amount)=>{
    const res = await loadscript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert('You are Offline Failed to Load');
      return;
    }
  }
  return (
    <div>Payment</div>
  )
}

