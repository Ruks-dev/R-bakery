<template>
  <NavBar @toggle-cart="cartOpen = !cartOpen" />

  <main>
    <Hero />
    <About />
    <Menu />
    <Delivery />
    <Team />
    <Services />
    <ClientReviews />
    <Faq />
    <ContactForm />
  </main>

  <Footer />

  <CartSidebar :open="cartOpen" @close="cartOpen = false" />
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Menu from './components/Menu.vue'
import Delivery from './components/Delivery.vue'
import Team from './components/Team.vue'
import Services from './components/Services.vue'
import ClientReviews from './components/ClientReviews.vue'
import Faq from './components/Faq.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
import CartSidebar from './components/CartSidebar.vue'

const cartOpen = ref(false)
</script>

<style>
:root {
  --rb-cream: #fffaf2;
  --rb-sand: #f7dfb7;
  --rb-gold: #f2b249;
  --rb-gold-dark: #d78b1d;
  --rb-brown: #3e2b1f;
  --rb-text: #2d1f1d;
  --rb-muted: #6f5f5a;
  --rb-card: #fff;
  --rb-section: #fff8f1;
  --rb-shadow: 0 18px 45px rgba(70, 45, 15, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--rb-cream);
  color: var(--rb-text);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
}

img {
  display: block;
  max-width: 100%;
}

section {
  position: relative;
}

.section-tag {
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--rb-gold-dark);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--rb-brown);
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
}

.btn {
  border-radius: 999px;
  padding: 0.85rem 1.7rem;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}

.btn-warning {
  background: linear-gradient(180deg, #f6c565 0%, var(--rb-gold) 100%);
  border-color: var(--rb-gold);
  color: var(--rb-brown);
  font-weight: 700;
  box-shadow: 0 12px 24px rgba(242, 178, 73, 0.28);
}

.btn-warning:hover,
.btn-warning:focus {
  background: linear-gradient(180deg, #e9a93d 0%, var(--rb-gold-dark) 100%);
  border-color: var(--rb-gold-dark);
  color: var(--rb-brown);
  transform: translateY(-1px);
}

.btn-outline-dark {
  border-width: 2px;
  font-weight: 600;
  border-radius: 999px;
}

.container {
  max-width: 1180px;
}
</style>
