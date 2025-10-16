let orders = [];

const form = document.getElementById("orderForm");
const orderList = document.getElementById("orderList");

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;
  
  const order = { name, item, quantity };
  orders.push(order);
  
  displayOrders();
  form.reset();
  alert(`Thanks ${name}! Your order for ${quantity} ${item}(s) has been placed.`);
});

function displayOrders() {
  orderList.innerHTML = "";
  orders.forEach((order, index) => {
    const li = document.createElement("li");
    li.textContent = `${order.name} ordered ${order.quantity} ${order.item}(s)`;
    
    // Optional: delete button
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.style.marginLeft = "10px";
    btn.addEventListener("click", () => {
      orders.splice(index, 1);
      displayOrders();
    });
    
    li.appendChild(btn);
    orderList.appendChild(li);
  });
}
