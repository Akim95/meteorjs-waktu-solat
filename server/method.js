Meteor.methods({
    getWaktu(zone) {
        this.unblock();
        var apiUrl = 'http://solat.io/api/my/' + zone;
        var response = HTTP.get(apiUrl).data;
        return response;
    }
});