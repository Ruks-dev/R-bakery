<template>
  <section id="about" class="about-section py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <div class="about-image-wrap">
            <img
              src="https://images.stockcake.com/public/e/c/7/ec73929e-1f6b-40e5-83cd-6828b3b7480f_large/bakers-at-work-stockcake.jpg"
              alt="Baker at work"
              class="img-fluid rounded-4 shadow"
            />
            <div class="experience-card">
              <span>{{ years }}+</span>
              <small>Years of Baking</small>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <span class="section-tag">About Us</span>
          <h2 class="fw-bold mb-3">A bakery rooted in care, flavor, and family values.</h2>
          <p class="text-secondary mb-4">
            Ruks brings warmth and craftsmanship to every bake. From everyday pastries to
            custom celebration cakes, every recipe is made with attention, quality ingredients, and
            the personal touch that makes each order memorable.
          </p>

          <div class="row g-3">
            <div
  class="col-6"
  v-for="(stat, i) in stats"
  :key="i"
>
  <div class="stat-card">
    <h3 class="fw-bold text-warning mb-1">
      {{ stat.current }}{{ stat.suffix }}
    </h3>

    <small class="text-secondary">
      {{ stat.label }}
    </small>
  </div>
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

const stats = [
  {
    current: ref(0),
    target: 500,
    suffix: '+',
    label: 'Happy Customers'
  },
  {
    current: ref(0),
    target: 50,
    suffix: '+',
    label: 'Recipes'
  },
  {
    current: ref(0),
    target: 3,
    suffix: '',
    label: 'Locations'
  }
]

 
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
  const aboutSection = document.querySelector('#about')

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {

        // Animate the 5+ years
        animateNumber(years, 5)

        // Animate all the statistics
        stats.forEach((stat) => {
          animateNumber(stat.current, stat.target)
        })

        // Stop watching after animation starts
        observer.unobserve(aboutSection)
      }
    },
    {
      threshold: 0.3
    }
  )

  observer.observe(aboutSection)
})
</script>

<style scoped>
.about-section {
  background: var(--rb-section);
}

.about-image-wrap {
  position: relative;
  display: inline-block;
}

.about-image-wrap img {
  width: min(100%, 560px);
  height: 500px;
  object-fit: cover;
}

.experience-card {
  position: absolute;
  right: -18px;
  bottom: 24px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  padding: 1rem 1.25rem;
  box-shadow: 0 18px 35px rgba(69, 40, 14, 0.12);
  text-align: center;
}

.experience-card span {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--rb-gold-dark);
  line-height: 1;
}

.experience-card small {
  color: var(--rb-muted);
}

.stat-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(78, 54, 37, 0.08);
  border-radius: 16px;
  padding: 1.1rem 1rem;
  min-height: 110px;
}
</style>

