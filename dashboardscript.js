const searchInput = document.querySelector('.form-control');
searchInput.addEventListener('input', handleSearch);

let products = []; // Array to store the fetched products

// Generate the product cards dynamically from the API response
function generateProductCards() {
  const productGrid = document.querySelector('.product-grid');

  fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((response) => {
      if (Array.isArray(response.products)) {
        products = response.products; // Store the fetched products in the array

        products.forEach((product) => {
          const card = document.createElement('div');
          card.classList.add('product-card');
          card.id = product.id;

          const image = document.createElement('img');
          //<img alt="iPhone 9" src="https://dummyjson.com/products"></img>
          image.src = product.thumbnail;
          image.alt = product.title;
          card.appendChild(image);

          const name = document.createElement('h3');
          name.textContent = product.title;
          card.appendChild(name);

          const price = document.createElement('p');
          price.classList.add('price');
          const priceText = document.createTextNode(`$${product.price}`);
          price.appendChild(priceText);
          card.appendChild(price);

          const description = document.createElement('p');
          description.classList.add('description');
          const descriptionText = document.createTextNode(product.description);
          description.appendChild(descriptionText);
          card.appendChild(description);

          // Access the title attribute using response.products[0].title
          const titleAttributeValue = document.createAttribute('title');
          titleAttributeValue.value = response.products[0].title;
          card.setAttributeNode(titleAttributeValue);

          productGrid.appendChild(card);
        });
      } else {
        console.log('Invalid data format received from the API.');
      }
    })
    .catch((error) => {
      console.log('Error fetching product data:', error);
    });
}

// Call the function to generate the product cards
generateProductCards();

function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase(); //iph
  const matchingProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  const searchResultsDropdown = document.getElementById('searchResultsDropdown');
  searchResultsDropdown.innerHTML = ''; // Clear previous search results

  if (searchTerm.length > 0 && matchingProducts.length > 0) {
    matchingProducts.forEach((product) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      const searchImage = document.createElement('img');
      link.textContent = product.title;
      link.href = "/productPage.html"
      link.target = "_blank"
      // searchImage.src = "/assets/phone.jpg"
      searchImage.src = `${product.thumbnail}`
      searchImage.style.height="40px";
      searchImage.style.width="auto";
      listItem.appendChild(link);
      listItem.appendChild(searchImage)
      searchResultsDropdown.appendChild(listItem);

      // Apply styling to the generated <li> items
      listItem.style.display = 'flex';
      listItem.style.flexDirection = 'row-reverse';
      listItem.style.justifyContent = 'space-around';
      listItem.style.background = 'grey';
      listItem.style.textAlign = 'center';
      listItem.style.marginBottom = '2px';
      listItem.style.width = '220px';
      // listItem.style.
    });
    searchResultsDropdown.style.display = 'block'; // Show the dropdown
  } else {
    searchResultsDropdown.style.display = 'none'; // Hide the dropdown
  }
}


// function handleSearch(event) {
//   const searchTerm = event.target.value.toLowerCase(); // Retrieve the entered value and convert to lowercase
//   const matchingProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm)
//   ); // Filter products based on the entered value

//   const searchResultsBox = document.querySelector('.search-results');
//   searchResultsBox.innerHTML = ''; // Clear previous search results

//   if (searchTerm.length > 0 && matchingProducts.length > 0) {
//     // If there is a search term and matching products, generate and append the small box
//     const smallBox = document.createElement('div');
//     smallBox.classList.add('search-results-box');

//     matchingProducts.forEach((product) => {
//       const productName = document.createElement('p');
//       productName.textContent = product.title;
//       smallBox.appendChild(productName);
//     });

//     searchResultsBox.appendChild(smallBox);
//   }




// // Generate the product cards dynamically from the API response
// function generateProductCards() {
//   const productGrid = document.querySelector('.product-grid');

//   fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then((response) => {
//     if (Array.isArray(response.products)) {
//       response.products.forEach((product) => {
//         const card = document.createElement('div');
//         card.classList.add('product-card');
//         card.id = product.id;

//         const image = document.createElement('img');
//         image.src = product.thumbnail;
//         image.alt = product.title;
//         card.appendChild(image);

//         const name = document.createElement('h3');
//         name.textContent = product.title;
//         card.appendChild(name);

//         const price = document.createElement('p');
//         price.classList.add('price');
//         const priceText = document.createTextNode(`$${product.price}`);
//         price.appendChild(priceText);
//         card.appendChild(price);

