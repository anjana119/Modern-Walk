let Domain = Object.freeze({
    local: "https://fakestoreapi.com/"
});

export const apiDomain = Domain.local;
export default {
    APP_DOMAIN: apiDomain,
    get APP_HEADER() {
        const AuthStr = "Bearer ".concat(localStorage.token);
        return {
            headers: {
                Authorization: AuthStr
            }
        };
    }
}