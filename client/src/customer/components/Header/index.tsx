import { default as HeaderContainer } from './HeaderContainer';
import { default as HeaderLogo } from './HeaderLogo';
import { default as HeaderNavigation } from './HeaderNavigation';
import { default as HeaderSearch } from './Navigation/HeaderSearch';
import { default as HeaderRemoteLine } from './Navigation/HeaderRemoteLine';
import { default as HeaderReservation } from './Navigation/HeaderReservation';
import { default as HeaderCustomerInformation } from './Navigation/HeaderCustomerInformation';

const Navigation = {
  HeaderSearch: HeaderSearch,
  HeaderRemoteLine: HeaderRemoteLine,
  HeaderReservation: HeaderReservation,
  HeaderCustomerInformation: HeaderCustomerInformation,
};

export const Header = {
  Container: HeaderContainer,
  Logo: HeaderLogo,
  Navigation: HeaderNavigation,

  Search: Navigation.HeaderSearch,
  RemoteLine: Navigation.HeaderRemoteLine,
  Reservation: Navigation.HeaderReservation,
  CustomerInformation: Navigation.HeaderCustomerInformation,
};
