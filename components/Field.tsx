import React from 'react'
import { ImageBackground, Text, View } from 'react-native';
import field from '../assets/images/field.jpg';
import FeildPlayer from './FeildPlayer';
import { useRecoilValue } from 'recoil';
import { myPlayersByPosition } from '../atoms/MyTeam';


// const players: {[key: string]: null[]} = {
//     FWD: [null, null, null],
//     MID: [null, null, null],
//     DEF: [null, null, null, null],
//     GKC: [null]
//   }

const Field = () => {
  const players = useRecoilValue(myPlayersByPosition)


    return (
    <ImageBackground 
      source={field} 
      resizeMode="cover"
      style={{
        width: '100%', 
        aspectRatio: 2 / 3, 
        justifyContent: 'space-around', 
        alignItems: 'center'
        }}>
        {Object.keys(players).map((position) => (
        <View style={{
          flexDirection: 'row', 
          justifyContent: 'space-around',
          width: '100%'
          }}>
          {players[position].map((player) => (
            <FeildPlayer player={player}  position={position} />
        ))}
        </View>
        )
        )}
      </ImageBackground>
    )
}

export default Field
