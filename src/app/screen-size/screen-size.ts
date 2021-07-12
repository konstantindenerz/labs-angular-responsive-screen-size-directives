export enum ScreenSize {
  XSmall = '(min-width: 0) and (max-width: 599px)',
  Small = '(min-width: 600px) and (max-width: 1239px)',
  Medium = '(min-width: 1240px) and (max-width: 1439px)',
  Large = '(min-width: 1440px)',
}

export const ScreenSizes = [ScreenSize.XSmall, ScreenSize.Small, ScreenSize.Medium, ScreenSize.Large];
