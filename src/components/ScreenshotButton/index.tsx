import React from 'react';
import {
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import { Camera, Trash } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
      onPress={screenshot ? onRemoveShot : onTakeShot}
      style={styles.container}
    >
      {
        screenshot
          ?
          <View>
            <Image 
              source={{ uri: screenshot }}
              style={styles.image}
            
            />
          
            <Trash
              color={theme.colors.text_secondary}
              size={22}
              style={styles.removeIcon}
              weight="fill"
            />
          </View>
          :
          <Camera
            color={theme.colors.text_secondary}
            size={24}
            weight="bold"
          />
      }
    </TouchableOpacity>
  );
}