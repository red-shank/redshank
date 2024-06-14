import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import BlockCode from '@/Components/BlockCode';

import { WrapperStyle } from './style';
import TitleLink from '@/Components/TitleLink';
import { PACKAGE_NAME } from '@/config';
import {
  BACKGROUND_COLOR_BASIC,
  BASIC_EXAMPLE,
  BORDER_BASIC,
  BORDER_RADIUS_BASIC,
  COLOR_BASIC,
  GRID_BASIC,
  SPACING_BASIC,
  SX_AND_STYLE,
  SX_BASIC,
  SX_OVERRIDE
} from '@/Components/Templates/TheSxProp/examples';
import Playground from '@/Components/Playground';
import {
  Table,
  Tcol,
  Thead,
  Trow
} from '@/Components/MDXComponents/MDXComponents';

const HomeTemplate = () => {
  return (
    <WrapperStyle>
      <Title>The Sx Prop</Title>
      <Text>
        The sx prop is a shortcut for defining custom styles that have access to
        the theme. The sx prop lets you work with a superset of style that
        packages all of the style functions exposed in theme provider. You can
        specify any valid style using this prop, as well as many theme-aware
        properties that are unique to <b>{PACKAGE_NAME}</b>.
      </Text>

      <TitleLink className="mt-12">Basic example</TitleLink>

      <Text>
        The following demo illustrates how to work with the sx prop. Note that
        not all of the values are valid style properties—that's because the sx
        keys are mapped to specific properties of the theme. The rest of this
        document explores this concept in more detail.
      </Text>

      <Playground code={BASIC_EXAMPLE} />

      <TitleLink className="mt-12">Borders:</TitleLink>
      <Text>
        The border property can only receive a number as a value. It creates a
        solid black border using the number to define the width in pixels:
      </Text>
      <BlockCode code={BORDER_BASIC} language="typescript" />

      <Text>
        The borderRadius property multiplies the value it receives by the
        theme.spacing value (the default for this value is 8px).
      </Text>
      <BlockCode code={BORDER_RADIUS_BASIC} language="typescript" />

      <TitleLink className="mt-12">Grid:</TitleLink>
      <Text>
        The style Grid properties gap multiply the values they receive by the
        theme.spacing value (the default for the value is 8px).
      </Text>
      <BlockCode code={GRID_BASIC} language="typescript" />

      <TitleLink className="mt-12">Palette:</TitleLink>
      <Text>
        The <code>color</code> and <code>backgroundColor</code> properties can
        receive a string, which represents the path in <code>theme.colors</code>
        :
      </Text>
      <BlockCode code={COLOR_BASIC} language="typescript" />

      <Text>
        The <code>backgroundColor</code> property is also available through its
        alias <code>bg</code>:
      </Text>
      <BlockCode code={BACKGROUND_COLOR_BASIC} language="typescript" />

      <TitleLink className="mt-12">Spacing:</TitleLink>
      <Text>
        The spacing properties <code>margin</code>, <code>padding</code>, and
        the corresponding longhand properties multiply the values they receive
        by the <code>theme.spacing</code> value (the default for the value is
        8px):
      </Text>
      <BlockCode code={SPACING_BASIC} language="typescript" />
      <Text>
        The following aliases are available for the spacing properties:
      </Text>

      <Table>
        <Thead>
          <Trow>
            <th>
              <Text b>Props</Text>
            </th>
            <th>
              <Text b>Style property</Text>
            </th>
          </Trow>
        </Thead>
        <tbody>
          {SPACING_PROPERTIES.map((item, index) => (
            <Trow key={index}>
              <Tcol>
                <code>{item.prop}</code>
              </Tcol>
              <Tcol>
                <code>{item.style}</code>
              </Tcol>
            </Trow>
          ))}
        </tbody>
      </Table>

      <TitleLink className="mt-12">Sx props from the root props</TitleLink>
      <Text>
        In many of the components you can send the <code>sx</code> properties
        from the root without having to pass the <code>styles</code> in sx prop
      </Text>
      <BlockCode code={SX_BASIC} language="typescript" />
      <Text>
        As you can see the number of styles you can simplify is incredible.
      </Text>

      <TitleLink className="mt-12">And what about inline styles?</TitleLink>
      <Text>
        You can continue passing inline styles and they are injected normally,
        for example:
      </Text>
      <BlockCode code={SX_AND_STYLE} language="typescript" />

      <TitleLink className="mt-12">
        Override between sx and style props?
      </TitleLink>
      <Text>
        The priority of the props is the following,
        <ul>
          <li>* sx props in root</li>
          <li>* sx</li>
          <li>* style</li>
        </ul>
      </Text>
      <BlockCode code={SX_OVERRIDE} language="typescript" />
      <Text>
        Padding is override for the <code>sx</code> prop, but the alignItems is
        override for <code>style</code> prop
      </Text>
    </WrapperStyle>
  );
};

const SPACING_PROPERTIES = [
  {
    prop: 'm',
    style: 'margin'
  },
  {
    prop: 'mt',
    style: 'marginTop'
  },
  {
    prop: 'mr',
    style: 'marginRight'
  },
  {
    prop: 'mb',
    style: 'marginBottom'
  },
  {
    prop: 'ml',
    style: 'marginLeft'
  },
  {
    prop: 'mx',
    style: 'marginHorizontal'
  },
  {
    prop: 'my',
    style: 'marginVertical'
  },
  {
    prop: 'p',
    style: 'padding'
  },
  {
    prop: 'pt',
    style: 'paddingTop'
  },
  {
    prop: 'pr',
    style: 'paddingRight'
  },
  {
    prop: 'pb',
    style: 'paddingBottom'
  },
  {
    prop: 'pl',
    style: 'paddingLeft'
  },
  {
    prop: 'px',
    style: 'paddingHorizontal'
  },
  {
    prop: 'py',
    style: 'paddingVertical'
  }
];

export default HomeTemplate;
