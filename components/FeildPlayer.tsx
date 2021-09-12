import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'


type FeildPlayerProps = {
    player: null;
    position: string;
}

const FeildPlayer = (props: FeildPlayerProps) => {

    const {player, position} = props;
    
    return (
        <View style={{alignItems: 'center'}}>
            <FontAwesome5 name="tshirt" size={35} color={player ? "#d170db" : "#5c5c5cbb"} />
          <Text style={{
            backgroundColor: '#333333bb', 
            color: 'white', 
            fontWeight: 'bold',
            fontSize: 12,
            padding: 2,
            paddingHorizontal: 7,
            }}>
              {palyer ? player.name : position}
            </Text>
          </View>
    )
}

export default FeildPlayer
