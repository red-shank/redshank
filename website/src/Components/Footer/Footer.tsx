import React from 'react';
import Link from 'next/link';
import { Grid, Text } from '@nextui-org/react';

import { DEFAULT_VERSION } from '@/config';
import { StyleButton, StyleCol, StyleFooter } from './style';

type FooterProps = {
  completeFooter?: boolean;
  className?: string;
};

const Footer = ({ completeFooter = true, className = '' }: FooterProps) => {
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
                      Getting started
                    </Link>
                  </StyleButton>
                </div>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/components`}>
                      Components
                    </Link>
                  </StyleButton>
                </div>
                <div>
                  <StyleButton light auto>
                    <Link href={`/${DEFAULT_VERSION}/components`}>
                      Templates (Coming soon)
                    </Link>
                  </StyleButton>
                </div>
                <br />
                <br />
              </StyleCol>
            </Grid>

            <Grid xs={12} md={completeFooter ? 4 : 6} justify="center">
              <StyleCol className="block">
                <Text b>Community</Text>
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
                <Text b>Code</Text>
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
          <Text b>Copyright © {new Date().getFullYear()} @redshank.</Text>
        </Grid>
      </Grid.Container>
    </StyleFooter>
  );
};

export default Footer;
