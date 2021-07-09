import create from 'zustand';

type AuthState = {
  token: string; // don't keep in AsyncStorage
  setToken: (token: string) => void;
};

<<<<<<< HEAD
const useStore = create<AuthState>((set) => ({
  token: '',
  setToken: (token) => set({ token }),
=======
const useStore = create<AuthState>(set => ({
  token: '',
  setToken: token => set({token}),
>>>>>>> dev/setup
}));

export default useStore;
