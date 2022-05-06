import React from 'react';
import { 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View
} from 'react-native';

import { ArrowLeft } from 'phosphor-react-native';
import { FeedbackType } from '../../components/Widget';

import { styles } from './styles';
import { theme } from '../../theme';

import { feedbackTypes } from '../../utils/feedbackTypes';

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft 
            color={theme.colors.text_secondary}
            size={24}
            weight="bold"
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image 
            source={feedbackTypeInfo.image}
            style={styles.image}
          />

          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>
      
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

    </View>
  );
}