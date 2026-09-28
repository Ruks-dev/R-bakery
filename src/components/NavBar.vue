<template>
  <nav class="navbar navbar-expand-lg fixed-top py-3">
    <div class="container">
      <a href="#hero" class="navbar-brand fw-bold fs-3">
        <span class="brand-mark">R</span>
        <span class="brand-text"><i>Ruks</i></span>
      </a>

      <button class="navbar-toggler" type="button" @click="menuOpen = !menuOpen">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: menuOpen }">
        <div class="navbar-nav ms-auto align-items-lg-center gap-lg-3">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="nav-link"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>

          <button
            class="btn btn-warning position-relative ms-lg-3 mt-3 mt-lg-0"
            @click="$emit('toggle-cart')"
          >
            <i class="fa fa-shopping-cart"></i> Cart
            <span
              v-if="cart.totalItems > 0"
              class="badge rounded-pill bg-dark position-absolute top-0 start-100 translate-middle"
            >
              {{ cart.totalItems }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

defineEmits(['toggle-cart'])

const cart = useCartStore()
const menuOpen = ref(false)

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
</script>

<style scoped>
.navbar {
  background: rgba(255, 250, 242, 0.92);
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 20px rgba(70, 45, 15, 0.06);
}

.navbar-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #3d2d26;
  text-decoration: none;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #f9d88d, #f6b742);
  color: #251811;
  font-size: 1.1rem;
  font-weight: 800;
}

.brand-text {
  color: #3d2d26;
}

.nav-link {
  cursor: pointer;
  font-weight: 600;
  color: #4a3b3a !important;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #d68f1d !important;
}

.navbar-toggler {
  border: 1px solid rgba(61, 45, 38, 0.2);
}
</style>
