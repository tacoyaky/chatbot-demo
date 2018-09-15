var botui = new BotUI('chatbot-demo');

const request = axios.create({
    baseURL: 'https://api.github.com'
})

const github_uname = 'tacoyaky'     // Please change to yourname.

// self‐introduction demo
var username = ""
var bio = ""

function getdata_fromGithub(){
    request.get('/users/' + github_uname)
    .then(function(response){
        console.log(response.data)
        username = response.data.login
        bio = response.data.bio
    })
}

function demo_self_introduction(){
botui.message.removeAll({});
botui.message.bot({
    content: "Hi. May I have your name, please?"
}).then(function(){
    botui.message.human ({
        content: "Hi, I'm " + username
    });
}).then(function(){
    botui.message.human ({
        loading: true,
        content: '![image](https://github.com/' + github_uname + '.png)',
        delay: 100,
        loading: false
    });
}).then(function(){
    botui.message.bot ({
        content: "Hi, " + github_uname + ". I want to know more about you."
    });
}).then(function(){
    botui.message.human ({
        content: bio
    });
}).then(function(){
    botui.message.bot ({
        content: "Thank you!"
    });
});
}

function demo_main(){
    getdata_fromGithub()
    demo_self_introduction()
}
