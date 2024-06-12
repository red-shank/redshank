import {
  Grid,
  Text,
  Tooltip,
  Image,
  Modal,
  Button,
  Snippet
} from '@nextui-org/react';

import useModal from '@/hooks/useModal';
import { COINBASE_WALLET, PAYPAL_LINK, REPO_NAME } from '@/config';
import { PlayerStyle } from './style';
import Title from '@/Components/Title';

const Donations = () => {
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
          Do you like
          <br />
          <Text
            as="span"
            transform="capitalize"
            size="2.5rem"
            css={{
              '@sm': {
                fontSize: '3.5rem'
              }
            }}
          >
            {REPO_NAME}?
          </Text>
        </Title>

        <Text size="$2xl" weight="semibold" className="text-center w-full mb-4">
          You can help us to continue maintaining this incredible library, you
          can give me your financial support from the following platforms.
        </Text>

        <Grid.Container gap={2} justify="center">
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
            <Tooltip content="Send BTC">
              <Button auto light className="h-auto p-0" onClick={toggleVisible}>
                <Image
                  alt=""
                  width={50}
                  height={50}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"
                />
              </Button>
            </Tooltip>
          </Grid>
        </Grid.Container>
      </Grid>

      <Modal blur closeButton open={visible} onClose={toggleVisible}>
        <Modal.Header>
          <Text size={18} b>
            BTC Wallet
          </Text>
        </Modal.Header>
        <Modal.Body className="mb-8 max-w-full">
          <div className="bg-gray-200 p-2 rounded text-wrap w-full break-words">
            {COINBASE_WALLET}
          </div>
        </Modal.Body>
      </Modal>
    </Grid.Container>
  );
};

export default Donations;
