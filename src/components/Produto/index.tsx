import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/cartSlice'
import { toggleFavorite } from '../../store/favoritesSlice'
import { RootState, AppDispatch } from '../../store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  const estaNosFavoritos = useSelector((state: RootState) =>
    state.favorites.items.some((p) => p.id === produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>

      <S.Titulo>{produto.nome}</S.Titulo>

      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      <S.BtnComprar
        onClick={() => dispatch(toggleFavorite(produto))}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>

      <S.BtnComprar onClick={() => dispatch(addItem(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
