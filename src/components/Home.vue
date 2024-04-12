<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="product in store.products" :key="product.id">
        <StoreItem :product="product"/> <!-- Pass the product prop -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useProductStore } from '../stores/ProductStore';
import StoreItem from './StoreItem.vue';

const store = useProductStore();
store.init()

</script>