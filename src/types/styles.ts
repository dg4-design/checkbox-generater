export type StyleChangePayload = {
  [K in keyof Styles]?: Styles[K];
};

export interface Styles {
  size: string;
  color: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  checked: boolean;
}
