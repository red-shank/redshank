import ROUTES from '@/config/routes';

import Layout from '@/Components/Layout';
import ComponentTemplate from '@/Components/Templates/Component';

 function Component() {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.COMPONENTS.name}
    >
      <ComponentTemplate
        title="Icon"
        description="Welcome to the React Native Beauty Design documentation! Beauty Design allows you to make beautiful, modern, and fast mobile/applications regardless of your design experience, created with React and React Native."
      />
    </Layout>
  );
}


export default Component
