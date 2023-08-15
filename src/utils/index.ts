import { cookieName } from "@/constants";

export const getToken = (): string | null => {
    const nameEqual = cookieName + "=";
    const ca =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiaWF0IjoxNjkxMjQzMzA1LCJleHAiOjE2OTM4MzUzMDV9.vQo-Ny2NvRk3LBTztyHalCLESnMlpUCB8wPpp2SaEiI".split(";"); // document.cookie.split(";");
   console.log(ca)
        for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEqual) == 0)
            return c.substring(nameEqual.length, c.length);
    }
    return null;
};
