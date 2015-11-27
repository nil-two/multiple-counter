var DEFAULT_ITEMS = [
];

var Counter = Ractive.extend({
  template: '#counter_template',

  addItem: function(event) {
    this.get('items').push({
      title: this.get('new_title'),
      count: 1,
    });
    this.set('new_title', '');

    event.original.preventDefault();
  },

  countUp: function(n) {
    this.get('items')[n].count++;
    this.update('items');
  },
});

new Counter({
  el: '#counter_app',
  data: { items: DEFAULT_ITEMS },
});
