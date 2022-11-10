import { FC, memo } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Heading } from '@/utils/getHeadings';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { LiStyle } from './style';
import { useTranslation } from 'next-i18next';

interface TableOfContentProps {
  headings: Heading[];
}

const TableOfContent: FC<TableOfContentProps> = ({ headings, ...props }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -80% 0%'
    }
  );

  if (headings.length <= 0 || isMobile) return null;

  return (
    <div className="container" {...props}>
      <h4 className="title">
        {t('docs:layout.content', 'Contents')}
        </h4>
      <ul className="list">
        {headings.map((heading, i) => (
          <LiStyle
            key={i}
            isActive={activeId === heading.id}
            className="list-item text-sm"
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </LiStyle>
        ))}
      </ul>
    </div>
  );
};

const MemoTableOfContent = memo(TableOfContent);

export default MemoTableOfContent;
