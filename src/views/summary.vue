<template>
  <div class="page-wrapper">
    <div class="summary-page" v-if="!packagePurchased">
      <div class="title-and-tagline">
        <h1>Summary Page</h1>
        <div class="tagline">Please Review your submitted Application</div>
      </div>

      <div class="content-body-wrapper text-center">
        <ul class="list-style-none">
          <li>
            <strong>Name: </strong> <span> {{ insurance.name }} </span>
          </li>
          <li>
            <strong>Age: </strong> <span> {{ insurance.age }} Years </span>
          </li>
          <li>
            <strong>Where do you live: </strong>
            <span> {{ insurance.country }} </span>
          </li>
          <li>
            <strong>Package: </strong> <span> {{ insurance.insurance }} </span>
          </li>
          <li>
            <strong>Premium: </strong> <span> {{ insurance.premium }} {{ insurance.currency }}</span>
          </li>
        </ul>

        <div class="button-wrapper text-center">
          <button
            type="button"
            @click="$router.go(-1)"
            class="btn btn-secondary"
          >
            Back
          </button>
          <button type="button" @click="purchase()" class="btn btn-primary">
            Buy
          </button>
        </div>
      </div>
    </div>

    <div class="purchased-page" v-if="packagePurchased">
      <div class="title-and-tagline">
        <h1>Thank You</h1>
        <div class="tagline">You Successfully purchase the insurance. :)</div>
      </div>
      <br />
      <br />
      <div class="content-body-wrapper text-center">
        <div class="button-wrapper">
          <button type="button" @click="goToHome()" class="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "summary",
  created() {
    this.insurance = this.$store.getters.insurance;
  },
  data() {
    return {
      packagePurchased: false,
      insurance: {
        name: "",
        age: "",
        country: "",
        currency: "",
        insurance: "",
        premium: 0,
      },
    };
  },
  methods: {
    purchase() {
      this.packagePurchased = !this.packagePurchased;
    },
    goToHome() {
      this.$store.dispatch("resetInsuranceDetails");
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>