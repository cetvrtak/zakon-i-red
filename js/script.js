const contentDiv = document.getElementById('main_content');

function displayPageContent(mainContent) {
	contentDiv.innerHTML = mainContent;
}

const startPageContent = "<img id=\"info_icon\" src=\"images/info_md.jpg\" alt=\"Info\"><h2 id=\"about_us\">O nama</h2><div class=\"row\"><p class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu lobortis diam, et faucibus urna. Morbi placerat eros sed est imperdiet, eget efficitur sapien sodales. Integer finibus diam urna, at laoreet risus tincidunt vel. Fusce laoreet libero in odio laoreet luctus. Aenean tempor pulvinar nisi, ac sodales mauris facilisis ut. Phasellus id enim eget ex lacinia viverra ac vel ex. Pellentesque quis felis mi. Cras commodo est sed elit condimentum feugiat. Pellentesque tempor nec nulla non dignissim. Quisque tempor euismod convallis. Etiam a suscipit velit. Duis feugiat augue vel ipsum pharetra, eget viverra mauris tempor. Quisque in nisl volutpat, commodo ante nec, tempor arcu. Donec quis efficitur est. Vivamus porttitor justo vel ex fermentum, in suscipit nibh gravida. Vestibulum eu vulputate sapien.</p><p class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">Ut pellentesque hendrerit urna eu maximus. Phasellus nec purus sit amet libero porta venenatis at eget elit. Fusce ac arcu id elit commodo finibus. Nunc a pretium erat, et molestie arcu. Suspendisse potenti. Praesent non arcu sit amet enim tempus aliquam. Nam in mauris vel nunc varius vulputate in non ipsum. Vivamus fermentum mi leo, in vestibulum lacus tincidunt ut. Cras pellentesque ipsum vel pharetra gravida. Sed odio eros, convallis in cursus vel, consectetur a est. In a dolor nulla.<p></div>";
const startPageButton = document.getElementById('start');
startPageButton.addEventListener("click", function(){
	displayPageContent(startPageContent)
});

const servicesPageContent = "";
const servicesPageButton = document.getElementById('services');
servicesPageButton.addEventListener("click", function(){
	displayPageContent(servicesPageContent)
});

const contactPageContent = "<div class=\"d-xxl-flex d-xl-flex d-lg-flex justify-content-xxl-between justify-content-xl-between justify-content-lg-between\"><div><h2>Advokatska Kancelarija Minić</h2><div>Adresa: Aleja Sv. Save bb, Banja Luka 78000</div><div>Tel: +387 66 123 456</div><div>E-mail: miroslav.minic@gmail.com</div><br><div>RADNO VRIJEME: PON-PETAK od 08h do 16h; SUBOTA od 09h do 14h</div></div><div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe width=\"450\" height=\"150\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=Aleja%20Svetog%20Save,%20Banjaluka&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe></div></div></div>";
const contactPageButton = document.getElementById('contact');
contactPageButton.addEventListener("click", function(){
	displayPageContent(contactPageContent)
});