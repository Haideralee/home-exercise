<template>
  <div class="page-wrapper user-page">
    <div class="title-and-tagline">
      <h1>User Page</h1>
      <div class="tagline">Tell us about yourself</div>
    </div>

    <div class="content-body-wrapper">
      <form>
        <div class="validation-alert" v-if="isFormValid">
          Please Filled All Mandatory Fields
        </div>

        <div class="form-control">
          <label for="name"> Name </label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            id="name"
            placeholder="Please Enter Your Name"
          />
        </div>
        <div class="form-control">
          <label for="age"> Age </label>
          <input
            v-model="form.age"
            type="number"
            name="age"
            id="age"
            placeholder="Please Enter Your Age"
          />
        </div>
        <div class="form-control">
          <label for="live"> Where do you live </label>
          <select
            name="live"
            id="live"
            v-model="form.country"
            @change="onChange($event)"
          >
            <option disabled value="" selected>Please select one</option>
            <option
              v-for="country in countries"
              :value="country.name"
              :key="country.currency"
            >
              {{ country.name }}
            </option>
          </select>
        </div>

        <div class="form-control">
          <input
            type="radio"
            name="package"
            id="standard"
            v-model="form.insurance"
            value="Standard"
          />
          <label class="checkbox-label" for="standard">Standard</label>
        </div>

        <div class="form-control">
          <input
            type="radio"
            name="package"
            id="safe"
            v-model="form.insurance"
            value="Safe"
          />
          <label class="checkbox-label" for="safe"
            >Safe (+250 {{ form.currency }}, 50%)</label
          >
        </div>

        <div class="form-control">
          <input
            type="radio"
            name="package"
            id="super-safe"
            v-model="form.insurance"
            value="Super Safe"
          />
          <label class="checkbox-label" for="super-safe"
            >Super Safe (+375 {{ form.currency }}, 75%)</label
          >
        </div>

        <div class="premium-preview">
          <h2>Your Premium is: {{ calculatePremium }} {{ form.currency }}</h2>
        </div>

        <div class="button-wrapper">
          <button
            type="button"
            @click="$router.go(-1)"
            class="btn btn-secondary"
          >
            Back
          </button>
          <button type="button" @click="next()" class="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  rates: [
    {
      currency: "HKD",
      rate: 1,
    },
    {
      currency: "USD",
      rate: 2,
    },
    {
      currency: "AUD",
      rate: 3,
    },
  ],
  created() {
    this.form = this.$store.getters.insurance;
  },
  data() {
    return {
      isFormValid: false,
      countries: [
        {
          name: "Hone Kong",
          currency: "HKD",
        },
        {
          name: "USA",
          currency: "USD",
        },
        {
          name: "Australia",
          currency: "AUD",
        },
      ],
      form: {
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
    onChange(event) {
      const selectedCountry = event.target.value;
      const foundCountry = this.countries.find(
        (country) => country.name === selectedCountry
      );
      this.form.currency = foundCountry.currency;
    },
    next() {
      const { name, age, country, currency, insurance } = this.form;
      this.isFormValid = false;

      if (!name || !age || !country || !currency || !insurance) {
        this.isFormValid = true;
      } else if (age > 100) {
        this.$store.dispatch("resetInsuranceDetails");
        this.$router.push("/error");
      } else {
        this.form.premium = this.calculatePremium;
        this.$store.dispatch("updateInsuranceDetail", this.form);
        this.$router.push("/summary");
      }
    },
  },
  computed: {
    calculatePremium() {
      const { age, currency, insurance } = this.form;
      if (age && currency) {
        const selectedCurrency = this.$options.rates.find(
          (rate) => rate.currency === currency
        );

        let packagePrice = 0;
        let price = 10 * age * selectedCurrency.rate;

        if (insurance === "Safe") {
          packagePrice = 0.5;
          packagePrice = price * packagePrice;
        } else if (insurance === "Super Safe") {
          packagePrice = 0.75;
          packagePrice = price * packagePrice;
        }

        return (price + packagePrice).toFixed(0);
      }
      return 0;
    },
  },
};
</script>

<style>
</style>