const products = [
  {
    id: 1,
    title: "Vinitto Shose",
    shortDesc: "Nice one and more comfort",
    price: 150,
    img: "https://vinitto.com/cdn/shop/files/7022920204.jpg?v=1746599109&width=600",
  },
  { 
    id: 2,
    title: "Kibal Vinitto",
    shortDesc: "Nice one and more comfort",
    price: 100,
    img: "https://vinitto.com/cdn/shop/files/7033300400-1_091cd2dc-b921-4273-b9e3-bca427753085.jpg?v=1744569013&width=600",
  },
  {
    id: 3,
    title: "Nike Sport",
    shortDesc: "Nice one to play",
    price: 75,
    img: "https://ar-kw.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw96c56c2c/sss/SSS2/N/K/F/Q/8/SSS2_NKFQ8446_002_197597362472_1.jpg?sw=400&sh=400&sm=fit",
  },
  {
    id: 4,
    title: "S&S ",
    shortDesc: "Big and normal ",
    price: 50,
    img: "https://me.asics.com/media/catalog/product/1/0/1041a527-960-3.jpg ",
  },
  {
    id: 5,
    title: "Nike Air Force",
    shortDesc: "perfect one",
    price: 300,
    img: "https://mora1.com/cdn/shop/files/mora1_3_700d75cf-e82f-4911-8b16-ec6add198365.jpg?v=1740616470",
  },
  {
    id: 6,
    title: "Adidas",
    shortDesc: "Samba",
    price: 250,
    img: "https://www.adidas.com.eg/on/demandware.static/-/Sites-adidas-navigation-egy/default/dwe83f81e3/originals.jpeg",
  },
  {
    id: 7,
    title: "Portal",
    shortDesc: "comfort",
    price: 50,
    img: "https://i0.wp.com/bonprixdz.com/wp-content/uploads/2025/07/%D8%B5%D9%88%D8%B1%D8%A9-%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D8%A8-%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-1446-10-30-%D9%81%D9%8A-02.22.58_b41947dc.jpg?resize=630%2C630&ssl=1",
  },
  {
    id: 8,
    title: "LONU",
    shortDesc: "Nice one and more comfort",
    price: 100,
    img: "https://m.media-amazon.com/images/I/717RxxarS4L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 9,
    title: "Activ",
    shortDesc: "Nice one",
    price: 75,
    img: "https://activ.eg/cdn/shop/files/FOO-ACTIVN-PORT20258947--BLK-WHIT_2.jpg?v=1755954565&width=1500",
  },
  {
    id: 10,
    title: "S&S ",
    shortDesc: "Big and normal ",
    price: 50,
    img: "https://ar-kw.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw34d3c07a/sss/SSS2/N/K/H/V/3/SSS2_NKHV3149_001_197863002293_1.jpg?sw=400&sh=400&sm=fit",
  },
  {
    id: 11,
    title: "TO",
    shortDesc: "perfect one",
    price: 300,
    img: "https://cdn.shopify.com/s/files/1/0604/1151/1030/files/132711218-1-Brown_20Jogger-Brown-S36_531x.jpg?v=1754298078",
  },
  {
    id: 12,
    title: "Lacost",
    shortDesc: "more comfort",
    price: 250,
    img: "https://www.lacoste.sa/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-lacoste-master-catalog/default/dwb507f33d/images/49CMA0004_02H_02.jpg?sw=420&sh=420",
  },
];

const productsContainer = document.querySelector("#products");
const popup = document.querySelector("#product-popup");
const popupImg = document.querySelector("#popup-img");
const popupTitle = document.querySelector("#popup-title");
const popupDesc = document.querySelector("#popup-desc");
const popupPrice = document.querySelector("#popup-price");
const addToCartBtn = document.querySelector("#add-to-cart");
const cart = document.querySelector("#cart");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const cartCount = document.querySelector("#cart-count");
const cartToggleBtn = document.querySelector(".button-serach");
const cartCloseBtn = document.querySelector("#close-cart");
const popupCloseBtn = document.querySelector(".close-btn");
const clearCartBtn = document.querySelector("#clear-cart-btn");
const mode =document.getElementById('Mode');
const font =document.getElementById('font');

