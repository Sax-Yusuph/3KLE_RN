import {Heading, HStack, VStack, SmallText} from '@elements';
import React, {FC, useState} from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import {Div, Icon, Text, Image} from 'react-native-magnus';
import {styles} from './styles';
import {News, NEWS_DATA} from './data';
import {showToast} from '@utils/helpers';

export const TopNews = () => {
  return (
    <Div>
      <Heading px="lg">Top news</Heading>
      {NEWS_DATA.map((news, i) => (
        <NewsItem key={i.toString()} {...news} />
      ))}
    </Div>
  );
};

const IMAGE_SIZE = 80;

const NewsItem: FC<News> = props => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(p => !p);
  };

  return (
    // @ts-ignore
    <TouchableOpacity onPress={showToast} activeOpacity={0.8}>
      <HStack px="lg" borderBottomColor="divider" borderBottomWidth={1} py="sm">
        <Div w={IMAGE_SIZE} h={IMAGE_SIZE / 1.2} overflow="hidden" rounded="lg">
          <Image source={props.image} style={styles.news__image} />
        </Div>

        <VStack flex={1} alignItems="flex-start" mx="md">
          <Text fontSize="xs" numberOfLines={3}>
            {props.content}
          </Text>

          <SmallText fontSize="xs" color="textFade">
            {props.time}
          </SmallText>
        </VStack>

        <VStack>
          <Pressable onPress={toggleLike}>
            <Icon
              name={liked ? 'like1' : 'like2'}
              color="secondary"
              fontSize={24}
            />
          </Pressable>

          {/* <LikeIcon /> */}
          <Text fontSize="xs" mt="md">
            {props.likes} likes
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};
