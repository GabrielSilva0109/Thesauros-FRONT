import React from 'react'
import { Button, Info, InfoItem, Input, Label } from './Home'


const Deposit = () => {
    return (
        <>

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