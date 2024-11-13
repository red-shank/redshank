# Reactivity Hook Form
## Simplifying React Form Management

Reactivity Hook Form is an innovative wrapper for React Hook Form, designed to enhance the developer experience in building and managing forms in React applications. This wrapper primarily focuses on injecting repetitive props automatically, significantly reducing boilerplate code and streamlining the form setup process.

**Key Features:**
* **Automated Prop Injection:** Automatically handles common properties, allowing developers to focus on unique form attributes.


* **Integrated Dependencies and Validations:** Incorporates essential dependencies and validation rules, ensuring robust form functionality with minimal setup.


* **Streamlined Form Management:** Simplifies the form creation process, making it more intuitive and less time-consuming.


* **Customizable and Extendable:** While it provides a set of default settings for quick implementation, Reactivity Hook Form is fully customizable, catering to specific project needs.
Ideal for developers looking to optimize form management in React projects, Reactivity Hook Form offers a blend of convenience, efficiency, and reliability.

## Installation
To install Reactivity Hook Form, run the following command:

```bash
npm install reactivity-hook-form
```

```bash
yarn add reactivity-hook-form
```

## Usage
To use Reactivity Hook Form, import the `Form` from the package and wrapper it in your component. The `Form` component accepts an object as an argument, which contains the following properties:

```tsx
import Form, { FormItem } from 'reactivity-hook-form';

const Example = () => {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="username">
        <input type="text" placeholder="Username" />
      </FormItem>
      <FormItem name="password">
        <input type="password" placeholder="Password" />
      </FormItem>
      <button type="submit">Submit</button>
    </Form>
  );
};
```


## Validations
Reactivity Hook Form supports the following validation rules:

```tsx
import Form, { FormItem, FormValidations } from 'reactivity-hook-form';


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
      <FormItem<FormValues> name="username">
        <input type="text" placeholder="Username" />
      </FormItem>
      <FormItem<FormValues> name="password">
        <input type="password" placeholder="Password" />
      </FormItem>
      <button type="submit">Submit</button>
    </Form>
  );
};
```

## Dependencies
Reactivity Hook Form supports the following dependencies:

```tsx
import Form, { FormItem, FormDependencies } from 'reactivity-hook-form';


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
      <FormItem<FormValues> name="firstName">
        <input type="text" placeholder="first name" />
      </FormItem>
      <FormItem<FormValues> name="lastName">
        <input type="text" placeholder="Last name" />
      </FormItem>
      <FormItem<FormValues> name="fullName">
        <input type="text" disabled />
      </FormItem>
      <button type="submit">Submit</button>
    </Form>
  );
};
```

## Array fields
Reactivity Hook Form supports array fields:

```tsx
import Form, { FormItem, FormDependencies, FormValidations } from 'reactivity-hook-form';
import { useFormContext } from 'react-hook-form';


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
  const { control } = useFormContext<FormValues>();
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
