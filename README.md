# react-abtest

A simple React and React Native AB test component.

## Install

`npm install react-abtest`

## Usage

### ExperimentRandom

Randomly renders a variant.

```js
import { ExperimentRandom } from 'react-abtest';

const A = <div>A variant</div>;
const B = <div>B variant</div>;
const C = <div>C variant</div>;

// Optional, but useful for logging test data.
const logger = (variant) => console.log(`User placed in group ${variant}.`);

const ExampleTest = () => {
  return (
    <ExperimentRandom
      variants={[A, B, C]}
      logger={logger}
    />
  );
}

export default ExampleTest;
```

### ExperimentRandomWeighed

Randomly renders a variant based on weight.

```js
import { ExperimentRandomWeighed } from 'react-abtest';

const A = <div>A variant</div>;
const B = <div>B variant</div>;
const C = <div>C variant</div>;

// Optional, but useful for logging test data.
const logger = (variant) => console.log(`User placed in group ${variant}.`);

const ExampleTest = () => {
  return (
    <ExperimentRandomWeighed
      weights={[0.1, 0.1, 0.8]}
      variants={[A, B, C]}
      logger={logger}
    />
  );
}

export default ExampleTest;
```

### ExperimentUniqueId

Renders the same variant based on a unique identifier and experiment name.

```js
import { ExperimentUniqueId } from 'react-abtest';

const A = <div>A variant</div>;
const B = <div>B variant</div>;
const C = <div>C variant</div>;

// Optional, but useful for logging test data.
const logger = (variant) => console.log(`User placed in group ${variant}.`);

const ExampleTest = ({ uid }) => {
  return (
    <ExperimentUniqueId
      experimentName={'sample-experiment'}
      uid={uid}
      variants={[A, B, C]}
      logger={logger}
    />
  );
}

export default ExampleTest;
```

### ExperimentUniqueIdWeighed

Renders the same variant based on weight, a unique identifier* and experiment name.

* Should be of some length, even though the library support one char id's. Short id's may result in uneven distribution.

```js
import { ExperimentUniqueIdWeighed } from 'react-abtest';

const A = <div>A variant</div>;
const B = <div>B variant</div>;
const C = <div>C variant</div>;

// Optional, but useful for logging test data.
const logger = (variant) => console.log(`User placed in group ${variant}.`);

const ExampleTest = ({ uid }) => {
  return (
    <ExperimentUniqueIdWeighed
      experimentName={'sample-experiment'}
      uid={uid}
      weights={[0.1, 0.1, 0.8]}
      variants={[A, B, C]}
      logger={logger}
    />
  );
}

export default ExampleTest;
```

### ExperimentValueGroup

When you already have assigned the users to a group (number), for example in a cookie.

```js
import Cookie from 'cookies';
import { ExperimentValueGroup } from 'react-abtest';

const A = <div>A variant</div>;
const B = <div>B variant</div>;
const C = <div>C variant</div>;

const ExampleTest = () => {
  const userGroup = Cookies.get('abTestCookie');

  const variants = [
    {
      group: 1, // Single group
      component: A
    },
    {
      group: '2-50', // Range group
      component: B,
    },
    {
      group: '51-100',
      component: C
    }
  ];

  // Optional, but useful for logging test data.
  const logger = (variant) => console.log(`User placed in group ${variant}.`);

  // userGroup = 1, would render A
  // userGroup = 33 would render B
  // userGroup = 51 would render C
  return (
    <ExperimentValueGroup
      userGroup={userGroup}
      variants={variants}
      logger={logger}
    />
  );
}

export default ExampleTest;
```
