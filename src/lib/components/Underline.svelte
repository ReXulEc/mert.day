<script>
export let href
export let text = 'Take me to the magic land'
export let arrowstyle = 'default'

let arrow = {
  default: 'M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25',
  right: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
}

//{arrow[arrowstyle]}

</script>

<a href={href} class="flex items-center space-x-2 ">
    <div class="hover-underline-animation text-white " href="">
        <span class="font-medium">{text}</span>
    </div>
    <svg aria-hidden="true" fill="none" stroke="white" height='15px' stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="{arrow[arrowstyle]}" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</a>

<style>
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: #f1f1f1;
  }
  
  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(1);
    height: 1.5px;
    bottom: 0;
    left: 0;
    background-color: #f1f1f1;
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }
  
  .hover-underline-animation:hover::after {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
</style>