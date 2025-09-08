//succes html  için
const resultDiv = document.getElementById("result"); // id si result olan elementi al ve içeriğini resultDive e ata

// URL query string’den verileri al
const params = new URLSearchParams(window.location.search); //window.location.search → sayfanın URL’inde ? ile başlayan kısmı alır.Örnek: success.html?ad=Semiha&soyad=Akar&email=example@gmail.com
// URLSearchParams → bu parametreleri anahtar-değer şeklinde okumamızı sağlar.
const ad = params.get("ad"); //URL’deki ad parametresinin değerini alır.formdan ne geldiyse
const soyad = params.get("soyad");
const email = params.get("email");
const cinsiyet = params.get("cinsiyet");
const dogum = params.get("dogum");

// Verileri ekranda göster
//innerHTML → seçilen elementin (resultDiv) içine HTML içeriği yazmak için kullanılır.
resultDiv.innerHTML = ` 
      <p>Ad: ${ad}</p>
      <p>Soyad: ${soyad}</p>
      <p>Email: ${email}</p>
      <p>Cinsiyet: ${cinsiyet}</p>
      <p>Doğum Tarihi: ${dogum}</p>
    `;

//resultDiv → verileri göstereceğimiz element.

//params → URL’den gönderilen verileri alır.

//params.get() → her bir form alanını değişkene atar.

//innerHTML → değişkenleri HTML olarak sayfaya yazar.
