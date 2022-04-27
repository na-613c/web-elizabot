<script>
  import Elizabet from "./Elizabet.svelte";
  import Cat from "./Cat.svelte";
  import Browser from "./Browser.svelte";
  let hereKitty = false;

  const handleMouseenter = () => (hereKitty = true);
  const handleMouseleave = () => (hereKitty = false);
</script>

<svelte:body
  on:mouseenter={handleMouseenter}
  on:mouseleave={handleMouseleave} />

<Cat {hereKitty} />
<div class="body">
  <div
    class="eliz"
    on:mouseenter={handleMouseleave}
    on:mouseleave={handleMouseenter}
  >
    <Elizabet />
  </div>
  <Browser />
</div>

<style>
  .body {
    display: flex;
    margin-top: 5%;
  }
  .eliz {
    background-color: azure;
    width: 320px;
    height: 70vh;
    padding: 20px;
    margin: auto;
    border-radius: 1em;
  }
</style>
