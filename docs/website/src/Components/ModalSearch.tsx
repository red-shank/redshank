import { CodeMatchIcon, SearchIcon, RightIcon } from '@/Components/Icons';
import { Badge, Button, Card, Input, Modal, Text } from '@nextui-org/react';
import useModal from '@/hooks/useModal';
import { useCallback, useState } from 'react';
import { clearTitleAlgolia, debounce } from '@/utils';
import { algoliaIndexRead } from '@/config/algolia';
import { useRouter } from 'next/router';

const GUIES_IDS = [
  'dark-mode',
  'default-theme',
  'getting-started',
  'hooks',
  'provider',
  'the-sx-prop'
];

const IconSearch = (
  <span className="text-2xl mt-2 text-gray-500">
    <SearchIcon />
  </span>
);

export default function ModalSearch() {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [textValue, setTextValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visible, _, { onVisible, onHidden }] = useModal();

  const onSearch = useCallback(
    debounce(async (text: string) => {
      setIsLoading(true);
      const dataResult = await algoliaIndexRead.search(text, {
        hitsPerPage: 3
      });
      setIsLoading(false);
      setData(dataResult?.hits || []);
    }, 500),
    []
  );

  const onClose = () => {
    setTextValue('');
    onHidden();
    return onSearch('');
  };

  return (
    <>
      <Button
        bordered
        icon={IconSearch}
        onClick={onVisible}
        className="w-full bg-neutral-800 border-neutral-800 text-gray-500"
      >
        Quick Search...
      </Button>

      <Modal
        open={visible}
        width="525px"
        onClose={onClose}
        className="border border-solid border-gray-800"
      >
        <Modal.Header className="px-0 py-1 border-transparent border-b border-solid border-b-gray-800 dark:bg-black">
          <Input
            size="xl"
            autoFocus
            value={textValue}
            contentLeft={IconSearch}
            placeholder="Search documentation"
            contentRight={<Badge size="xs">ESC</Badge>}
            onChange={(e) => {
              setTextValue(e.target.value);
              return onSearch(e.target.value);
            }}
            css={{
              width: '100%',
              '.nextui-input-wrapper': {
                background: 'transparent'
              },
              '.nextui-input-content--right': {
                width: 'auto'
              }
            }}
          />
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-1 dark:bg-black h-[350px] max-h-full overflow-auto">
          <Text b>Results:</Text>

          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            !data.length && (
              <Text className="text-center mt-10">No results</Text>
            )
          )}

          <ul>
            {data.map((item) => (
              <li
                key={item.objectID}
                onClick={() => {
                  const isGuies = GUIES_IDS.includes(item.objectID);
                  return router.push(
                    isGuies
                      ? `/docs/${item.objectID}`
                      : `/docs/components/${item.objectID}`
                  );
                }}
              >
                <Card className="w-full border-transparent hover:border-blue-700 transition-all border-2 border-solid cursor-pointer">
                  <Card.Body className="flex flex-row gap-2 justify-between">
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">
                        <CodeMatchIcon />
                      </span>
                      <Text className="capitalize">
                        {clearTitleAlgolia(item.objectID)}
                      </Text>
                    </div>

                    <div className="text-2xl">
                      <RightIcon />
                    </div>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}
