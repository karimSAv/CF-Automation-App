import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'ApiButtonWebPartStrings';
import ApiButton from './components/ApiButton';
import { IApiButtonProps } from './components/IApiButtonProps';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { getSP } from './utils/pnpjsConfig';

export interface IApiButtonWebPartProps {
  context: WebPartContext;
}

export default class ApiButtonWebPart extends BaseClientSideWebPart<IApiButtonWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IApiButtonProps> = React.createElement(
      ApiButton,
      {
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return super.onInit().then(async _ => {
      try{
        await getSP(this.context);
      }catch{console.warn("Erreur de connexion à SharePoint")}
    })
  }


  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('https://karim-av.atlassian.net/rest/api/3/user/assignable/search?project=KAN', {
                  label: 'get assignable users'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
