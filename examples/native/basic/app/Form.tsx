import React, { useEffect } from 'react';
import {
  Input,
  Title,
  Form,
  Button,
  InputScrollView,
  DatePicker,
  Box,
  Radio,
  Checkbox,
  Switch,
  Container,
  Select
} from '@redshank/native';

const { TextArea } = Input;
const { useForm } = Form;

const THREE_SECONDS = 3000;

const FormScreen = () => {
  const [form, submit] = useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const onSubmitCallback = async () => {
    form?.setErrors?.([
      { name: 'email', error: 'Email invalid' },
      { name: 'password', error: 'Please insert a password' }
    ]);
  };

  useEffect(() => {
    setTimeout(() => {
      form.setFieldsValue({
        email: 'example@mail.com'
      });
    }, THREE_SECONDS);
  }, [form]);

  return (
    <InputScrollView>
      <Container>
        <Box>
          {/*Basic form*/}
          <Title level={3}>Basic Form</Title>
          <Form onFinish={onFinish}>
            <Form.Item
              required
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email' }]}
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
            <Form.Item isSubmit>
              <Button fullWidth>Login</Button>
            </Form.Item>
          </Form>
        </Box>

        {/*Form instance*/}
        <Box>
          <Title level={3}>Fields Form</Title>
          <Form onFinish={onFinish}>
            <Form.Item
              required
              name="first_name"
              label="Name"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              required
              name="last_name"
              label="Last Name"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              required
              name="payment_date"
              label="Payment date"
              rules={[{ required: true, message: 'Required field' }]}
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
                    value: 'other'
                  }
                ]}
              />
            </Form.Item>

            <Form.Item
              required
              name="mayor_of_age"
              label="You are over 18 years old?"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Radio.Group align="vertical">
                <Radio value="yes" label="Yes" />
                <Radio value="no" label="No" />
              </Radio.Group>
            </Form.Item>

            <Form.Item name="description" label="Description">
              <TextArea placeholder="Insert description here!" />
            </Form.Item>

            <Form.Item
              name="switch"
              rules={[
                { required: true, message: 'Required field' },
                {
                  validator: (_: any, value: boolean) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('Should select switch'))
                }
              ]}
            >
              <Switch />
            </Form.Item>

            <Form.Item
              name="agree"
              rules={[
                { required: true, message: 'Required field' },
                {
                  validator: (_: any, value: boolean) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('Should accept agreement'))
                }
              ]}
            >
              <Checkbox
                required
                type="square"
                size="small"
                label="I accept the terms and conditions"
              />
            </Form.Item>

            <Form.Item isSubmit>
              <Button fullWidth onPress={submit}>
                Send
              </Button>
            </Form.Item>
          </Form>
        </Box>
        <Box>
          {/*Basic form*/}
          <Title level={3}>Controller Form</Title>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              required
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email' }]}
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

            <Button fullWidth onPress={onSubmitCallback}>
              Login
            </Button>
          </Form>
        </Box>
      </Container>
    </InputScrollView>
  );
};

export default FormScreen;
