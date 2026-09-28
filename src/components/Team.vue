<template>
  <section class="team-section py-5">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-tag">Our Team</span>
        <h2 class="fw-bold">Meet the bakers behind our sweet success</h2>
      </div>

      <div class="row g-4">
        <div class="col-lg-3 col-md-6" v-for="member in team" :key="member.name">
          <div class="team-card">
            <img :src="member.image" :alt="member.name" class="team-image" />
            <div class="team-card-body">
              <h4>{{ member.name }}</h4>
              <p class="role">{{ member.role }}</p>
              <p>{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    name: 'Maya Joseph',
    role: 'Head Baker',
    bio: 'Crafts our signature breads with a focus on texture, taste, and tradition.',
    image:
      'https://www.csftw.edu/wp-content/uploads/Types-of-Chefs.jpg',
  },
  {
    name: 'Daniel Okafor',
    role: 'Pastry Chef',
    bio: 'Creates delicate pastries, desserts, and beautifully finished celebration cakes.',
    image:
      'https://tse4.mm.bing.net/th/id/OIP.57MjiVjU26byapv7UqhGkgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Steph Oluwaseun',
    role: 'Cake Designer',
    bio: 'Turns special moments into unforgettable cakes with custom details and flavor.',
    image:
      'https://static.wixstatic.com/media/42360b_6d43d63cc8c14a4e9061a42dfef4b389~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42360b_6d43d63cc8c14a4e9061a42dfef4b389~mv2.jpg',
  },
  {
    name: 'Sam Adebayo',
    role: 'Delivery & Service',
    bio: 'Makes sure every order arrives fresh, on time, and with the warmest service.',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.JAQeXObpY8HfN8h_aGU7SQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
]
</script>

<style scoped>
.team-section {
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

.team-card {
  background: #fff;
  border-radius: 26px;
  overflow: hidden;
  border: 1px solid rgba(71, 44, 26, 0.08);
  box-shadow: 0 16px 32px rgba(93, 67, 33, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.team-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 24px 42px rgba(93, 67, 33, 0.12);
}

.team-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.team-card-body {
  padding: 1.5rem 1.2rem 1.6rem;
}

.team-card-body h4 {
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--rb-brown);
}

.role {
  margin-bottom: 0.75rem;
  font-weight: 700;
  color: var(--rb-gold-dark);
}

.team-card-body p {
  margin-bottom: 0;
  color: var(--rb-muted);
  line-height: 1.75;
}
</style>
