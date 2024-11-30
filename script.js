// JSON Data Object
const sectionData = {
  perPage: 1,
  block: [
    {
      title: "Exquisite Watches",
      subtitle: "Gold Luxury, ",
      description:
        "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship.",
      price: "$499.00",
      images: "image/Watch1.png",
      color: "body1",
      icons: ["icon/icon1.png", "icon/icon2.png", "icon/icon3.png"],
    
    },
    {
      title: "Dainty Timepieces",
      subtitle: "Silver Luxury, Choose Us",
      description:
        "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece.",
      price: "$469.00",
      images: "image/watch2.png",
      color: "body2",
      icons: ["icon/icon1.png", "icon/icon2.png", "icon/icon3.png"],
      
    },
    {
      title: "Elegant Timepieces",
      subtitle: "Choose Luxury, Choose Us",
      description:
        "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      price: "$599.00",
      images: "image/watch3.png",
      color: "body3",
      icons: ["icon/icon1.png", "icon/icon2.png", "icon/icon3.png"],
      
    },
    {
      title: "Refined Timepieces",
      subtitle: "Choose Luxury, Choose Us",
      description:
        "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      price: "$599.00",
      images: "image/watch4.png",
      color: "body4",
      icons: ["icon/icon1.png", "icon/icon2.png", "icon/icon3.png"],
      

    },
  ],
};


document.addEventListener("DOMContentLoaded", function () {
  const productInfo = sectionData.block;

  // Select DOM elements
  const productTitle = document.querySelector(".product-info h1");
  const productSubtitle = document.querySelector(".product-info h2");
  const productDescription = document.querySelector(".product-info p");
  const productPrice = document.querySelector(".product-info h3");
  const mainSection = document.querySelector(".main-section");
  const carouselList = document.querySelector(".splide__list");
  const iconContainer = document.querySelector(".icon-container");

  // Load the product's information dynamically
  const loadProductInfo = (product) => {
    productTitle.textContent = product.title;
    productSubtitle.textContent = product.subtitle;
    const subtitleParts = product.subtitle.split("Choose Us");
    productSubtitle.innerHTML = `${subtitleParts[0]}<span style="color: black;">Choose Us</span>${subtitleParts[1] || ""}`;
  
    productDescription.textContent = product.description;
    productPrice.textContent = product.price;

    // Change body color dynamically by updating the body class
    document.body.className = ""; // Remove all previous classes
    document.body.classList.add(product.color);

    // Load icons dynamically
    iconContainer.innerHTML = ""; // Clear previous icons
    if (product.icons) {
      product.icons.forEach((icon) => {
        const iconImg = document.createElement("img");
        iconImg.src = icon;
        iconImg.alt = "Social Icon";
        iconImg.classList.add("social-icon");
        iconContainer.appendChild(iconImg);
      });
    }
  };

  // Load carousel items dynamically
  const loadCarousel = () => {
    productInfo.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.classList.add("splide__slide");
      listItem.innerHTML = `<img src="${product.images}" alt="${product.title}">`;
      carouselList.appendChild(listItem);
    });
  };

  // Initialize Splide.js Carousel
  const initializeCarousel = () => {
    const splide = new Splide("#product-carousel", {
      type: "loop",
      perPage: sectionData.perPage,
      autoplay: true,
      arrows: true,
      pagination: false,
    }).mount();

    // Add event listener to handle slide changes
    splide.on('move', (newIndex) => {
      loadProductInfo(productInfo[newIndex]); // Update product info based on slide index
    });
  };

  // Render Product Info & Carousel
  loadProductInfo(productInfo[0]); // Load the first product's info
  loadCarousel(); // Load carousel items
  initializeCarousel(); // Initialize Splide.js
});

