// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // https://dg-galeria-api.herokuapp.com/
  production: false,
  apiCliente: 'http://localhost:8080/customer',
  apiFormato: 'http://localhost:8080/drink-containers',
  apiMarca: 'http://localhost:8080/brands',

  apiSabor: 'http://localhost:8080/tastees',
  apiSaborAsociado: 'http://localhost:8080/branded-taste',
  apiSaborFormateado: 'http://localhost:8080/drink-containered-taste',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// localhost