//         const description = document.createElement('p');
//         description.classList.add('description');
//         const descriptionText = document.createTextNode(product.description);
//         description.appendChild(descriptionText);
//         card.appendChild(description);

//         // Access the title attribute using response.products[0].title
//         const titleAttributeValue = document.createAttribute('title');
//         titleAttributeValue.value = response.products[0].title;
//         card.setAttributeNode(titleAttributeValue);

//         productGrid.appendChild(card);
//       });
//     } else {
//       console.log('Invalid data format received from the API.');
//     }
//   })
//   .catch((error) => {
//     console.log('Error fetching product data:', error);
//   });

// }

// // Call the function to generate the product cards
// generateProductCards();


// const searchInput = document.querySelector('.form-control');
// searchInput.addEventListener('input', handleSearch);

// function handleSearch(event) {
//   const searchTerm = event.target.value.toLowerCase(); // Retrieve the entered value and convert to lowercase
//   const matchingProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm)
//   ); // Filter products based on the entered value

//   const searchResultsBox = document.querySelector('.search-results');
//   searchResultsBox.innerHTML = ''; // Clear previous search results

//   if (searchTerm.length > 0 && matchingProducts.length > 0) {
//     // If there is a search term and matching products, generate and append the small box
//     const smallBox = document.createElement('div');
//     smallBox.classList.add('search-results-box');

//     matchingProducts.forEach((product) => {
//       const productName = document.createElement('p');
//       productName.textContent = product.title;
//       smallBox.appendChild(productName);
//     });

//     searchResultsBox.appendChild(smallBox);
//   }
// }


// // // // Define an array of objects to store product information
// // // const products = [
// // //     {
// // //       id: 'laptop',
// // //       name: 'Laptop',
// // //       price: '$1000',
// // //       description: 'Powerful laptop for office work',
// // //       image: '/assets/laptop.jpeg',
// // //     },
// // //     {
// // //       id: 'mobile-phone',
// // //       name: 'Mobile Phone',
// // //       price: '$500',
// // //       description: 'Compact and stylish phone',
// // //       image: '/assets/phone.jpg',
// // //     },
// // //     {
// // //       id: 'headphones',
// // //       name: 'Headphones',
// // //       price: '$100',
// // //       description: 'High definition sound quality',
// // //       image: '/assets/headphone.jpg',
// // //     },
// // //   ];
  
// // // // Attach an event listener to the search input field
// // // const searchInput = document.querySelector('.form-control');
// // // searchInput.addEventListener('input', handleSearch);

// // // function handleSearch(event) {
// // //   const searchTerm = event.target.value.toLowerCase(); // Retrieve the entered value and convert to lowercase
// // //   const matchingProducts = products.filter((product) =>
// // //     product.name.toLowerCase().includes(searchTerm)
// // //   ); // Filter products based on the entered value

// // //   const searchResultsBox = document.querySelector('.search-results');
// // //   searchResultsBox.innerHTML = ''; // Clear previous search results

// // //   if (searchTerm.length > 0 && matchingProducts.length > 0) {
// // //     // If there is a search term and matching products, generate and append the small box
// // //     const smallBox = document.createElement('div');
// // //     smallBox.classList.add('search-results-box');

// // //     matchingProducts.forEach((product) => {
// // //       const productName = document.createElement('p');
// // //       productName.textContent = product.name;
// // //       smallBox.appendChild(productName);
// // //     });

// // //     searchResultsBox.appendChild(smallBox);
// // //   }
// // // }



// // //   // Generate the product cards dynamically from the products array
// // //   function generateProductCards() {
// // //     const productGrid = document.querySelector('.product-grid');
  
// // //     products.forEach((product) => {
// // //       const card = document.createElement('div');
// // //       card.classList.add('product-card');
// // //       card.id = product.id;
  
// // //       const image = document.createElement('img');
// // //       image.src = product.image;
// // //       image.alt = product.name;
// // //       card.appendChild(image);
  
// // //       const name = document.createElement('h3');
// // //       name.textContent = product.name;
// // //       card.appendChild(name);
  
// // //       const price = document.createElement('p');
// // //       price.classList.add('price');
// // //       const priceText = document.createTextNode(product.price);
// // //       price.appendChild(priceText);
// // //       card.appendChild(price);
  
// // //       const description = document.createElement('p');
// // //       description.classList.add('description');
// // //       const descriptionText = document.createTextNode(product.description);
// // //       description.appendChild(descriptionText);
// // //       card.appendChild(description);
  
// // //       productGrid.appendChild(card);
// // //     });
// // //   }
  
// // //   // Call the function to generate the product cards
// // //   generateProductCards();
  