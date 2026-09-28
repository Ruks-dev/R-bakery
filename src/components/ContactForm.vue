<template>
  <section id="contact" class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h6 class="text-warning fw-bold text-uppercase">Contact</h6>
        <h2 class="fw-bold">Get In Touch</h2>
      </div>

      <div class="row justify-content-center g-4 align-items-start">
        <div class="col-lg-4">
          <div class="contact-card h-100">
            <h5 class="fw-bold mb-3">Contact Details</h5>
            <p class="mb-2"><strong>Phone:</strong> 08062821393</p>
            <p class="mb-2"><strong>Email:</strong> Rukynmamm05@gmail.com</p>
            <p class="mb-0"><strong>Location:</strong> HOME</p>
          </div>
        </div>

        <div class="col-lg-8">
          <form @submit.prevent="submitForm">
            <div class="row g-3">
              <div class="col-md-6">
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="col-12">
                <input
                  v-model="form.subject"
                  type="text"
                  class="form-control"
                  placeholder="Subject"
                />
              </div>
              <div class="col-12">
                <textarea
                  v-model="form.message"
                  class="form-control"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-warning btn-lg px-5">Send Message</button>
              </div>
            </div>
          </form>

          <p v-if="sent" class="text-success text-center mt-3 fw-bold">
            Thanks! Your message has been sent.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const sent = ref(false)

function submitForm() {
  // Replace with an actual API call / email service
  console.log('Contact form submitted:', { ...form })
  sent.value = true
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>
<style scoped>
.contact-card {
  background: #fffaf3;
  border: 1px solid rgba(111, 95, 90, 0.12);
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 18px 35px rgba(69, 40, 14, 0.08);
}
</style>
