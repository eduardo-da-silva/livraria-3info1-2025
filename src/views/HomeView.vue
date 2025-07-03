<script setup>
import { onMounted, ref } from 'vue'
import { useCategoriaStore } from '@/stores/categoria'

const categoriaStore = useCategoriaStore()
const filtro = ref('')

function buscarComFiltro() {
  categoriaStore.buscarCategorias(1, filtro.value)
}

function irPagina(pagina) {
  categoriaStore.buscarCategorias(pagina, filtro.value)
}

onMounted(() => {
  categoriaStore.buscarCategorias()
})
</script>

<template>
  <h1>Categorias</h1>
  <input type="text" v-model="filtro" /><button @click="buscarComFiltro">Filtrar</button>
  <ul>
    <li v-for="categoria in categoriaStore.categorias" :key="categoria.id">
      {{ categoria.descricao }} ( {{ categoria.id }})
    </li>
  </ul>
  <div class="pagination">
    <span
      v-for="numeroPagina in categoriaStore.meta.total_pages"
      :key="numeroPagina"
      :class="numeroPagina == categoriaStore.meta.page ? 'selecionada' : ''"
      @click="irPagina(numeroPagina)"
    >
      {{ numeroPagina }}
    </span>
  </div>
</template>

<style scoped>
.pagination {
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.selecionada {
  font-weight: bolder;
}
</style>
