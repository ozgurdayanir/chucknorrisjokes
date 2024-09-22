//butoton ve joke için tanımlama yapıyorum
const button = document.querySelector('.btn');
const joke = document.querySelector('#joke');

button.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random').then (response => response.json()).then(data => {
        joke.textContent = data.value;
    })
    .catch(error => console.error('Error:',error));
})

/* 1. `button.addEventListener('click', () => { ... })`:
- Bu satır, bir HTML butonuna tıklama (click) olayını dinleyen bir fonksiyon ekler. Yani, butona tıklandığında içerideki fonksiyon çalışır. `addEventListener` metodu, bir olay dinleyici eklememizi sağlar. Bu örnekte, 'click' olayını dinliyoruz.

2. `fetch('https://api.chucknorris.io/jokes/random')`:
   - `fetch()` metodu, tarayıcıya dış bir API'ye HTTP isteği göndermesini söyler. Bu örnekte, `Chuck Norris` şakaları sağlayan bir API'ye istek gönderiyoruz ve rastgele bir şaka istiyoruz. `fetch`, bize bir Promise (JavaScript'in gelecekte tamamlanacak işlemler için kullanılan bir yapı) döndürür.

3. `.then(response => response.json())`:
   - İlk `then()` bloğunda, API'den dönen yanıtı alıyoruz. `fetch()` isteğinin yanıtı, bir `Response` objesidir ve bu ham JSON formatındadır. `response.json()` metodu ise bu yanıtı JSON formatına çevirir ve bunu bir JavaScript nesnesi olarak döner.

4. `.then(data => { joke.textContent = data.value; })`:
   - İkinci `then()` bloğunda, artık JSON formatındaki veriler elimizde. `data` değişkeni, API'den dönen şaka bilgisini tutar. API'nin bize gönderdiği JSON verisinde, şaka `data.value` alanında saklanır. Biz de bu şakayı HTML'deki bir `joke` elementine yerleştiriyoruz. Yani, `joke` isimli bir HTML elementinin içeriğini (`textContent`) bu şaka ile güncelliyoruz.

5. `.catch(error => console.error('Error:',error));`:
   - `catch()` bloğu ise herhangi bir hata oluşursa devreye girer. Mesela API'ye ulaşamazsak veya başka bir sorun çıkarsa, hata konsola yazdırılır. Bu şekilde hatalarla başa çıkabiliriz ve neden hata aldığımızı görebiliriz.

Genel Bakış:
- Butona tıklandığında, `Chuck Norris` API'sine bir istek gönderiliyor.
- Gelen yanıt JSON formatına dönüştürülüyor ve o yanıt içindeki şaka, sayfada bir HTML elementinin içine yerleştiriliyor.
- Herhangi bir hata olursa, o hata konsola yazdırılıyor.

Bu kod, hem temel olay dinlemeyi (buton tıklaması), hem de JavaScript'in `fetch()` ve `Promise` yapısını kullanmayı gösteren güzel bir örnek.*/