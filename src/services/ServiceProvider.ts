import { WebPartContext } from '@microsoft/sp-webpart-base';
import { HttpClient, IHttpClientOptions } from '@microsoft/sp-http';

export class ServiceProvider {
    private wpcontext: WebPartContext;

    public constructor(context: WebPartContext) {
        this.wpcontext = context;
    }

    public  getAssignableUsers() :Promise<string>{
        return new Promise<string>((resolve, reject) => {
        const auth = btoa('karim@ybfw5.onmicrosoft.com:ATATT3xFfGF0Ug_Re7-y5vlvTdo-QBUOJaFywUH2M877qlDMpTL6Pd8Hfwh8vvabLSLmllkWPJWRdxnXNQdOXhtioNo6R0Xkzmi_mBWhiqsJb0Z02-izE58D_YYFNDrByPRSBIRBkcPYqtpQ6IGH-zrhFFj1gpGExreJqyABzbSizM6ZgaIk_K0=026523DB');

        const url = 'https://karim-av.atlassian.net/rest/api/3/user/assignable/search?project=KAN';
        const httpClientOptions: IHttpClientOptions = {
            method: "GET",
            headers: {
                'Authorization': `Basic ${auth}`,
                'Accept': 'application/json'
            },
            mode: "cors"
        };

        this.wpcontext.httpClient.get(url, HttpClient.configurations.v1, httpClientOptions)
        .then(response => {
            return response.json();
        }).then(responseJSON => {
            console.log(responseJSON);
            resolve(responseJSON);
        })
        .catch(error => {reject(error);});
    });
}

}

