let shop = document.getElementById('items')

let generateGrid = () => {
  return (shop.innerHTML = productList
    .map((x) => {
      let { id, img, title, desc1, desc2, price } = x
      return `
        <div class="col-lg-4 ">
            <div
              class="d-flex flex-column justify-content-center mb-4 border shadow"
            >
              <div class="image-container">
                <img
                  src=${img}
                  alt="cosmetic"
                  class="w-100"
                  height="305"
                />
              </div>
              <div class="info-container p-4">
                <h1>${title}</h1>
                <p class="text-start text-break my-2">${desc1}</p>
                <p class="text-start text-break mt-4">${desc2}</p>
                <div
                  class="d-flex flex-row justify-content-between align-items-center mt-4"
                >
                  <p>price ${price}$</p>
                  <button onclick="incrementCartAmount()" class="add-btn px-3 py-2">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
    `
    })
    .join(''))
}
generateGrid()

let incrementCartAmount = () => {
  let cartIcon = document.getElementById('cartAmount')
  console.log(cartIcon.innerHTML++)
}
