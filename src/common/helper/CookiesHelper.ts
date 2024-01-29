export default class CookiesHelper {
    static get(name: string) {
        const cookieName = `${name}=`;
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return '';
    }

    static set(name: string, value: string, expires?: number) {
        let cookie = `${name}=${value};path=/`;
        if (expires) {
            const date = new Date();
            date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
            cookie += `;expires=${date.toUTCString()}`;
        }
        document.cookie = cookie;
    }

    static delete(name: string) {
        document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    }
}