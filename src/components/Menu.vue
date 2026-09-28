<template>
  <section id="menu" class="menu-section py-5">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-tag">Our Menu</span>
        <h2 class="fw-bold">Freshly Baked Today</h2>
      </div>

      <div class="row g-4">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card h-100 border-0 shadow-sm product-card">
            <img :src="product.image" :alt="product.name" class="card-img-top" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold">{{ product.name }}</h5>
              <p class="card-text text-secondary small flex-grow-1">
                {{ product.description }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="fw-bold text-warning fs-5"> ₦{{ product.price.toFixed(2) }} </span>
                <button class="btn btn-warning btn-sm" @click="cart.addItem(product)">
                  <i class="fa fa-cart-plus"></i> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

const products = [
  {
    id: 1,
    name: 'Sourdough Loaf',
    description: 'Naturally leavened, crusty outside, soft center, baked fresh daily.',
    price: 10000,
    image: './photos/SourdoughLoaf.jpeg',
  },
  {
    id: 2,
    name: 'Chocolate Cupcake',
    description: 'Rich chocolate sponge topped with velvety buttercream frosting.',
    price: 2000,
    image: './photos/chocolateCupCake.jpeg',
  },
  {
    id: 3,
    name: 'Croissant',
    description: 'Buttery, flaky layers with a crisp golden finish every morning.',
    price: 7500,
    image: './photos/Croissant.jpeg',
  },
  {
    id: 4,
    name: 'Red Velvet Cake',
    description: 'Classic red velvet layers with smooth cream cheese frosting.',
    price: 20000,
    image: './photos/RedVelvet.jpeg',
  },
  {
    id: 5,
    name: 'Cinnamon Roll',
    description: 'Soft swirl of cinnamon sugar and a glossy vanilla glaze.',
    price: 3000,
    image: './photos/cinamonRoll.jpeg',
  },
  {
    id: 6,
    name: 'Blueberry Muffin',
    description: 'Loaded with fresh chocolate and baked to a golden finish.',
    price:6000,
    image: './photos/chocolateMuffin.jpeg',
  },
]
</script>

<style scoped>
.menu-section {
  background: #fff;
}

.product-card {
  overflow: hidden;
  border-radius: 22px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 35px rgba(72, 44, 11, 0.12);
}

.product-card .card-img-top {
  height: 220px;
  object-fit: cover;
}

.card-body {
  padding: 1.4rem 1.25rem 1.2rem;
}
</style>

