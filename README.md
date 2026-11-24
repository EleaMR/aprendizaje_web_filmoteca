# Filmoteca

Aplicación Angular para organizar el trabajo por persona. La pantalla inicial permite elegir un perfil y abrir su página Home.

## Requisitos

- Node.js `26.13.1` (indicado en `.node-version`)
- npm `11.20.0`

Si usas `fnm` en PowerShell, inicializa la sesión y selecciona la versión del proyecto:

```powershell
fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression
fnm use
```

## Instalación y desarrollo

Instala las dependencias:

```bash
npm ci
```

Inicia el servidor de desarrollo:

```bash
npm start
```

Abre `http://localhost:4200/`. La aplicación recarga los cambios automáticamente.

## Navegación

- `/` muestra el selector.
- `/persona1` abre el Home de Persona L.
- `/persona2` abre el Home de Persona A.
- `/persona3` abre el Home de Persona M.
- `/persona4` abre el Home de Persona D.

Las páginas de cada persona están bajo `src/app/members/`. Sus rutas se definen en el archivo `personaN.routes.ts` correspondiente y se cargan de forma diferida.

## Estructura principal

```text
src/
├── environments/             # Configuración local; no subir claves a Git
└── app/
    ├── core/                 # Configuración, interceptores, modelos y utilidades compartidos
    ├── pages/selector/       # Selector de perfiles
    ├── members/
    │   ├── persona1/
    │   ├── persona2/
    │   ├── persona3/
    │   └── persona4/         # Cada persona tiene components, layouts, pages/home,
    │                         # services, pipes, directives, guards y rutas
    ├── app.config.ts
    └── app.routes.ts
```

Los archivos `src/environments/environment.ts` y `src/environments/environment.development.ts` están excluidos de Git. Angular reemplaza el archivo de producción por el de desarrollo al ejecutar `npm start` o `ng build --configuration development`. No incluyas claves reales en commits.

## Autenticación con TMDB

La aplicación envía el **API Read Access Token** como token `Bearer` en las peticiones a TMDB. Para obtenerlo:

1. Inicia sesión o crea una cuenta en [TMDB](https://www.themoviedb.org/).
2. Abre [Configuración de API](https://www.themoviedb.org/settings/api) y solicita las credenciales de API si aún no las tienes.
3. Copia el **API Read Access Token**. No uses la API Key v3 en su lugar.
4. En tu copia local de `src/environments/environment.development.ts`, sustituye el valor de ejemplo de `tmdbToken`:

```ts
export const environment = {
  production: false,
  tmdbToken: 'PEGA_AQUI_TU_API_READ_ACCESS_TOKEN',
};
```

El build de producción (`npm run build`) utiliza `src/environments/environment.ts`, que debe mantener `tmdbToken` sin credenciales locales. Ambos archivos están excluidos de Git: no quites la exclusión ni subas el token a un commit. Al usarse desde Angular en el navegador, el token de desarrollo puede ser visible para quienes carguen la aplicación. Para una aplicación publicada, no lo consideres un secreto; usa un backend intermediario si necesitas mantener las credenciales fuera del cliente.

La [guía oficial de autenticación de aplicaciones](https://developer.themoviedb.org/docs/authentication-application) explica el uso del API Read Access Token. El [flujo para generar un session ID](https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id) es distinto: requiere autorizar un request token con la cuenta de un usuario y se utiliza para operaciones asociadas a esa cuenta, no para las consultas de lectura que hace actualmente esta aplicación.

## Build y pruebas

Crear el build de producción:

```bash
npm run build
```

Ejecutar las pruebas una vez:

```bash
npm test -- --watch=false
```
