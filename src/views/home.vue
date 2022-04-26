<template>
  <div class="page-wrapper home-page">
    <div class="title-and-tagline">
      <h1>Home Page</h1>
      <div class="tagline">Hello There!</div>
    </div>

    <div class="content-body-wrapper text-center">
      <p>
        Let's buy some insurance. <br />
        It is going to take only a few steps.
      </p>

      <div class="button-wrapper text-center">
        <button
          type="button"
          @click="$router.push('/user')"
          class="btn btn-primary"
        >
          Start
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
</style>