// ---------- TYPES ----------
type Product = {
    id: number;
    name: string;
    price: number;
    images: string[];
  };
  
  type CartItem = {
    product: Product;
    qty: number;
  };
  
  // ---------- DATA ----------
  const products: Product[] = [
    {
      id: 1,
      name: "Shoes",
      price: 2999,
      images: ["https://tse1.mm.bing.net/th/id/OIP.6b8uDGuRor1riOT9IMwjzwHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3",
      "https://www.shape.com/thmb/ZLsTnMRXFLhM82F9FaQRTJkML44=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-new-balance-shoes-tout-b194dfae31f04fcbb37cc36b59eca137.jpg",
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1824,c_limit/0bb50e61-e02f-40e7-9220-e17effebc983/the-most-comfortable-basketball-shoes-by-nike.jpg",
      "https://cdn.pixabay.com/photo/2022/10/08/17/04/shoes-7507418_1280.jpg","https://journal.herringshoes.co.uk/wp-content/uploads/2024/11/Handmade-shoes3-scaled.jpg",
      "https://img.kwcdn.com/product/1d658652b0/b2258b75-9ae4-4b8e-8473-bd2745a7fd93_1198x1198.jpeg.a.jpg"
    ]

    },
    {
      id: 2,
      name: "Laptop",
      price: 75000,
      images: ["https://www.digitaltrends.com/uploads/2022/07/hp-spectre-x360-13-5-front-angled-e1659295844757.jpg","https://cdn.mos.cms.futurecdn.net/LekCjjpyVoWeFAJwZ79Tzc.jpg",
        "https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-1.fill.size_2000x1125.v1723100793.jpg",
        "https://b2c-contenthub.com/wp-content/uploads/2023/06/Dell-XPS-17-9730-overview.jpg",
        "https://b2c-contenthub.com/wp-content/uploads/2022/02/20211018_1102470.jpg",
        "https://cdn.mos.cms.futurecdn.net/pyL3b8cis5dcmUvgbe9ygV.jpg"
      ]
    },
    {
      id: 3,
      name: "PS5",
      price: 55000,
      images: ["https://wallpapers.com/images/hd/ps5-pictures-behd8ez8chwuf94i.jpg",
        "https://img.freepik.com/premium-photo/sony-playstation-5-white-background_971991-8863.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566040_rd.jpg",
        "https://wallpapers.com/images/hd/ps5-pictures-ylo5nmaaba2v930z.jpg",
        "https://wallpaperaccess.com/full/9267480.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523167_bd.jpg"
      ]
    }
  ];
  
  // ---------- CART STORAGE ----------
  const CART_KEY = "cart";
  
  function getCart(): CartItem[] {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  }
  
  function saveCart(cart: CartItem[]) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  
  function addToCart(product: Product) {
    const cart = getCart();
    const item = cart.find(i => i.product.id === product.id);
  
    if (item) item.qty++;
    else cart.push({ product, qty: 1 });
  
    saveCart(cart);
  }
  
  function updateQty(id: number, change: number) {
    let cart = getCart();
  
    const item = cart.find(i => i.product.id === id);
    if (!item) return;
  
    item.qty += change;
  
    cart = cart.filter(i => i.qty > 0);
  
    saveCart(cart);
  }

  function showToast(message: string) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
  
    document.body.appendChild(toast);
  
    // trigger animation
    setTimeout(() => toast.classList.add("show"), 10);
  
    // remove after 2.5s
    setTimeout(() => {
      toast.classList.remove("show");
  
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
  
  // ---------- ROUTER ----------
  const app = document.getElementById("app")!;
  
  const params = new URLSearchParams(location.search);
  const page = params.get("page") || "home";
  
  // ---------- HOME ----------
  function renderHome() {
    app.innerHTML = "";
  
    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
  
      div.innerHTML = `
        <img src="${p.images[0]}" class="product-img"/>
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button>View</button>
      `;
  
      div.querySelector("button")!.onclick = () => {
        location.href = `?page=product&id=${p.id}`;
      };
  
      app.appendChild(div);
    });
  }
  
  // ---------- PRODUCT PAGE ----------
  function renderProduct() {
    const id = Number(params.get("id"));
    const product = products.find(p => p.id === id)!;
  
    app.innerHTML = `
      <h2>${product.name}</h2>
      <p>₹${product.price}</p>
  
      <img id="mainImg" class="main-img"/>
  
      <div id="thumbs"></div>
  
      <button id="add">Add To Cart</button>
    `;
  
    const mainImg = document.getElementById("mainImg") as HTMLImageElement;
    const thumbs = document.getElementById("thumbs")!;
  
    // ✅ show first image as preview
    mainImg.src = product.images[0];
  
    // create thumbnails
    product.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "thumb";
  
      img.addEventListener("click", () => {
        mainImg.src = src;   // change preview
      });
  
      thumbs.appendChild(img);
    });
  
    document.getElementById("add")!.onclick = () => {
      addToCart(product);
      showToast("✅ Added to cart");
    };
  }
  
  // ---------- CART PAGE ----------
  function renderCart() {
    const cart = getCart();
  
    app.innerHTML = "<h2>Your Cart</h2>";
  
    cart.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
  
      div.innerHTML = `
        <img src="${item.product.images[0]}" class="cart-img"/>
  
        <div class="cart-info">
          <h3>${item.product.name}</h3>
          <p>₹${item.product.price}</p>
  
          <div class="qty-controls">
            <button class="dec">-</button>
            <span>${item.qty}</span>
            <button class="inc">+</button>
          </div>
        </div>
      `;
  
      div.querySelector(".inc")!.addEventListener("click", () => {
        updateQty(item.product.id, 1);
        renderCart();
      });
  
      div.querySelector(".dec")!.addEventListener("click", () => {
        updateQty(item.product.id, -1);
        renderCart();
      });
  
      app.appendChild(div);
    });
  }
  
  // ---------- PAGE SWITCH ----------
  if (page === "product") renderProduct();
  else if (page === "cart") renderCart();
  else renderHome();