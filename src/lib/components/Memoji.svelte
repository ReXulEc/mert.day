<script>
    import memoji1 from '$lib/images/memoji/memoji1.png';
    import memoji2 from '$lib/images/memoji/memoji2.png';
    import memoji3 from '$lib/images/memoji/memoji3.png';
    import memoji4 from '$lib/images/memoji/memoji4.png';
    import memoji5 from '$lib/images/memoji/memoji5.png';
    import memoji6 from '$lib/images/memoji/memoji6.png';



    const emojis = [
        memoji1,
        memoji2,
        memoji3,
        memoji4,
        memoji5,
        memoji6
    ]
    
    let randEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    setInterval (() => {
        let randEmojiNew = emojis[Math.floor(Math.random() * emojis.length)];
        if (randEmojiNew != randEmoji) {
            randEmoji = randEmojiNew;
        }
    }, 1000)

</script>

<div class="h-[5rem] w-[5rem] p-1 bg-[#808080]/5 rounded-full relative flex justify-center items-center">
    <img src={randEmoji} alt="Mert Dogu" />
    <div class="absolute flex justify-center right-0 bottom-0 bg-white rounded-full h-7 w-7 items-center">
        <p class="text-[1.2rem]">🎉</p>
    </div>
</div>