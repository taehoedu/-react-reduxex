export const generatNewOrderNo = () => {
    let today = new Date();   
    
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let milliseconds = today.getMilliseconds();

    return '' + year + month + date + day + hours + minutes + seconds + milliseconds;

}

// menu price
export const menuPrice = {
    '자장면': 8000,
    '짬뽕': 9000,
}