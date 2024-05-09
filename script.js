
const products = [
    {
        id: "123456789",
        title: "Red T-Shirt",
        image: "./images/red.png",
        priceBeforeSale: 150,
        priceAfterSale: 120,
        amount: 1,
    },
    {
        id: "456789123",
        title: "Black T-Shirt",
        image: "./images/black.png",
        priceBeforeSale: 180,
        priceAfterSale: 130,
        amount: 1,
    },
    {
        id: "789123456",
        title: "Blue T-Shirt",
        image: "./images/blue.png",
        priceBeforeSale: 200,
        priceAfterSale: 160,
        amount: 1,
    },
];

const productsContainer = document.querySelector(".section");

products.forEach(product => {
    productsContainer.innerHTML += `

      <div class="stor-item">

        <div class="left-site">

            <div class="img">
                <img src=${product.image} alt="#">
            </div>

            <div class="text">
                <label>${product.title}</label>

                <div class="price">
                    <span class="green">${product.priceAfterSale}</span>
                    <span class="red">${product.priceBeforeSale}</span>
                </div>
            </div>
        </div>

        <div class="right-side">
            <button class="del-item"> <i class="fa-solid fa-xmark"></i></button>
            <div class="counter">
                <button class="minus-btn"><i class="fa-solid fa-minus"></i></button>
                <span class="number">${product.amount}</span>
                <button class="plus-btn"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
        </div>
        `;



    const plus = document.querySelector(".plus-btn");
    const minus = document.querySelector(".minus-btn");
    const delBtn = document.querySelector(".del-item");

    plus.addEventListener("click", function () {
        const changeNumber = document.querySelector(".number")
        product.amount += 1
        changeNumber.textContent = product.amount
    })

    minus.addEventListener("click", function () {
        const changeNumber = document.querySelector(".number")
        if (changeNumber.textContent > 1) {
            product.amount -= 1
            changeNumber.textContent = product.amount
        }
    });

    
        
        delBtn.addEventListener( "click" ,function (el) {
            el.target.closest(".stor-item").remove();  
        });
    
});


