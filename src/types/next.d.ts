/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Extendendo tipos de API Routes no App Router
declare module "next" {
  export interface Params {
    params: { [key: string]: string };
  }
}
