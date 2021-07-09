import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  Dimensions,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-magnus';

import {PickerItem} from './PickerItem';

import colors from '../../themes/colors';
import {TransparentButton} from './TransparentButton';
import {Screen, AppCustomFont as AppText} from '@elements';

export function AppPicker(props: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        {/* {props.label.length > 0 &&
          <AppText style={{ fontSize: 20, fontWeight: 'bold' }}>{props.label}</AppText>
        } */}
        <View style={[styles.container, {width: props.width}]}>
          {props.selectedItem ? (
            <AppText style={[styles.text, props.textStyle]}>
              {props.selectedItem.label}
            </AppText>
          ) : (
            <AppText style={[styles.placeholder, props.placeholderStyle]}>
              {props.placeholder}
            </AppText>
          )}
          <Icon
            name="caretdown"
            fontSize={props.iconSize}
            color={colors.BLACK_COLOR}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent={true}>
        <View style={styles.mainContainer}>
          <View style={styles.modalWrapper}>
            <View style={styles.modalContainer}>
              <Screen>
                <FlatList
                  data={props.items}
                  keyExtractor={item => item.value.toString()}
                  numColumns={1}
                  renderItem={({item}) => (
                    <PickerItem
                      item={item}
                      label={item.label}
                      onPress={() => {
                        setModalVisible(false);
                        props.onSelectItem(item);
                      }}
                    />
                  )}
                />
                <TransparentButton
                  title="CLOSE"
                  color={colors.RED_COLOR}
                  marginBottom={30}
                  fontSize={15}
                  onPress={() => setModalVisible(false)}
                />
              </Screen>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: 15,
    height: 50,
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 25,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.MEDIUM_COLOR,
    flex: 1,
  },
  text: {
    flex: 1,
    color: colors.BLACK_COLOR,
  },
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  modalWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height / 2,
    marginTop: Dimensions.get('window').height / 2,
    width: '100%',
  },
  modalContainer: {
    backgroundColor: colors.WHITE_COLOR,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flex: 1,
    elevation: 1,
    width: '100%',
  },
});
