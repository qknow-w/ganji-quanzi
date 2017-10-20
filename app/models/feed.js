import DS from 'ember-data';

export default DS.Model.extend({
    feed_id: DS.attr(),
    content: DS.attr()
});
