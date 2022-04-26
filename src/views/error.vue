<template>
  <div class="page-wrapper error-page">
    <div class="title-and-tagline">
      <h1>Error !!!</h1>
      <div class="tagline">OoOps!</div>
    </div>

    <div class="content-body-wrapper text-center">
      <p>
        Your age is our accepted limit. <br />
        We are sorry but we cannot insure you now.
      </p>

      <div class="button-wrapper">
        <button
          type="button"
          @click="$router.push('/')"
          class="btn btn-primary"
        >
          Start Again
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
};
</script>

<style>
</style>