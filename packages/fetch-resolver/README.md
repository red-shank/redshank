# @redshank/fetch-resolver

The objective of this project is provide a simple and easy way to use the API Rest.

## Installation

```sh
npm install @redshank/fetch-resolver
```

# Usage

`@redshank/fetch-resolver` provider two hooks, useFetchQuery and useFetchMutation.

## useFetchQuery

Fetch GET petitions and controller loading, errors, re-fetch and data.

### App.js

Configure `axios` instance in the root of your application.

```js
import { QueryProvider } from '@redshank/fetch-resolver';
import WelcomePage from './pages/WelcomePage';

export default function App() {
  return (
    <QueryProvider
      config={{
        baseURL: 'https://jsonplaceholder.typicode.com',
      }}
    >
      <WelcomePage/>
    </QueryProvider>
  );
}
```

### WelcomePage.js

```js
import {useFetchQuery} from '@redshank/fetch-resolver';

export default function Welcomepage() {
  const {data, errors, isLoading} = useFetchQuery('/greeting');

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errors) {
    return <p>{errors?.message || JSON.stringify(errors)}</p>;
  }

  return (
    <div className="App">
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
```

## Stop auto fetch

Trigger fetch when skip is `false`

```js
import {useFetchQuery} from '@redshank/fetch-resolver';

export default function App() {
  const {user} = useAuth(); // This is a example
  const {data, errors, isLoading} = useFetchQuery('/greeting', {
    skip: !user,
    params: {
      id: user.id,
      pagination: 1,
      limit: 10,
      sort: 'asc',
    }
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // More logic here
}
```

## Refresh data or fetch manual data

```js
import {useFetchQuery} from '@redshank/fetch-resolver';

export default function App() {
  const {data, errors, isLoading, fetchData} = useFetchQuery('/greeting', {
    skip: true,
  });

  useEffect(() => {
    fetchData({
      params: {
        sort: ['title:asc', 'date:desc'], // Send ?sort[]=title:asc&sort[]=date:desc
      }
    });
  }, []);

  const onClickRefreshButton = () => {
    fetchData();
  };

  return (
    <div>
      <button onClick={onClickRefreshButton}>Refresh</button>
    </div>
  )
}
```

## useFetchMutation

Fetch POST, PUT and DELETE petitions and controller loading, errors and data.

## Default POST mutation.

```js
import {useFetchMutation} from '@redshank/fetch-resolver';

const body = {
  name: 'John',
  lastName: 'Doe',
}

export default function App() {
  const [createUser, {data, errors, isLoading}] = useFetchMutation('/users', {
    variables: {
      ...body
    },
  });

  const onClickCreateUserButton = () => {
    createUser();
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data && <p>{data.name}</p>}
      <button
        onClick={onClickCreateUserButton}
      >
        Create user
      </button>
    </div>
  )
}
```

## POST, PUT mutation in callback.

The method props accept a 'POST', 'PUT' or 'DELETE' string.

```js
import {useFetchMutation} from '@redshank/fetch-resolver';

export default function App() {
  const [createUser, {data, errors, isLoading}] = useFetchMutation('/users', {
    method: 'POST'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = {
      name: formData.get('name'),
      lastName: formData.get('lastName'),
    };

    createUser({
      variables: body
    });
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data && <p>{data.name}</p>}

      <form method="post" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Insert a name"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Insert a last name"
        />
        <button type="submit">
          Create user
        </button>
      </form>
    </div>
  )
}
```

## DELETE method.

```js
import {useFetchMutation} from '@redshank/fetch-resolver';

const itemID = 12540;

export default function App() {
  const [deleteUser, {data, errors, isLoading}] = useFetchMutation('/users', {
    method: 'DELETE'
  });

  const onDelete = () => {
    deleteUser({
      addToPath: itemID, // add id to path
      variables: {
        // more data to send server optional
      }
    });
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data && <p>User deleted: {data.name}</p>}

      <button onClick={onDelete}>
        Delete user
      </button>
    </div>
  )
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
