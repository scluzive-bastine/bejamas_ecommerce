export const INITIAL_STATE = {
  isCartOpen: null,
  isUserDropdownOpen: null,
  products: [],
  sortOptions: null,
  priceFilterOptions: null,
  categoryFilterOptions: [],
}

export const contextReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CART':
      return { ...state, isCartOpen: !state.isCartOpen }
    case 'TOGGLE_USER_DROPDOWN':
      return {
        ...state,
        isUserDropdownOpen: !state.isUserDropdownOpen,
      }
    case 'INITIALIZE_PRODUCT':
      return { ...state, products: action.data }
    case 'SORT_PRODUCTS':
      const sortVal = {
        key: action.data.key,
        order: action.data.order,
      }
      return { ...state, sortOptions: sortVal }
    case 'FILTER_PRODUCTS_BY_CATEGORY':
      return { ...state, categoryFilterOptions: action.data }
    case 'FILTER_PRODUCTS_BY_PRICE':
      return { ...state, priceFilterOptions: action.data }
    default:
      break
  }
}
