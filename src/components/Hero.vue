<template>
  <section id="hero" class="hero d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <span class="section-tag">Rukynmamm</span>
          <h1 class="display-4 fw-bold mb-3">
            Freshly Baked With <span class="text-warning">Love</span>
          </h1>
          <p class="lead text-secondary mb-4">
            Specializing in handcrafted breads, celebration cakes, and pastries made fresh for
            homes, events, and everyday sweetness across KTN/ABJ.
          </p>
          <div class="d-flex flex-wrap gap-3">
            <a href="#menu" class="btn btn-warning btn-lg">Order Now</a>
            <a href="#about" class="btn btn-outline-dark btn-lg">Read More</a>
          </div>

          <div class="hero-meta mt-4 d-flex flex-wrap gap-4">
            <div>
              <strong class="d-block fs-4 fw-bold text-warning">{{ years }}+</strong>
              <span class="text-secondary">Years of experience</span>
            </div>
            <div>
              <strong class="d-block fs-4 fw-bold text-warning"
                >{{ customers.toLocaleString() }}+</strong
              >
              <span class="text-secondary">Happy customers</span>
            </div>
          </div>
        </div>

        <div class="col-lg-6 text-center mt-4 mt-lg-0">
          <div class="hero-image-wrap">
            <img
              src="https://img.magnific.com/premium-photo/fresh-bakery-product-with-basket-professional-advertising-food-photography_920594-51759.jpg"
              alt="Fresh bakery items"
              class="img-fluid rounded-4 shadow"
            />
            <div class="floating-badge">
              <span class="badge-title">Fresh Daily</span>
              <strong>Artisan Bakes</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const years = ref(0)
const customers = ref(0)

const animateNumber = (number, target, duration = 1500) => {
  const startTime = performance.now()

  const update = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    number.value = Math.floor(progress * target)

    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      number.value = target
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  animateNumber(years, 10)
  animateNumber(customers, 5000)
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  padding-top: 120px;
  background: linear-gradient(135deg, #fff8ee 0%, #fce7c4 100%);
}

.hero-image-wrap {
  position: relative;
  display: inline-block;
  padding: 0.8rem;
  border-radius: 32px;
  box-shadow: 10px rgba(71, 44, 26, 0.12);
}

.hero-image-wrap img {
  width: min(100%, 560px);
  height: 520px;
  object-fit: cover;
  border-radius: 26px;
  box-shadow: var(--rb-shadow);
}

.floating-badge {
  position: absolute;
  bottom: 28px;
  left: -18px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(58, 42, 33, 0.08);
  border-radius: 18px;
  padding: 1rem 1.15rem;
  box-shadow: 0 18px 35px rgba(69, 40, 14, 0.14);
}

.badge-title {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--rb-gold-dark);
  margin-bottom: 0.25rem;
}

.hero-meta strong {
  color: var(--rb-gold-dark);
}

.btn {
  border-radius: 999px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
