import React, { forwardRef } from 'react'
import { View, StyleSheet, TextInput, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { OS } from '../../lib/consts'
import Colours from '../../themes/colours'
import Fonts from '../../themes/fonts'
import { my } from '../../themes/utils'

const styles = StyleSheet.create( {
  searchBar: {
    ...( OS.android && { paddingLeft: 10 } ),
    ...( OS.ios && { padding: 10 } ),
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colours.LightGray,
  },
  searchIcon: {
    ...my(),
    fontSize: 20,
    color: Colours.TintedWhite,
  },
  searchInputBox: {
    flex: 1,
    fontFamily: Fonts.NotoSansRegular,
    marginLeft: 5,
    color: Colours.TintedWhite,
    ...my(),
  },
} )

type SearchBarProps = {
  onChangeText: ( text: string ) => void,
  style: ViewStyle,
}

const SearchBar = forwardRef<TextInput, SearchBarProps>( ( {
  onChangeText,
  style,
}: SearchBarProps,
ref ) => (
  <View style={[ styles.searchBar, style ]}>
    <Icon name="magnify" size={25} style={styles.searchIcon} />

    <TextInput
      ref={ref}
      placeholder="Search"
      placeholderTextColor={Colours.TintedWhite}
      style={styles.searchInputBox}
      clearButtonMode="never"
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={onChangeText}
    />
  </View>
) )

export default SearchBar
