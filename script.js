console.log("Script loaded");
const product = [
  {
    id: 1,
    image: "https://api.deepai.org/job-view-file/0e096322-481c-4a59-be87-59b49973c343/outputs/output.jpg",
    title: "EmpowerHer CareKit",
    price: 20,
  },
  {
    id: 2,
    image: "https://api.deepai.org/job-view-file/2abe33cd-2746-4543-bc79-c45c7cf67e9a/outputs/output.jpg",
    title: "Standard CareKit",
    price: 10,
  },
  {
    id: 3,
    image: "https://api.deepai.org/job-view-file/78081ae5-e40f-4250-a9c6-0f69271c3713/outputs/output.jpg",
    title: "Premium CareKit",
    price: 35,
  },
  {
    id: 4,
    image: "https://api.deepai.org/job-view-file/4dca0ab5-4f0c-442f-afe7-d3feb7278a84/outputs/output.jpg",
    title: "Deluxe Wellness CareKit",
    price: 15,
  },
]

let cartArray = [];

const cartContainer = document.getElementById('cartItem');
const productContainer = document.getElementById('root');

productContainer.innerHTML = product.map((item) => {
  const { image, title, price } = item;
  return (
    `<div class="box">
      <div class="img-box">
        <img src="${image}" alt="${title}"></img>
      </div>
      <div class="left">
        <p>${title}</p>
        <h2>$${price}.00</h2>
        <button onclick='addtocart(${JSON.stringify(item)})'>Add to Cart</button>
      </div>
    </div>`
  );
}).join('');

function addtocart(item) {
  cartArray.push({ ...item });
  displaycart();
  console.log("Item added to cart:", item);
  console.log("Updated cartArray:", cartArray);
}



function displaycart() {
  let j = 0; total= 0;
  document.getElementById("count").innerHTML=cartArray.length;
  if (cartArray.length === 0) {
    cartContainer.innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$" +0+ ".00";
  } else {
    cartContainer.innerHTML = cartArray.map((item, index) => {
      const { image, title, price } = item;
      total = total + price;
      document.getElementById("total").innerHTML ="$" +total+ ".00"; 
      return (
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src="${image}">
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size:15px;'>$${price}.00</h2>
          <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
        </div>`
      );
    }).join('');
  }
}

function completePurchase() {
  // Assuming you want to clear the cart after completing the purchase
  cartArray = [];
  displaycart();
}

console.log("localStorage content:", localStorage.getItem("cartArray"));
function proceedToCheckout() {
  if (cartArray.length > 0) {
    const cartParameter = encodeURIComponent(JSON.stringify(cartArray));
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    window.location.href = `checkout.html?cart=${cartParameter}`;
  } else {
    console.error("cartArray is empty");
  }
}


function delElement(index) {
  cartArray.splice(index, 1);
  displaycart();
}
