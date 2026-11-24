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

`src/environments/environment.ts` está excluido de Git. Si lo necesitas, créalo localmente con la configuración correspondiente; no incluyas claves reales en commits. Las claves usadas desde una aplicación frontend pueden ser visibles para quienes carguen la aplicación.

## Build y pruebas

Crear el build de producción:

```bash
npm run build
```

Ejecutar las pruebas una vez:

```bash
npm test -- --watch=false
```
