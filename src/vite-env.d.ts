/// <reference types="svelte" />
/// <reference types="vite/client" />

declare global {
    interface Window {
      contentHtml: string;
      CONFIG: any;
      session: any;
      page: any;
      Alpine: any;
      doc_action_link: any;
    }
  }
  
export {};