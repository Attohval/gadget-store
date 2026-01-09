function orderWhatsApp(name, condition, price) {
  const phone = "2348068578671"; // CHANGE THIS
  const message = `Hello, I want to order:
Product: ${name}
Condition: ${condition}
Price: ₦${price.toLocaleString()}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}
