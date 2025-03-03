import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode =
  withThemeProvider(`<Form
            onSubmit={onFinish}
            validations={{
              email: {
                required: true,
                pattern: {
                  value: /^\\S+@\\S+\\.\\S+$/,
                  message: 'Email invalid
                }
              },
              password: {
                required: true,
              },
            }}
          >
            <Form.Item
              name="email"
              label="Email"
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>
            <Form.Item
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

export const completed = withThemeProvider(`<Form
            onSubmit={onFinish}
            validations={{
              first_name: {
                required: 'Required field',
              },
              last_name: {
                 required: 'Required field',
              },
              payment_date: {
                 required: 'Required field',
              },
              gender: {
                 required: 'Required field',
              },
              mayor_of_age: {
                 required: 'Required field',
              },
              switch: {
                 required: 'Required field',
                 validate: (value) =>
                    value
                      ? undefined
                      : 'Should select switch',
                },
              },
              agree: {
                 required: 'Required field',
                 validate: (value) => value ? undefined : 'Should accept agreement',
              },
            }
          >
            <Form.Item
              name="first_name"
              label="Name"
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="last_name"
              label="Last Name"
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              name="payment_date"
              label="Payment date"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
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
              name="mayor_of_age"
              label="You are over 18 years old?"
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
              name="switch"
              label="Switch"
            >
              <Switch />
            </Form.Item>

            <Form.Item
              name="agree"
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
  hooks: `
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

export const controller = withThemeProvider(`<Form context={form} onSubmit={onFinish}>
            <Form.Item
              name="email"
              label="Email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^\\S+@\\S+\\.\\S+$/,
                  message: 'Email invalid
                }
              }}
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={{ required: 'Password is required' }}
            >
              <Input type="password" placeholder="********" />
            </Form.Item>
            <Form.Item isSubmit>
              <Button fullWidth>
                Login
              </Button>
            </Form.Item>
          </Form>;`, {
  header: `
const THREE_SECONDS = 3000;
  `,
  hooks: `const form = Form.useForm();

   const onFinish = (values: any) => {
     console.log('Finish:', values);
   };

   useEffect(() => {
     setTimeout(() => {
      form.setError('email', {
        message: 'example@mail.com'
      });
    }, THREE_SECONDS);
   }, [form])
`,
  react: ['useEffect'],
  package: ['Form', 'Input', 'Button']
});
