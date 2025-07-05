import { React, useState , useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "../components/GeneralContext";

const Orders = ({uid}) => {
  const [allOrders, setAllOrders] = useState([]);

   useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3000/allOrders");
        setAllOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error.message);
        // Optionally show user-facing error
      }
    };

    fetchOrders();
  }, []);


  const generalContext = useContext(GeneralContext);

  // BUY
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    
    <div className="orders">
      {allOrders.length != 0 ? (
         <>
          <h3 className="title">Holdings ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{Number(stock.price).toFixed(2)}</td>
                    <td>{stock.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
       
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link onClick={handleBuyClick} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
