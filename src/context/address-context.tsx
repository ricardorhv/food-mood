import { getAddresses } from "@/services/address/address-service";
import { UserAddress } from "@/types/address";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AddressContextProps {
  addresses: UserAddress[];
  addNewAddress: (address: UserAddress) => void;
}

interface AddressContextProviderProps {
  children: ReactNode;
}

const AddressContext = createContext<AddressContextProps>(
  {} as AddressContextProps
);

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [addresses, setAddresses] = useState<UserAddress[]>([]);

  useEffect(() => {
    (async function () {
      const { data, success } = await getAddresses();

      if (success) {
        setAddresses(data);
      }
    })();
  }, []);

  function addNewAddress(address: UserAddress) {
    setAddresses((prevState) => [...prevState, address]);
  }

  return (
    <AddressContext.Provider value={{ addresses, addNewAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export const useAddressContext = () => useContext(AddressContext);
