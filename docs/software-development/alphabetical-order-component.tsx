export const Orders = () => {
  const [customerIds, setCustomerIds] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [timeRange, setTimeRange] = useState({ endTime: null, startTime: null });

  const orders = useOrders();
  const users = useUsers();

  const orderCreate = useOrderCreate();
  const orderUpdate = useOrderUpdate();
  const orderDelete = useOrderDelete();

 // ...
}
