import GameView from '..'
import { gql } from '@apollo/client'
import client from '../../lib/apollo-client'
import { getGameData } from '../../lib/game'

export default GameView

export async function getServerSideProps(context: any) {
  const gameId = context.params.gid
  const data = await getGameData(gameId)

  return {
    props: {
      game: data,
    },
  }
}
