import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode =
  withThemeProvider(`<Form onFinish={onFinish}>
            <Form.Item
              required
              name="email"
              label="Email"
              rules={[{ type: 'email' }]}
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>
            <Form.Item
              required
              name="password"
              label="Password"
            >
              <Input type="password" placeholder="********" />
            </Form.Item>
            <Form.Item isSubmit>
              <Button fullWidth>
                Login
              </Button>
            </Form.Item>
          </Form>`, {
    hooks: `
  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
`,
    package: ['Form', 'Input', 'Button']
  });

export const completed = withThemeProvider(`<Form form={form} onFinish={onFinish}>
            <Form.Item
              required
              name="first_name"
              label="Name"
              rules={[{ message: 'Required field' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              required
              name="last_name"
              label="Last Name"
              rules={[{ message: 'Required field' }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              required
              name="payment_date"
              label="Payment date"
              rules={[{ message: 'Required field' }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              required
              name="gender"
              label="Gender"
              rules={[{ message: 'Required field' }]}
            >
              <Select
                items={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                  {
                    label: 'Other',
                    value: 'other',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              required
              name="mayor_of_age"
              label="You are over 18 years old?"
              rules={[{ message: 'Required field' }]}
            >
              <Radio.Group align="vertical">
                <Radio value="yes" label="Yes" />
                <Radio value="no" label="No" />
              </Radio.Group>
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input.TextArea placeholder="Insert description here!" />
            </Form.Item>

            <Form.Item
              required
              name="switch"
              label="Switch"
              rules={[
                { message: 'Required field' },
                {
                  validator: (_: any, value: boolean) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('Should select switch')),
                },
              ]}
            >
              <Switch />
            </Form.Item>

            <Form.Item
              required
              name="agree"
              rules={[
                { message: 'Required field' },
                {
                  validator: (_: any, value: boolean) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
            >
              <Checkbox
                required
                type="square"
                size="small"
                label="I accept the terms and conditions"
              />
            </Form.Item>
            <Form.Item>
              <Button fullWidth onPress={submit}>
                Login
              </Button>
            </Form.Item>
          </Form>`, {
  hooks: `const [form, submit] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
`,
  package: [
    'Form',
    'Input',
    'Button',
    'DatePicker',
    'Radio',
    'Switch',
    'Select',
    'Checkbox'
  ]
});

export const controller = withThemeProvider(`<Form form={form} onFinish={onFinish}>
            <Form.Item
              required
              name="email"
              label="Email"
              rules={[{ required: true }, { type: 'email' }]}
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>
            <Form.Item
              required
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input type="password" placeholder="********" />
            </Form.Item>
            <Form.Item>
              <Button fullWidth onPress={submit}>
                Login
              </Button>
            </Form.Item>
          </Form>`, {
  header: `
const THREE_SECONDS = 3000;
  `,
  hooks: `const [form, submit] = Form.useForm();

   const onFinish = (values: any) => {
     console.log('Finish:', values);
   };

   useEffect(() => {
     setTimeout(() => {
       form.setFieldsValue({
         email: 'example@mail.com'
       });

       setTimeout(() => {
         form.setErrors([
           { name: 'email', error: 'Email invalid' },
           { name: 'password', error: 'Please insert a password' },
        ]);
       }, THREE_SECONDS);
     }, THREE_SECONDS);
   }, [form])
`,
  react: ['useEffect'],
  package: ['Form', 'Input', 'Button']
});
