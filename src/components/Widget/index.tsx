import React, { useRef } from 'react';
import {
  TouchableOpacity,
} from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { ChatTeardropDots } from 'phosphor-react-native';

import { Form } from '../Form';
import { Options } from '../Options';
import { Success } from '../Success';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget(){
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity 
        onPress={handleOpen}
        style={styles.button}
      >
        <ChatTeardropDots 
          color={theme.colors.text_on_brand_color}
          size={24}
          weight="bold"
        />
      </TouchableOpacity>

      <BottomSheet 
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        ref={bottomSheetRef} 
        snapPoints={[1, 280]}      
      >
        <Form
          feedbackType='BUG'
        />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);