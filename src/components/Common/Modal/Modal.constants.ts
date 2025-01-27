export const MODAL_SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
  } as const;
  
  export type ModalSize = typeof MODAL_SIZES[keyof typeof MODAL_SIZES];