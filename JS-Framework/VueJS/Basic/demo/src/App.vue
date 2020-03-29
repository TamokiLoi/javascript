<template>
  <div>
      <ul>
          <li v-for="(item, index) in songs" :key="index">
              <audio controls><source :src="item.src" type="audio/mpeg"></audio>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      songs: [
        {
          title: 'song tile',
          categorie: 'categorie',
          src: ('../src/assets/mp3/demons.mp3')
        }
      ]
    };
  }
};
</script>

<style></style>
