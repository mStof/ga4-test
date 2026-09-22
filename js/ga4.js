const G_TAG = "G-NBF6G74WPF";

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", G_TAG);

const eventAddToCart = (cart) => {
  const TValue = cart.reduce((total, { price }) => total + price, 0);
  const itemsFormatted = cart.map((e, index) => {
    return {
      item_id: e.id,
      item_name: e.name,
      index: index,
      item_category: e.category,
      price: e.price,
      quantity: 1,
    };
  })

  const eCommerce = {
    currency: "BRL",
    value: TValue,
    items: itemsFormatted,
  };

  gtag("event", "add_to_cart", eCommerce);
};

const eventViewItemList = (prodList) => {
  const itemsFormatted = prodList.map((e, index) => {
    return {
      item_id: e.id,
      item_name: e.name,
      index: index,
      item_category: e.category,
      price: e.price,
      quantity: 1,
    };
  })

  const eCommerce = {
    currency: "BRL",
    item_list_id: "F01",
    item_list_name: "Página_de_produtos",
    items: itemsFormatted,
  } 

  gtag("event", "view_item_list", eCommerce)
}


const logo = document.querySelector(".logo");
const eventClickLogo = (e) => {
  e.preventDefault();
  gtag("event", "click_logo", {
    page_location: window.location.href,
    dispositivo: navigator.userAgentData.platform,
    browser: navigator.userAgentData.brands[0].brand,
    disp_language: navigator.language,
  });

  location.href = logo.href;
}
logo.addEventListener("click", eventClickLogo);
