import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import rpx from '@/utils/rpx';
import {useRoute} from '@react-navigation/native';
import MusicSheet from '@/common/musicSheet';
import LinearGradient from 'react-native-linear-gradient';
import ThemeText from '@/components/themeText';
import Color from 'color';
import {useTheme} from 'react-native-paper';

interface IHeaderProps {}
export default function Header(props: IHeaderProps) {
  const route = useRoute<any>();
  const id = route.params?.id ?? 'favorite';
  const sheet = MusicSheet.useSheets(id);
  const {colors} = useTheme();

  return (
    <LinearGradient
      colors={[
        Color(colors.primary).alpha(0.8).toString(),
        Color(colors.primary).alpha(0.15).toString(),
      ]}
      style={style.wrapper}>
      <View style={style.content}>
        <Image
          style={style.coverImg}
          source={
            sheet?.coverImg
              ? {
                  uri: sheet.coverImg,
                }
              : require('@/assets/imgs/album-default.jpg')
          }></Image>
        <View style={style.details}>
          <ThemeText>{sheet?.title}</ThemeText>
          <ThemeText fontColor="secondary" fontSize="description">
            共{sheet?.musicList.length ?? 0}首
          </ThemeText>
        </View>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wrapper: {
    width: rpx(750),
    height: rpx(300),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    width: rpx(702),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coverImg: {
    width: rpx(210),
    height: rpx(210),
    borderRadius: rpx(24),
  },
  details: {
    width: rpx(456),
    height: rpx(140),
    justifyContent: 'space-between',
  },
});