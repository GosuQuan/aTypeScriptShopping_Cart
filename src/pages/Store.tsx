import storeItems from "../data/item.json"
import {Col,Row} from "react-bootstrap"
import {StoreItem} from "../components/StoreItem"
export default function Store(){
    return <Row md={2} xs={1} lg={3} className="g-3" >
    <h1>{storeItems.map(item =>(
        <Col key={item.id}>
            <StoreItem {...item}/>
        </Col>   
    ))}</h1>
    </Row> 
}