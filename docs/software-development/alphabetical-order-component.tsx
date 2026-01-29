export const Orders = () => {
  const [customerIds, setCustomerIds] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [statuses, setStatuses] = useState(["shipped"]);

  const orders = useOrders();
  const users = useUsers();

  const orderCreate = useOrderCreate();
  const orderDelete = useOrderDelete();
  const orderUpdate = useOrderUpdate();

  // ...
};
