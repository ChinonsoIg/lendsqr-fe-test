import React from 'react'
import SharedLayout from '../../components/layout/SharedLayout';
import { gridItems } from '../../utils/GridItems';
import three_dots from "../../assets/icons/three_dots.svg";
import "../../assets/styles/Users.scss"
import { addComma } from '../../utils/functions';


const Dashboard = () => {

  const printNums = () => {
    let numArray = []

    for (let x = 1; x <= 100; x++) {
      numArray.push(x)
    }
    return numArray
  }
  let allNums = printNums();

  return (
    <SharedLayout>
      <p className="heading">Users</p>
      <div className="grid_container">
        {gridItems.map((gridItem) => (
          <div className="grid_item" key={gridItem.id}>
            <p>{gridItem.icon}</p>
            <p className="grid_item_title">{gridItem.title}</p>
            <p className="grid_item_figure">{addComma(gridItem.figure)}</p>
          </div>
        ))}
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>organisation</th>
              <th>username</th>
              <th>email</th>
              <th>phone number</th>
              <th>date joined</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gbas ahsk aij aosijoias soijao</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td><img src={three_dots} alt="dots" /></td>
            </tr>
            <tr>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td><img src={three_dots} alt="dots" /></td>
            </tr>
            <tr>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td><img src={three_dots} alt="dots" /></td>
            </tr>
          </tbody>
        </table>
        <div className="data_modifier">
          <p className="items_per_page">Showing
            <select className="num_value">{allNums.map((num, ind) => <option key={ind}>{num}</option>)}</select> out of 100
          </p>
          <p>Paginate</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>organisation</th>
              <th>username</th>
              <th>email</th>
              <th>phone number</th>
              <th>date joined</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gbas ahsk aij aosijoias soijao</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td><img src={three_dots} alt="dots" /></td>
            </tr>
            <tr>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td>gbasahjnaoiuaiuyauyhiauuhda</td>
              <td><img src={three_dots} alt="dots" /></td>
            </tr>
            <tr>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td>gbas sdjhiu aiua iadu oiadui a a had ihud</td>
              <td><img src={three_dots} alt="dots" /></td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </SharedLayout>
  )
}

export default Dashboard;
