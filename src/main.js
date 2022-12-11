let shop = document.getElementById('items')
let searchButton = document.getElementById('search-btn')
let pageLogo = document.getElementById('logo')
let category = document.getElementById('select')
let categoryValu = 'category'

let generateGrid = (list) => {
  return (shop.innerHTML = list
    .map((x) => {
      let { id, img, title, desc1, desc2, price } = x
      return `
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6 ">
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
                  <button onclick="incrementCartAmount()" class="btn add-btn px-3 py-2">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
    `
    })
    .join(''))
}
generateGrid(productList)

let incrementCartAmount = () => {
  let cartIcon = document.getElementById('cartAmount')
  console.log(cartIcon.innerHTML++)
}
pageLogo.onclick = () => {
  generateGrid(productList)
}
category.onchange = () => {
  categoryValu = category.options[category.selectedIndex].innerHTML
}
let filteringTheList = () => {
  let filteredList = []
  switch (categoryValu) {
    case 'Makeup cosmetics':
      productList.forEach((item) => {
        if (item.category === 'Makeup cosmetics') {
          filteredList.push(item)
        }
      })
      break
    case 'Skin care cosmetics':
      productList.forEach((item) => {
        if (item.category === 'Skin care cosmetics') {
          filteredList.push(item)
        }
      })

      break
    case 'Hair care products':
      productList.forEach((item) => {
        if (item.category === 'Hair care products') {
          filteredList.push(item)
        }
      })

      break
    default:
      return productList
  }
  return filteredList
}
searchButton.onclick = () => {
  let searchValue = document
    .getElementById('search-form')
    .value.toLocaleLowerCase()
  searchValue = searchValue.trim()
  if (searchValue.length === 0) {
    console.log('please enter somthing')
  } else {
    let matchProducts = []
    filteringTheList().forEach((item) => {
      let itemTitle = item.title.toLocaleLowerCase()
      let itemDesc1 = item.desc1.toLocaleLowerCase()
      let itemDesc2 = item.desc2.toLocaleLowerCase()
      if (
        itemTitle.includes(searchValue) ||
        itemDesc1.includes(searchValue) ||
        itemDesc2.includes(searchValue)
      ) {
        matchProducts.push(item)
      }
    })
    if (matchProducts.length !== 0) {
      generateGrid(matchProducts)
    } else {
      alert('Nothing Match!')
    }
  }
}
