import { PlopTypes } from "@turbo/gen";
import { pageConfig } from "./page/config";
import { apiConfig } from "./api/config";
import { layoutConfig } from "./layout/config";
import { componentConfig } from "./component/config";
import { hookConfig } from "./hook/config";
import { contextConfig } from "./context/config";
import { functionConfig } from "./function/config";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("page", pageConfig);
  plop.setGenerator("api", apiConfig);
  plop.setGenerator("layout", layoutConfig);
  plop.setGenerator("component", componentConfig);
  plop.setGenerator("hook", hookConfig);
  plop.setGenerator("context", contextConfig);
  plop.setGenerator("function", functionConfig);
}
