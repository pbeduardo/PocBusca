// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  //api: 'http://localhost:3000'
  api: 'http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/'
  //http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=gripe&codigoFilial=101&maxResult=10
};