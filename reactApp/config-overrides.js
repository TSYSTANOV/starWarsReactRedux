const { alias } = require("react-app-rewire-alias");
module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@constants": "src/constants",
    "@services": "src/services",
    "@hoc-helpers": "src/hoc-helpers",
    "@utils": "src/utils",
    "@routes": "src/routes",
  })(config);
  return config;
};
