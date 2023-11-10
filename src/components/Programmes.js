import React from 'react'
import { Accordion } from "react-bootstrap"; 

let  Programmes = () => {
    return (
        <>

        <h4  className="prog">Programmes</h4>
     


<br />

<div>

<Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>COVENANT HOUR OF PRAYER </Accordion.Header>
        <Accordion.Body>
        There will be a link, and when you click on the link, it will redirect you to the Zoom page that will enable you to join the service.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>MIDWEEK COMMUNION SERVICES </Accordion.Header>
        <Accordion.Body>
        Everything about the midweek communion service will be listed here.
        </Accordion.Body>
        </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>MONTHLY PROGRAMMES</Accordion.Header>
        <Accordion.Body>
        All monthly service/programs  will be listed here, prayer points, testimonies, and videos.
        </Accordion.Body>
        </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>YEARLY PROGRAMMES</Accordion.Header>
        <Accordion.Body>
        Everything about Shiloh will be listed here, prayer points, testimonies,and videos
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

</div>
            
        </>
    )
}

export default Programmes
