import React from 'react';
import {
  Title,
  InputScrollView,
  DatePicker,
  Box,
  Container
} from '@redshank/native';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';

const DatePickerScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <Container gap={2}>
        <Box>
          <Title level={1}>DatePicker</Title>
          <Title level={3}>Date</Title>
          <DatePicker />
        </Box>

        <Box>
          <Title level={3}>Default Value</Title>
          <DatePicker defaultValue="2025-03-23" />
        </Box>

        <Box>
          <Title level={3}>Format</Title>
          <Box gap={1}>
            <DatePicker format="DD MMM YYYY" />
            <DatePicker format="YYYY-MM-DDD" />
            <DatePicker format="YYYY MM DD" />
          </Box>
        </Box>

        <Box>
          <Title level={3}>Default EN</Title>
          <DatePicker format="DD MMMM YYYY" />
        </Box>

        <Box>
          <Title level={3}>Locale ES</Title>
          <DatePicker format="DD MMMM YYYY" locale="es" />
        </Box>

        <Box>
          <Title level={3}>Locale FR</Title>
          <DatePicker format="DD MMMM YYYY" locale="fr" />
        </Box>
        {/* END */}
      </Container>
    </InputScrollView>
  );
};

export default DatePickerScreen;
