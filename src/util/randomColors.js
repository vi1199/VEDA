/**
 * 
 * color should be sent from api to avoid hard code values
 * this function takes name and adds color to it in hex format - eg: #FFFFF
 */

export const randomColor = (initials) => {
    var hash = 0;
    for (var i = 0; i < initials.length; i++) {
        hash = initials.charCodeAt(i) + ((hash << 5) - hash)
    }
    var color = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2)
    }
    return color;
}