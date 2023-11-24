import { Title, InputScrollView, Space, DatePicker } from '@redshank/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const DatePickerScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={1}>DatePicker</Title>
          <Title level={3}>Date</Title>
          <DatePicker />
        </View>

        <View>
          <Title level={3}>Datetime</Title>
          <DatePicker mode="datetime" />
        </View>

        <View>
          <Title level={3}>Time</Title>
          <DatePicker mode="time" />
        </View>

        <View>
          <Title level={3}>Calendar (Only iOS)</Title>
          <DatePicker display="inline" />
        </View>

        <View>
          <Title level={3}>Format</Title>
          <Space orientation="vertical">
            <DatePicker format="DD MMM YYYY" />
            <DatePicker format="YYYY-MM-DDD" />
            <DatePicker format="YYYY MM DD" />
          </Space>
        </View>

        <View>
          <Title level={3}>Locale ES</Title>
          <DatePicker format="DD MMM YYYY" locale="es" />
        </View>

        <View>
          <Title level={3}>Locale FR</Title>
          <DatePicker format="DD MMM YYYY" locale="fr" />
        </View>

        <View>
          <Title level={3}>Default Value</Title>
          <DatePicker defaultValue="2025-03-23" format="2025-03-23" />
        </View>
        {/* END */}
      </View>
      <View style={{ height: 75 }} />
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  space: {
    marginTop: 50,
  },
});

export default DatePickerScreen;
