<script>
  import {HighlightAuto} from "svelte-highlight";

  export let slice;
</script>

<HighlightAuto class="mt-3 rounded-md overflow-x-scroll" code={slice.primary.content[0].text} />
