import { ref } from 'vue'
import { defineStore } from 'pinia'
import { CategoriaService } from '@/services/categoria'

const categoriaService = new CategoriaService()

export const useCategoriaStore = defineStore('categoria', () => {
  const categorias = ref([])
  const meta = ref({
    page_size: 0,
    total_pages: 0,
    page: 0,
  })

  async function buscarCategorias(pagina = 1, filtro = '') {
    const data = await categoriaService.buscarCategorias(pagina, filtro)
    categorias.value = data.results
    meta.value.page = data.page
    meta.value.total_pages = data.total_pages
    meta.value.page_size = data.page_size
  }

  return { categorias, meta, buscarCategorias }
})
