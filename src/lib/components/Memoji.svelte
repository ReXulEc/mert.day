<script>
    import memoji1 from '$lib/images/memoji/memoji1.png';
    import memoji2 from '$lib/images/memoji/memoji2.png';
    import memoji3 from '$lib/images/memoji/memoji3.png';
    import memoji4 from '$lib/images/memoji/memoji4.png';
    import memoji5 from '$lib/images/memoji/memoji5.png';
    import memoji6 from '$lib/images/memoji/memoji6.png';


    const numbers = [
    memoji1,
    memoji2,
    memoji3,
    memoji4,
    memoji5,
    memoji6
];

var selectedNumber = memoji1

// 3 saniye aralıklarla yeni sayıları seçelim
setTimeout(function selectRandomNumber() {
  // Eğer dizi boşsa işlemi sonlandıralım
  if (numbers.length === 0) {
    return;
  }

  // Yeni bir sayı seçelim
  selectedNumber = numbers[Math.floor(Math.random() * numbers.length)];

  // Seçilen sayıyı diziden çıkartalım
  var index = numbers.indexOf(selectedNumber);
  if (index > -1) {
    numbers.splice(index, 1);
  }

  // 3 saniye sonra tekrar yeni bir sayı seçmek için fonksiyonu çağıralım
  setTimeout(selectRandomNumber, 3000);
}, 3000);

/*let randomEmoji = null
let previousEmoji = null;
let count = 0;

function getRandomEmoji() {
    randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    while (randomEmoji === previousEmoji) {
            randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            console.log('same emoji')

    }
            previousEmoji = randomEmoji;
            return randomEmoji;

}

function setRandomEmoji() {
    randomEmoji = getRandomEmoji();
    setTimeout(() => {
        setRandomEmoji();
    }, 3000);
}

if (count == 0) {
    setRandomEmoji();
}
*/



</script>

<div class="h-[5rem] w-[5rem] p-1 bg-[#808080]/5 rounded-full relative flex justify-center items-center">
    <img src={selectedNumber} alt="Mert Dogu" />
    <div class="absolute flex justify-center right-0 bottom-0 bg-white rounded-full h-7 w-7 items-center">
        <p class="text-[1.2rem]">🎉</p>
    </div>
</div>