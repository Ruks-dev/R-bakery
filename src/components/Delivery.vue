<template>
  <section id="delivery" class="delivery-section py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h6 class="text-warning fw-bold text-uppercase">Delivery</h6>
          <h2 class="fw-bold mb-3">We Bring The Bakery To You</h2>
          <p class="text-secondary mb-4">
            Order online and get freshly baked goods delivered straight to your door, hot and fresh,
            within the hour.
          </p>

          <div class="d-flex mb-3" v-for="(step, i) in steps" :key="i">
            <div
              class="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center flex-shrink-0"
              style="width: 40px; height: 40px"
            >
              {{ i + 1 }}
            </div>
            <div class="ms-3">
              <h6 class="fw-bold mb-1">{{ step.title }}</h6>
              <p class="text-secondary small mb-0">{{ step.text }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 text-center">
          <div class="delivery-visual">
            <img src="/photos/delivery.png" alt="Delivery image" class="delivery-image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { title: 'Choose Your Items', text: 'Browse the menu and add favorites to your cart.' },
  { title: 'Checkout', text: 'Confirm your order and delivery address.' },
  { title: 'Enjoy', text: 'Your order arrives warm and fresh within the hour.' },
]
</script>

<style scoped>
.delivery-section {
  background:   linear-gradient(135deg, rgba(255, 237, 197, 0.7), rgba(255, 255, 255, 0.9));
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.delivery-visual {
  position: relative;
  display: inline-block;
  width: min(100%, 560px);
  padding: 1.1rem;
  border-radius: 32px;
 
}

.delivery-image {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 26px;
  box-shadow: 0 18px 30px rgba(71, 44, 26, 0.12);
}

@media (max-width: 767px) {
  .delivery-image {
    height: 300px;
  }
}
</style>
