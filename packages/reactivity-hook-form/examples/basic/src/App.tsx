import './App.css';
import '../../../../reactivity-hook-form/src/style.css';
import Form, {
  FormItem,
  ReactivityHookFormProvider
} from '../../../../reactivity-hook-form/src';
import { FieldPathLib } from '../../../src/types/extend-react-hook-form.type.ts';
import { useForm } from 'react-hook-form';

type FormType = {
  user: {
    username: string;
    password: string;
  };
};

// test for preventing typos
const key: FieldPathLib<FormType> = 'user.username';
console.log(key);

function App() {
  const formContext = useForm<FormType>();

  return (
    <ReactivityHookFormProvider
      sanitize={(args) => ({
        ...args,
        errorText: args?.helperText
      })}
    >
      <div className="container">
        <Form<FormType>
          formContext={formContext}
          onSubmit={(values) => console.log({ values })}
        >
          <FormItem<FormType>
            name="user.username"
            label="Username"
            rules={{ required: 'User name is required' }}
          >
            <input type="text" placeholder="Username" />
          </FormItem>
          <FormItem<FormType>
            name="user.password"
            label="Password"
            rules={{ required: 'Password is required' }}
          >
            <input type="password" placeholder="Password" />
          </FormItem>

          <button>Submit</button>
        </Form>
      </div>
    </ReactivityHookFormProvider>
  );
}

export default App;
