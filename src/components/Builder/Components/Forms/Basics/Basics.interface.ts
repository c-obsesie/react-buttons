export interface IBuilderBasics {
    label: string | null;
    url: string | null;

    openInNewWindow: boolean | null;

    width: {
        value: number;
        type: "px" | "percent";
    } | null;

    height: {
        value: number;
        type: "px" | "percent";
    } | null;

    padding:
        | {
              left: number;
              right: number;
              top: number;
              bottom: number;
          }
        | undefined;
    margin:
        | {
              left: number;
              right: number;
              top: number;
              bottom: number;
          }
        | undefined;
}
