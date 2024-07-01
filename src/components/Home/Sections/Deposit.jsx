import React from 'react'
import { Button, Info, InfoItem, Input, Label } from '../Home'
import styled from 'styled-components'

import pix from '../../../IMG/logos/pix.png'
import mastercard from '../../../IMG/logos/mastercard.png'
import metamask from '../../../IMG/logos/metamask.png'

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const Item = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center; 
`

const Img = styled.img`
    width: 40px;
`

const MastercardImg = styled(Img)`
    width: 60px;
`

const Separator = styled.div`
    border-left: 1px solid black;
`

const Deposit = () => {
    return (
        <>
        <Content>
            <Item>
                <Img src={pix} />
            </Item>
            <Item>
                <MastercardImg src={mastercard} alt="MasterCard" />
            </Item>
            <Separator />
            <Item>
                <Img src={metamask} />
            </Item>

        </Content>
        <Info>
            <InfoItem>
                <Label>Value</Label>
                <Input type='text' placeholder='$00.00' />
            </InfoItem>
            <InfoItem>
                <Label>Value</Label>
                <Input type='text' placeholder='$00.00' />
            </InfoItem>
            <InfoItem>
                <Label>Value</Label>
                <Input type='text' placeholder='$00.00' />
            </InfoItem>
        </Info>
        <Button>Deposit</Button>
        </>
    )
}

export default Deposit