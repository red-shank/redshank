import { Grid, Text, Tooltip, Image, Modal, Button } from '@nextui-org/react';

import useModal from '@/hooks/useModal';
import { COINBASE_WALLET, PATREON_LINK, PAYPAL_LINK } from '@/config';
import { PlayerStyle } from './style';
import Title from '@/Components/Title';
import { useTranslation } from 'next-i18next';

const Donations = () => {
  const { t } = useTranslation();
  const [visible, toggleVisible] = useModal();

  return (
    <Grid.Container className="mb-20">
      <Grid xs={12} sm={4} justify="center">
        <PlayerStyle
          loop
          autoplay
          src="/animations/bird.json"
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice'
          }}
        />
      </Grid>

      <Grid xs={12} sm={8} alignItems="center" direction="column">
        <Title
          withMaxWidth
          className="text-center"
          css={{
            lineHeight: '5rem',
            '@sm': {
              fontSize: '5rem'
            }
          }}
        >
          {t(
            'home:donations.title',
            'Do you like'
          )}
           <br />
          <Text
            as="span"
            size="2.5rem"
            css={{
              '@sm': {
                fontSize: '3.5rem'
              }
            }}
          >
            Beauty Design?
          </Text>
        </Title>

        <Text size="$2xl" weight="semibold" className="text-center w-full mb-4">
          {t(
            'home:donations.description',
            'You can help us to continue maintaining this incredible library, you can give me your financial support from the following platforms.'
          )}
        </Text>

        <Grid.Container gap={2} justify="center">
          <Grid>
            <Tooltip content="Patreon">
              <a href={PATREON_LINK} target="_blank" rel="noreferrer noopener">
                <Button auto light className="h-auto p-0">
                  <Image alt="" width={50} height={50} src="/patreon.png" />
                </Button>
              </a>
            </Tooltip>
          </Grid>

          <Grid>
            <Tooltip content="Paypal">
              <a href={PAYPAL_LINK} target="_blank" rel="noreferrer noopener">
                <Button auto light className="h-auto p-0">
                  <Image alt="" width={50} height={50} src="/paypal.png" />
                </Button>
              </a>
            </Tooltip>
          </Grid>

          <Grid>
            <Tooltip content="Coinbase">
              <Button auto light className="h-auto p-0" onClick={toggleVisible}>
                <Image alt="" width={50} height={50} src="/coinbase.png" />
              </Button>
            </Tooltip>
          </Grid>
        </Grid.Container>
      </Grid>

      <Modal blur closeButton open={visible} onClose={toggleVisible}>
        <Modal.Header>
          <Text size={18} b>
            Coinbase Wallet
          </Text>
        </Modal.Header>
        <Modal.Body className="mb-8">
          <Text blockquote css={{ background: '$gray200' }}>
            {COINBASE_WALLET}
          </Text>
        </Modal.Body>
      </Modal>
    </Grid.Container>
  );
};

export default Donations;
