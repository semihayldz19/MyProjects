const titleElement1 = document.getElementById("title");
const metin = titleElement1.textContent;
titleElement1.textContent="";
titleElement1.style.visibility = "visible"; // harf harf yazarken göster
let index = 0;

function yazdir()
{
    if(index < metin.length) {
        titleElement1.textContent += metin.charAt(index);
        index ++;
        setTimeout(yazdir,100); //her harf için 100 ms bekle
    }
}
yazdir();

