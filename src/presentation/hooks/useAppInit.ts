import { createApp } from "@shopify/app-bridge";

export const useAppInit = (tenant: string) => {
  switch (tenant) {
    case "shopify": {
      initShopify();
      break;
    }
    case "wix":
    case "wordpress":
      break;
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
