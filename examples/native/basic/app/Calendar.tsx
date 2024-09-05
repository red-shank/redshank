import React from 'react';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/pt';
import dayjs from 'dayjs';
import { Box, Calendar, Container, ScrollView, Title } from '@redshank/native';

const now = dayjs();

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
          <Title level={4}>Disabled</Title>
          <Calendar disabled />
        </Box>

        <Box gap={1}>
          <Title level={4}>Min / Max</Title>
          <Calendar
            min={now.subtract(5, 'days').toISOString()}
            max={now.add(5, 'days').toISOString()}
          />
        </Box>

        <Box gap={1}>
          <Title level={4}>Localization</Title>
          <Title level={6}>Spanish</Title>
          <Calendar locale="es" selected="1997-12-23" />

          <Title level={6}>France</Title>
          <Calendar locale="fr" />

          <Title level={6}>Portuguese</Title>
          <Calendar locale="pt" />
        </Box>

        <Box gap={1}>
          <Title level={4}>Hidden Calendar</Title>
          <Calendar
            onTrigger={console.log}
            calendarProps={{
              hidden: true
            }}
          />
        </Box>
      </Container>
    </ScrollView>
  );
};

export default React.memo(CardScreen);
