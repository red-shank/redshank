import React, { useEffect } from 'react';
import {
  Input,
  Title,
  Button,
  InputScrollView,
  DatePicker,
  Box,
  Radio,
  Checkbox,
  Switch,
  Container,
  Select,
  Text
} from '@redshank/native';
import Form, { useForm } from '@redshank/reactivity-hook-form';

const { TextArea } = Input;

const THREE_SECONDS = 3000;

const FormScreen = () => {
  const form = useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const onSubmitCallback = async () => {
    form?.setError('email', {
      message: 'Email invalid',
      type: 'validate'
    });
    form?.setError('password', {
      message: 'Please insert a password',
      type: 'validate'
    });
  };

  useEffect(() => {
    setTimeout(() => {
      form.setError('email', {
        message: 'example@mail.com'
      });
    }, THREE_SECONDS);
  }, [form]);

  return (
    <InputScrollView>
      <Container>
        <Box>
          {/*Basic form*/}
          <Title level={3}>Basic Form</Title>
          <Form Component={Box} onSubmit={onFinish}>
            <Form.Item
              name="email"
              label="Email"
              rules={{
                required: 'Please insert your email',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please insert a valid email'
                }
              }}
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>
            <Form.Item
              name="password"
              label={
                <Box
                  width="100%"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text>Password</Text>

                  <Button type="link">Forgot Password?</Button>
                </Box>
              }
              rules={{
                required: 'Please insert your password',
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters'
                }
              }}
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
          <Form Component={Box} onSubmit={onFinish}>
            <Form.Item
              name="first_name"
              label="Name"
              rules={{
                required: 'Please insert your first name'
              }}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="last_name"
              label="Last Name"
              rules={{
                required: 'Please insert your last name'
              }}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              name="payment_date"
              label="Payment date"
              rules={{
                required: 'Please insert payment date'
              }}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={{
                required: 'Please select a gender'
              }}
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
              name="mayor_of_age"
              label="You are over 18 years old?"
              rules={{
                required: 'Required field'
              }}
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
              rules={{
                required: 'Required field',
                validate: (value: boolean, values) =>
                  value ? undefined : 'Should select switch'
              }}
            >
              <Switch />
            </Form.Item>

            <Form.Item
              name="agree"
              rules={{
                required: 'Required field',
                validate: (value: boolean, values) =>
                  value ? undefined : 'Should accept agreement'
              }}
            >
              <Checkbox
                required
                type="square"
                size="small"
                label="I accept the terms and conditions"
              />
            </Form.Item>

            <Form.Item isSubmit>
              <Button fullWidth>Send</Button>
            </Form.Item>
          </Form>
        </Box>
        <Box>
          {/*Basic form*/}
          <Title level={3}>Controller Form</Title>
          <Form Component={Box} context={form} onSubmit={onFinish}>
            <Form.Item
              name="email"
              label="Email"
              rules={{
                required: 'Please insert your email',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please insert a valid email'
                }
              }}
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={{
                required: 'Please insert your password',
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters'
                }
              }}
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
