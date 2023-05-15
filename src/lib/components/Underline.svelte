<script>
export let href
export let text = 'Take me to the magic land'
</script>

<a href={href} class="hover-underline-animation">
    <div class="flex items-center space-x-2 text-white " href="">
        <span class="font-medium">{text}</span>
        <svg aria-hidden="true" fill="none" stroke="white" height='15px' stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
</a>