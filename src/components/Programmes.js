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
        <Accordion.Header>PROGRAMMES</Accordion.Header>
        <Accordion.Body>
        All the programmes will be here. There will be a link.
        and when you click on the link, it will redirect you to another
        page, where all the programmes will be shown with prayer points that
        can be downloaded and linked to join the programme.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>WEEKLY PROGRAMME</Accordion.Header>
        <Accordion.Body>
        All the weekly programmes will be here. There will be a link.
        and when you click on the link, it will redirect you to another
        page, where all the programmes will be shown with prayer points that
        can be downloaded and linked to join the programme.
        </Accordion.Body>
        </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>MONTHLY PROGRAMMES</Accordion.Header>
        <Accordion.Body>
        All the monthly programmes will be here. There will be a link.
        and when you click on the link, it will redirect you to another
        page, where all the programmes will be shown with prayer points that
        can be downloaded and linked to join the programme.
        </Accordion.Body>
        </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>YEARLY PROGRAMMES</Accordion.Header>
        <Accordion.Body>
        All the yearly programmes will be here. There will be a link.
        and when you click on the link, it will redirect you to another
        page, where all the programmes will be shown with prayer points that
        can be downloaded and linked to join the programme..
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

</div>
            
        </>
    )
}

export default Programmes
