import React , {useState ,useEffect} from "react";
import { positions } from "../data/position_data";
import axios from "axios";
const Positions = () => {
 
   const [allPositions, setAllPositions] = useState([]);

   useEffect(()=> {
    axios.get("http://localhost:3000/allPositions").then((res)=> {
        setAllPositions(res.data);
    });
   }, [])
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((product, index) => {
                      const currVal = product.price * product.qty;
                      const isProfit = currVal - product.avg * product.qty >= 0.0;
                      const profitClass = isProfit ? "profit" : "loss";
                      const dayClass = product.isLoss ?"loss" :"profit";
          
                      return (
                        <tr key={index} >
                          <td>{product.product}</td>
                      <td>{product.name}</td>
                      <td>{product.qty}</td>
                      <td>{product.avg.toFixed(2)}</td>
                      <td>{product.price.toFixed(2)}</td>
                      
                      <td className={profitClass}>{(currVal-product.avg * product.qty).toFixed(2)}</td>
                      {/* <td className={profitClass}>{stock.net}</td> */}
                      <td className={dayClass}>{product.day}</td>
                    </tr> 
                      );
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;