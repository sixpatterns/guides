export const Orders = () => {
  // States
  const [customerIds, setCustomerIds] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [statuses, setStatuses] = useState(["shipped"]);

  // Queries
  const customers = useCustomers();
  const orders = useOrders();
  const users = useUsers();

  // Mutations
  const orderCreate = useOrderCreate();
  const orderDelete = useOrderDelete();
  const orderUpdate = useOrderUpdate();

  // ...
};
