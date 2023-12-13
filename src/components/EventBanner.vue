<template>
  <swiper :slides-per-view="1" :space-between="10" :navigation="true">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="event-banner">
        <div class="event-rank">#{{ slide.rank }}</div>
        <img class="event-image" :src="slide.imageUrl" alt="Event Image">
        <div class="event-info">
          <h2 class="event-title"> {{ slide.title }}
            <img class='event-friends' src='https://forums.terraria.org/data/avatars/l/128/128493.jpg?1550988870'/>
            <img class='event-friends2' src='https://avatars.githubusercontent.com/u/78877665?v=4'/>
            <img class='event-friends3' src='https://media.licdn.com/dms/image/D4E03AQEF_0ioHFDh7w/profile-displayphoto-shrink_800_800/0/1700223735622?e=1707350400&v=beta&t=AWs5OCm2zNsoS1JWd_RmV1E8QvghxUj10qke2FSLLaY'/>
            <div class='event-extra'><p class='event-extra-text'>+20</p></div>
            <span class="event-tag">{{ slide.tag }}</span>
            <span class="event-tag2">{{ slide.tag2 }}</span>

          </h2>
          <p class="event-description">{{ slide.description }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  name: 'EventBanner',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slides: [
        {
          rank: 1,
          imageUrl: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_2560,h_1369/https://bigideascontest.org/wp-content/uploads/Madojo20220504_HealthTechShow_AVL_0505-scaled-e1652110211639.jpeg',
          title: 'Big Ideas Application',
          tag: 'Find Team',
          tag2: 'Launch Idea',
          description: 'Big Ideas is an innovation ecosystem that provides training, networks, recognition and funding to interdisciplinary teams of UC Berkeley students who have transformative solutions to real-world problems.'
        },
        // Duplicate the slide object to create multiple slides
        // In a real application, this data would come from a server
        // The content here is hardcoded for demonstration purposes
        {
          rank: 1,
          imageUrl: 'https://i.ibb.co/HY88388/Screenshot-2023-11-07-at-11-02-4.png',
          title: 'Elf in The Shelf',
          tag: 'Find Team',
          description: 'Big Ideas is an innovation ecosystem that provides training, networks, recognition and funding to interdisciplinary teams of UC Berkeley students who have transformative solutions to real-world problems.'
        },
        {
          rank: 1,
          imageUrl: 'https://via.placeholder.com/800x350',
          title: 'Elf in The Shelf',
          tag: 'Find Team',
          description: 'Big Ideas is an innovation ecosystem that provides training, networks, recognition and funding to interdisciplinary teams of UC Berkeley students who have transformative solutions to real-world problems.'
        },
        {
          rank: 1,
          imageUrl: 'https://via.placeholder.com/800x350',
          title: 'Big Ideas Application',
          tag: 'Find Team',
          description: 'Big Ideas is an innovation ecosystem that provides training, networks, recognition and funding to interdisciplinary teams of UC Berkeley students who have transformative solutions to real-world problems.'
        }
      ]
    };
  },
};
</script>
<style scoped>
.event-banner {
  position: relative;
  color: white;
  max-width: 90%;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 0.5%;
}

.event-image {
  width: 100%;
  display: block;
}

.event-info {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  height: 50%;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%); /* Gradient overlay */
}

.event-title {
  font-size: 1.5rem;
  margin-top: 8%;
  display: flex;
  align-items: center;
  color: white;
  gap: 10px; /* Space between title and tag */
  margin-left: 3.4%;
}

.event-tag {
  background-color: #4CAF50; /* Tag background color */
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  margin-left: 35%;
}

.event-tag2 {
  background-color: #c642e7; /* Tag background color */
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  margin-left: 0%;
}

.event-description {
  width: 80%;
  text-align: left;
  margin-left: 3.5%;
  margin-top: -1.5%;
}

.event-rank {
  position: absolute;
  top: 10px;
  left: 5%;
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent gray */
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
    backdrop-filter: blur(5px); /* Apply blur effect */

}

.event-likes {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
}

.likes-count {
  margin-right: 5px;
  font-weight: bold;
}

.heart-icon {
  color: #FF4136; /* Heart icon color */
}

.event-friends {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.event-friends2 {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: -2%;
}
.event-friends3 {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: -2%;
}
.event-extra {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: -2%;
    font-size: 0.7rem;
    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent gray */
    backdrop-filter: blur(5px); /* Apply blur effect */
}
.event-extra-text {
    margin-top:8px;
    margin-left: 3px;
}
</style>
