exports.getPricing = async function (req, res, next) {
  res.render("elements/pricing", { viewTitle: 'Pricing' });
}

exports.getContact = async function (req, res, next) {
  res.render("elements/contact", { viewTitle: 'Contact' });
}

exports.getDestination = async function (req, res, next) {
  res.render("elements/destination", { viewTitle: 'Destination' });
}

exports.getHome = async function (req, res, next) {
  res.render("elements/index", { viewTitle: 'FastBus' });
}




