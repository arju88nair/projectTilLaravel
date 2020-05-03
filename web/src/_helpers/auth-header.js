
export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user.access_token && user) {
        return { 'Authorization': 'Bearer ' + user.access_token };
    } else {
        return {};
    }
}