# Reactivity Hook Form

## Simplifying React Form Management

Reactivity Hook Form is an innovative wrapper for React Hook Form, designed to enhance the developer experience in
building and managing forms in React applications. This wrapper primarily focuses on injecting repetitive props
automatically, significantly reducing boilerplate code and streamlining the form setup process.

**Key Features:**

* **Automated Prop Injection:** Automatically handles common properties, allowing developers to focus on unique form
  attributes.


* **Integrated Dependencies and Validations:** Incorporates essential dependencies and validation rules, ensuring robust
  form functionality with minimal setup.


* **Streamlined Form Management:** Simplifies the form creation process, making it more intuitive and less
  time-consuming.


* **Customizable and Extendable:** While it provides a set of default settings for quick implementation, Reactivity Hook
  Form is fully customizable, catering to specific project needs.
  Ideal for developers looking to optimize form management in React projects, Reactivity Hook Form offers a blend of
  convenience, efficiency, and reliability.

## Installation

To install Reactivity Hook Form, run the following command:

```bash
npm install reactivity-hook-form
```

```bash
yarn add reactivity-hook-form
```

## Usage

To use Reactivity Hook Form, import the `Form` from the package and wrapper it in your component. The `Form` component
accepts an object as an argument, which contains the following properties:

```tsx
import Form, { FormItem } from '@redshank/reactivity-hook-form';

const Example = () => {
  return (
    <Form onSubmit={console.log}>
      <Form.Item name="username">
        <input type="text" placeholder="Username" />
      </Form.Item>
      <Form.Item name="password">
        <input type="password" placeholder="Password" />
      </Form.Item>
      <button type="submit">Submit</button>
    </Form>
  );
};
```

## Validations

Reactivity Hook Form supports the following validation rules:

```tsx
import Form, { FormItem, FormValidations } from '@redshank/reactivity-hook-form';


type FormValues = {
  username: string;
  password: string;
};

const validations: FormValidations<FormValues> = {
  'username': {
    required: 'Username is required'
  },
  'password': {
    required: 'Password is required',
    validate(value) {
      if (value.length < 8) {
        return 'Password must be at least 8 characters';
      }
    }
  }
};

const Example = () => {
  return (
    <Form<FormValues> onSubmit={console.log} validations={validations}>
      <Form.Item<FormValues> name="username">
        <input type="text" placeholder="Username" />
      </Form.Item>
      <Form.Item<FormValues> name="password">
        <input type="password" placeholder="Password" />
      </Form.Item>
      <button type="submit">Submit</button>
    </Form>
  );
};
```

## Dependencies

Reactivity Hook Form supports the following dependencies:

```tsx
import Form, { FormItem, FormDependencies } from '@redshank/reactivity-hook-form';


type FormValues = {
  firstaName: string;
  lastName: string;
  fullName: string;
};

const dependencies: FormDependencies<FormValues> = [
  {
    dependencies: ['firstName', 'lastName'],
    callback: (values, { setValue }) => {
      setValue('fullName', `${values.firstName} ${values.lastName}`);
    }
  }
];

const Example = () => {
  return (
    <Form<FormValues> onSubmit={console.log} dependencies={dependencies}>
      <Form.Item<FormValues> name="firstName">
        <input type="text" placeholder="first name" />
      </Form.Item>
      <Form.Item<FormValues> name="lastName">
        <input type="text" placeholder="Last name" />
      </Form.Item>
      <Form.Item<FormValues> name="fullName">
        <input type="text" disabled />
      </Form.Item>
      <button type="submit">Submit</button>
    </Form>
  );
};
```

## Array fields

Reactivity Hook Form supports array fields:

