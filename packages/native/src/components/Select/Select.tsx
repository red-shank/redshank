import React, { forwardRef, useCallback, useEffect, useMemo } from 'react';
import { Picker } from '@react-native-picker/picker';

import useTheme from '../../context/theme/useTheme';
import type { SelectProps } from './types';
import { Box } from '../Box/Box';
import createSxStyle, { getSxStyleAndProps } from '../../lib/sx';
import { BottomSheet } from '../BottomSheet/BottomSheet';
import { Button } from '../Button';
import { InputBox } from '../Input/InputBox';
import { ChevronUpIcon, ChevronDownIcon } from '../../icons';

export const Select = forwardRef<Picker<any>, SelectProps>(
  (
    {
      items,
      placeholder = 'Select an item',
      helperText,
      onChange,
      startContent,
      value,
      shape = 'rounded',
      endContent,
      error = false,
      size = 'middle',
      color = 'accents.2',
      background = 'input',
      borderColor = 'border',
      okText = 'Apply',
      cancelText = 'Cancel',
      style = {},
      sx,
      styles,
      isDisabled,
      onSelectionChange,
      ...restProps
    },
    ref
  ) => {
    const [selection, setSelection] = React.useState<any>(undefined);
    const [preSelection, setPreSelection] = React.useState<any>(undefined);

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const theme = useTheme();

    const onInternalChange = (_value: string, findIndex: number) => {
      const index = findIndex > 0 ? findIndex - 1 : findIndex;
      setPreSelection(items[index]);
      onSelectionChange?.(_value, index);
    };

    const onApply = () => {
      onChange?.(preSelection?.value, preSelection);
      setSelection(preSelection);
      setIsOpen(false);
    };

    const onOpen = () => {
      setIsOpen(true);
    };

    const onClose = () => {
      setIsOpen(false);
    };

    const RenderIcon = useCallback(() => {
      if (endContent) {
        return <>{endContent}</>;
      }
      if (isOpen) return <ChevronDownIcon size={24} fill={borderColor} />;
      return <ChevronUpIcon size={24} fill={borderColor} />;
    }, [endContent, isOpen, borderColor]);

    const resolveProps = getSxStyleAndProps(
      {
        ...restProps,
        sx: sx?.root,
        style: styles?.root
      },
      theme
    );

    const itemsRecord = useMemo(() => {
      return items.reduce((acc, item) => {
        acc[item.value] = item;
        return acc;
      }, {});
    }, [items]);

    // effects
    useEffect(() => {
      if (![undefined, null].includes(value)) {
        const valueItem = itemsRecord?.[value];
        setPreSelection(valueItem);
        setSelection(valueItem);
      }
    }, [value, itemsRecord]);

    const text = selection?.label || placeholder;

    return (
      <Box
        position="relative"
        {...resolveProps?.props}
        sx={sx?.root}
        style={resolveProps?.style}
      >
        <InputBox
          onPress={onOpen}
          style={style}
          sx={sx}
          borderColor={borderColor}
          text={text}
          placeholder={placeholder}
          error={error}
          size={size}
          styles={styles}
          isDisabled={isDisabled}
          color={color}
          startContent={startContent}
          background={background}
          shape={shape}
          endContent={<RenderIcon />}
          helperText={helperText}
        />

        <BottomSheet
          visible={isOpen}
          onClose={onClose}
          headerPan={
            <Box
              px={2}
              py={1}
              pb={2}
              gap={1}
              bg="input"
              width="100%"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button
                size="small"
                type="link"
                appearance="text.secondary"
                onPress={() => setIsOpen(false)}
              >
                {cancelText}
              </Button>
              <Button
                size="small"
                type="link"
                appearance="primary"
                fontWeight="bold"
                onPress={onApply}
              >
                {okText}
              </Button>
            </Box>
          }
        >
          <Picker
            ref={ref}
            onValueChange={onInternalChange}
            selectedValue={preSelection?.value}
            mode="dialog"
            prompt="Pick one, just one"
            selectionColor={theme.colors.get('text')}
            itemStyle={createSxStyle(
              {
                color: 'text'
              },
              theme
            )}
          >
            <Picker.Item
              key="placeholder-input"
              value=""
              enabled={false}
              label={placeholder}
            />
            {items.map((item) => (
              <Picker.Item
                key={item?.key || item.value}
                value={item.value}
                label={item.label}
                enabled={!item?.disabled}
              />
            ))}
          </Picker>
        </BottomSheet>
      </Box>
    );
  }
);
