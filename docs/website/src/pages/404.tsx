import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import Title from '@/Components/Title';
import { Text } from '@nextui-org/react';

export default function Page() {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.COMPONENTS.name}
    >
      <div className="min-h-[350px] mt-10">
        <Title className="text-center">Page Not Found</Title>
        <Text className="text-center text-2xl">
          It seems that you are trying to navigate to a page that does not exist.
        </Text>
      </div>
    </Layout>
  );
}
