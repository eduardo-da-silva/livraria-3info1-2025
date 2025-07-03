import axios from 'axios'

export class CategoriaService {
  async buscarCategorias(pagina, filtro) {
    const response = await axios.get(
      `https://livraria-marrcandre-2024.onrender.com/api/categorias/?page=${pagina}&search=${filtro}`,
    )
    return response.data
  }
}
