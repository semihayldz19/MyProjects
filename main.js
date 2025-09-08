const titleElement1 = document.getElementById("title"); // id si title olan elementi alır ve titleElementt1 de saklar
const metin = titleElement1.textContent; //titleElement1 deki metni alır ve metin e kaydeder
titleElement1.textContent=""; // ekranda başlık birdenbire gözükmesin diye içini temizledik
titleElement1.style.visibility = "visible"; // başlık elementinin görünürlüğünü visible(görünür) yaptık.
let index = 0; // metnin içinde dolaşan sayaç

function yazdir()
{
    if(index < metin.length) { // index değişkeninin numarası metin boyutundan küçük olduğu sürece
        titleElement1.textContent += metin.charAt(index);//o indexde olan karakteri textcontent e ekle
        index ++; // indexi bir artır ki sonraki karaktere geçsin
        setTimeout(yazdir,150); //150 milisaniye sonra fonksiyonu tekrar çağırır
    }
}
yazdir(); // tanımladığımız fonksiyonu çağırdık.

