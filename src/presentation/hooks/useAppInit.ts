import { createApp } from "@shopify/app-bridge";

export const useAppInit = (tenant: string) => {
  switch (tenant) {
    case "shopify": {
      console.log("initializing shopify app");
      initShopify();
      break;
    }
    case "wix": {
      console.log("initializing wix app");
      break;
    }
    default:
      throw new Error(`Unknown tenant: ${tenant}`);
  }
};

function initShopify() {
  const params = new URLSearchParams(window.location.search);
  const host = params.get("host");

  if (!host) {
    throw new Error("Missing host parameter");
  }

  createApp({
    apiKey: "937ce14f3af33f7f9273e6fadcdb8ab1",
    host,
  });
}
