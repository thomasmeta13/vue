<template>
  <router-link :to="`/product/${product._id}`" class="product-card-link">

  <div class="product-card">

    <div class="product-image">
      <img class="product-image" :src="'https://divoom.com/cdn/shop/files/ditoo-pro_69edc9b5-bd51-4bf0-9b88-69a61e9f8c93.jpg?v=1701921039&width=800'" alt="Product Image">
    </div>
    <div class="product-details">
      <div class="header">
        <h3 class="product-title">{{ product.title }}</h3>
        <div class="product-category">{{ product.category }}</div>
      </div>
      <div class="upvote-badge">
        <span class="upvote-count">{{ upvotes }}</span>
        <i class="upvote-icon">▲</i>
      </div>
      <p class="product-description">{{ product.description }}</p>
      <div class="posted-by">
        <img :src="'https://media.licdn.com/dms/image/D4E03AQEF_0ioHFDh7w/profile-displayphoto-shrink_800_800/0/1700223735622?e=1707350400&v=beta&t=AWs5OCm2zNsoS1JWd_RmV1E8QvghxUj10qke2FSLLaY'" alt="User Photo" class="user-photo">
        <span class="user-name">Thomas Meta</span>
      </div>
    </div>
  </div>
      </router-link>

</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    console.log(this.product); // Check what the product prop contains
  },
};

</script>

<style scoped>
.product-card {
  display: flex;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 800px; /* Adjust the width as desired */
  margin: 0 auto; /* Center the card */
  margin-bottom: 1rem;
  position: relative; 
  text-decoration: none; /* Removes underline from links */
  color: inherit; /* Keeps the text color consistent */

}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 1rem;
}

.product-details {
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 4rem; /* Adjust this value based on the size of the upvote badge */

}

.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.product-title {
  font-size: 1.2rem;
  margin: 0;

}

.product-description {
  /* Removed negative margin */
  margin: 1;
  margin-top: 0.5rem;
  text-align: left;
}

.product-category {
  background: #e1e1e1;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  display: inline-block;
  /* align-self: flex-end; /* Align the category to the right end */
  margin-left: auto; /* This will push the category to the right */
  margin-right: 0.5rem; /* Adjust this to provide spacing before the upvote badge */

}

.posted-by {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.user-photo {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.user-name {
  font-weight: bold;
}

.upvote-badge {
  position: absolute; /* Positioning the badge absolutely to the parent */
  top: 1rem; /* Adjust the top value as needed */
  right: 1rem; /* Adjust the right value as needed */
  background: #fff; /* White background or any color you prefer */
  border: 1px solid #ccc; /* Border color */
  border-radius: 12px; /* Rounded corners for the badge */
  padding: 0.3rem 0.6rem; /* Padding inside the badge */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: adding some shadow */
}

.upvote-count {
  margin-right: 0.3rem; /* Spacing between the number and the icon */
  font-weight: bold; /* Make the number bold */
}

.header {
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  align-items: center;
  padding-right: 3rem; /* This provides space for the upvote badge, adjust as necessary */
}

.product-card-link {
  text-decoration: none;
  color: inherit;
  display: block; /* Ensures the link takes up the full space */
}
</style>
