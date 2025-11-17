import Element from './element'

const el = new Element('div');

el.setId('block');

el.addClasses("border", "flex");
//el.removeClasses("flex");

el.render(document.body);