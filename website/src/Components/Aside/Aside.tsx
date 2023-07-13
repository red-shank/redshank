import dynamic from 'next/dynamic';
import { Text } from '@nextui-org/react';

import menu from '@/assets/v1.json';
import * as icons from '@/Components/Icons';
import { isProd } from '@/config';

import { CollapseItemStyle, CollapseStyle } from './style';

const NavLink = dynamic(() => import('@/Components/NavLink'), {
  ssr: isProd
});

const RenderIcon = ({ Component }: { Component?: any }) => {
  if (!Component) return null;
  return <Component className="text-xl" />;
};

type AsideProps = {
  titleClass?: string;
};

const Aside = ({ titleClass }: AsideProps) => {
  return (
    <div>
      <Text weight="bold" size="$xl" className={titleClass}>
        Documentation
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
              title={name}
              contentLeft={<RenderIcon Component={(icons as any)[icon]} />}
            >
              {children.map(({ key: secondaryKey, name, path }) => {
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
                    {name}
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
