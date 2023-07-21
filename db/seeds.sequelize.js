const fs = require('fs');

exports.homePageSeed = {
    mainTitle: 'Planing Trip To Anywhere in The World?',
    searBarTitle: 'Book Your Trip',
    from: 'From',
    to: 'To',
    date: 'Date',
    persons: 'Persons',
    submit: 'Submit',
    destinationSection: 'Most Popular Destination',
    descriptionDestination: 'Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.',
    subdcribeSection: 'Subscribe',
    descriptionSubscribe: 'Be the first to know about the new templates.',
}
exports.footerSeed = {
    title1Footer: 'ABOUT US',
    title2Footer: 'DESTINATION',
    title3Footer: 'HOTELS',
    title4Footer: 'GET IN TOUCH'
}

exports.destinationPageSeed = {
    mainTitle: 'Destination',
    destinationSection: 'Trip With Your Favourite Destination',
    descriptionDestination: 'Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'
}

exports.contactPageSeed = {
    subTitleSection: 'DON\'T BE SHY',
    titleSection: 'Get In Touch',
    contactFormTitle: 'Get In Touch',
    contactInformationTitle: 'Contact Information'
}

exports.getSytemSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log("---------------------------------------------------------------------------")
    console.log(student);
    return student
}

exports.citiesSeed = [{
    name: 'Paris'
}, {
    name: 'Strasbourg'
}/* , {
    name: 'Lyon'
}, {
    name: 'Lille'
} */]



exports.userSeed = {
    username: 'admin',
    password: 'admin'
}


exports.getSytemSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getEmailSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getEmailTemplateSettings = () => {
    var rawdata = fs.readFileSync('db/settings/email_template.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}


exports.getEmailSettings = () => {
    var rawdata = fs.readFileSync('db/settings/email.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getFooterSettings = () => {
    var rawdata = fs.readFileSync('db/settings/footer.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getHeaderSettings = () => {
    var rawdata = fs.readFileSync('db/settings/header.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getLocalisationSettings = () => {
    var rawdata = fs.readFileSync('db/settings/localisation.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getNotificationSettings = () => {
    var rawdata = fs.readFileSync('db/settings/notification.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getDashboardSettings = () => {
    var rawdata = fs.readFileSync('db/settings/dashboard.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.travelSeeds = {
    title: 'RDZDZS',
    type: '',
    route: '9879',
    date: '12/05/2022',
    price: '160'
}

exports.vehiculeSeeds = {
    registration: "6GSXS8XS",
    year: '1996',
    engine: 'Diesel',
    type: "",
    model: "JU7",
    chassis: "S8ZX7",
    owner: "FastBus",
    brand: 'Toyota',
}

exports.stationSeeds = {
    name: 'Paris Bercy',
    address: "Rue de Strasbourg 75000",
    city: 'Paris'
}

exports.routeSeeds = [{
    name: "53342",
    from: "Paris",
    to: "Strasbourg",
    breakPoints: "Reims",
    distance: "120",
    approximateTime: "23",
    childSeat: "3",
    start: "12/03/2022",
    end: '23/03/2022',
    SpacialSeat: '44'
}, {
    name: "888766",
    from: "Strasbourg",
    to: "Paris",
    breakPoints: "Reims",
    distance: "120",
    approximateTime: "23",
    childSeat: "3",
    start: "13/03/2022",
    end: '24/03/2022',
    SpacialSeat: '44'
}]

exports.passengerSeeds = {
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhon@gmail.com",
    address: "12 rue de Paris 34000",
    telephone: "+324 323 423 894"
}

exports.priceSeeds = {
    route: "4324",
    price: "88",
    kidsPrice: "3",
    specialPrice: "43",
}

exports.offerSeeds = {
    name: "30 discount",
    start: "11/10/2022",
    end: "12/03/2022",
    code: "DZZD",
    discount: "44",
    travel: "899O",
    condition: "",
}

/* exports.facilitySeeds={
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING
} */

exports.driverSeeds = {
    license: 'SD8ZE',
    name: "John Doe",
    dateOfBirth: "12/03/2000"
}

exports.bookingSeeds = {
    date: '12/03/2000',
    passenger: "Madalyn Edric",
    trip: "08U09U",
    payment: "paid",
    adults: "1",
    kids: '1'
}

exports.assignementsSeeds = {
    travel: '97889',
    vehicule: "Toyota",
    date: "12/10/2022",
    driver: 'Jhon Doe'
}