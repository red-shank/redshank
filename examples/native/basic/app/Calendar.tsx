import React from 'react';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import { Box, Calendar, Container, ScrollView, Title } from '@redshank/native';

const CardScreen = () => {
  return (
    <ScrollView>
      <Container gap={2}>
        <Box gap={1}>
          <Title level={4}>Default</Title>
          <Calendar />
        </Box>

        <Box gap={1}>
          <Title level={4}>Selected date</Title>
          <Calendar selected="1997-03-23" />
        </Box>

        <Box gap={1}>
          <Title level={4}>Locales</Title>
          <Title level={6}>ES</Title>
          <Calendar locale="es" selected="1997-12-23" />

          <Title level={6}>FR</Title>
          <Calendar locale="fr" />
        </Box>
      </Container>
    </ScrollView>
  );
};

export default React.memo(CardScreen);
