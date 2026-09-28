<template>
  <section class="services-section py-5">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-tag">Our Services</span>
        <h2 class="fw-bold">Fresh bakery experiences made for every moment</h2>
      </div>

      <div class="row g-4">
        <div class="col-lg-3 col-md-6" v-for="service in services" :key="service.title">
          <div class="service-card">
            <img :src="service.image" :alt="service.title" class="service-image" />
            <div class="service-card-body">
              <span class="service-icon">{{ service.icon }}</span>
              <h4>{{ service.title }}</h4>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Custom Cakes',
    icon: '🎂',
    description: 'Unique celebration cakes tailored to birthdays, weddings, and special events.',
    image:
      'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fresh Pastries',
    icon: '🥐',
    description: 'Buttery croissants, muffins, and flaky pastries baked fresh every morning.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Artisan Bread',
    icon: '🍞',
    description: 'Slow-fermented loaves and seasonal bakes made with premium ingredients.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Event Catering',
    icon: '🎉',
    description: 'Sweet tables and bakery boxes for meetings, gatherings, and intimate events.',
    image:
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80',
  },
]
</script>

<style scoped>
.services-section {
  background: linear-gradient(180deg, #fffaf4 0%, #fff 100%);
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.section-tag {
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--rb-gold-dark);
}

.service-card {
  background: #fff;
  border-radius: 26px;
  overflow: hidden;
  border: 1px solid rgba(71, 44, 26, 0.08);
  box-shadow: 0 16px 32px rgba(93, 67, 33, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 24px 42px rgba(93, 67, 33, 0.12);
}

.service-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.service-card-body {
  padding: 1.5rem 1.2rem 1.6rem;
}

.service-card-body h4 {
  margin-bottom: 0.45rem;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--rb-brown);
}

.service-card-body p {
  margin-bottom: 0;
  color: var(--rb-muted);
  line-height: 1.75;
}

.service-icon {
  display: inline-flex;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(242, 178, 73, 0.14);
  font-size: 1.4rem;
  margin-bottom: 0.9rem;
}
</style>
