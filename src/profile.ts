/**
 * Punto único desde el que el sistema (componentes/páginas) consume el perfil
 * activo. NUNCA importar de `profiles/...` directamente: importar siempre de aquí.
 *
 * El perfil activo se elige en build-time con la variable de entorno `PROFILE`
 * (alias `@profile` en `vite.config.ts`). Por defecto: `escuela`.
 */
import profile from '@profile';

export default profile;
export const { site, branding, seo } = profile;
