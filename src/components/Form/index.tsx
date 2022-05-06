import React, { useState } from 'react';
import { 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View
} from 'react-native';

import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { Button } from '../Button';
import { FeedbackType } from '../../components/Widget';
import { ScreenshotButton } from '../ScreenshotButton';

import { styles } from './styles';
import { theme } from '../../theme';

import { api } from '../../libs/api';
import { feedbackTypes } from '../../utils/feedbackTypes';


interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ 
  feedbackType, 
  onFeedbackCanceled, 
  onFeedbackSent 
}: Props) {
  const [isSedingFeedback, setIsSendingFeedback] = useState(false);

  const [screenshot, setScreenshot] = useState<string | null>(null);
  
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];
  
  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if(isSedingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {encoding: 'base64'});

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();

    } catch(error) {
      console.log(error);
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
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
        onChangeText={setComment}
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton 
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />

        <Button 
          onPress={handleSendFeedback}
          isLoading={isSedingFeedback}
        />
      </View>
    </View>
  );
}