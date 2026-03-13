import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'
import * as S from './styles'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()

  if (isLoading) return <p>Carregando...</p>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default Produtos
