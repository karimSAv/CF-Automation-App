import { HttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';

type CreateJiraTicketRequest = {
    ticketTitle: string;
    description: string;
}


export const createJiraTicket = async (httpClient: HttpClient | undefined, data: CreateJiraTicketRequest) => {
    const postURL = "https://prod-122.westeurope.logic.azure.com:443/workflows/c209dec324c1456099363b1e65b4a305/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OtuNawlfQep_rKplBehyAwXyy8kRMJmE6rgLOJqmb2w";

    const body: string = JSON.stringify(data);

    const requestHeaders: Headers = new Headers();
    requestHeaders.append('Content-type', 'application/json');
    const httpClientOptions: IHttpClientOptions = {
        body: body,
        headers: requestHeaders
    };

    if (!httpClient) {
        console.error("HttpClient is undefined");
        return;
    }

    try {
        const response: HttpClientResponse = await httpClient.post(
            postURL,
            HttpClient.configurations.v1,
            httpClientOptions
        );
        const result = await response.json();
        console.log("Email sent.", result);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};