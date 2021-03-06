import React from 'react'
import styled from 'styled-components'

import {ActionButton, WrapperButton} from "./StyledComponents"


export default function CreateButton(props) {
  
    return (
        <WrapperButton>
            <ActionButton type={props.type} disabled={props.disabled} onClick={props.clbk}>{props.text} 
            </ActionButton>     
        </WrapperButton>       
    )
}
