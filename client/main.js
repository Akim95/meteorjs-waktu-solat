Template.registerHelper('mydate', function (date) {
    return moment(date).format("DD MMMM YYYY");
});

Template.registerHelper('mytime', function (time) {
    return moment(time, ["hh:mm"]).format("h:mm");
});

Template.registerHelper('currentTime', function (current) {



});

Template.waktu_solat.helpers({
    getWaktu() {
            return Session.get('waktu');
        },
        getMomentHijri() {
            Meteor.call('momentHijri', function (err, res) {
                Session.set('momentHijri', res);
            });
            return Session.get('momentHijri');
        },
        getCurrentTime() {


            Meteor.setInterval(function () {
                Session.set('getTime', moment().format("h:mm:ss A"));
            }, 1000);

            var currentTime = Session.get('getTime');
            currentTime = moment().format("h:mm:ss A");

            return currentTime;
        }
});

Template.waktu_solat.events({
    'change #state' () {
        var state = $('#state').val();
        Session.set('state', state)
    },
    'change #zone' () {
        var zone = $('#zone').val();
        Meteor.call('getWaktu', zone, function (err, res) {
            Session.set('waktu', res)
        });
    }
});