```tsx
import Form, { FormDependencies, FormValidations } from '@redshank/reactivity-hook-form';

type FormValues = {
  firstaName: string;
  lastName: string;
  fullName: string;
  emails: {
    email: string;
  }[];
};

const dependencies: FormDependencies<FormValues> = [
  {
    dependencies: ['firstName', 'lastName'],
    callback: (values, { setValue }) => {
      setValue('fullName', `${values.firstName} ${values.lastName}`);
    }
  }
];

const validations: FormValidations<FormValues> = {
  'firstName': {
    required: 'First name is required'
  },
  'lastName': {
    required: 'Last name is required'
  },
  'fullName': {
    required: 'Full name is required'
  },
  'emails.[number].email': {
    required: 'Email is required',
    validate(value) {
      if (!value.includes('@')) {
        return 'Email must be valid';
      }
    }
  }
};

const Example = () => {
  return (
    <Form<FormValues>
      onSubmit={console.log}
      validations={validations}
      dependencies={dependencies}
    >
      <FormItem<FormValues> name="firstName">
        <input type="text" placeholder="first name" />
      </FormItem>
      <FormItem<FormValues> name="lastName">
        <input type="text" placeholder="Last name" />
      </FormItem>
      <FormItem<FormValues> name="fullName">
        <input type="text" disabled />
      </FormItem>

      <EmailArrayFiels />

      <button type="submit">Submit</button>
    </Form>
  );
};

const EmailArrayFiels = () => {
  const { control } = Form.useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: 'emails'
  });

  return <div>
    {
      fields.map((field, index) => (
        <div
          key={field.id}
          style={{ display: 'flex', gap: 10, alignItems: 'center' }}
        >
          <FormItem<FormValues> name={`emails.${index}.email`}>
            <input type="text" placeholder="Email" />
          </FormItem>
          <button type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))
    }
  </div>;
};
```

#### Throwing dependencies when you update a value from javascript and not from user input

useSetValue hook has a third parameter that you can use to trigger the dependencies callback.

1. Name of the field to update
2. Value to update
3. Trigger dependencies callback, false by default only set value and not trigger dependencies callback, true to trigger
   dependencies callback

```tsx
import { useEffect } from 'react';
import Form, { FormDependencies } from '@redshank/reactivity-hook-form';


type FormValues = {
  firstaName: string;
  lastName: string;
  fullName: string;
};

const dependencies: FormDependencies<FormValues> = [
  {
    dependencies: ['firstName', 'lastName'],
    callback: (values, { setValue }) => {
      setValue('fullName', `${values.firstName} ${values.lastName}`);
    }
  }
];

const Example = () => {
  const context = Form.useForm();
  const [setValue] = Form.useSetValue(context);

  useEffect(() => {
    setValue('firstName', 'John');
    // This will trigger is `true` the dependencies callback is called
    setValue('lastName', 'Doe', true);
  }, []);

  return (
    <Form<FormValues> context={context} onSubmit={console.log} dependencies={dependencies}>
      <Form.Item<FormValues> name="firstName">
        <input type="text" placeholder="first name" />
      </Form.Item>
      <Form.Item<FormValues> name="lastName">
        <input type="text" placeholder="Last name" />
      </Form.Item>
      <Form.Item<FormValues> name="fullName">
        <input type="text" disabled />
      </Form.Item>
      <button type="submit">Submit</button>
    </Form>
  );
};
```

## React Native

Reactivity Hook Form is compatible with React Native, allowing developers to build forms for mobile applications.

```tsx
import { Box, Input, Button } from '@redshank/native';
import Form, { FormItem } from '@redshank/reactivity-hook-form';

const Example = () => {
  return (
    <Form Component={Box} onSubmit={console.log}>
      <Form.Item name="username">
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item name="password">
        <Input placeholder="Password" />
      </Form.Item>
      <Form.Item isSubmit>
        <Button>Submit</Button>
      </Form.Item>
    </Form>
  );
};
```

#### Options for the form

* `sanitize`: Middleware that will resolve the props for each field, by default it passes value, onChange, error,
  helperText, ref, etc. If your components do not support these props you can use this middleware to set the properties
  you expect. By default it is `undefined`. Example:
```
  sanitize={
    (props) => ({
      ...props,
      onSelected: props.onChange,
      errorText: props.helperText 
    })
  }
```

```tsx
import Form from '@redshank/reactivity-hook-form';
import { useEffect } from 'react';


type FormValues = {
  firstaName: string;
  lastName: string;
  fullName: string;
};

const Example = () => {
  return (
    <Form<FormValues> >
      <Form.Item<FormValues> name="firstName">
        <input type="text" placeholder="first name" />
      </Form.Item>
      <Form.Item<FormValues> name="lastName">
        <input type="text" placeholder="Last name" />
      </Form.Item>
      <Form.Item<FormValues> name="fullName">
        <input type="text" disabled />
      </Form.Item>
      <button type="submit">Submit</button>
    </Form>
  );
};

```
