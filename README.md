# react-abtest

Simple React AB test component

## Install

`npm install react-abtest`

## Usage

### ExperimentRandom

Randomly renders a variant.

```js
import { ExperimentUniqueId } from 'react-abtest';

const A = <div>A variant</div>;
const B = <div>B variant</div>;
const C = <div>C variant</div>;

const ExampleTest = () => {
  return <ExperimentRandom variants={[A, B, C]} />
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

const ExampleTest = ({ uid }) => {
  return <ExperimentUniqueId experimentName={'sample-experiment'} uid={uid} variants={[A, B, C]} />
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

  // userGroup = 1, would render A
  // userGroup = 33 would render B
  // userGroup = 51 would render C
  return <ExperimentValueGroup userGroup={userGroup} variants={variants} />;
}

export default ExampleTest;
```
