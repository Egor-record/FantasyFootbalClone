import React from 'react'
import  {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import PlayerListItem from '../components/PlayerListItem';

import {useRecoilState, useRecoilValue} from 'recoil' 
import { allPlayersState, filteredPlayers } from '../atoms/Players';

const PlayersList = () => {
    //const [players] = useRecoilState(allPlayersState)
    const players = useRecoilValue(filteredPlayers)



    return (
        <BottomSheetFlatList
        data={players}
        renderItem={({item}) => (
        <PlayerListItem player={item} />
        )}
        />
    )
}

export default PlayersList
