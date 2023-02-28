import Person from '../models/Person.js';

const person_get = async (req, res) => {
  const persons = await Person.find();

  res.render('person', { persons });
};

export {
  person_get,
};
