Messages = new Mongo.Collection("messages");



Template.messages.messages = function(){
    return Messages.find({}, {sort: {time: -1}})
}