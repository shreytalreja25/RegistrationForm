// Define an array of objects to store product information
const products = [
    {
      id: 'laptop',
      name: 'Laptop',
      price: '$1000',
      description: 'Powerful laptop for office work',
      image: '/assets/laptop.jpeg',
    },
    {
      id: 'mobile-phone',
      name: 'Mobile Phone',
      price: '$500',
      description: 'Compact and stylish phone',
      image: '/assets/phone.jpg',
    },
    {
      id: 'headphones',
      name: 'Headphones',
      price: '$100',
      description: 'High definition sound quality',
      image: '/assets/headphone.jpg',
    },
  ];
  
  // Generate the product cards dynamically from the products array
  function generateProductCards() {
    const productGrid = document.querySelector('.product-grid');
  
    products.forEach((product) => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.id = product.id;
  
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;
      card.appendChild(image);
  
      const name = document.createElement('h3');
      name.textContent = product.name;
      card.appendChild(name);
  
      const price = document.createElement('p');
      price.classList.add('price');
      const priceText = document.createTextNode(product.price);
      price.appendChild(priceText);
      card.appendChild(price);
  
      const description = document.createElement('p');
      description.classList.add('description');
      const descriptionText = document.createTextNode(product.description);
      description.appendChild(descriptionText);
      card.appendChild(description);
  
      productGrid.appendChild(card);
    });
  }
  
  // Call the function to generate the product cards
  generateProductCards();
  