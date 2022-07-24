import { Fab,View, Text } from 'react-native'
import React from 'react'

const AddtoButton = ({ onPress }) => {
  return (
    <Fab
    direction="up"
    containerStyle={{}}
    style={{ backgroundColor: COLORS.primary }}
    position="bottomRight"
    onPress={onPress}
>
    <Icon name="add" />
    </Fab>
  )
}

export default AddtoButton
