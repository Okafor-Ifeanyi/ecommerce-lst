import React from 'react'

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const InstagramIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    {...props}
  >
    <rect
      width="17"
      height="17"
      x="3.5"
      y="3.5"
      rx="5.5"
    />
    <circle
      cx="12"
      cy="12"
      r="3.606"
    />
    <circle
      cx="16.894"
      cy="7.106"
      r="1.03"
      fill={stroke}
      stroke="none"
    />
  </svg>
);

export const AwardBadgeIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill={fill}
      d="m19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8A6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13l5.68 3.14A.9.9 0 0 0 18 22a1 1 0 0 0 1-1.25M12 4a4 4 0 1 1-4 4a4 4 0 0 1 4-4m.31 12.71a1 1 0 0 0-1 0l-3.75 2.2L9 13.21a5.94 5.94 0 0 0 5.92 0L16.45 19Z"
    />
  </svg>
)

export const YouTubeIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
  </svg>
);

export const DropdownIcon: React.FC<IconProps> = ({
  className,
  width = 16,
  height = 16,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke={stroke}
    strokeWidth={1}
    {...props}
  >
    <path d="M4.5 6L8 9.5L11.5 6" />
  </svg>
);

export const PersonIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({
  className,
  width = 20,
  height = 20,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    strokeWidth={1.5}
    {...props}
  >
    <path d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
  </svg>
);

export const CartIcon: React.FC<IconProps> = ({
  className,
  width = 20,
  height = 20,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" />
  </svg>
);

export const LoveIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.722 6.8c-.923 1.176-1.256 2.281-1.22 3.31c.038 1.045.458 2.068 1.136 3.06c1.367 1.996 3.694 3.737 5.609 5.09c.452.32 1.05.32 1.502 0c1.93-1.36 4.256-3.1 5.62-5.095c.676-.99 1.093-2.012 1.129-3.055c.034-1.029-.3-2.134-1.225-3.31c-1.62-1.711-3.953-1.66-5.541-.278a1.125 1.125 0 0 1-1.468 0c-1.589-1.381-3.92-1.433-5.542.279m-.743-.669c2.016-2.145 4.97-2.077 6.941-.363a.12.12 0 0 0 .078.027q.05-.002.077-.027c1.97-1.714 4.928-1.783 6.942.364l.015.015l.013.017c1.059 1.34 1.496 2.677 1.452 3.98c-.043 1.292-.558 2.495-1.303 3.585c-1.48 2.164-3.953 3.998-5.868 5.349a2.3 2.3 0 0 1-2.657-.001c-1.9-1.344-4.374-3.178-5.856-5.343c-.746-1.09-1.264-2.295-1.31-3.588c-.046-1.304.389-2.641 1.448-3.982l.013-.017z"
    />
  </svg>
);

export const MessageIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4C1.344 4 0 5.344 0 7v12c0 1.656 1.344 3 3 3h20c1.656 0 3-1.344 3-3V7c0-1.656-1.344-3-3-3zm0 2h20c.551 0 1 .449 1 1v.5l-11 5.938L2 7.5V7c0-.551.449-1 1-1M2 7.781l6.531 5.094l-6.406 6.563l7.813-5.563L13 15.844l3.063-1.969l7.812 5.563l-6.406-6.563L24 7.781V19a.95.95 0 0 1-.125.438c-.165.325-.486.562-.875.562H3c-.389 0-.71-.237-.875-.563A.95.95 0 0 1 2 19z"
    />
  </svg>
);