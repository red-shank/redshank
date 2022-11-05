import React from 'react';
import Link from 'next/link';
import { Grid, Text } from '@nextui-org/react';

import { DEFAULT_VERSION } from '@/config';
import { StyleButton, StyleCol, StyleFooter } from './style';
import { useTranslation } from 'next-i18next';

type FooterProps = {
  completeFooter?: boolean;
  className?: string;
};

const Footer = ({ completeFooter = true, className = '' }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <StyleFooter className={`relative ${className}`}>
      <Grid.Container>
        {completeFooter && (
          <>
            <Grid xs={12} md={4} justify="center">
              <StyleCol className="block">
                <Text b>Docs</Text>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/getting-started`}>
                      {t('common:footer.start', 'Getting started')}
                    </Link>
                  </StyleButton>
                </div>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/components`}>
                      {t('common:components', 'Components')}
                    </Link>
                  </StyleButton>
                </div>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/components`}>
                    {t('common:footer.templates', 'Templates (Coming soon)')}
                    </Link>
                  </StyleButton>
                </div>
                <br />
                <br />
              </StyleCol>
            </Grid>

            <Grid xs={12} md={completeFooter ? 4 : 6} justify="center">
              <StyleCol className="block">
                <Text b>
                {t('common:footer.community', 'Community')}
                </Text>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/getting-started`}>
                      Discord
                    </Link>
                  </StyleButton>
                </div>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/components`}>Github</Link>
                  </StyleButton>
                </div>
                <br />
                <br />
              </StyleCol>
            </Grid>
            <Grid xs={12} md={completeFooter ? 4 : 6} justify="center">
              <StyleCol className="block">
                <Text b>
                {t('common:footer.code', 'Code')}
                </Text>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/getting-started`}>
                      Github
                    </Link>
                  </StyleButton>
                </div>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/getting-started`}>
                      npm
                    </Link>
                  </StyleButton>
                </div>
              </StyleCol>
            </Grid>
          </>
        )}

        <Grid xs={12} justify="center">
          <Text b>
            Copyright © {new Date().getFullYear()} React Native Beauty Design.
          </Text>
        </Grid>
      </Grid.Container>
    </StyleFooter>
  );
};

export default Footer;
