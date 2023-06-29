/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppRoot {
        "history": RouterHistory;
    }
    interface CBanner {
        "theme": string;
    }
    interface CCard {
    }
    interface CPage {
    }
    interface CSidebar {
    }
    interface EButton {
        "action": string;
        "active": boolean;
        "disabled": boolean;
        "size": string;
        "value": any;
        "variant": string;
    }
    interface EInput {
        "checked": boolean;
        "label": string;
        "name": string;
        "placeholder": string;
        "type": string;
        "value": string;
    }
    interface ELink {
        "action": string;
        "event": boolean;
        "href": string;
        "target": string;
        "theme": string;
        "value": any;
        "variant": string;
    }
    interface EList {
    }
    interface EListItem {
    }
    interface ESelect {
        "name": string;
        "options": any;
    }
    interface EText {
        "theme": string;
        "variant": string;
    }
    interface LRow {
        "align": string;
        "justifyContent": string;
        "variant": string;
    }
    interface LSeperator {
    }
    interface LSpacer {
        "value": number;
        "variant": string;
    }
    interface PGallery {
    }
    interface PPublication {
        "description": string;
        "documents": any;
        "heading": string;
        "id_Publication": string;
        "isSkel": boolean;
        "sub_Heading": string;
        "url_Cover": string;
        "url_Sample": string;
        "url_Toc": string;
    }
    interface PReading {
        "document": string;
        "edition": string;
        "id": string;
        "title": string;
    }
    interface PUserControl {
    }
    interface VCatchAll {
        "history": RouterHistory;
    }
    interface VCheckout {
        "history": RouterHistory;
        "match": MatchResults;
    }
    interface VForgotPassword {
    }
    interface VLogin {
    }
    interface VMyLibrary {
        "history": RouterHistory;
    }
    interface VPaymentCancel {
    }
    interface VPaymentHandle {
        "history": RouterHistory;
        "match": MatchResults;
    }
    interface VReader {
        "history": RouterHistory;
        "match": MatchResults;
    }
    interface VSignup {
    }
    interface VStore {
        "history": RouterHistory;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCBannerElement extends Components.CBanner, HTMLStencilElement {
    }
    var HTMLCBannerElement: {
        prototype: HTMLCBannerElement;
        new (): HTMLCBannerElement;
    };
    interface HTMLCCardElement extends Components.CCard, HTMLStencilElement {
    }
    var HTMLCCardElement: {
        prototype: HTMLCCardElement;
        new (): HTMLCCardElement;
    };
    interface HTMLCPageElement extends Components.CPage, HTMLStencilElement {
    }
    var HTMLCPageElement: {
        prototype: HTMLCPageElement;
        new (): HTMLCPageElement;
    };
    interface HTMLCSidebarElement extends Components.CSidebar, HTMLStencilElement {
    }
    var HTMLCSidebarElement: {
        prototype: HTMLCSidebarElement;
        new (): HTMLCSidebarElement;
    };
    interface HTMLEButtonElement extends Components.EButton, HTMLStencilElement {
    }
    var HTMLEButtonElement: {
        prototype: HTMLEButtonElement;
        new (): HTMLEButtonElement;
    };
    interface HTMLEInputElement extends Components.EInput, HTMLStencilElement {
    }
    var HTMLEInputElement: {
        prototype: HTMLEInputElement;
        new (): HTMLEInputElement;
    };
    interface HTMLELinkElement extends Components.ELink, HTMLStencilElement {
    }
    var HTMLELinkElement: {
        prototype: HTMLELinkElement;
        new (): HTMLELinkElement;
    };
    interface HTMLEListElement extends Components.EList, HTMLStencilElement {
    }
    var HTMLEListElement: {
        prototype: HTMLEListElement;
        new (): HTMLEListElement;
    };
    interface HTMLEListItemElement extends Components.EListItem, HTMLStencilElement {
    }
    var HTMLEListItemElement: {
        prototype: HTMLEListItemElement;
        new (): HTMLEListItemElement;
    };
    interface HTMLESelectElement extends Components.ESelect, HTMLStencilElement {
    }
    var HTMLESelectElement: {
        prototype: HTMLESelectElement;
        new (): HTMLESelectElement;
    };
    interface HTMLETextElement extends Components.EText, HTMLStencilElement {
    }
    var HTMLETextElement: {
        prototype: HTMLETextElement;
        new (): HTMLETextElement;
    };
    interface HTMLLRowElement extends Components.LRow, HTMLStencilElement {
    }
    var HTMLLRowElement: {
        prototype: HTMLLRowElement;
        new (): HTMLLRowElement;
    };
    interface HTMLLSeperatorElement extends Components.LSeperator, HTMLStencilElement {
    }
    var HTMLLSeperatorElement: {
        prototype: HTMLLSeperatorElement;
        new (): HTMLLSeperatorElement;
    };
    interface HTMLLSpacerElement extends Components.LSpacer, HTMLStencilElement {
    }
    var HTMLLSpacerElement: {
        prototype: HTMLLSpacerElement;
        new (): HTMLLSpacerElement;
    };
    interface HTMLPGalleryElement extends Components.PGallery, HTMLStencilElement {
    }
    var HTMLPGalleryElement: {
        prototype: HTMLPGalleryElement;
        new (): HTMLPGalleryElement;
    };
    interface HTMLPPublicationElement extends Components.PPublication, HTMLStencilElement {
    }
    var HTMLPPublicationElement: {
        prototype: HTMLPPublicationElement;
        new (): HTMLPPublicationElement;
    };
    interface HTMLPReadingElement extends Components.PReading, HTMLStencilElement {
    }
    var HTMLPReadingElement: {
        prototype: HTMLPReadingElement;
        new (): HTMLPReadingElement;
    };
    interface HTMLPUserControlElement extends Components.PUserControl, HTMLStencilElement {
    }
    var HTMLPUserControlElement: {
        prototype: HTMLPUserControlElement;
        new (): HTMLPUserControlElement;
    };
    interface HTMLVCatchAllElement extends Components.VCatchAll, HTMLStencilElement {
    }
    var HTMLVCatchAllElement: {
        prototype: HTMLVCatchAllElement;
        new (): HTMLVCatchAllElement;
    };
    interface HTMLVCheckoutElement extends Components.VCheckout, HTMLStencilElement {
    }
    var HTMLVCheckoutElement: {
        prototype: HTMLVCheckoutElement;
        new (): HTMLVCheckoutElement;
    };
    interface HTMLVForgotPasswordElement extends Components.VForgotPassword, HTMLStencilElement {
    }
    var HTMLVForgotPasswordElement: {
        prototype: HTMLVForgotPasswordElement;
        new (): HTMLVForgotPasswordElement;
    };
    interface HTMLVLoginElement extends Components.VLogin, HTMLStencilElement {
    }
    var HTMLVLoginElement: {
        prototype: HTMLVLoginElement;
        new (): HTMLVLoginElement;
    };
    interface HTMLVMyLibraryElement extends Components.VMyLibrary, HTMLStencilElement {
    }
    var HTMLVMyLibraryElement: {
        prototype: HTMLVMyLibraryElement;
        new (): HTMLVMyLibraryElement;
    };
    interface HTMLVPaymentCancelElement extends Components.VPaymentCancel, HTMLStencilElement {
    }
    var HTMLVPaymentCancelElement: {
        prototype: HTMLVPaymentCancelElement;
        new (): HTMLVPaymentCancelElement;
    };
    interface HTMLVPaymentHandleElement extends Components.VPaymentHandle, HTMLStencilElement {
    }
    var HTMLVPaymentHandleElement: {
        prototype: HTMLVPaymentHandleElement;
        new (): HTMLVPaymentHandleElement;
    };
    interface HTMLVReaderElement extends Components.VReader, HTMLStencilElement {
    }
    var HTMLVReaderElement: {
        prototype: HTMLVReaderElement;
        new (): HTMLVReaderElement;
    };
    interface HTMLVSignupElement extends Components.VSignup, HTMLStencilElement {
    }
    var HTMLVSignupElement: {
        prototype: HTMLVSignupElement;
        new (): HTMLVSignupElement;
    };
    interface HTMLVStoreElement extends Components.VStore, HTMLStencilElement {
    }
    var HTMLVStoreElement: {
        prototype: HTMLVStoreElement;
        new (): HTMLVStoreElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "c-banner": HTMLCBannerElement;
        "c-card": HTMLCCardElement;
        "c-page": HTMLCPageElement;
        "c-sidebar": HTMLCSidebarElement;
        "e-button": HTMLEButtonElement;
        "e-input": HTMLEInputElement;
        "e-link": HTMLELinkElement;
        "e-list": HTMLEListElement;
        "e-list-item": HTMLEListItemElement;
        "e-select": HTMLESelectElement;
        "e-text": HTMLETextElement;
        "l-row": HTMLLRowElement;
        "l-seperator": HTMLLSeperatorElement;
        "l-spacer": HTMLLSpacerElement;
        "p-gallery": HTMLPGalleryElement;
        "p-publication": HTMLPPublicationElement;
        "p-reading": HTMLPReadingElement;
        "p-user-control": HTMLPUserControlElement;
        "v-catch-all": HTMLVCatchAllElement;
        "v-checkout": HTMLVCheckoutElement;
        "v-forgot-password": HTMLVForgotPasswordElement;
        "v-login": HTMLVLoginElement;
        "v-my-library": HTMLVMyLibraryElement;
        "v-payment-cancel": HTMLVPaymentCancelElement;
        "v-payment-handle": HTMLVPaymentHandleElement;
        "v-reader": HTMLVReaderElement;
        "v-signup": HTMLVSignupElement;
        "v-store": HTMLVStoreElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
        "history"?: RouterHistory;
    }
    interface CBanner {
        "theme"?: string;
    }
    interface CCard {
    }
    interface CPage {
    }
    interface CSidebar {
    }
    interface EButton {
        "action"?: string;
        "active"?: boolean;
        "disabled"?: boolean;
        "onButtonClick"?: (event: CustomEvent<any>) => void;
        "size"?: string;
        "value"?: any;
        "variant"?: string;
    }
    interface EInput {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onTextInput"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface ELink {
        "action"?: string;
        "event"?: boolean;
        "href"?: string;
        "onEvent_LinkClick"?: (event: CustomEvent<any>) => void;
        "target"?: string;
        "theme"?: string;
        "value"?: any;
        "variant"?: string;
    }
    interface EList {
    }
    interface EListItem {
    }
    interface ESelect {
        "name"?: string;
        "onEvent_selectInput"?: (event: CustomEvent<any>) => void;
        "options"?: any;
    }
    interface EText {
        "theme"?: string;
        "variant"?: string;
    }
    interface LRow {
        "align"?: string;
        "justifyContent"?: string;
        "variant"?: string;
    }
    interface LSeperator {
    }
    interface LSpacer {
        "value"?: number;
        "variant"?: string;
    }
    interface PGallery {
    }
    interface PPublication {
        "description"?: string;
        "documents"?: any;
        "heading"?: string;
        "id_Publication"?: string;
        "isSkel"?: boolean;
        "sub_Heading"?: string;
        "url_Cover"?: string;
        "url_Sample"?: string;
        "url_Toc"?: string;
    }
    interface PReading {
        "document"?: string;
        "edition"?: string;
        "id"?: string;
        "title"?: string;
    }
    interface PUserControl {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VCatchAll {
        "history"?: RouterHistory;
    }
    interface VCheckout {
        "history"?: RouterHistory;
        "match"?: MatchResults;
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VForgotPassword {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VLogin {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
        "onSuccess_Auth"?: (event: CustomEvent<any>) => void;
    }
    interface VMyLibrary {
        "history"?: RouterHistory;
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VPaymentCancel {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VPaymentHandle {
        "history"?: RouterHistory;
        "match"?: MatchResults;
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VReader {
        "history"?: RouterHistory;
        "match"?: MatchResults;
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VSignup {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
        "onSuccess_Auth"?: (event: CustomEvent<any>) => void;
    }
    interface VStore {
        "history"?: RouterHistory;
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "c-banner": CBanner;
        "c-card": CCard;
        "c-page": CPage;
        "c-sidebar": CSidebar;
        "e-button": EButton;
        "e-input": EInput;
        "e-link": ELink;
        "e-list": EList;
        "e-list-item": EListItem;
        "e-select": ESelect;
        "e-text": EText;
        "l-row": LRow;
        "l-seperator": LSeperator;
        "l-spacer": LSpacer;
        "p-gallery": PGallery;
        "p-publication": PPublication;
        "p-reading": PReading;
        "p-user-control": PUserControl;
        "v-catch-all": VCatchAll;
        "v-checkout": VCheckout;
        "v-forgot-password": VForgotPassword;
        "v-login": VLogin;
        "v-my-library": VMyLibrary;
        "v-payment-cancel": VPaymentCancel;
        "v-payment-handle": VPaymentHandle;
        "v-reader": VReader;
        "v-signup": VSignup;
        "v-store": VStore;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "c-banner": LocalJSX.CBanner & JSXBase.HTMLAttributes<HTMLCBannerElement>;
            "c-card": LocalJSX.CCard & JSXBase.HTMLAttributes<HTMLCCardElement>;
            "c-page": LocalJSX.CPage & JSXBase.HTMLAttributes<HTMLCPageElement>;
            "c-sidebar": LocalJSX.CSidebar & JSXBase.HTMLAttributes<HTMLCSidebarElement>;
            "e-button": LocalJSX.EButton & JSXBase.HTMLAttributes<HTMLEButtonElement>;
            "e-input": LocalJSX.EInput & JSXBase.HTMLAttributes<HTMLEInputElement>;
            "e-link": LocalJSX.ELink & JSXBase.HTMLAttributes<HTMLELinkElement>;
            "e-list": LocalJSX.EList & JSXBase.HTMLAttributes<HTMLEListElement>;
            "e-list-item": LocalJSX.EListItem & JSXBase.HTMLAttributes<HTMLEListItemElement>;
            "e-select": LocalJSX.ESelect & JSXBase.HTMLAttributes<HTMLESelectElement>;
            "e-text": LocalJSX.EText & JSXBase.HTMLAttributes<HTMLETextElement>;
            "l-row": LocalJSX.LRow & JSXBase.HTMLAttributes<HTMLLRowElement>;
            "l-seperator": LocalJSX.LSeperator & JSXBase.HTMLAttributes<HTMLLSeperatorElement>;
            "l-spacer": LocalJSX.LSpacer & JSXBase.HTMLAttributes<HTMLLSpacerElement>;
            "p-gallery": LocalJSX.PGallery & JSXBase.HTMLAttributes<HTMLPGalleryElement>;
            "p-publication": LocalJSX.PPublication & JSXBase.HTMLAttributes<HTMLPPublicationElement>;
            "p-reading": LocalJSX.PReading & JSXBase.HTMLAttributes<HTMLPReadingElement>;
            "p-user-control": LocalJSX.PUserControl & JSXBase.HTMLAttributes<HTMLPUserControlElement>;
            "v-catch-all": LocalJSX.VCatchAll & JSXBase.HTMLAttributes<HTMLVCatchAllElement>;
            "v-checkout": LocalJSX.VCheckout & JSXBase.HTMLAttributes<HTMLVCheckoutElement>;
            "v-forgot-password": LocalJSX.VForgotPassword & JSXBase.HTMLAttributes<HTMLVForgotPasswordElement>;
            "v-login": LocalJSX.VLogin & JSXBase.HTMLAttributes<HTMLVLoginElement>;
            "v-my-library": LocalJSX.VMyLibrary & JSXBase.HTMLAttributes<HTMLVMyLibraryElement>;
            "v-payment-cancel": LocalJSX.VPaymentCancel & JSXBase.HTMLAttributes<HTMLVPaymentCancelElement>;
            "v-payment-handle": LocalJSX.VPaymentHandle & JSXBase.HTMLAttributes<HTMLVPaymentHandleElement>;
            "v-reader": LocalJSX.VReader & JSXBase.HTMLAttributes<HTMLVReaderElement>;
            "v-signup": LocalJSX.VSignup & JSXBase.HTMLAttributes<HTMLVSignupElement>;
            "v-store": LocalJSX.VStore & JSXBase.HTMLAttributes<HTMLVStoreElement>;
        }
    }
}
