import _ from 'lodash';


const names = ['Bruce Wayne', 'Wally West', 'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent'],
  otherNames = ['Barry Allen', 'Hal Jordan', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];

_.each([names, otherNames], (nameGroup) => {
  findSuperman(nameGroup);
})

const findSuperman = (values) => {
  _.find(values, (name) => {
    if (name === 'Clark Kent') {
      console.log(`Superman is ${name}`);
    } else {
      console.log(`${name} doesn't Superman`);
    }
  });
}
