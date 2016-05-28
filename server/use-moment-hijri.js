var moment = Meteor.npmRequire("moment-hijri");

Meteor.methods({
    momentHijri() {
        m = moment();
        m.utcOffset("+08:00");
        return m.format('iD iMMMM iYYYY');
    }
});