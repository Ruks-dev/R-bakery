<template>
  <footer class="footer bg-dark text-white pt-5 pb-3">
    <div class="container">
      <div class="row g-4">

        <!-- Logo & Description -->
        <div class="col-md-4">
          <a href="#home" class="logo footer-logo text-decoration-none text-white">
            <span class="logo-icon">🥐</span>
            Foodie
          </a>

          <p class="text-secondary mt-3">
            Fresh, delicious meals delivered to your doorstep with care.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4">
          <h6 class="fw-bold mb-3">Quick Links</h6>

          <ul class="list-unstyled">
            <li v-for="link in links" :key="link.href" class="mb-2">
              <a
                :href="link.href"
                class="text-secondary text-decoration-none"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Opening Hours -->
        <div class="col-md-4">
          <h6 class="fw-bold mb-3">Opening Hours</h6>

          <p class="text-secondary small mb-2">
            Monday - Friday: 10:00 - 22:00
          </p>

          <p class="text-secondary small">
            Saturday - Sunday: 11:00 - 23:00
          </p>
        </div>

        <!-- Follow Us -->
        <div class="col-md-4">
          <h6 class="fw-bold mb-3">Follow Us</h6>

          <div class="social-links d-flex gap-3">
            <a href="#" aria-label="Facebook" class="text-white">
              f
            </a>

            <a href="#" aria-label="Instagram" class="text-white">
              ◎
            </a>

            <a href="#" aria-label="Twitter" class="text-white">
              𝕏
            </a>
          </div>
        </div>

      </div>

      <hr class="border-secondary my-4" />

      <!-- Copyright -->
      <p class="text-center text-secondary small mb-0">
        &copy; {{ year }} Foodie. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#menu', label: 'Menu' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#contact', label: 'Contact' }
]
</script>