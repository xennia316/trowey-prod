const twilio = require('twilio');
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendMessage = async (route) => {

    const message = buildMessage(route);
    try{
        const response = await client.messages.create({
            body: message,
            to: '+237650740206',
            from: '+17088158298'
         })
         console.log(response);
    }
    catch(e) {
        console.error(e);
    }
     
}


const buildMessage = (route) => {
    let message = `\n\nRoutes From ${(new Date(route.start_time)).toDateString()} To ${(new Date(route.end_time)).toDateString()}\n`;

    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

    for(let day of days){
        message +=`\n${day}:\n`
        route[day.toLowerCase()].forEach((r, i, arr) => {
            message += `${r}`
            if(i !== arr.length-1){
                message += `-->`
            }
        })
    }


    message += "\n\nThank you for using Trowey"

    return message;
}

module.exports = sendMessage;