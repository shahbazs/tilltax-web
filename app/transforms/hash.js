import DS from 'ember-data';

const { Transform } = DS;

export default Transform.extend({
  deserialize(serialized) {
    // return JSON.parse(serialized);
    return serialized;
  },

  serialize(deserialized) {
    return JSON.stringify(deserialized);
  }
});
