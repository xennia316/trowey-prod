
const pad = (val) => {
    if (val >= 10){
        return val;
    }
    const str = '0'+val.toString();
    return str;
}

const getWeek = () => {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const end = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 6);

    const start_time = `${start.getFullYear()}-${pad(start.getMonth()+1)}-${pad(start.getDate())}`
    const end_time = `${end.getFullYear()}-${pad(end.getMonth()+1)}-${pad(end.getDate())}`

    return ({start_time, end_time});
}

module.exports = getWeek