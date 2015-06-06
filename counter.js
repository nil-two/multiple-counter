var DEFAULT_ITEMS = [
];

var Counter = Ractive.extend({
  template: '#counter_template',
  addItem: function(title) {
    this.get('items').push({
      title: title,
      count: 1,
    });
    this.set('new_title', '');
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
