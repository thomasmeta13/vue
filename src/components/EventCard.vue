<template>
  <div class="event-card">
    <div class="event-content">
      <h3 class="event-title">{{ event.title }}</h3>
      <p class="event-description">{{ event.description }}</p>
    </div>
    <div class="event-meta">
      <span class="event-type">{{ event.type }}</span>
      <span class="event-duration">{{ event.duration }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.event-content {
  flex-grow: 1;
}

.event-title {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.event-description {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.event-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.event-type {
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 0.2rem 0.6rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.event-duration {
  font-size: 0.9rem;
  color: #333;
}
</style>
