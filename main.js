let data = JSON.parse(localStorage.getItem("products")) || [];
let sidebars = document.querySelector(".bars");
let navbars = document.querySelector(".navbar");
let section_product = document.querySelectorAll(".products .content .box");
let section_arrival = document.querySelectorAll(".arrival .content .box");
let section_salles = document.querySelectorAll(".salles .content .box");
let section_new = document.querySelectorAll(".new .content .box");
let all_icon_buy_products = document.querySelectorAll(".products .content .box i.buy ");
let all_icon_buy_arrival = document.querySelectorAll(".arrival .content .box i.buy ");
let all_icon_buy_salles = document.querySelectorAll(".salles .content .box i.buy ");
let all_icon_buy_new = document.querySelectorAll(".new .content .box i.buy ");

sidebars.onclick = function() {
    navbars.classList.toggle("active");
    if (sidebars.classList.contains("fa-bars")) {
        sidebars.classList.add("fa-x");
        sidebars.classList.remove("fa-bars");

    } else {
        sidebars.classList.remove("fa-x");
        sidebars.classList.add("fa-bars");
    }

};
// section product
section_product.forEach((e) => {
    e.onclick = function() {
        let box = e.parentElement;
        let product = {
            img_product: box.querySelector("img").src,
            matrial_product: box.querySelector("p").textContent,
            name_product: box.querySelector("h3").textContent,
            price_product: box.querySelector(".price h5").textContent
        }
        data.push(product);
        window.localStorage.setItem("products", JSON.stringify(data));
        showdata();

    }
});
all_icon_buy_products.forEach((e) => {
    e.onclick = function() {
        Swal.fire({
            title: 'Success!',
            text: 'Product Added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
});
// section arrival
section_arrival.forEach((e) => {
    e.onclick = function() {
        let box = e.parentElement;
        let product = {
            img_product: box.querySelector("img").src,
            matrial_product: box.querySelector("p").textContent,
            name_product: box.querySelector("h3").textContent,
            price_product: box.querySelector(".price h5").textContent
        }
        data.push(product);
        window.localStorage.setItem("products", JSON.stringify(data));
        showdata();

    }
})
all_icon_buy_arrival.forEach((e) => {
    e.onclick = function() {
        Swal.fire({
            title: 'Success!',
            text: 'Product Added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
});
// shop => salles
section_salles.forEach((e) => {
    e.onclick = function() {
        let box = e.parentElement;
        let product = {
            img_product: box.querySelector("img").src,
            matrial_product: box.querySelector("p").textContent,
            name_product: box.querySelector("h3").textContent,
            price_product: box.querySelector(".price h5").textContent
        }
        data.push(product);
        window.localStorage.setItem("products", JSON.stringify(data));
        showdata();

    }
});
all_icon_buy_salles.forEach((e) => {
    e.onclick = function() {
        Swal.fire({
            title: 'Success!',
            text: 'Product Added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
});
// shop => new
section_new.forEach((e) => {
    e.onclick = function() {
        let box = e.parentElement;
        let product = {
            img_product: box.querySelector("img").src,
            matrial_product: box.querySelector("p").textContent,
            name_product: box.querySelector("h3").textContent,
            price_product: box.querySelector(".price h5").textContent
        }
        data.push(product);
        window.localStorage.setItem("products", JSON.stringify(data));
        showdata();

    }
});
all_icon_buy_new.forEach((e) => {
    e.onclick = function() {
        Swal.fire({
            title: 'Success!',
            text: 'Product Added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
});

// show data
function showdata() {
    let section_table = document.querySelector(".all_products .container table tbody");
    let result = '';
    for (let i = 0; i < data.length; i++) {
        result += `
            <tr>
                <td>${i + 1}</td>
                <td>${data[i].name_product}</td>
                <td><img src="${data[i].img_product}" alt="${data[i].name_product}" style="width: 50px;"></td>
                <td>${data[i].price_product}</td>
                <td>${data[i].matrial_product}</td>
                <td>
                  <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                </td>
                <td><i class="fa-solid fa-trash" style="color: red; font-size: 20px; cursor: pointer;" onclick="deleteProduct(${i})"></i></td>
                
            </tr>
        `;
    }
    section_table.innerHTML = result;
}


// deelete one product select
function deleteProduct(i) {
    data.splice(i, 1);
    window.localStorage.setItem("products", JSON.stringify(data));
    showdata();
}


showdata();