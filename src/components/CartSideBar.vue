<template>
  <div>
    <div v-if="open" class="cart-backdrop" @click="$emit('close')"></div>

    <aside class="cart-sidebar" :class="{ 'cart-sidebar--open': open }">
      <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h5 class="fw-bold mb-0">Your Cart</h5>
        <button class="btn-close" @click="$emit('close')"></button>
      </div>

      <div class="p-3 cart-items">
        <p v-if="cart.items.length === 0" class="text-secondary text-center mt-4">
          Your cart is empty.
        </p>

        <div
          v-for="item in cart.items"
          :key="item.id"
          class="d-flex align-items-center mb-3"
        >
          <img :src="item.image" class="cart-item-img rounded me-3" :alt="item.name" />
          <div class="flex-grow-1">
            <h6 class="mb-1 fw-bold">{{ item.name }}</h6>
            <small class="text-secondary">₦{{ item.price.toFixed(2) }}</small>
            <div class="d-flex align-items-center mt-1">
              <button class="btn btn-sm btn-outline-secondary" @click="cart.decrement(item.id)">-</button>
              <span class="mx-2">{{ item.qty }}</span>
              <button class="btn btn-sm btn-outline-secondary" @click="cart.increment(item.id)">+</button>
            </div>
          </div>
          <button class="btn btn-sm text-danger" @click="cart.removeItem(item.id)">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>

      <div class="p-3 border-top mt-auto" v-if="cart.items.length > 0">
        <div class="d-flex justify-content-between fw-bold mb-3">
          <span>Total</span>
          <span>₦{{ cart.totalPrice.toFixed(2) }}</span>
        </div>
        <button class="btn btn-warning w-100">Checkout</button>
        <button class="btn btn-link w-100 text-secondary" @click="cart.clearCart()">
          Clear Cart
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

defineProps({
  open: { type: Boolean, default: false }
})
defineEmits(['close'])

const cart = useCartStore()
</script>

<style scoped>
.cart-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1040;
}

.cart-sidebar {
  position: fixed;
  top: 0;
  right: -400px;
  width: 360px;
  max-width: 90vw;
  height: 100vh;
  background: #fff;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
}

.cart-sidebar--open {
  right: 0;
}

.cart-items {
  overflow-y: auto;
  flex-grow: 1;
}

.cart-item-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
</style>
