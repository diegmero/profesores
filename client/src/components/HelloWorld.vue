<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="fetchMessage">Fetch Message from Backend</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await fetch('/api/message');
        const data = await response.json();
        this.message = data.message;
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    }
  }
};
</script>

<style scoped>
.hello {
  text-align: center;
  margin-top: 60px;
}
</style>
