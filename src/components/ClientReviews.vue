<template>
  <section class="reviews-section py-5">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-tag">Client Reviews</span>
        <h2 class="fw-bold">Loved by families, events, and everyday sweet cravings</h2>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="review in reviews" :key="review.name">
          <div class="review-card">
            <div class="rating-row">
              <span class="rating-badge">★★★★★</span>
            </div>

            <p class="review-text">“{{ review.text }}”</p>

            <div class="review-person">
              <img :src="review.image" :alt="review.name" />
              <div>
                <h5>{{ review.name }}</h5>
                <small>{{ review.location }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Chidinma Eze',
    location: 'Lagos',
    text: 'The cake looked stunning and tasted even better. Every detail felt personal and beautifully done.',
    image:
      'https://tse4.mm.bing.net/th/id/OIP.6Ewu6sloAlRzK0zPJCQcDAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Tobi Akin',
    location: 'Abuja',
    text: 'Fresh bread, reliable delivery, and a menu that feels premium but still comforting. Truly a bakery I trust.',
    image:
      'https://th.bing.com/th/id/OIP.Gec77MvAEriv9kHiuU0zFgHaEJ?w=310&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3',
  },
  {
    name: 'Grace Musa',
    location: 'Kaduna',
    text: 'Their pastries are always soft, buttery, and perfectly baked. The service is warm and consistent every time.',
    image:
      'https://mir-s3-cdn-cf.behance.net/user/276/8d01f51207012689.6702f4ad0c10c.jpg',
  },
  {
    name: 'Kehinde Lawal',
    location: 'Kano',
    text: 'We ordered for a family event and everyone kept asking where the desserts were from. They were unforgettable.',
    image:
      'https://th.bing.com/th/id/OIP.1bBfwsBTqBtxNZSmJFpElAHaNK?w=132&h=188&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3',
  },
  {
    name: 'Amara Nwosu',
    location: 'Port Harcourt',
    text: 'The attention to detail in their custom cake was incredible. It looked exactly like our vision and tasted amazing.',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.ly3CkBxCwL26O6v-OkdNCAHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Victor Okoye',
    location: 'Ibadan',
    text: 'Reliable ordering, beautiful presentation, and flavors that make you want to order again right away.',
    image:
      'https://th.bing.com/th/id/OIP.JHWIFXw3qF8xsHjdJMQTrwHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3',
  },
]
</script>

<style scoped>
.reviews-section {
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

.review-card {
  background: linear-gradient(180deg, #fff 0%, #fffaf1 100%);
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(71, 44, 26, 0.08);
  box-shadow: 0 20px 35px rgba(93, 67, 33, 0.08);
  padding: 1.5rem 1.4rem 1.25rem;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.review-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 42px rgba(93, 67, 33, 0.14);
}

.rating-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.9rem;
}

.rating-badge {
  display: inline-block;
  color: #f4b63d;
  letter-spacing: 0.14em;
  font-size: 0.92rem;
}

.review-text {
  font-size: 0.98rem;
  margin-bottom: 1.2rem;
  line-height: 1.8;
  color: var(--rb-muted);
}

.review-person {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(71, 44, 26, 0.08);
}

.review-person img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(242, 178, 73, 0.38);
}

.review-person h5 {
  margin-bottom: 0.2rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--rb-brown);
}

.review-person small {
  color: var(--rb-muted);
}
</style>
