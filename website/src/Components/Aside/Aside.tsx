import { Text } from '@nextui-org/react';

import menu from '@/assets/v1.json';
import NavLink from '@/Components/NavLink';
import * as icons from '@/Components/Icons';

import { CollapseItemStyle, CollapseStyle } from './style';

const RenderIcon = ({ Component }: { Component?: any }) => {
  if (!Component) return null;
  return <Component className="text-xl" />;
};

type AsideProps = {
  titleClass?: string;
  t: (key: string, defaultValue?: string) => string | undefined;
};

const Aside = ({ titleClass, t }: AsideProps) => {
  const docName = t('docs:aside.title', 'Documentation');
  return (
    <div>
      <Text weight="bold" size="$xl" className={titleClass}>
        {docName}
      </Text>

      {menu.map(({ children, name, key, icon }) => {
        const titleKey = `docs:aside.${key}.name`;
        return (
          <CollapseStyle
            shadow
            key={key}
            animated={false}
            divider={false}
            className="p-0 bg-transparent shadow-none"
          >
            <CollapseItemStyle
              expanded
              title={t(titleKey, name)}
              // @ts-ignore
              contentLeft={<RenderIcon Component={icons[icon]} />}
            >
              {children.map(({ key: secondaryKey, name, path }) => {
                const keyName = `docs:aside.${key}.${secondaryKey}`;
                return (
                  <NavLink
                    key={secondaryKey}
                    href={path}
                    className="text-neutral-400"
                    activeCss={{
                      color: '$text !important',
                      fontWeight: '$bold'
                    }}
                  >
                    {t(keyName, name)}
                  </NavLink>
                );
              })}
            </CollapseItemStyle>
          </CollapseStyle>
        );
      })}

      <div className="h-20 w-full" />
    </div>
  );
};

export default Aside;
