export const MenuClick = 'MENU_CLICK'

export function menuStateHandler(text) {
    return {
      type: MenuClick,
      text
    }
  }