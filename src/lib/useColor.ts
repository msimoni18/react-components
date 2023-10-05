import { useTheme } from '../theme/theme-provider';

const defaultColors = {
  'zinc-50': '#fafafa',
  'zinc-100': '#f4f4f5',
  'zinc-200': '#e4e4e7',
  'zinc-300': '#d4d4d8',
  'zinc-400': '#a1a1aa',
  'zinc-500': '#71717a',
  'zinc-600': '#52525b',
  'zinc-700': '#3f3f46',
  'zinc-800': '#27272a',
  'zinc-900': '#18181b',
  'zinc-950': '#09090b',
  white: '#ffffff',
};

export function useColor() {
  const { theme } = useTheme();

  const textColor =
    theme === 'dark' ? defaultColors['zinc-200'] : defaultColors['zinc-900'];

  const bgColor =
    theme === 'dark' ? defaultColors['zinc-900'] : defaultColors['white'];

  return { textColor, bgColor };
}
