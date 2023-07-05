const arr=[1,2,3,4,5,6,7]
const arr1 =[8,9,10];

arr.push(8)//8 i arr dizisine ekler.
arr.shift()//dizinin ilk elemanını kaldırıcak
let  yeni=arr.slice(0,3)//dizinin seçili terimlerini yeni bir dizi oalrak döndürür.
arr.concat(arr1)//iki diziyi birleştitirir.
arr.push(...arr1)//... dizinin tüm elemanlarını seçer.
let s= arr.entries()//[key,value] çiftlerine sahip değer ler döndürür. for ile bu değerleri  çağırabiliriz.
let m=arr.some(a=>a>2)//some metodu içierisinde bulunan koşulu sağlayann tek bir değer bile bulsa true döner.
let k=arr.every(a=>a%2==0)//Tüm elemanların koşulu sağlaması gerek true döner.
let l=arr.findIndex(a=>a%2==0) //koşula uyan ilk indexi  verir.....
arr.fill(10,0,2)//dizinin içerisini değer ile doldurur.(0-2 terimleri arasını 10 yap)
let a= arr.filter(d=>d<5)//dizinin 5 ten küçük terimlerini seçer.
let b= arr.find(d=>d<5)//burada tek değer döner.TEk değer bulur
let c=arr.map(a=>a*2)//map her bir dizi ögesi için yeni bir tanım oluşturarak yeni bir dizi oluşturur.
let d=arr.join('-')// bir diziyi dize olarak döndürür yani 1-2-3...
arr.reverse()//diziyi ters çevirir.
let e=arr.sort((a,b)=>a-b) //küçükten büyüğe sıralar. b-a büyükten küçüğe.
let f=arr.reduce((a,b)=>a+b,0) //burada işlemin sonucu olarak birikmiş değeri döndürür.yani başlangıçta 0 a eşit bir parametreye tüm değerleri toplar ve sonucu döndürür.




