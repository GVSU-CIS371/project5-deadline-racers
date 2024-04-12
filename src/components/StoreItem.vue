<template>
  <v-card >
    <v-card-title>{{ product.data.name }}</v-card-title>
    <v-card-subtitle >
      <v-rating
        v-model="product.data.rating"
        color="orange"
        size="20"
        class="ma-1"
      />
      <v-icon
        icon="mdi-cash"
        size="20"
        color="green"
        class="ml-5 mb-1"
      /> {{ product.data.price }}
      <v-icon
        icon="mdi-package-variant-closed"
        size="20"
        color="blue"
        class="ml-5 mb-1"
      /> {{ product.data.stock }}
    </v-card-subtitle>
    <v-row justify="center" class="pa-10"> <!-- Center the image -->
      <v-img :src="product.data.image" sizes="small"/> <!-- Center the image -->
    </v-row>
    <v-card-text>{{ product.data.description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>

  import { toRefs } from 'vue';
  import { ProductDoc } from '../types/product';

  const props = defineProps<{product: ProductDoc}>();

  const { product } = toRefs(props);

</script>