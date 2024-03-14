import r2wc from "@r2wc/react-to-web-component"
import { default as AlertReact } from "./Alert";

export const Alert = r2wc(AlertReact, { props: ["message"] });
// customElements.define("sds-alert", Alert);

export { default as AlertType } from "./AlertType";
