<template>
  <section id="faq" class="py-5 bg-light">
    <div class="container">
      <div class="text-center mb-5">
        <h6 class="text-warning fw-bold text-uppercase">FAQ</h6>
        <h2 class="fw-bold">Frequently Asked Questions</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div v-for="(item, i) in faqs" :key="i" class="border-bottom py-3">
            <button
              class="btn w-100 text-start fw-bold d-flex justify-content-between align-items-center"
              @click="toggle(i)"
            >
              {{ item.question }}
              <i class="fa" :class="openIndex === i ? 'fa-minus' : 'fa-plus'"></i>
            </button>
            <div v-show="openIndex === i" class="text-secondary mt-2">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  {
    question: 'Do you offer custom cake orders?',
    answer: 'Yes! Reach out through the contact form with your design ideas and we will get back to you with pricing and timelines.'
  },
  {
    question: 'What are your delivery hours?',
    answer: 'We deliver every day from 8am to 8pm, with same-day delivery for orders placed before 4pm.'
  },
  {
    question: 'Are your ingredients allergen-friendly?',
    answer: 'We offer gluten-free and nut-free options on select items — just ask when ordering.'
  },
  {
    question: 'Can I cancel or change my order?',
    answer: 'Orders can be changed or cancelled up to 3 hours before the scheduled delivery time.'
  }
]
</script>