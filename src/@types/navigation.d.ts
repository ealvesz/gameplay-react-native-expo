export type AppointmentItemProps = {
  id: string;
  name: string;
  icon: string;
  category: string;
  game: string;
  date: string;
  description: string;
  isHost: boolean;
};

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  AppointmentDetails: { appointment: AppointmentItemProps };
  AppointmentCreate: { guild?: { id: string; name: string; icon: string } } | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
