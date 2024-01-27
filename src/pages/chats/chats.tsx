import { useTranslation } from 'react-i18next';
import { Container, Grid, Box, Stack, Title, rem } from '@mantine/core';
import { Chat, Chats } from 'features/chats';

function ChatsPage() {
  const { t } = useTranslation();

  return (
    <Box component='section'>
      <Container size='responsive'>
        <Stack gap={rem(16)} py={rem(16)}>
          <Title>{t('chats')}</Title>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <Chats />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 8 }}>
              <Chat />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default ChatsPage;
