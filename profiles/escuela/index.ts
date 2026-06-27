import type { Profile } from '@/profile-types';
import { site } from './config/site';
import { branding } from './config/branding';
import { seo } from './config/seo';

/**
 * Perfil "Ingeniería Ambiental" (UNT).
 * Perfil de ejemplo por defecto de la plantilla.
 */
const profile: Profile = { site, branding, seo };

export default profile;
