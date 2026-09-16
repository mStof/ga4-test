window.dataLayer = window.dataLayer || [];

const gtag = () => {
dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-E8R8LKVKFL');

gtag('event', 'page_view', {
    page_location: window.location.href,
    client_id: "ID_test",
    language: navigator.language,
    page_enconding: document.characterSet,
    page_title: document.title,

})
