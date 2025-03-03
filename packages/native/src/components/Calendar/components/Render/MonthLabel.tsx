import React from 'react';
import { Animated, Easing } from 'react-native';
import { Title } from '../../../Title';
import { useCalendarContext } from '../../context/calendar';
import { Button, ButtonType } from '../../../Button';
import { useCalendarMonthContext } from '../../context/CalendarMonth';
import { Box } from '../../../Box';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../icons';

interface MonthLabelProps {}

const defaultButtonProps = {
  type: 'link' as ButtonType,
  px: 1
};

export default function MonthLabel({}: MonthLabelProps) {
  const rotateAnimation = React.useRef(new Animated.Value(0)).current;
  const fadeAnimation = React.useRef(new Animated.Value(0)).current;
  const { locale, monthHeaderProps } = useCalendarContext();
  const {
    onPrevMonth,
    onNextMonth,
    currentMonth,
    openYearList,
    onToggleYearList
  } = useCalendarMonthContext();

  const { format = 'MMM YYYY', ...buttonProps } = {
    ...defaultButtonProps,
    ...monthHeaderProps
  };

  const spin = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg']
  });

  const fadeIn = fadeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  React.useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: openYearList ? 1 : 0,
      duration: 150,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true // To make use of native driver for performance
    }).start();
  }, [openYearList, rotateAnimation]);

  React.useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 150,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true // To make use of native driver for performance
    }).start();
  }, [fadeAnimation]);

  return (
    <Box
      mb={1}
      gap={1.5}
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        {...buttonProps}
        {...monthHeaderProps}
        onPress={() => onToggleYearList()}
        sx={{
          container: {
            gap: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }
        }}
        endContent={
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <ChevronRightIcon color="primary" size={25} />
          </Animated.View>
        }
      >
        <Animated.View style={[{ opacity: fadeIn }]}>
          <Title level={5} align="left" pt={0.5}>
            {currentMonth.locale(locale).format(format)}
          </Title>
        </Animated.View>
      </Button>

      {!openYearList && (
        <Box
          gap={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            {...buttonProps}
            onPress={onPrevMonth}
            startContent={<ChevronLeftIcon color="primary" size={25} />}
          />
          <Button
            {...buttonProps}
            onPress={onNextMonth}
            startContent={<ChevronRightIcon color="primary" size={25} />}
          />
        </Box>
      )}
    </Box>
  );
}