// New variables for size and color options
const sizeOptionsContainer = document.querySelector("#size-options");
const colorOptionsContainer = document.querySelector("#color-options");
let darkMode = localStorage.getItem("darkMode") === "true";
let selectedProduct = null;
let cartData = [];
// Variables to store the user's current selection
let selectedSize = null;
let selectedColor = null;

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.img}" class="product-img" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.shortDesc}</p>
    <p>$${product.price}</p>
  `;
  card.addEventListener("click", () => {
    selectedProduct = product;
    // Reset selection every time a new product is clicked
    selectedSize = null;
    selectedColor = null;

    popupImg.src = product.img;
    popupTitle.textContent = product.title;
    popupDesc.textContent = product.shortDesc;
    popupPrice.textContent = "$" + product.price;

    // Clear previous options
    sizeOptionsContainer.innerHTML = "";
    colorOptionsContainer.innerHTML = "";


    // Generate sizes (38 to 45)
    for (let i = 38; i <= 45; i++) {
      const sizeSpan = document.createElement("span");
      sizeSpan.textContent = i;
      sizeSpan.className = "option size";
      sizeSpan.addEventListener("click", () => {
        // Remove 'selected' class from all sizes
        document
          .querySelectorAll(".size")
          .forEach((el) => el.classList.remove("selected"));
        // Add 'selected' class to the clicked one
        sizeSpan.classList.add("selected");
        selectedSize = i;
      });
      sizeOptionsContainer.appendChild(sizeSpan);
    }

    // Generate colors (customize these as needed)
    const colors = ["#000000", "#FF0000", "#0000FF", "#008000", "#FFFF00"];
    colors.forEach((color) => {
      const colorSpan = document.createElement("span");
      colorSpan.className = "option color";
      colorSpan.style.backgroundColor = color;
      colorSpan.addEventListener("click", () => {
        // Remove 'selected' class from all colors
        document
          .querySelectorAll(".color")
          .forEach((el) => el.classList.remove("selected"));
        // Add 'selected' class to the clicked one
        colorSpan.classList.add("selected");
        selectedColor = color;
      });
      colorOptionsContainer.appendChild(colorSpan);
    });

    popup.style.display = "flex";
  });
  productsContainer.appendChild(card);
});

popupCloseBtn.addEventListener("click", () => (popup.style.display = "none"));

addToCartBtn.addEventListener("click", () => {
  // Check if a size and color have been selected
  if (!selectedSize || !selectedColor) {
    alert("Please select a size and color!");
    return;
  }

  // Create a unique ID for the item in the cart
  const uniqueId = `${selectedProduct.id}-${selectedSize}-${selectedColor}`;
  const existing = cartData.find((p) => p.uniqueId === uniqueId);

  if (existing) {
    existing.qty++;
  } else {
    cartData.push({
      ...selectedProduct,
      qty: 1,
      size: selectedSize,
      color: selectedColor,
      uniqueId: uniqueId,
    });
  }
  updateCart();
  popup.style.display = "none";
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0,
    count = 0;

  cartData.forEach((item) => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.img}" alt="">
      <div>
        <h4>${item.title}</h4>
        <p>$${item.price} x ${item.qty}</p>
        <p>Size: ${item.size} | Color: <span style="background-color: ${item.color}; display: inline-block; width: 15px; height: 15px; border-radius: 50%; border: 1px solid #ccc;"></span></p>
      </div>
      <button onclick="changeQty('${item.uniqueId}', 1)">+</button>
      <button onclick="changeQty('${item.uniqueId}', -1)">-</button>
      <button onclick="removeItem('${item.uniqueId}')">x</button>
    `;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;
}

function changeQty(uniqueId, val) {
  const item = cartData.find((p) => p.uniqueId === uniqueId);
  if (item) {
    item.qty += val;
    if (item.qty <= 0) removeItem(uniqueId);
    updateCart();
  }
}

function removeItem(uniqueId) {
  cartData = cartData.filter((p) => p.uniqueId !== uniqueId);
  updateCart();
}

cartToggleBtn.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

cartCloseBtn.addEventListener("click", () => {
  cart.classList.add("hidden");
});
clearCartBtn.addEventListener("click", () => {
  cartData = [];
  updateCart();
});

function applyTheme() {
  if (darkMode) {
    document.body.style.background = "#0000003d"; 
    font.src = "assets/images/icons8-switch-48.png"; 
    font.classList.add("night");
    font.classList.remove("day");
  } else {
    document.body.style.background = "#fff";
     font.src = "assets/images/icons8-switch-48 (1).png"; 
     font.classList.add("day");
     font.classList.remove("night");
  }
}

mode.addEventListener('click', function () {
  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode);
  applyTheme();
});
applyTheme();
renderProducts(productsResponse);


