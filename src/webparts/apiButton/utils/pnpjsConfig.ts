import { WebPartContext } from "@microsoft/sp-webpart-base";
// import pnp and pnp logging system
import { spfi, SPFI, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
import "@pnp/sp/site-users/web";
import "@pnp/sp/profiles";
import "@pnp/sp/attachments";

// eslint-disable-next-line no-var
var _sp: SPFI;
let context: WebPartContext;

export const getSP = (webpartcontext?: WebPartContext): SPFI => {
  if (!!webpartcontext) {
    console.log("webpartcontext", webpartcontext);
    //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
    // The LogLevel set's at what level a message will be written to the console
    _sp = spfi().using(SPFx(webpartcontext));
    console.log("sp", _sp);
    context= webpartcontext;
  }
  return _sp;
};

export const getContext = (): WebPartContext => {
  return context;
}