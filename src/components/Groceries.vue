<template>
  <v-container>
    <v-row> 
      <v-col cols="12" sm="6" md="4" v-for="product in groceries" :key="product.id">
        <StoreItem :product="product"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import StoreItem from './StoreItem.vue';
  import { useProductStore } from '../stores/ProductStore';

  const store = useProductStore();
  const groceries = store.filterByCategory('Groceries');
</script>