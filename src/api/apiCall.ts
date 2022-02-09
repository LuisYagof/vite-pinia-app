export const apiCall = () => {
    return new Promise<string>(res => setTimeout(res, 2000, "Front Crooks"));
}