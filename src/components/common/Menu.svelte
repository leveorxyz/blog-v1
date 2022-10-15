<script>
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }

  export let categories;
</script>

<button
  class="flex h-12 w-12 items-center justify-center bg-violet-700 text-white md:hidden"
  on:click={toggleNavbar}
>
  <svg
    class="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    baseProfile="tiny"
    version="1.2"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M8 3H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 3zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 3zM8 13H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 13zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 13z"
    />
  </svg>
</button>
<div
  class="{showMenu
    ? 'fixed'
    : 'hidden'} top-0 left-0 z-50 h-screen w-screen bg-[#131313]"
>
  <div class="flex flex-row items-center justify-between">
    <a class="flex flex-row items-center" href="/" title="Go to Home page">
      <img src="/logo.png" alt="Logo" class="mr-2 h-12 w-12 rounded-sm" />
      <h2 class="text-2xl">Blog</h2>
    </a>
    <button
      class="flex h-12 w-12 items-center justify-center bg-violet-700 text-white md:hidden"
      on:click={toggleNavbar}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x-circle"
        ><circle cx="12" cy="12" r="10" /><line
          x1="15"
          y1="9"
          x2="9"
          y2="15"
        /><line x1="9" y1="9" x2="15" y2="15" /></svg
      >
    </button>
  </div>
  <ul class="flex h-full flex-col justify-center space-y-6 bg-violet-700 p-6">
    {#each categories as category}
      <li class="font-silkscreen relative text-4xl font-bold text-white">
        <a
          href="/category/{category.uid}"
          title="Go to ${category.data.title} category page"
          >{category.data.title}</a
        >
      </li>
    {/each}
  </ul>
</div>
