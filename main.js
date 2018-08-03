var botui = new BotUI('chatbot-demo');

botui.message.bot({
    content: 'What mobile OS do you like?'
}).then(function(){
    botui.action.button ({
        action: [{
            icon: 'android',
            text: 'android',
            value: 'android'
        }, {
            icon: 'apple',
            text: 'iOS',
            value: 'iOS'
        }, {
            icon: 'windows',
            text: 'Windows',
            value: 'Windows'
        }]
    }).then(function(res){
        botui.message.bot({
            content: 'Nice, ' + res.value + '!'
        });
    });
});
